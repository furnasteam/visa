import React from 'react';
import './mobile-explanation-screen.scss';
import {Picture} from '../../../../components/picture/Picture';

export class MobileExplanationScreen extends React.Component {

  render() {
    return (
      <div className="mobile-explanation-screen">
        <h2 className="mobile-explanation-screen__title">Что вы здесь найдете</h2>
        <Picture imgClassName="mobile-explanation-screen__flamenco-image"
                 forPhoneOnly={[require('./images/flamenco.svg')]}
                 forTabletPortraitUp={[require('./images/flamenco.svg')]}
                 alt="Иллюстрация испанской женщины в национальной одежде"/>
        <Picture forPhoneOnly={[require('./images/green-line.png'), require('./images/green-line.webp')]}
                 forTabletPortraitUp={[require('./images/green-line.png'), require('./images/green-line.webp')]}
                 alt="Зеленая линия"
                 imgClassName="mobile-explanation-screen__green-line"/>

        <ul className="mobile-explanation-screen__list">
          <li className="mobile-explanation-screen__list-item">
            <p className="mobile-explanation-screen__list-item-text">актуальный перечень документов для визы</p>
          </li>
          <li className="mobile-explanation-screen__list-item">
            <p className="mobile-explanation-screen__list-item-text">бесплатно получаете заполненную анкету</p>
          </li>
          <li className="mobile-explanation-screen__list-item">
            <p className="mobile-explanation-screen__list-item-text">разбор всех пунктов анкеты</p>
          </li>
        </ul>

        <Picture imgClassName="mobile-explanation-screen__mountain-picture"
                 forPhoneOnly={[require('./images/mountain_mob.png'), require('./images/mountain_mob.webp')]}
                 forPhoneOnlyRetina={[require('./images/mountain_mob_2x.png'), require('./images/mountain_mob_2x.webp')]}
                 forTabletPortraitUp={[require('./images/mountain_mob.png'), require('./images/mountain_mob.webp')]}
                 alt="Иллюстрация испанских гор"/>
      </div>
    );    
  }

}
