import React from 'react';
import './home.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {HomeScreen1} from "./screens/HomeScreen1";
import {HomeScreen2} from "./screens/HomeScreen2";
import {HomeScreen4} from "./screens/HomeScreen4";
import {HomeScreen3} from "./screens/HomeScreen3";

export class HomePage extends React.Component {

  render() {
    return (
      [
        <Helmet>
          <title>Документы на визу в Испанию 2019</title>
          <meta name="description" content="Заполнение анкеты на визу онлайн. Актуальный список документов для самостоятельного получения визы в визовом центре Испании."/>
        </Helmet>,
        <div className="home">
          <Header/>
          <HomeScreen1/>
          <HomeScreen2/>
          <HomeScreen3/>
          <HomeScreen4/>
        </div>
      ]
    );
  }

}
