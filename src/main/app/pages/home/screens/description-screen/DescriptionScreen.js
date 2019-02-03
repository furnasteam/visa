import React from 'react';
import {Title} from '../../../../components/title/Title';
import Flamenco from '../images/Flamenco.png';
import Green_line from '../images/Green_line.png';
import './description-screen.scss';

export class DescriptionScreen extends React.Component {
  render() {
    return (
      <div className="description-screen">
        <img src={Flamenco} style={{position: 'absolute', width: '58px', height: '120px', marginTop: '-84px'}}/>
        <Title>Проект Furnas.Visa включает в себя</Title>
        <img src={Green_line}/>
        <div className="description-screen__flex-container">
          <div className="description-screen__content-block">
            <h3>Актуальный
              список документов</h3>
            <span>Сказать, что пользователь может найти свой личный список документов. Не надо самому понимать какие документы необходимы именно для тебя.
С примерами какие документы в каком виде необходимо подать.</span>
          </div>
          <div className="description-screen__content-block">
            <h3>Бесплатно заполнить
              анкету на визу</h3>
            <span>Сказать, что у нас не непонятные вопросы, а адекватный и последовательный список
вопросов. Ответив на вопросы пользователь получит правильно заполненную анкету, которую он может скачать бесплатно.</span>
          </div>
          <div className="description-screen__content-block">
            <h3>Бесплатная консультация по заполнению</h3>
            <span>Сказать, что в случае каких-то исключений мы его не бросим а вместе будем разбираться.  </span>
          </div>
        </div>
      </div>
    );
  }
}