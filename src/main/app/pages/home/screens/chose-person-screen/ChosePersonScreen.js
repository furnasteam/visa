import React from 'react';
import {Title} from '../../../../components/title/Title';
import './choose-person-screen.scss';

export class ChosePersonScreen extends React.Component {
  render() {
    return (
      <div className="choose-person-screen">
        <Title>Выберите для кого нужен список документов
          на туристическую визу</Title>
        <div className="choose-person-screen__persons-container">
          <div className="choose-person-screen__person">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_employee">
            </div>
            <span>работник</span>
            <div className="choose-person-screen__person-underline"></div>
          </div>
          <div className="choose-person-screen__person">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_student">
            </div>
            <span>студент</span>
            <div className="choose-person-screen__person-underline"></div>
          </div>
          <div className="choose-person-screen__person">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_businessman">
            </div>
            <span>ИП</span>
            <div className="choose-person-screen__person-underline"></div>
          </div>
          <div className="choose-person-screen__person">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_housewife">
            </div>
            <span>домохозяйка</span>
            <div className="choose-person-screen__person-underline"></div>
          </div>
          <div className="choose-person-screen__person">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_schoolchild">
            </div>
            <span>школьник</span>
            <div className="choose-person-screen__person-underline"></div>
          </div>
          <div className="choose-person-screen__person">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_idle">
            </div>
            <span>безработный</span>
            <div className="choose-person-screen__person-underline"></div>
          </div>
          <div className="choose-person-screen__person">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_retiree">
            </div>
            <span>пенсионер</span>
            <div className="choose-person-screen__person-underline"></div>
          </div>
          <div className="choose-person-screen__person">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_child">
            </div>
            <span>дошкольник</span>
            <div className="choose-person-screen__person-underline"></div>
          </div>
        </div>
      </div>
    );
  }
}