const path = require("path");
const fs = require("fs");
const nextI18NextMiddleware = require("next-i18next/middleware").default;
const nextI18next = require("./i18n");

// --------------------------------------------------------
// Fastify server configuration
// --------------------------------------------------------
const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== "production";
const conf = require("./next.config")();
const fastify = require("fastify")({
  http2: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, "certs/privateKey.key")),
    cert: fs.readFileSync(path.join(__dirname, "certs/certificate.crt"))
  }
});

// --------------------------------------------------------
// Next routes & rendering configuration
// --------------------------------------------------------
const initNext = async () => {
  fastify.register((instance, opts, next) => {
    instance.use(nextI18NextMiddleware(nextI18next));
    next();
  });

  fastify.register(require("fastify-nextjs"), { dev, conf }).after(() => {
    fastify.next("/");
    fastify.next("/about");
  });

  fastify.register((instance, opts, next) => {
    instance.register(require("fastify-static"), {
      root: path.join(__dirname, "public"),
      prefix: "/"
    });
    next();
  });
};

// --------------------------------------------------------
// Fastify server startup
// --------------------------------------------------------
(async function() {
  await initNext();

  await fastify.listen(port, err => {
    if (err) throw err;
    console.log(`Server listenging on http://localhost:${port}`);
  });
})();
