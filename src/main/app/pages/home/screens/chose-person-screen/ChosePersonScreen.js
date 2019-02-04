import React from 'react';
import {Title} from '../../../../components/title/Title';
import './choose-person-screen.scss';
import {Button} from '../../../../components/button/Button';
import {createFullDocumentsListRoute} from '../../../../helpers/appRoutes';
import {Link} from 'react-router-dom';

export class ChosePersonScreen extends React.Component {
  render() {
    return (
      <div className="choose-person-screen">
        <Title>Выберите для кого нужен список документов
          на туристическую визу</Title>
        <div className="choose-person-screen__persons-container">
           <div className="choose-person-screen__person persons-container-col3">
              <div className="choose-person-screen__person-icon choose-person-screen__person-icon_employee">
              </div>
              <span>работник<div className="choose-person-screen__person-underline"></div></span>
            </div>
          <div className="choose-person-screen__person persons-container-col3">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_student">
            </div>
            <span>студент<div className="choose-person-screen__person-underline"></div></span>
          </div>
          <div className="choose-person-screen__person persons-container-col3">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_businessman">
            </div>
            <span>ИП<div className="choose-person-screen__person-underline"></div></span>
          </div>

          <div className="choose-person-screen__person persons-container-col2">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_housewife">
            </div>
            <span>домохозяйка<div className="choose-person-screen__person-underline"></div></span>
          </div>
          <div className="choose-person-screen__person persons-container-col2">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_schoolchild">
            </div>
            <span>школьник<div className="choose-person-screen__person-underline"></div></span>
          </div>

          <div className="choose-person-screen__person persons-container-col3">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_idle">
            </div>
            <span>безработный<div className="choose-person-screen__person-underline"></div></span>
          </div>
          <div className="choose-person-screen__person persons-container-col3">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_retiree">
            </div>
            <span>пенсионер<div className="choose-person-screen__person-underline"></div></span>
          </div>
          <div className="choose-person-screen__person persons-container-col3">
            <div className="choose-person-screen__person-icon choose-person-screen__person-icon_child">
            </div>
            <span>дошкольник<div className="choose-person-screen__person-underline"></div></span>
          </div>
        </div>
        <div className="choose-person-screen__any-route-container">
          <Title className="choose-person-screen__any-route-container-item">Не нашли себя?</Title>
          <div className="choose-person-screen__any-route-container-item">Прочтите статью с разбором списка документов для визы в Испанию</div>
          <div className="choose-person-screen__documents-list-button">
            <Link to={createFullDocumentsListRoute()} key="createFullDocumentsListRoute">
              <Button>Перейти</Button>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}