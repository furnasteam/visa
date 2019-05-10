export const VISA_APPLICATION_FORM_FILEDS = {
  FIRST_NAME : 'firstName',
  LAST_NAME : 'lastName',
  BIRTH_LAST_NAME : 'birthLastName',
  BIRTH_DATE : 'birthDate',
  CITIZENSHIP : 'citizenship',
  BIRTH_CITIZENSHIP : 'birthCitizenship',
  FORM_GENDER : 'gender',
  MARITAL_STATUS : 'maritalStatus',
  MARITAL_STATUS_DETAILS: 'maritalStatusDetails',
  FORM_TARGET : 'target',
  BIRTH_PLACE : 'birthPlace',
  BIRTH_COUNTRY: 'birthCountry',
  // ----------------
  TRUSTEE_FIRST_NAME : 'trusteeFirstName',
  TRUSTEE_LAST_NAME : 'trusteeLastName',
  TRUSTEE_ADRESS : 'trusteeAdress',
  TRUSTEE_CITIZENSHIP : 'trusteeCitizenship',
  NUMBER:'number',
  EMAIL:'email',
  ADRESS:'adress',

  TARGET_COUNTRY: 'targetCountry',
  RESIDENCE_CAPTION: 'residenceCaption',
  RESIDENCE_NUMBER: 'residenceNumber',
  RESIDENCE_ENDDATE: 'residenceEndDate',
  EMPLOYMENT_STATUS :'employmentStatus',
  EMPLOYMENT_STATUS_DETAILS: 'employmentStatusDetails',
  EMPLOYER_CAPTION: 'employerCaption',
  EMPLOYER_ADRESS: 'employerAdress',
  EMPLOYER_NUMBER: 'employerNumber',

}

export var VISA_APPLICATION_FORM_ENUMS = {
  GENDER: ["мужской", "женский"],
  BOOL: ["Да", "Нет"],
  EMPLOYMENT_STATUS:["unemployed (безработный)","housewife (домохозяйка)","pensioners (пенсионер)","individual businessman (ип)","student (студент)","pupil (школьник)","иное"],
  MARITAL_STATUS: ["холост/незамужем", "не проживает с супругой", "вдовец/вдова", "женат/замужем", "разведен(а)", "иное"],
  TARGET : [
    {
      name: "туризм",
      selected: false
    },
    {
      name: "деловая",
      selected: false
    },
    {
      name: "спорт",
      selected: false
    },
    {
      name: "культура",
      selected: false
    },
    {
      name: "учёба",
      selected: false
    },
    {
      name: "официальная",
      selected: false
    },
    {
      name: "лечение",
      selected: false
    },
    {
      name: "транзит",
      selected: false
    },
    {
      name: "посещение родственников или друзей",
      selected: false
    },
    {
      name: "транзит через аэропорт",
      selected: false
    },
    {
      name: "иное",
      selected: false
    }
    ]
}


