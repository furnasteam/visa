import React from 'react';
import './full-documents-list.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {string} from 'prop-types';
import {Title} from '../../components/title/Title';
import {Documents} from '../../components/documents/Documents';
import {Subtitle} from '../../components/subtitle/Subtitle';
import {GreenLink} from '../../components/green-link/GreenLink';

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
              В списке указаны документы для <abbr title="Индивидуальный предпиниматель">ИП</abbr>, работников, детей.
              Указаны документы в случае приглашения.
              Приведены примеры и доступны бланки для заполнения форм.
            </p>
            <nav>
              <Subtitle>Оглавление</Subtitle>
              <ul className="full-documents-list__contents">
                <li className="full-documents-list__contents-item">
                  <GreenLink href="#list">
                    Список документов
                  </GreenLink>
                </li>
                <li className="full-documents-list__contents-item">
                  <GreenLink href="#prices">
                    Цены на визы
                  </GreenLink>
                </li>
                <li className="full-documents-list__contents-item">
                  <GreenLink href="#video">
                    Как зарегистироваться на подачу документов
                  </GreenLink>
                </li>
              </ul>
            </nav>
            <section id="list"
                     className="full-documents-list__section">
              <Subtitle>Список документов</Subtitle>
              <Documents/>
            </section>
            <section id="prices"
                     className="full-documents-list__section">
              <Subtitle className="full-documents-list__prices-subtitle">Цены на визы</Subtitle>
              <p className="full-documents-list__paragraph">Указанные цены — это <b>сумма консульского и сервисного сбора</b>. Больше информации на сайте <GreenLink href="https://blsspain-russia.com/" target="_blank">blsspain-russia.com</GreenLink>
              </p>
              <div className="full-documents-list__prices-container">
                <table className="full-documents-list__prices-table">
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
              </div>
            </section>
            <section id="video"
                     className="full-documents-list__section">
              <Subtitle className="full-documents-list__video-subtitle">Как записаться на подачу документов</Subtitle>
              <p className="full-documents-list__paragraph">В видео показано, как записаться на сайте <GreenLink href="https://blsspain-russia.com/" target="_blank">blsspain-russia.com</GreenLink>  Обязательно <b>распечатайте приглашение</b> на подачу визы, без него не принимают.
                Если забудете, то его можно распечатать в офисе при визовом центре,
                но цены на печать завышены.</p>
              <p className="full-documents-list__paragraph">В первом видео показано как записаться на подачу документов <b>одному</b>:</p>
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
