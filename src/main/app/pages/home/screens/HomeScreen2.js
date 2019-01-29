import React from 'react';
import '.././home.scss';
import {Title} from '../../../components/title/Title';

export class HomeScreen2 extends React.Component {
  render() {
    return (
      <div className="home__content">
        <Title>Проект Furnas.Visa включает в себя</Title>
        <div className="home__content__flex-container">
          <div className="home__content__rectangle-2">
            <h3>Актуальный
              список документов</h3>
            <span>Сказать, что пользователь может найти свой личный список документов. Не надо самому понимать какие документы необходимы именно для тебя.
С примерами какие документы в каком виде необходимо подать.</span>
          </div>
          <div className="home__content__rectangle-2">
            <h3>Бесплатно заполнить
              анкету на визу</h3>
            <span>Сказать, что у нас не непонятные вопросы, а адекватный и последовательный список
вопросов. Ответив на вопросы пользователь получит правильно заполненную анкету, которую он может скачать бесплатно.</span>
          </div>
          <div className="home__content__rectangle-2">
            <h3>Бесплатная консультация по заполнению</h3>
            <span>Сказать, что в случае каких-то исключений мы его не бросим а вместе будем разбираться.  </span>
          </div>
        </div>
      </div>
    );
  }
}