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
                1. <b>Анкета на визу</b>, заполненная на 2-х листах, на испанском или английском языках, заполненная латиницей в электронном виде, подписанная лично заявителем в 4-х местах;
              </DocumentsListItem>
              <DocumentsListItem>
                2. <b>Две цветные фотографии</b> 3,5 х 4,5 см, на белом фоне, сделанные в течение последних 6 месяцев, голова на фотографии должна занимать 70-80% всего изображения;
              </DocumentsListItem>
              <DocumentsListItem>
                3. <b>Загранпаспорт</b>, действительный минимум в течение трех месяцев после предполагаемой даты выезда из Шенгенской зоны, содержащий как минимум один чистый разворот;
              </DocumentsListItem>
              <DocumentsListItem>
                4. <b>Копии всех страниц загранпаспорта></b> (формат А4, два разварота паспорта на одной странице, четыре разворота паспорта на одном листе);
              </DocumentsListItem>
              <DocumentsListItem>
                5. <b>Другие загранпаспорта + копии всех страниц загранпаспортов</b> (формат А4, два разварота паспорта на одной странице, четыре разворота паспорта на одном листе);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.OLDER_18]}>
                6. <b>Копия заполненных страниц общегражданского паспорта</b> (формат А4, два разварота паспорта на страницу, четыре разворота паспорта на лист);
              </DocumentsListItem>
              <DocumentsListItem>
                7. <b>Подтверждение размещения</b> на весь период проживания. Бронь отеля/хостела/квартиры/дома. Если бронировать через booking.com, информация о бронировании присылают на указанный email:
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.INVITE_RUS, DocumentTag.INVITE_EU]}>
                8. Приглашение, напечатанное в произвольной форме с указанием сведений о приглашающем лице, приглашенном лице, с датами поездки и месте проживания приглашенного;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.INVITE_RUS]}>
                9. <b>Копия документа, удостоверяющего личность приглашающего</b> и подтверждение его легального проживания или пребывания в Испании, например, копия DNI (Documento Nacional de Identidad)
                   — Национальный документ, удостоверяющий личность, либо копия главной страницы загранпаспорта с действующей шенгенской визой;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.INVITE_RUS]}>
                10. При проживании у приглашающего – выписка из реестра недвижимости, нота симпле (Nota Simple);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.INVITE_EU]}>
                11. Копия документа, удостоверяющего личность приглашающего;
              </DocumentsListItem>
              <DocumentsListItem>
                12. <b>Полис медицинского страхования</b> на весь период пребывания (не менее 30.000 €). Купить полис можно онлайн, например, на сайте renins.com;
              </DocumentsListItem>
              <DocumentsListItem>
                13. <b>Как добираться:</b>
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.PLANE]}>
                13.1 Копия или бронь билета на самолет/поезд/автобус/пароход;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.CAR]}>
                13.2 Копия технического паспорта автомобиля;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.CAR, DocumentTag.DRIVER]}>
                13.3 Копия водительских прав;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.CAR]}>
                13.4 Копия международной страховки автомобиля (Грин Кард);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.CAR]}>
                13.5 Напечатанный маршрутный лист по планируемой поездке с указанием дат пересечения границ иностранных государств;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.CAR]}>
                13.6 Контракт аренды автомобиля;
              </DocumentsListItem>
              <DocumentsListItem>
                14. <b>Профессиональный статус (экономические гарантии):</b>
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.WORKER]}>
                14.1 Справка с места работы, оригинал на фирменном бланке с указанием названия, адреса и телефона организации, ФИО, должности и заработной платы работника, заверенная печатью и
                подписью руководителя и бухгалтерии (справка действительна в течение 1 месяца со дня выдачи) или допустимо предоставить форму 2НДФЛ;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.STUDENT]}>
                14.2 Оригинал справки с места учёбы с синей печатью;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.BUSINESSMAN]}>
                14.3 Копия свидетельства о регистрации предприятия или уведомление о постановке на учет физического лица в налоговом органе;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.BUSINESSMAN]}>
                14.4 Копия документа индивидуального номера налогоплательщика (ИНН);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.PENSIONER]}>
                14.5 Справка из пенсионного фонда;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.PENSIONER]}>
                14.6 Копия пенсионного удостоверения (при подаче нужно будет показать оригинал);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SPONSOR]}>
                14.7 Спонсорское письмо в печатном виде;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SPONSOR]}>
                14.8 Оригинал справки с места работы спонсора;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SPONSOR]}>
                14.9 Финансовые гарантии спонсора (выписка со счета из банка или справка о покупке валюты);
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SPONSOR]}>
                14.10 Ксерокопия общегражданского паспорта спонсора (первый разворот с данными спонсора и разворот с пропиской).
              </DocumentsListItem>
              <DocumentsListItem>
                15. <b>Финансовые гарантии</b> (73,59 € на каждый день пребывания и минимум 661,50 евро на поездку за человека). Один или несколько пунктов:
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SELF_PAID]}>
                15.1 Оригинал выписки с банковского счета на бланке банка с синей печатью. Если не получается получить справку — сделайте в банкомате запрос остатка, прийдите с ним в банк и попросите поставить печать;
              </DocumentsListItem>
              <DocumentsListItem tags={[DocumentTag.SELF_PAID]}>
                15.2 Справка о покупке валюты;
              </DocumentsListItem>
              <DocumentsListItem>
                16. <b>Копия свидетельства о рождении</b>
              </DocumentsListItem>
              <DocumentsListItem>
                17. <b>Загран паспорт родителя/родителей/опекуна</b> с которыми едет за границу;
              </DocumentsListItem>
              <DocumentsListItem>
                18. <b>Копии общегражданского паспорта (российского) родителя/родителей/опекуна:</b>
              </DocumentsListItem>
              <DocumentsListItem>
                18.1 Первой страницы и прописки общегражданского паспорта родителя, дающего согласие;
              </DocumentsListItem>
              <DocumentsListItem>
                18.2 Первой страницы и прописки общегражданского паспорта сопровождающего.
              </DocumentsListItem>
              <DocumentsListItem>
                19. Копия <b>нотариально-заверенного согласия другого родителя/родителей</b> и перевод на испанский язык;
                    Согласие должно быть оформлено не ранее чем за 1 год до планируемой 
                    поездки, должно быть четко обозначено, что родитель разрешает вывоз ребенка 
                    в страны Шенгенского соглашения, в том числе в Испанию.  В случае 
                    невозможности получения согласия, документы, подтверждающие причину 
                    отсутствия доверенности (копия свидетельства о смерти, справка матери-
                    одиночки и т.п.);
              </DocumentsListItem>
            </DocumentsList>
          </div>
        </div>
      ]
    );
  }

}
