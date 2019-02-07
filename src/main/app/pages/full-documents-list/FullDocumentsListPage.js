import React from 'react';
import './full-documents-list.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {string} from 'prop-types';
import {Title} from '../../components/title/Title';
import {Documents} from '../../components/documents/Documents';

export class FullDocumentsListPage extends React.Component {

  render() {
    return (
      [
        <Helmet key="1">
          <title>Документы на визу в Испанию 2019</title>
          <meta name="description" content="Актуальный список документов для самостоятельного получения визы в официальном визовом центре Испании в 2019 году."/>
        </Helmet>,
        <div className="full-documents-list"
             key="2">
          <Header/>
          <div className="full-documents-list__content">
            <Title>
              Полный список документов на визу в Испанию
            </Title>
            <p className="full-documents-list__intro">
              Данный список документов подходит для граждан РФ проверен на январь 2019 года.
              В списке указаны документы для ИП, работников, детей.
              Указаны документы в случае приглашения.
              Приведены примеры и доступны бланки для заполнения форм.
            </p>
            <nav>
              <h2>Оглавление</h2>
              <ul>
                <li>
                  <a href="#list">Список документов</a>
                </li>
                <li>
                  <a href="#prices">Цены на визы</a>
                </li>
                <li>
                  <a href="#video">Как зарегистироваться на подачу документов</a>
                </li>
              </ul>
            </nav>
            <section id="list">
              <h2>Список документов</h2>
              <Documents/>
            </section>
            <section id="prices">
              <h2>Цены на визы</h2>
              <table>
                <thead>
                <tr>
                  <th>
                    Категории
                  </th>
                  <th>
                    Тарифы на визы для граждан России, Украины, Армении, Македонии, Черногории, Албании, Сербии, Боснии и Герцеговины, Молдовы , Азербайджана и Грузии
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Туризм</td>
                  <td>3826 руб</td>
                </tr>
                <tr>
                  <td>Приглашение</td>
                  <td>3826 руб</td>
                </tr>
                <tr>
                  <td>Дети (6-12 лет)</td>
                  <td>3826 руб</td>
                </tr>
                <tr>
                  <td>Дети до 6 лет</td>
                  <td>0 руб</td>
                </tr>
                </tbody>
              </table>
            </section>
            <section id="video">
              <h2>Как записаться на подачу документов</h2>
              <div className="full-documents-list__video-wrapper">
                <iframe width="560"
                        height="315" src="https://www.youtube.com/embed/Y6kqpzIwQ9k"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </div>
            </section>
          </div>
        </div>
      ]
    );
  }

}
