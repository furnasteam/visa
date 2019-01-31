import React from 'react';
import {Title} from '../../../../components/title/Title';

export class ChosePersonScreen extends React.Component {
  render() {
    return (
      <div className="home__content">
        <Title>Выберите для кого нужен список документов
          на туристическую визу</Title>
        <div className="home__content__tourist-container">
          <div className="home__content__tourist-item">
            <div className="tourist tourist__icon_employee">
            </div>
            <span>работник</span>
            <div className="line"></div>
          </div>
          <div className="home__content__tourist-item">
            <div className="tourist tourist__icon_student">
            </div>
            <span>студент</span>
            <div className="line"></div>
          </div>
          <div className="home__content__tourist-item">
            <div className="tourist tourist__icon_business">
            </div>
            <span>ИП</span>
            <div className="line"></div>
          </div>
          <div className="home__content__tourist-item">
            <div className="tourist tourist__icon_housewife">
            </div>
            <span>домохозяйка</span>
            <div className="line"></div>
          </div>
          <div className="home__content__tourist-item">
            <div className="tourist tourist__icon_schoolchild">
            </div>
            <span>школьник</span>
            <div className="line"></div>
          </div>
          <div className="home__content__tourist-item">
            <div className="tourist tourist__icon_idle">
            </div>
            <span>безработный</span>
            <div className="line"></div>
          </div>
          <div className="home__content__tourist-item">
            <div className="tourist tourist__icon_retiree">
            </div>
            <span>пенсионер</span>
            <div className="line"></div>
          </div>
          <div className="home__content__tourist-item">
            <div className="tourist tourist__icon_child">
            </div>
            <span>дошкольник</span>
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  }
}