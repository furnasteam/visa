import React from 'react';
import {SchengenVisa} from './SchengenVisa';
import {
    VISA_APPLICATION_FORM_ENUMS,
    VISA_APPLICATION_FORM_ENUMS_NAMES,
    VISA_APPLICATION_FORM_FILEDS
} from '../../VisaApplicationFormModel';
import {Form} from '../../../../components/form/Form';
import {func, object, string} from 'prop-types';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';
import {Button} from '../../../../components/button/Button';

export class PasportScreen extends React.Component {
  static propTypes ={
    formData: object,
    onChange: func,
  }

  state = {
    schengenVisaArr: [{
      schengenVisaNumber: null,
      schengenVisaStartDate: null,
      schengenVisaEndDate: null,
    }]
  };

  onFormChange(value) {
    var {formData, onChange} = this.props;
    if(formData){
      onChange(value);
    }
  }

  addSchengenVisa(){
    this.setState((state) => {
      state.schengenVisaArr.push({
        schengenVisaNumber: null,
        schengenVisaStartDate: null,
        schengenVisaEndDate: null,
      });
      return state;
    });
  }
  deleteSchengenVisa(){
    this.setState((state) => {
      state.schengenVisaArr.pop();
      return state;
    });
  }
  onSchengenVisaChange(value){
    // debugger
  }
  showSchengenVisa(){
      return this.props.formData.schengenExists == (VISA_APPLICATION_FORM_FILEDS.SCHENGEN_EXISTS + '_' + VISA_APPLICATION_FORM_ENUMS_NAMES.BOOL.YES);
  }
  render() {
    var {formData, onChange} = this.props;
    var {schengenVisaArr} = this.state;

    var schengenVisaElements = schengenVisaArr.map((schengenVisa, i)=>{ return <SchengenVisa onChange={this.onSchengenVisaChange()} index={i}></SchengenVisa>});
    return (
      <Form onChange={this.onFormChange.bind(this)}
            value={formData}>
        <InputField label={"3. Номер загран. паспорта"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_NUMBER}
                    placeholder="IVANOV"
        />
        <DateField label={"4. Дата выдачи загран. паспорта"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_STARTDATE}
                   placeholder="23.04.2014"
        />
        <DateField label={"5. Загран. паспорт действителен до"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_ENDDATE}
                   placeholder="23.04.2024"
        />
        <InputField label={"6. Кем выдан"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_DELIVERY_STRUCTURE}
                    placeholder="USSR"
                    helpText={<div>Достаточно указать Russian Federation или FMS 2432?</div>}
        />
        <RadioButtonField label={"7. Шенгенские визы, выданные за последние \n" +
        "    три года (2016 — 2018)" +
        "Есть шенгенские визы?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.SCHENGEN_EXISTS}
                          buttons={VISA_APPLICATION_FORM_ENUMS.BOOL}
                          helpText={<div>
                            Если гражданин РФ и проживает в РФ, то напишите нет.
                          </div>}

        />
        
        {this.showSchengenVisa() &&
          <span>
            {schengenVisaElements}
            <Button onClick={this.addSchengenVisa.bind(this) }>Добавить визу</Button>
             <Button onClick={this.deleteSchengenVisa.bind(this) }>Удалить</Button>
          </span>
        }

      </Form>
    );    
  }

}