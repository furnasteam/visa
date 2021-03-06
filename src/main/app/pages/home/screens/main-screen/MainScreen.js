import React from 'react';
import './main-screen.scss';
import {Button} from '../../../../components/button/Button';
import {Title} from '../../../../components/title/Title';
import {Picture} from '../../../../components/picture/Picture';
import {UniversalLink} from '../../../../components/universal-link/UniversalLink';
import {createVisaApplicationFormRoute} from '../../../../helpers/appRoutes';

export class MainScreen extends React.Component {
  render() {
    return (
      <div className="main-screen">
        <Title className="main-screen__title">Заполнение анкеты на визу в Испанию</Title>
        <ul className="main-screen__list">
          <li className="main-screen__list-item">
            <span className="main-screen__list-item-text">актуальный перечень документов для визы</span>
          </li>
          <li className="main-screen__list-item">
            <span className="main-screen__list-item-text">бесплатно получаете заполненную анкету</span>
          </li>
          <li className="main-screen__list-item">
            <span className="main-screen__list-item-text"> разбор всех пунктов анкеты</span>
          </li>
        </ul>
        <div className="main-screen__documents-list-button">
          <UniversalLink href="#choose-person"
                         noStyle={true}>
            <Button>Список документов</Button>
          </UniversalLink>
          <UniversalLink href={createVisaApplicationFormRoute('profile')}
                         className="main-screen__fill-anketa-button"
                         noStyle={true}>
            <Button>Заполенение анкеты</Button>
          </UniversalLink>
        </div>
        <Picture className="main-screen__main-picture"
                 forPhoneOnly={[require('./images/main_mob.png'),require('./images/main_mob.webp')]}
                 forPhoneOnlyRetina={[require('./images/main_mob_2x.png'),require('./images/main_mob_2x.webp')]}
                 forTabletPortraitUp={[require('./images/main.png'),require('./images/main.webp')]}
                 forTabletPortraitUpRetina={[require('./images/main_2x.png'),require('./images/main_2x.webp')]}/>
      </div>
    );
  }
}