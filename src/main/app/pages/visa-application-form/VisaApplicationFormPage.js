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
import {Menu} from '../../components/menu/Menu';
import PDFPrinter from '../../helpers/PDFPrinter';

export const MENU_ITEMS = {
  PROFILE: { url: '#profile', name:'Профиль' },
  CONTACTS: { url: '#contacts', name:'Контакты'  },
  PASSPORT: { url: '#passport', name:'Паспорт'},
  TRIP: { url: '#trip', name:'Поездка'  },
  SCHENGEN: { url: '#shengen', name:'Шенгенская зона' },
  EMAIL: { url: '#email', name:'Email'  },
}

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

  getActiveScreen(){
    var screen = this.props.location.hash;
    const {formData} = this.state;
    switch(screen){
      case(MENU_ITEMS.PROFILE.url):
        return <ProfileScreen onChange={this.handleFormChange}
                              formData={formData}/>
        break;
      case(MENU_ITEMS.CONTACTS.url):
        return <ContractsScreen onChange={this.handleFormChange}
                              formData={formData}/>
        break;
      case(MENU_ITEMS.PASSPORT.url):
        return <PasportScreen onChange={this.handleFormChange}
                              formData={formData}/>
        break;
      case(MENU_ITEMS.TRIP.url):
        return <TripScreen onChange={this.handleFormChange}
                              formData={formData}/>
        break;
      case(MENU_ITEMS.SCHENGEN.url):
        return <ShengenScreen onChange={this.handleFormChange}
                              formData={formData}/>
        break;
      case(MENU_ITEMS.EMAIL.url):
        return <EmailScreen onChange={this.handleFormChange}
                              formData={formData}/>
        break;
      default:
        return <ProfileScreen onChange={this.handleFormChange}
                              formData={formData}/>
    }
  }

  render() {
    const {formData} = this.state;
    var screen = this.props.location.hash;
    return (
      [
        <Helmet key="1">
          <title>Заполение анкеты на визу в Испанию</title>
          <meta name="description"
                content="Заполнение анкеты на визу онлайн."/>
          <link rel="canonical" href="https://visa.furnas.ru"/>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.1/jspdf.min.js"></script>
        </Helmet>,
        <div key="2" className="visa-application-form">
          <Header/>
          <Menu menuData={MENU_ITEMS}/>
          <div className="visa-application-form__content">
            <Title className="visa-application-form__title">Анкета на визу</Title>
            {this.getActiveScreen()}
          </div>

          <div className="visa-application-form__next-button-container">
            <UniversalLink href="#"
                           noStyle={true}>
              {
                screen == MENU_ITEMS.EMAIL.url ?
                  <PDFPrinter formData={formData} /> :
                  <Button className="visa-application-form__next-button">Далее</Button>
              }
            </UniversalLink>
          </div>
        </div>
      ]
    );
  }

}
