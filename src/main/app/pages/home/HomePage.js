import React from 'react';
import './home.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {Button} from '../../components/button/Button';
import {Link} from 'react-router-dom';
import {createFullDocumentsListRoute} from '../../helpers/appRoutes';

export class HomePage extends React.Component {

  render() {
    return (
      [
        <Helmet>
          <title>Документы на визу в Испанию 2019</title>
          <meta name="description" content="Заполнение анкеты на визу онлайн. Актуальный список документов для самостоятельного получения визы в визовом центре Испании."/>
        </Helmet>,
        <div className="home">
          <Header/>
          <div className="home__content">
            <h1>Список документов на визу в Испанию</h1>
            <ul>
              <li>
                актуальный перечень документов для визы
              </li>
              <li>
                бесплатно получаете заполненную анкету
              </li>
              <li>
                разбор всех пунктов анкеты
              </li>
            </ul>
            <Link to={createFullDocumentsListRoute()}>
              <Button>Список документов</Button>
            </Link>
          </div>
        </div>
      ]
    );
  }

}
