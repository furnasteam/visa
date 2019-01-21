import React from 'react';
import './absolute-link.scss';
import classNames from 'classnames';
import {string, any, func} from 'prop-types';

AbsoluteLink.propTypes = {
  className: string,
  href: string,
  children: any,
  target: string,
  onClick: func
};

AbsoluteLink.defaultProps = {
  onClick(){

  }
};

export function AbsoluteLink({className, children, href, target, onClick}) {

  return (
    <a className={classNames('link', className)}
       target={target}
       onClick={onClick}
       href={href}>
      {children}
    </a>
  );

}
