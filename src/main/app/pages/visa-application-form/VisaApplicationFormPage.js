import React from 'react';
import './visa-application-form.scss';
import {Helmet} from 'react-helmet';
import {Form} from '../../components/form/Form';
import {InputField} from '../../components/form/fields/input-field/InputField';
import {VISA_APPLICATION_FORM_FIRST_NAME, VISA_APPLICATION_FORM_LAST_NAME, VISA_APPLICATION_FORM_BIRTH_CITIZENSHIP, VISA_APPLICATION_FORM_GENDER, VISA_APPLICATION_FORM_MARITAL_STATUS} from './VisaApplicationFormModel';
import {RadioButtonField} from '../../components/form/fields/radio-button-field/RadioButtonField';

export class VisaApplicationFormPage extends React.Component {

  state = {
    formData: {
      [VISA_APPLICATION_FORM_FIRST_NAME]: 'Default Value'
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
        <div key="2">
          <Form onChange={this.handleFormChange}
                value={formData}>
            <InputField label={"1. Имя"}
                        fieldName={VISA_APPLICATION_FORM_FIRST_NAME}
                        helpText={<div>
                          <div>Имя латинскими буквами точно как в загран. паспорте</div>
                          <div>Пример: IVAN</div>
                        </div>}/>

            <InputField label={"2. Фамилия"}
                        fieldName={VISA_APPLICATION_FORM_LAST_NAME}
                        helpText={<div>Фамилия латинскими буквами точно как в загран. паспорте.</div>}/>

            <RadioButtonField label={"7.2. Гражданство при рождении"}
                        fieldName={VISA_APPLICATION_FORM_BIRTH_CITIZENSHIP}
                              buttonNames={["Тоже самое", "другое"]}
                              defaultCheckedIndex={1}
                        helpText={<div>Если вы имеете паспорт Российской Федерации — ваше гражданство
                          Russian Federation.</div>}/>

            <RadioButtonField label={"8. Пол"}
                              fieldName={VISA_APPLICATION_FORM_GENDER}
                              buttonNames={["мужской", "женский"]}
                              />

            <RadioButtonField label={"9. Семейное положение"}
                              fieldName={VISA_APPLICATION_FORM_MARITAL_STATUS}
                              buttonNames={["холост/незамужем", "не проживает с супругой", "вдовец/вдова", "женат/замужем", "разведен(а)", "иное"]}
            />

          </Form>
        </div>
      ]
    );
  }

}
