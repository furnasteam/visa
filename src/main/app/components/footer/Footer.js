import React from 'react';
import './footer.scss';
import classNames from 'classnames';
import {bool, func, string} from 'prop-types';
import {MediumText} from '../medium-text/MediumText';
import {UniversalLink} from '../universal-link/UniversalLink';
import {createHomeRoute} from '../../helpers/appRoutes';

export class Footer extends React.Component {
  render(){
    return(<div className="footer">
      <div className="footer__container">
        <UniversalLink href={createHomeRoute()} className="link_white-style">
          Visa.Furnas
        </UniversalLink>

          <UniversalLink href="http://furnas.ru" className="link_white-style footer__furnas-item" >
            О нас
          </UniversalLink>
          {/*<div className="footer__blog-item">Блог</div>*/}

        </div>
    </div>);
  }
}
