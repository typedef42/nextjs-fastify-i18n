/*
 * Link with next-css are broken in dev.
 * follow this issue: https://github.com/zeit/next-plugins/issues/282
 * This is a workaround class
 */
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { pathname } = useRouter();
  const child = Children.only(children);

  const childClassName = child.props.className ? child.props.className : "";
  const className = pathname === props.href ? `${childClassName} ${activeClassName}` : childClassName;

  return <Link {...props}>{React.cloneElement(child, { href: props.href, className })}</Link>;
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired
};

export default ActiveLink;
