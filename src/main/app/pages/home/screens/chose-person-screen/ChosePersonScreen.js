import React from 'react';
import {Title} from '../../../../components/title/Title';
import './choose-person-screen.scss';
import {Button} from '../../../../components/button/Button';
import {createDocumentsListRoute, createFullDocumentsListRoute} from '../../../../helpers/appRoutes';
import {UniversalLink} from '../../../../components/universal-link/UniversalLink';
import {Picture} from '../../../../components/picture/Picture';
import {UserType} from '../../../../models/UserTypeModel';

export class ChosePersonScreen extends React.Component {
  render() {
    return (
      <div className="choose-person-screen">
        <Title className="choose-person-screen__title">Выберите для кого нужен список документов на туристическую визу</Title>
        <div className="choose-person-screen__persons-container">

          <div className="choose-person-screen__person persons-container-col3">
            <UniversalLink href={createDocumentsListRoute(UserType.EMPLOYEE)} noStyle={true}>
              <Picture imgClassName="choose-person-screen__person-icon"
                       forPhoneOnly={[require('./images/employee_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/employee_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/employee.png')]}
                       forTabletPortraitUpRetina={[require('./images/employee_2x.png')]}
                       alt="Работник иллюстрация"/>
            </UniversalLink>
            <UniversalLink href={createDocumentsListRoute(UserType.EMPLOYEE)}
                           className="choose-person-screen__link">
              работник
            </UniversalLink>
          </div>

          <div className="choose-person-screen__person persons-container-col3">
            <UniversalLink href={createDocumentsListRoute(UserType.STUDENT)} noStyle={true}>
              <Picture imgClassName="choose-person-screen__person-icon"
                       forPhoneOnly={[require('./images/student_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/student_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/student.png')]}
                       forTabletPortraitUpRetina={[require('./images/student_2x.png')]}
                       alt="Студент иллюстрация"/>
            </UniversalLink>
            <UniversalLink href={createDocumentsListRoute(UserType.STUDENT)}
                           className="choose-person-screen__link">
              студент
            </UniversalLink>
          </div>

          <div className="choose-person-screen__person persons-container-col3">
            <UniversalLink href={createDocumentsListRoute(UserType.BUSINESSMAN)} noStyle={true}>
              <Picture imgClassName="choose-person-screen__person-icon"
                       forPhoneOnly={[require('./images/businessman_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/businessman_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/businessman.png')]}
                       forTabletPortraitUpRetina={[require('./images/businessman_2x.png')]}
                       alt="Бизнесмен иллюстрация"/>
            </UniversalLink>
            <UniversalLink href={createDocumentsListRoute(UserType.BUSINESSMAN)}
                           className="choose-person-screen__link">
              ИП
            </UniversalLink>
          </div>

          <div className="choose-person-screen__person persons-container-col2">
            <div className="choose-person-screen__housewife-wrapper">
              <UniversalLink href={createDocumentsListRoute(UserType.HOUSEWIFE)} noStyle={true}>
                <Picture imgClassName="choose-person-screen__person-icon"
                         forPhoneOnly={[require('./images/housewife_mob.png')]}
                         forPhoneOnlyRetina={[require('./images/housewife_mob_2x.png')]}
                         forTabletPortraitUp={[require('./images/housewife.png')]}
                         forTabletPortraitUpRetina={[require('./images/housewife_2x.png')]}
                         alt="Домохозяйка иллюстрация"/>
              </UniversalLink>
              <UniversalLink href={createDocumentsListRoute(UserType.HOUSEWIFE)}
                             className="choose-person-screen__link">
                домохозяйка
              </UniversalLink>
            </div>
          </div>

          <div className="choose-person-screen__person persons-container-col2">
            <div className="choose-person-screen__schoolchild-wrapper">
              <UniversalLink href={createDocumentsListRoute(UserType.SCHOOLCHILD)} noStyle={true}>
                <Picture imgClassName="choose-person-screen__person-icon"
                         forPhoneOnly={[require('./images/schoolchild_mob.png')]}
                         forPhoneOnlyRetina={[require('./images/schoolchild_mob_2x.png')]}
                         forTabletPortraitUp={[require('./images/schoolchild.png')]}
                         forTabletPortraitUpRetina={[require('./images/schoolchild_2x.png')]}
                         alt="Ученик иллюстрация"/>
              </UniversalLink>
              <UniversalLink href={createDocumentsListRoute(UserType.SCHOOLCHILD)}
                             className="choose-person-screen__link">
                школьник
              </UniversalLink>
            </div>
          </div>

          <div className="choose-person-screen__person persons-container-col3">
            <UniversalLink href={createDocumentsListRoute(UserType.IDLE)} noStyle={true}>
              <Picture imgClassName="choose-person-screen__person-icon"
                       forPhoneOnly={[require('./images/idle_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/idle_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/idle.png')]}
                       forTabletPortraitUpRetina={[require('./images/idle_2x.png')]}
                       alt="Безработный иллюстрация"/>
            </UniversalLink>
            <UniversalLink href={createDocumentsListRoute(UserType.IDLE)}
                           className="choose-person-screen__link">
              безработный
            </UniversalLink>
          </div>

          <div className="choose-person-screen__person persons-container-col3">
            <UniversalLink href={createDocumentsListRoute(UserType.RETIREE)} noStyle={true}>
              <Picture imgClassName="choose-person-screen__person-icon"
                       forPhoneOnly={[require('./images/retiree_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/retiree_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/retiree.png')]}
                       forTabletPortraitUpRetina={[require('./images/retiree_2x.png')]}
                       alt="Пенсионер иллюстрация"/>
            </UniversalLink>
            <UniversalLink href={createDocumentsListRoute(UserType.RETIREE)}
                           className="choose-person-screen__link">
              пенсионер
            </UniversalLink>
          </div>

          <div className="choose-person-screen__person persons-container-col3">
            <UniversalLink href={createDocumentsListRoute(UserType.CHILD)} noStyle={true}>
              <Picture imgClassName="choose-person-screen__person-icon"
                       forPhoneOnly={[require('./images/child_mob.png')]}
                       forPhoneOnlyRetina={[require('./images/child_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/child.png')]}
                       forTabletPortraitUpRetina={[require('./images/child_2x.png')]}
                       alt="Дошкольник иллюстрация"/>
            </UniversalLink>
            <UniversalLink href={createDocumentsListRoute(UserType.CHILD)}
                           className="choose-person-screen__link">
              дошкольник
            </UniversalLink>
          </div>
        </div>

        <div className="choose-person-screen__any-route-container">
          <Title className="choose-person-screen__any-route-container-title choose-person-screen__any-route-container-item">Не нашли себя?</Title>
          <div className="choose-person-screen__any-route-container-item">Прочтите статью с разбором списка документов для визы в Испанию</div>
          <div className="choose-person-screen__documents-list-button">
            <UniversalLink href={createFullDocumentsListRoute()}
                           noStyle={true}>
              <Button>Перейти</Button>
            </UniversalLink>
          </div>
        </div>

      </div>
    );
  }
}