import React from 'react';
import './home.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {MainScreen} from "./screens/main-screen/MainScreen";
import {DescriptionScreen} from "./screens/description-screen/DescriptionScreen";
import {OtherResourcesScreen} from "./screens/other-resources-screen/OtherResourcesScreen";
import {ChosePersonScreen} from "./screens/chose-person-screen/ChosePersonScreen";

export class HomePage extends React.Component {

  render() {
    return (
      [
        <Helmet>
          <title>Документы на визу в Испанию 2019</title>
          <meta name="description"
                content="Заполнение анкеты на визу онлайн. Актуальный список документов для самостоятельного получения визы в визовом центре Испании."/>
        </Helmet>,
        <div className="home">
          <Header/>
          <MainScreen/>
          {/*<DescriptionScreen/>*/}
          {/*<ChosePersonScreen/>*/}
          {/*<OtherResourcesScreen/>*/}
        </div>
      ]
    );
  }

}
