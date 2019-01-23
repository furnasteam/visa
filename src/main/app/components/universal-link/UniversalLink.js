import React from 'react';
import './universal-link.scss';
import classNames from 'classnames';
import {any, func, string} from 'prop-types';
import startsWith from 'lodash/startsWith'
import {Link} from 'react-router-dom';

UniversalLink.propTypes = {
  className: string,
  href: string,
  children: any,
  target: string,
  onClick: func
};

UniversalLink.defaultProps = {
  onClick() {

  }
};

export function UniversalLink({className, children, href, target, onClick}) {

  if (startsWith(href, 'http')) {
    return (
      <a className={classNames('link', className)}
         target={target}
         onClick={onClick}
         href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <Link className={classNames('link', className)}
            onClick={onClick}
            to={href}>
        {children}
      </Link>
    );
  }

}
