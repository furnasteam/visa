import React from 'react';
import './visa-application-form.scss';
import {Helmet} from 'react-helmet';
import {Form} from '../../components/form/Form';
import {InputField} from '../../components/form/fields/input-field/InputField';
import { VISA_APPLICATION_FORM_FILEDS, VISA_APPLICATION_FORM_ENUMS } from './VisaApplicationFormModel';
import {RadioButtonField} from '../../components/form/fields/radio-button-field/RadioButtonField';
import {Header} from '../../components/header/Header';
import {Title} from '../../components/title/Title';
import {CheckboxField} from '../../components/form/fields/checkbox-field/CheckboxField';
import {DateField} from '../../components/form/fields/date-field/DateField';
import {UniversalLink} from '../../components/universal-link/UniversalLink';
import {Button} from '../../components/button/Button';
import {ProfileScreen} from './screens/profile-screen/ProfileScreen';
import {ContractsScreen} from './screens/contacts-screen/ContractsScreen';
import {PasportScreen} from './screens/pasport-screen/PasportScreen';
import {TripScreen} from './screens/trip-screen/TripScreen';
import {ShengenScreen} from './screens/shengen-screen/ShengenScreen';
import {EmailScreen} from './screens/email-screen/EmailScreen';

export class VisaApplicationFormPage extends React.Component {

  state = {
    formData: {
      // [VISA_APPLICATION_FORM_FILEDS.FIRST_NAME]: 'Default Value'
    }
  };

  handleFormChange = (formData) => {
    console.log('formData', formData);
    this.setState({formData});
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
          <div className="visa-application-form__content">
            <Title className="visa-application-form__title">Анкета на визу</Title>

            <Form onChange={this.handleFormChange}
                  value={formData}>

              {/*<ProfileScreen />*/}
              {/*<ContractsScreen/>*/}
              {/*<PasportScreen/>*/}
              <TripScreen/>
              <ShengenScreen/>
              <EmailScreen/>
            </Form>
          </div>
          <div className="visa-application-form__next-button-container">
            <UniversalLink href="#"
                           noStyle={true}>
              <Button className="visa-application-form__next-button">Далее</Button>
            </UniversalLink>
          </div>
        </div>
      ]
    );
  }

}
