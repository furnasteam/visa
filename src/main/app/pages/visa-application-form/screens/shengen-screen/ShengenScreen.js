import React from 'react';
import {VISA_APPLICATION_FORM_ENUMS, VISA_APPLICATION_FORM_FILEDS} from '../../VisaApplicationFormModel';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {Form} from '../../../../components/form/Form';
import {func, object} from 'prop-types';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';

export class ShengenScreen extends React.Component {

  render() {
    return (
      <React.Fragment>
        <RadioButtonField label={"1. Предоставляли отпечатки пальцев?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.GENDER}
                          buttonNames={VISA_APPLICATION_FORM_ENUMS.GENDER}
        />

        <InputField label={""}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.MARITAL_STATUS_DETAILS}
                    placeholder="Уточните семейное положение"
                    helpText={<div>Для несовершеннолетних детей — пункт «Холост/не замужем».</div>}
        />

        <InputField label={"2. Разрешение на въезд в страну конечно следования"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PERMISSION_NAME}
                    placeholder="Название документа"
                    helpText={<div>Укажите латинскими буквами</div>}
        />

        <DateField label={"2.1 Начала действия"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.PERMISSION_STARTDATE}
                   placeholder="23.06.2017г."
                   helpText={<div>Укажите дату</div>}
        />

        <InputField label={"2.2 Окончание действия"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PERMISSION_ENDDATE}
                    placeholder="23.06.2027г."
                    helpText={<div>Укажите дату</div>}
        />



        <RadioButtonField label={"3. Где останавливаетесь "}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT}
                    buttonNames={VISA_APPLICATION_FORM_ENUMS.PLACEMENT}
        />

        <InputField label={"4. Название отеля/хостела/апартаментов"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_NAME}
                    placeholder="VASILII PUPKIN"
                    helpText={<div>Если у апартаментов нет названия — пропустите.</div>}
        />
        <InputField label={"5. Адрес"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_ADRESS}
                    placeholder="LATVIA"
        />
        <InputField label={"6. Электронная почта"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_EMAIL}
                    placeholder="dfsgkftodcgmerwm@gmail.com"
        />
        <InputField label={"7. Номер телефона и факса"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_PHONE}
                    placeholder="+7 (990) 900-90-90"
        />

        <RadioButtonField label={"4. Приглашение от компании?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY}
                          buttonNames={VISA_APPLICATION_FORM_ENUMS.BOOL}
        />

        <InputField label={"5. Название приглашающей компании"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_NAME}
                    placeholder="SKOLCOVO"
                    helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />
        <InputField label={"6. Адрес приглашающей компании"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_ADRESS}
                    placeholder="MOSCOV"
                    helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />
        <InputField label={"7. Номер телефона и факса компании"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_PHONE}
                    placeholder="+7 (990) 900-90-90"
                    helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />

        <InputField label={"8. Имя"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_NAME}
                    placeholder="VASILII"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"9. Фамилия"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_FAMILY}
                    placeholder="PUPKIN"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"10. Номер телефона и факса"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_PHONE}
                    placeholder="+7 (990) 900-90-90"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"11. Адрес"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_ADRESS}
                    placeholder="LATVIA"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"12. Электронная почта"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_EMAIL}
                    placeholder="dfsgkftodcgmerwm@gmail.com"
                    helpText={<div>Контактного лица компании</div>}
        />

        <RadioButtonField label={"13. Расходы заявителя на проезд и на пребывание покрывает"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PAYER}
                          buttonNames={VISA_APPLICATION_FORM_ENUMS.PAYER}
        />
        <RadioButtonField label={"14. Кто является спонсором?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PAYER_SPONSOR}
                          buttonNames={VISA_APPLICATION_FORM_ENUMS.PAYER_SPONSOR}
        />
        <InputField label={""}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PAYER_SPONSOR_DETAILS}
                    placeholder="Укажите спонсора"
        />

        <CheckboxField label={"15.  Средства"}
                       fieldName={VISA_APPLICATION_FORM_FILEDS.FACILITIES}
                       buttons={VISA_APPLICATION_FORM_ENUMS.FACILITIES}
        />
        <InputField label={""}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.FACILITIES_DETAILS}
                    placeholder="Укажите средства"
        />

        <RadioButtonField label={"16. Есть ли родство с гражданином Европейского Союза, \n" +
        "Европейского Экономического Пространства \n" +
        "или Швейцарии?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_EXISTS}
                          buttonNames={VISA_APPLICATION_FORM_ENUMS.BOOL}
        />
        <RadioButtonField label={"17. Степень родства с гражданином Европейского Союза, \n" +
        "Европейского Экономического Пространства \n" +
        "или Швейцарии"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_RANK}
                          buttonNames={VISA_APPLICATION_FORM_ENUMS.RELATIVE_RANK}
        />

        <InputField label={"18. Имя"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_NAME}
                    placeholder="IVAN"
        />
        <InputField label={"19. Фамилия"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_FAMILY}
                    placeholder="PETROVICH"
        />
        <DateField label={"20. Дата рождения"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_BIRTH_DATE}
                   placeholder="31.05.1990"
        />
        <InputField label={"21. Номер паспорта или удостоверения личности"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_PASSPORT}
                    placeholder="4059 044945"
        />
        <InputField label={"22. Гражданство "}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_CITIZENSHIP}
                    placeholder="SPAIN"
        />
      </React.Fragment>
    );    
  }

}
