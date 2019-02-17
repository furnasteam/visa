import React from 'react';
import '../../home.scss';
import './other-resources-screen.scss';
import {Title} from '../../../../components/title/Title';

export class OtherResourcesScreen extends React.Component {
  render() {
    return (
      <div className="other-resources-screen">
        <Title>Ищите нас на других ресурсах:</Title>
        <div className="other-resources-screen__container">
          <div className="other-resources-screen__item">
            <span>Instagram<div className="other-resources-screen__item-underline"></div></span>
          </div>
          <div className="other-resources-screen__item">
            <span>Наш Блог<div className="other-resources-screen__item-underline"></div></span>
          </div>
          <div className="other-resources-screen__item">
            <span>Vkontakte<div className="other-resources-screen__item-underline"></div></span>
          </div>
          <div className="other-resources-screen__item">
            <span>Facebook<div className="other-resources-screen__item-underline"></div></span>
          </div>
          <div className="other-resources-screen__item">
            <span>Media<div className="other-resources-screen__item-underline"></div></span>
          </div>
        </div>
      </div>
    );
  }
}