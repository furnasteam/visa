import React from 'react';
import './main-screen.scss';
import {Button} from '../../../../components/button/Button';
import {Link} from 'react-router-dom';
import {createFullDocumentsListRoute} from '../../../../helpers/appRoutes';
import {Title} from '../../../../components/title/Title';

export class MainScreen extends React.Component {
  render() {
    return (
      <div className="main-screen">
        <Title className="main-screen__title">Список документов на визу в Испанию</Title>
        <ul className="main-screen__list">
          <li className="main-screen__list-item">
            <span className="main-screen__list-item-text">актуальный перечень документов для визы</span>
          </li>
          <li className="main-screen__list-item main-screen__list-item-inactive">
            <div className="main-screen__list-item-development-mode">в разработке</div>
            <span className="main-screen__list-item-text">бесплатно получаете заполненную анкету</span>
          </li>
          <li className="main-screen__list-item main-screen__list-item-inactive">
            <div className="main-screen__list-item-development-mode">в разработке</div>
            <span className="main-screen__list-item-text"> разбор всех пунктов анкеты</span>
          </li>
        </ul>
        <div className="main-screen__documents-list-button">
          <Link to={createFullDocumentsListRoute()}>
            <Button>Список документов</Button>
          </Link>
        </div>
        <div className="main-screen__main-picture"></div>
      </div>
    );
  }
}