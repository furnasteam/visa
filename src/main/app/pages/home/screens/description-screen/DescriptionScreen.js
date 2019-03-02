import React from 'react';
import './description-screen.scss';
import {Picture} from '../../../../components/picture/Picture';

export class DescriptionScreen extends React.Component {
  render() {
    return (
      <div className="description-screen">
        <Picture imgClassName="description-screen__flamenco-image"
                 forPhoneOnly={[require('./images/flamenco.png'), require('./images/flamenco.webp')]}
                 forPhoneOnlyRetina={[require('./images/flamenco_2x.png'), require('./images/flamenco_2x.webp')]}
                 forTabletPortraitUp={[require('./images/flamenco.png'), require('./images/flamenco.webp')]}
                 forTabletPortraitUpRetina={[require('./images/flamenco_2x.png'), require('./images/flamenco_2x.webp')]}
                 alt="Иллюстрация испанской женщины в национальной одежде"/>
        <h2 className="description-screen__title">Проект Visa.Furnas включает в себя</h2>
        <Picture forPhoneOnly={[require('./images/green-line.png')]}
                 imgClassName="description-screen__green-line"/>
        <div className="description-screen__flex-container">
          <div className="description-screen__content-block">
            <h3 className="description-screen__content-title">Актуальный<br/> список документов</h3>
            <p className="description-screen__content-text">Сказать, что пользователь может найти свой личный список документов. Не надо самому понимать какие документы необходимы именно для тебя.
              С примерами какие документы в каком виде необходимо подать.</p>
          </div>
          <div className="description-screen__content-block description-screen__content-block_development">
            <div className="description-screen__content-development-label">в разработке</div>
            <h3 className="description-screen__content-title">Бесплатно заполнить<br/> анкету на визу</h3>
            <p className="description-screen__content-text">Сказать, что у нас не непонятные вопросы, а адекватный и последовательный список
              вопросов. Ответив на вопросы пользователь получит правильно заполненную анкету, которую он может скачать бесплатно.</p>
          </div>
        </div>
        <div className="description-screen__flex-container description-screen__flex-container_right">
          <div className="description-screen__content-block description-screen__content-block_development">
            <div className="description-screen__content-development-label">в разработке</div>
            <h3 className="description-screen__content-title">Бесплатная консультация по заполнению</h3>
            <p className="description-screen__content-text">Сказать, что в случае каких-то исключений мы его не бросим а вместе будем разбираться.</p>
          </div>
        </div>
      </div>
    );
  }
}