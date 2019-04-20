import React from 'react';
import './full-documents-list.scss';
import './spisok-dokumentov-na-vizu-v-ispaniyu-2019.amp.html';
/*import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';*/
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {string} from 'prop-types';
import {Title} from '../../components/title/Title';
import {Documents} from '../../components/documents/Documents';
import {Subtitle} from '../../components/subtitle/Subtitle';
import {GreenLink} from '../../components/green-link/GreenLink';
import {Button} from '../../components/button/Button';
import {UniversalLink} from '../../components/universal-link/UniversalLink';
import {Picture} from '../../components/picture/Picture';

export class FullDocumentsListPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  download() {
    window.html2canvas = html2canvas;
    var options = {

      pagesplit: true
    };

    //https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
    var pdf = new jsPDF('p', 'mm', 'a4');

    pdf.internal.scaleFactor = 4.5;//120;
    var content = document.getElementsByClassName("full-documents-list__content")[0];

    document.getElementById("video").style.display = "none";
    document.getElementsByClassName("full-documents-list__flamenco-row")[0].style.display = "none";

    pdf.addHTML(content, 22, 20, options, function () {
      pdf.save('Список документов.pdf')
      document.getElementById("video").style.display = "";
      document.getElementsByClassName("full-documents-list__flamenco-row")[0].style.display = "";
    });
  }


  render() {
    return (
      [
        <Helmet key="1">
          <title>Документы на визу в Испанию 2019</title>
          <meta name="description" content="Актуальный полный список документов для самостоятельного получения визы в официальном визовом центре Испании в 2019 году."/>
          <link rel="canonical" href="https://visa.furnas.ru/spisok-dokumentov-na-vizu-v-ispaniyu-2019"/>
          <link rel="amphtml" href="https://visa.furnas.ru/spisok-dokumentov-na-vizu-v-ispaniyu-2019.amp.html"/>
          <meta property="og:url" content="https://visa.furnas.ru/spisok-dokumentov-na-vizu-v-ispaniyu-2019"/>
          <meta property="og:title" content="Документы на визу в Испанию 2019"/>
          <meta property="og:description" content="Актуальный полный список документов для самостоятельного получения визы в официальном визовом центре Испании в 2019 году."/>
          {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>*/}
          {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>*/}

          <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://visa.furnas.ru/spisok-dokumentov-na-vizu-v-ispaniyu-2019"
  },
  "image": [
    "https://visa.furnas.ru/${require('./images/flamenco.png')}"
   ],
  "headline": "Документы на визу в Испанию 2019",
  "datePublished": "2019-02-25T18:50:59+03:00",
  "dateModified": "2019-02-25T18:50:59+03:00",
  "author": {
    "@type": "Person",
    "name": "Мария Санкина"
  },
   "publisher": {
    "@type": "Organization",
    "name": "FurnasTeam",
    "logo": {
      "@type": "ImageObject",
      "url": "https://visa.furnas.ru/${require('../../images/favicon-192x192.png')}"
    }
  },
  "description": "Актуальный полный список документов для самостоятельного получения визы в официальном визовом центре Испании в 2019 году."
        }
    `}</script>
        </Helmet>,

        <div className="full-documents-list"
             key="2">
          <Header/>
          <div className="full-documents-list__content">
            <Title>
              Полный список документов на визу в Испанию
            </Title>

            {/*<br/>*/}
            {/*<Button className="button button_big-blue" onClick={this.download.bind(this)}>Скачать документ</Button>*/}

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
              <UniversalLink href="https://drive.google.com/file/d/1qmzzGyMELmRSxloTfUWgmHOcBxhl3_GI/view?usp=sharing" noStyle={true}>
                <Button className="full-documents-list__download-list-button">Скачать список и примеры</Button>
              </UniversalLink>
            </section>
            <section id="prices"
                     className="full-documents-list__section">
              <Subtitle className="full-documents-list__prices-subtitle">Цены на визы</Subtitle>
              <p className="full-documents-list__paragraph">Указанные цены — это <b>сумма консульского и сервисного сбора</b>. Больше информации на сайте <GreenLink href="https://blsspain-russia.com/"
                                                                                                                                                                     target="_blank">blsspain-russia.com</GreenLink>
              </p>
              <div className="full-documents-list__prices-container">
                <table className="full-documents-list__prices-table">
                  <thead>
                  <tr>
                    <th>
                      Категории
                    </th>
                    <th>
                      Тарифы на визы для граждан России, Украины, Армении, Грузии и <GreenLink target="_blank" className="full-documents-list__other-countries"
                                                                                               href="https://blsspain-russia.com/moscow/short_term_visa.php">других стран</GreenLink>.
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
              <p className="full-documents-list__paragraph">В видео показано, как записаться на сайте <GreenLink href="https://blsspain-russia.com/"
                                                                                                                 target="_blank">blsspain-russia.com</GreenLink> Обязательно <b>распечатайте
                приглашение</b> на подачу визы, без него не принимают.
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
              <p className="full-documents-list__paragraph">
                Во втором видео показано как записаться на подачу документов <b>вместе с семьей, другом, подругой или друзьями (до 8 человек)</b>:
              </p>
              <div className="full-documents-list__video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yd5zEec0rkE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </div>
            </section>
            <div className="full-documents-list__flamenco-row">
              <Picture imgClassName="full-documents-list__flamenco-image"
                       forPhoneOnly={[require('./images/flamenco.png'), require('./images/flamenco.webp')]}
                       forPhoneOnlyRetina={[require('./images/flamenco_2x.png'), require('./images/flamenco_2x.webp')]}
                       forTabletPortraitUp={[require('./images/flamenco.png'), require('./images/flamenco.webp')]}
                       forTabletPortraitUpRetina={[require('./images/flamenco_2x.png'), require('./images/flamenco_2x.webp')]}
                       alt="Иллюстрация испанской женщины в национальной одежде"/>
            </div>
          </div>
          {/*<Footer/>*/}
        </div>
      ]
    );
  }

}
