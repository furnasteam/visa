import React from 'react';
import './home.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {MainScreen} from "./screens/main-screen/MainScreen";
import {DescriptionScreen} from "./screens/description-screen/DescriptionScreen";
import {OtherResourcesScreen} from "./screens/other-resources-screen/OtherResourcesScreen";
import {ChosePersonScreen} from "./screens/chose-person-screen/ChosePersonScreen";
import {Footer} from '../../components/footer/Footer';

export class HomePage extends React.Component {

  render() {
    return (
      [
        <Helmet>
          <title>Заполение анкеты на визу в Испанию</title>
          <meta name="description"
                content="Заполнение анкеты на визу онлайн. Беспллатное формирование пакета документов для самостоятельного получения визы в визовом центре Испании."/>
          <link rel="canonical" href="https://visa.furnas.ru" />
        </Helmet>,
        <div className="home">
          <Header/>
          <MainScreen/>
          {/*<DescriptionScreen/>*/}
          {/*<ChosePersonScreen/>*/}
          {/*<OtherResourcesScreen/>*/}
          <Footer/>
        </div>
      ]
    );
  }

}
