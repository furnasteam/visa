import React from 'react';
import './description-screen.scss';
import {Picture} from '../../../../components/picture/Picture';

export class DescriptionScreen extends React.Component {
  render() {
    return (
      <div className="description-screen">
        <Picture imgClassName="description-screen__flamenco-image"
                 forPhoneOnly={[require('./images/flamenco.svg')]}
                 forTabletPortraitUp={[require('./images/flamenco.svg')]}
                 alt="Иллюстрация испанской женщины в национальной одежде"/>
        <h2 className="description-screen__title">Проект Visa.Furnas включает в себя</h2>
        <Picture forPhoneOnly={[require('./images/green-line.png'), require('./images/green-line.webp')]}
                 forTabletPortraitUp={[require('./images/green-line.png'), require('./images/green-line.webp')]}
                 alt="Зеленая линия"
                 imgClassName="description-screen__green-line"/>
        <div className="description-screen__flex-container">
          <div className="description-screen__content-block">
            <h3 className="description-screen__content-title">Актуальный<br/> список документов</h3>
            <p className="description-screen__content-text">Не нужно гуглить и читать длинные статьи.
              Вы отвечаете на 4 вопроса - мы формируем список документов
              Почти для всех документов можно скачать примеры или шаблоны. </p>
          </div>
          <div className="description-screen__content-block description-screen__content-block_development">
            <div className="description-screen__content-development-label">в разработке</div>
            <h3 className="description-screen__content-title">Бесплатно заполнить<br/> анкету на визу</h3>
            <p className="description-screen__content-text">Мы разобрали и проверили все вопросы анкеты на визу.
              Теперь они стали понятнее и на них легко ответить.
              В конце вы получите pdf документ, который нужно будет только распечатать и подписать.</p>
          </div>
        </div>
        <div className="description-screen__flex-container description-screen__flex-container_right">
          <div className="description-screen__content-block description-screen__content-block_development">
            <div className="description-screen__content-development-label">в разработке</div>
            <h3 className="description-screen__content-title">Бесплатная консультация по заполнению</h3>
            <p className="description-screen__content-text">Если вдруг оказалось, что вы все равно запутались и не знаете, что написать в каком пункте - мы вас не бросим. Пишите нам и мы поможем.</p>
          </div>
        </div>
      </div>
    );
  }
}