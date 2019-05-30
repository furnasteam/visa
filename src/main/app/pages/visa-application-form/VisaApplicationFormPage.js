import React from 'react';
import {string} from 'prop-types';
import './visa-application-form.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {Title} from '../../components/title/Title';
import {UniversalLink} from '../../components/universal-link/UniversalLink';
import {Button} from '../../components/button/Button';
import {ProfileScreen} from './screens/profile-screen/ProfileScreen';
import {ContractsScreen} from './screens/contacts-screen/ContractsScreen';
import {PasportScreen} from './screens/pasport-screen/PasportScreen';
import {TripScreen} from './screens/trip-screen/TripScreen';
import {ShengenScreen} from './screens/shengen-screen/ShengenScreen';
import {EmailScreen} from './screens/email-screen/EmailScreen';
import {Steps} from '../../components/steps/Steps';
import {Footer} from '../../components/footer/Footer';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import size from 'lodash/size';
import {createVisaApplicationFormRoute} from '../../helpers/appRoutes';
import PDFPrinter from "../../helpers/PDFPrinter";

const StepName = {
  PROFILE: 'profile',
  CONTACTS: 'contacts',
  PASSPORT: 'passport',
  TRIP: 'trip',
  SCHENGEN: 'schengen',
  EMAIL: 'email',
};

const StepsData = [
  {name: StepName.PROFILE, label: 'Профиль', component: ProfileScreen},
  {name: StepName.CONTACTS, label: 'Контакты', component: ContractsScreen},
  {name: StepName.PASSPORT, label: 'Паспорт', component: PasportScreen},
  {name: StepName.TRIP, label: 'Поездка', component: TripScreen},
  {name: StepName.SCHENGEN, label: 'Шенгенская зона', component: ShengenScreen},
  {name: StepName.EMAIL, label: 'Email', component: EmailScreen}
];

export class VisaApplicationFormPage extends React.Component {

  static propTypes = {
    step: string
  };

  state = {
    formData: {
      // [VISA_APPLICATION_FORM_FILEDS.FIRST_NAME]: 'Default Value'
    }
  };

  handleFormChange = (formData) => {
    console.log('formData', formData);
    this.setState({formData});
  };

  getActiveStep() {
    const {step} = this.props;
    return find(StepsData, {name: step}) || StepsData[0];
  }

  getActiveScreen() {
    const {formData} = this.state;
    const activeStepData = this.getActiveStep();
    return <activeStepData.component formData={formData} onChange={this.handleFormChange}/>;
  }

  getNextStep() {
    const index = findIndex(StepsData, this.getActiveStep());
    if ((index + 1) < size(StepsData)) {
      return StepsData[index + 1];
    }
  };
  isPrintScreen() {
    const {step} = this.props;
    return  step == StepName.EMAIL;
  };

  render() {
    const {formData} = this.state;
    return (
      [
        <Helmet key="1">
          <title>Заполение анкеты на визу в Испанию</title>
          <meta name="description"
                content="Заполнение анкеты на визу онлайн."/>
          <link rel="canonical" href="https://visa.furnas.ru"/>

        </Helmet>,
        <div key="2" className="visa-application-form">
          <Header/>
          <Steps stepsData={StepsData}
                 activeStep={this.getActiveStep()}/>
          <div className="visa-application-form__content">

            <Title className="visa-application-form__title">Анкета на визу</Title>
            {this.getActiveScreen()}
          </div>
          <div className="visa-application-form__next-button-container">
            {this.getNextStep() &&
            <UniversalLink href={createVisaApplicationFormRoute(this.getNextStep().name)}
                           noStyle={true}>

              <Button className="visa-application-form__next-button">Далее</Button>
            </UniversalLink>}
            {this.isPrintScreen() &&
            <PDFPrinter formData={formData} />
            }
          </div>
          <Footer/>
        </div>
      ]
    );
  }

}
