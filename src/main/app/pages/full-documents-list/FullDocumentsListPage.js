import React from 'react';
import './full-documents-list.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {string} from 'prop-types';
import {Title} from '../../components/title/Title';

export class FullDocumentsListPage extends React.Component {

  render() {
    return (
      [
        <Helmet>
          <title>Документы на визу в Испанию 2019</title>
          <meta name="description" content="Актуальный список документов для самостоятельного получения визы в официальном визовом центре Испании в 2019 году."/>
        </Helmet>,
        <div className="full-documents-list">
          <Header/>
          <div className="full-documents-list__content">
            <Title>
              Полный список документов на визу в Испанию
            </Title>
            <ul className="full-documents-list__list">
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  1. <b>Анкета</b>, заполненная на 2-х листах, на испанском или английском языках, заполненная латиницей в электронном виде, подписанная лично заявителем в 4-х местах;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  2. <b>Две цветные фотографии</b> 3,5 х 4,5 см, на белом фоне, сделанные в течение последних 6 месяцев, голова на фотографии должна занимать 70-80% всего изображения;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  3. <b>Загранпаспорт</b>, действительный минимум в течение трех месяцев после предполагаемой даты выезда из Шенгенской зоны, содержащий как минимум один чистый разворот;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  4. <b>Копии всех страниц загранпаспорта></b> (формат А4, два разварота паспорта на одной странице, четыре разворота паспорта на одном листе)
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  5. <b>Другие загранпаспорта + копии всех страниц загранпаспортов</b> (формат А4, два разварота паспорта на одной странице, четыре разворота паспорта на одном листе);
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  6. <b>Копия заполненных страниц общегражданского паспорта</b> (формат А4, два разварота паспорта на страницу, четыре разворота паспорта на лист);
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7. <b>Подтверждение размещения</b> на весь период проживания:
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7.1 Бронь отеля;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7.2 Бронь хостела;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7.3 Бронь квартиры;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7.4 Бронь дома;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7.5 Приглашение, напечатанное в произвольной форме с указанием сведений о приглашающем лице, приглашенном лице, с датами поездки и месте проживания приглашенного;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7.6 Копия документа, удостоверяющего личность приглашающего и подтверждение его легального проживания или пребывания в Испании, например, копия DNI либо главной страницы загран паспорта с действующей шенгенской визой;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7.7 Подтверждение размещения приглашенного, если оно предполагается, на весь период пребывания в Испании (бронь отеля, аренда квартиры или дома, бронь в хостеле или студенческой гостинице на планируемый период);
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7.8 При проживании у приглашающего – выписка из реестра недвижимости, нота симпле (Nota Simple);
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7.9 Копия документа, удостоверяющего личность приглашающего;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  7.10 Приглашение, оформленное в Комиссариате полиции в Испании;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  8. <b>Полис медицинского страхования</b> на весь период пребывания (не менее 30.000 €);
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  9. <b>Как добираться:</b>
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  9.1 Копия или бронь билета на самолет;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  9.2 Копия или бронь билета на поезд;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  9.3 Копия или бронь билета на автобус;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  9.4 Копия или бронь билета на пароход;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  9.5 Копия технического паспорта автомобиля;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  9.6 Копия водительских прав;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  9.7 Копия международной страховки автомобиля (Грин Кард);
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  9.8 Напечатанный маршрутный лист по планируемой поездке с указанием дат пересечения границ иностранных государств;
                </p>
              </li>
              <li className="full-documents-list__list-item">
                <p className="full-documents-list__list-item-text">
                  9.9 Контракт аренды автомобиля;
                </p>
              </li>
            </ul>
          </div>
        </div>
      ]
    );
  }

}
