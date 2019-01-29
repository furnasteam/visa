import React from 'react';
import './full-documents-list.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {string} from 'prop-types';
import {Title} from '../../components/title/Title';
import {DocumentsListItem} from './components/DocumentsListItem';
import {DocumentTag} from './FullDocumentsListModel';
import {DocumentsList} from './components/DocumentsList';

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
            <DocumentsList>
              <DocumentsListItem>
                1. <b>Анкета</b>, заполненная на 2-х листах, на испанском или английском языках, заполненная латиницей в электронном виде, подписанная лично заявителем в 4-х местах;
              </DocumentsListItem>
              <DocumentsListItem>
                2. <b>Две цветные фотографии</b> 3,5 х 4,5 см, на белом фоне, сделанные в течение последних 6 месяцев, голова на фотографии должна занимать 70-80% всего изображения;
              </DocumentsListItem>
              <DocumentsListItem>
                3. <b>Загранпаспорт</b>, действительный минимум в течение трех месяцев после предполагаемой даты выезда из Шенгенской зоны, содержащий как минимум один чистый разворот;
              </DocumentsListItem>
              <DocumentsListItem>
                4. <b>Копии всех страниц загранпаспорта></b> (формат А4, два разварота паспорта на одной странице, четыре разворота паспорта на одном листе)
              </DocumentsListItem>
              <DocumentsListItem>
                5. <b>Другие загранпаспорта + копии всех страниц загранпаспортов</b> (формат А4, два разварота паспорта на одной странице, четыре разворота паспорта на одном листе);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.OLDER_18]}>
                6. <b>Копия заполненных страниц общегражданского паспорта</b> (формат А4, два разварота паспорта на страницу, четыре разворота паспорта на лист);
              </DocumentsListItem>
              <DocumentsListItem>
                7. <b>Подтверждение размещения</b> на весь период проживания:
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.HOTEL]}>
                7.1 Бронь отеля;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.HOSTEL]}>
                7.2 Бронь хостела;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.APARTMENT]}>
                7.3 Бронь квартиры;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.HOUSE]}>
                7.4 Бронь дома;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.INVITE_RUS, DocumentTag.INVITE_EU]}>
                7.5 Приглашение, напечатанное в произвольной форме с указанием сведений о приглашающем лице, приглашенном лице, с датами поездки и месте проживания приглашенного;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.INVITE_RUS]}>
                7.6 Копия документа, удостоверяющего личность приглашающего и подтверждение его легального проживания или пребывания в Испании, например, копия DNI либо главной страницы загран
                паспорта с действующей шенгенской визой;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.INVITE_RUS]}>
                7.7 Подтверждение размещения приглашенного, если оно предполагается, на весь период пребывания в Испании (бронь отеля, аренда квартиры или дома, бронь в хостеле или студенческой
                гостинице на планируемый период);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.INVITE_RUS]}>
                7.8 При проживании у приглашающего – выписка из реестра недвижимости, нота симпле (Nota Simple);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.INVITE_EU]}>
                7.9 Копия документа, удостоверяющего личность приглашающего;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.INVITE_EU]}>
                7.10 Приглашение, оформленное в Комиссариате полиции в Испании;
              </DocumentsListItem>
              <DocumentsListItem>
                8. <b>Полис медицинского страхования</b> на весь период пребывания (не менее 30.000 €);
              </DocumentsListItem>
              <DocumentsListItem>
                9. <b>Как добираться:</b>
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.PLANE]}>
                9.1 Копия или бронь билета на самолет;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.TRAIN]}>
                9.2 Копия или бронь билета на поезд;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.BUS]}>
                9.3 Копия или бронь билета на автобус;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SHIP]}>
                9.4 Копия или бронь билета на пароход;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.CAR]}>
                9.5 Копия технического паспорта автомобиля;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.CAR, DocumentTag.DRIVER]}>
                9.6 Копия водительских прав;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.CAR]}>
                9.7 Копия международной страховки автомобиля (Грин Кард);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.CAR]}>
                9.8 Напечатанный маршрутный лист по планируемой поездке с указанием дат пересечения границ иностранных государств;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.CAR]}>
                9.9 Контракт аренды автомобиля;
              </DocumentsListItem>
              <DocumentsListItem>
                10. <b>Профессиональный статус (экономические гарантии):</b>
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.WORKER]}>
                10.1 Справка с места работы, оригинал на фирменном бланке с указанием названия, адреса и телефона организации, ФИО, должности и заработной платы работника, заверенная печатью и
                подписью руководителя и бухгалтерии (справка действительна в течение 1 месяца со дня выдачи) (или допустимо предоставить форму 2НДФЛ, пример справки в прикреплённых файлах);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.STUDENT]}>
                10.2 Оригинал справки с места учёбы с синей печатью (пример в прикреплённых файлах);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.BUSINESSMAN]}>
                10.3 Копия свидетельства о регистрации предприятия или уведомление о постановке на учет физического лица в налоговом органе;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.BUSINESSMAN]}>
                10.4 Копия документа индивидуального номера налогоплательщика (ИНН);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.PENSIONER]}>
                10.5 Справка из пенсионного фонда;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.PENSIONER]}>
                10.6 Копия пенсионного удостоверения;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.HOTEL]}>
                10.7 При подаче предоставить пенсионного удостоверения;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SPONSOR]}>
                10.8 Спонсорское письмо в печатном виде;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SPONSOR]}>
                10.9 Оригинал справки с места работы спонсора;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SPONSOR]}>
                10.10 Финансовые гарантии спонсора (выписка со счета из банка или справка о покупке валюты);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SPONSOR]}>
                10.11 Ксерокопия общегражданского паспорта спонсора (1-й разворот с данными спонсора и разворот с пропиской).
              </DocumentsListItem>
              <DocumentsListItem>
                11. <b>Финансовые гарантии</b> (73,59 € на каждый день пребывания и минимум 661,50 евро на поездку за человека). Один или несколько пунктов:
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SELF_PAID]}>
                11.1 Оригинал выписки с банковского счета на бланке банка с синей печатью (73,59 € на каждый день пребывания и минимум 661,50 евро на поездку за человека)
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SELF_PAID]}>
                11.2 Дорожные чеки (73,59 € на каждый день пребывания и минимум 661,50 евро на поездку за человека);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SELF_PAID]}>
                11.3 Справка о покупке валюты (73,59 € на каждый день пребывания и минимум 661,50 евро на поездку за человека);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SELF_PAID]}>
                11.4 Кредитная карта, сопровождаемая кратким содержанием банковского счета (73,59 € на каждый день пребывания и минимум 661,50 евро на поездку за человека);
              </DocumentsListItem>
            </DocumentsList>
          </div>
        </div>
      ]
    );
  }

}
