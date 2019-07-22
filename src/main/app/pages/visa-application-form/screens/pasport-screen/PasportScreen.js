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
import {Button, ButtonStyle} from '../../../../components/button/Button';
import {xlp} from "../../../../helpers/helper";

export class PasportScreen extends React.Component {
    static propTypes ={
        formData: object,
        onChange: func,
    }

    onFormChange(value) {
        // debugger
        var {formData, onChange} = this.props;
        if(formData){
            onChange(value);
        }
    }

    addSchengenVisa(){
        var {formData, onChange} = this.props;

        formData.schengenVisaArr = formData.schengenVisaArr || [];
        formData.schengenVisaArr.push({
            schengenVisaNumber: null,
            schengenVisaStartDate: null,
            schengenVisaEndDate: null,
        });
    }
    deleteSchengenVisa(index){
        var {formData, onChange} = this.props;
        if(formData.schengenVisaArr)
            formData.schengenVisaArr.pop();
    }
    getSchengenVisaElements(){
        var {formData, onChange} = this.props;
        formData.schengenVisaArr = formData.schengenVisaArr || [];
        var {schengenVisaArr} = formData;

        return schengenVisaArr.map((schengenVisa, i)=>{
            return <SchengenVisa onChange={this.onFormChange.bind(this)} formData={schengenVisa} key = {i} index={i} deleteSchengenVisa={this.deleteSchengenVisa.bind(this)}></SchengenVisa>});
    }
    showSchengenVisa(){
        // debugger
        var {formData, onChange} = this.props;
        formData.schengenVisaArr = formData.schengenVisaArr || [];

        var show = xlp.isSelected(this.props.formData.schengenExists, VISA_APPLICATION_FORM_ENUMS_NAMES.BOOL.YES);

        if(show && formData.schengenVisaArr.length == 0 && show.name == VISA_APPLICATION_FORM_ENUMS_NAMES.BOOL.YES)
            this.addSchengenVisa();
        return show;
    }
    render() {
        var {formData, onChange} = this.props;

        return (
            <Form onChange={this.onFormChange.bind(this)}
                  value={formData}>
                <InputField label={"Номер загран. паспорта"}
                            fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_NUMBER}
                            placeholder="IVANOV"
                />
                <DateField label={"Дата выдачи загран. паспорта"}
                           fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_STARTDATE}
                           placeholder="23.04.2014"
                />
                <DateField label={"Загран. паспорт действителен до"}
                           fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_ENDDATE}
                           placeholder="23.04.2024"
                />
                <InputField label={"Кем выдан"}
                            fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_DELIVERY_STRUCTURE}
                            placeholder="USSR"
                            helpText={<div>Достаточно указать Russian Federation или FMS 2432?</div>}
                />
                <RadioButtonField label={"Шенгенские визы, выданные за последние \n" +
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
                    {this.getSchengenVisaElements()}
                    <Button onClick={this.addSchengenVisa.bind(this) } buttonStyle={ButtonStyle.YELLOW_ADD_BUTTON} className="visa-application-form__add-schengen-visa-button">
                    <span className="visa-application-form__add-schengen-visa-button_plus">&#x2b;</span>
                    Добавить визу
                    </Button>
                    {/*<Button onClick={this.deleteSchengenVisa.bind(this) }>Удалить</Button>*/}
                </span>
                }

            </Form>
        );
    }

}