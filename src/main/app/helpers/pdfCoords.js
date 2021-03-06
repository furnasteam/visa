import { VISA_APPLICATION_FORM_FILEDS, VISA_APPLICATION_FORM_ENUMS, VISA_APPLICATION_FORM_ENUMS_NAMES } from '../pages/visa-application-form/VisaApplicationFormModel';
const FIELDS = VISA_APPLICATION_FORM_FILEDS;
const ENUMS_NAMES = VISA_APPLICATION_FORM_ENUMS_NAMES;

export default function getPrintCoords() {
  return [{
    [FIELDS.LAST_NAME]: { x: 145, y: 271 },//1_family
    [FIELDS.BIRTH_LAST_NAME]: { x: 355, y: 300 },// '2_previosFamily'
    [FIELDS.FIRST_NAME]: { x: 158, y: 325 },//'3_name'
    [FIELDS.BIRTH_DATE]: { x: 90, y: 374 },//'4_birthDate'
    [FIELDS.BIRTH_PLACE]: { x: 268, y: 375 },//'5_birthPlace'
    [FIELDS.BIRTH_COUNTRY]: { x: 268, y: 427 },//'6_birth_Country'
    [FIELDS.CITIZENSHIP]: { x: 433, y: 374 },//'7_citizenship'
    [FIELDS.BIRTH_CITIZENSHIP]: { x: 433, y: 445 },//'7_birth_Citizenship'
    [FIELDS.GENDER]: {//'8_gender'
      [ENUMS_NAMES.GENDER.MAN]: {
        x1: 65, y1: 495, //чекушки разные по размеру, эти больше других
        x2: 83, y2: 513,
      },
      [ENUMS_NAMES.GENDER.WOMAN]: {
        x1: 120, y1: 495,
        x2: 139, y2: 513,
      },
    },
    [FIELDS.MARITAL_STATUS]: {//'9_maritalStatus'
      [ENUMS_NAMES.MARITAL_STATUS.ALONE]: {
        x1: 260, y1: 484,
      },
      [ENUMS_NAMES.MARITAL_STATUS.MARRIED]: {
        x1: 365, y1: 483,
      },
      [ENUMS_NAMES.MARITAL_STATUS.NOTLIVEWITHWIFE]: {
        x1: 462, y1: 483,
      },
      [ENUMS_NAMES.MARITAL_STATUS.DIVORCED]: {
        x1: 261, y1: 509,
      },
      [ENUMS_NAMES.MARITAL_STATUS.WIDOWER]: {
        x1: 338, y1: 509,
      },
      [ENUMS_NAMES.MARITAL_STATUS.OTHER]: {
        x1: 425, y1: 509,
      },
      // "несовершеннолетний" такого поля нет на бланке но есть на веб форме
    },

    ['trusteeCommon']: { x: 85, y: 593 },//'10_TRUSTEE'
    // [FIELDS.TRUSTEE_FIRST_NAME]: { x: 85, y: 593 },//'10_TRUSTEE'
    '11_personalNumber': { x: 272, y: 661 },//'11_personalNumber'
    '12_pasportType': {//'12_pasportType'
      0: {
        x1: 68, y1: 693,
      },
      1: {
        x1: 173, y1: 693,
      },
      2: {
        x1: 311, y1: 693,
      },
      3: {
        x1: 423, y1: 693,
      },
      4: {
        x1: 68, y1: 718,
      },
      5: {
        x1: 166, y1: 716,
      },

    },
    [FIELDS.INTERNATIONAL_PASSPORT_NUMBER]: { x: 82, y: 785 },//'13_docNumber'
    [FIELDS.INTERNATIONAL_PASSPORT_STARTDATE]: { x: 241, y: 785 },//'14_docStartDate'
    [FIELDS.INTERNATIONAL_PASSPORT_ENDDATE]: { x: 359, y: 785 },//'15_docEndDate'
    [FIELDS.INTERNATIONAL_PASSPORT_DELIVERY_STRUCTURE]: { x: 464, y: 785 },//'16_docIssuedBy'
    [FIELDS.EMAIL]: { x: 100, y: 833 },//'17_adress_email'
    [FIELDS.NUMBER]: { x: 435, y: 833 },//'17_telNumber'
    [FIELDS.RESIDENCE_COUNTRY]: {//'18_liveCounty'
      [ENUMS_NAMES.BOOL.YES]: {
        x1: 70, y1: 871,
      },
      [ENUMS_NAMES.BOOL.NO]: {
        x1: 95, y1: 871,
      },
    },
    [FIELDS.RESIDENCE_DOCUMENT_CAPTION]: { x: 340, y: 872 },//'18_liveCounty_2'
    [FIELDS.RESIDENCE_NUMBER]: { x: 396, y: 872 },//'18_liveCounty_3'
    [FIELDS.RESIDENCE_ENDDATE]: { x: 535, y: 872 },//'18_liveCounty_4'
    [FIELDS.EMPLOYMENT_STATUS]: { x: 344, y: 941 },//'19_profession'
  },
    {
      [FIELDS.EMPLOYER_CAPTION]: { x: 90, y: 125 },//'20_employer'
      [FIELDS.TARGET]: {//'21_target'

        [ENUMS_NAMES.TARGET.TOURISM]: {
          x1: 68, y1: 202,
        },
        [ENUMS_NAMES.TARGET.BUSINESS]: {
          x1: 122, y1: 202,
        },
        [ENUMS_NAMES.TARGET.SPORT]: {
          x1: 173, y1: 202,
        },
        [ENUMS_NAMES.TARGET.CULTURE]: {
          x1: 337, y1: 202,
        },
        [ENUMS_NAMES.TARGET.STUDY]: {
          x1: 389, y1: 202,
        },
        [ENUMS_NAMES.TARGET.OFFICIAL]: {
          x1: 437, y1: 202,
        },
        [ENUMS_NAMES.TARGET.TREATMENT]: {
          x1: 504, y1: 202,
        },
        [ENUMS_NAMES.TARGET.TRANSIT]: {
          x1: 69, y1: 227,
        },
        [ENUMS_NAMES.TARGET.VISIT]: {
          x1: 119, y1: 227,
        },
        [ENUMS_NAMES.TARGET.AIRPORT]: {
          x1: 171, y1: 227,
        },
        [ENUMS_NAMES.TARGET.OTHER]: {
          x1: 288, y1: 227,
        },
      },
      [FIELDS.TARGET_DETAILS]: { x: 407, y: 235 },//'21_target_other'
      [FIELDS.TARGET_COUNTRY]: { x: 90, y: 290 },//'22_targetCountry'
      [FIELDS.ENTRY_COUNTRY]: { x: 350, y: 290 },//'23_enterCountry'
      [FIELDS.ENTRY_TYPE_COUNT]: {//'24_entryCount'
        [ENUMS_NAMES.ENTRY_TYPE_COUNT.ONCE]: {
          x1: 70, y1: 339,
        },
        [ENUMS_NAMES.ENTRY_TYPE_COUNT.TWICE]: {
          x1: 148, y1: 339,
        },
        [ENUMS_NAMES.ENTRY_TYPE_COUNT.MULTI]: {
          x1: 217, y1: 339,
        },
      },
      '25_duration': { x: 485, y: 365 },//'25_duration'
      [FIELDS.SCHENGEN_EXISTS]: {//'26_schengen'
        [ENUMS_NAMES.BOOL.YES]: {
          x1: 69, y1: 398,
        },
        [ENUMS_NAMES.BOOL.NO]: {
          x1: 94, y1: 398,
        },
      },
      // [FIELDS.SCHENGEN_VISA_NUMBER] ??????
      // "schengenVisaStartDate": "12.12.2012.г",
      // "schengenVisaEndDate": "12.12.2013.г",
      // schengenVisaStartDate
      [FIELDS.SCHENGEN_VISA_START_DATE]: { x: 237, y: 413 },//'26_schengenStart'
      [FIELDS.SCHENGEN_VISA_END_DATE]: { x: 345, y: 415 },//'26_schengenEnd'
      [FIELDS.FINGERPRINTS_EXISTS]: {//'27_prints'
        [ENUMS_NAMES.BOOL.NO]: {
          x1: 69, y1: 532,
        },
        [ENUMS_NAMES.BOOL.YES]: {
          x1: 94, y1: 532,
        },
      },
      [FIELDS.FINGERPRINTS_DATE]: { x: 260, y: 550 },//'27_printsDate'
      [FIELDS.PERMISSION_NAME]: { x: 135, y: 615 },//'28_permExpired'
      [FIELDS.PERMISSION_STARTDATE]: { x: 413, y: 615 },//'28_permStartDate'
      [FIELDS.PERMISSION_ENDDATE]: { x: 511, y: 615 },//'28_permEndDate'
      'permissionStartDate': { x: 90, y: 665 },//'29_entryStartDate'
      'permissionEndDate': { x: 360, y: 665 },//'30_entryEndDate'

      [FIELDS.INVATE_COMPANY_CONTACT_NAME]: { x: 125, y: 775 },//'31_invatePerson'
      [FIELDS.INVATE_COMPANY_CONTACT_ADRESS]: { x: 125, y: 955 },//'31_invatePersonAdress'
      [FIELDS.INVATE_COMPANY_CONTACT_PHONE]: { x: 435, y: 955 }//'31_invatePersonPhone'
    },
    {
      [FIELDS.INVATE_COMPANY_NAME]: { x: 90, y: 120 },//'32_attractingCompany'
      [FIELDS.INVATE_COMPANY_PHONE]: { x: 440, y: 120 },//'32_attractingCompanyPhone'
      [FIELDS.INVATE_COMPANY_ADRESS]: { x: 95, y: 220 },//'32_attractingCompanyAdress'
      //[FIELDS.PAYER]
      '33_costs': { x: 385, y: 275 },//'33_costs'
      '33_costs_left': {//'33_costs_left'
        0: {
          x1: 70, y1: 302,
        },
        1: {
          x1: 70, y1: 386,
        },
        2: {
          x1: 70, y1: 398,
        },
        3: {
          x1: 70, y1: 412,
        },
        4: {
          x1: 70, y1: 421,
        },
        5: {
          x1: 70, y1: 447,
        },
        6: {
          x1: 70, y1: 460,
        },
      },
      '33_costs_right': {//'33_costs_right'
        0: {
          x1: 340, y1: 302,
        },
        1: {
          x1: 340, y1: 348,
        },
        2: {
          x1: 340, y1: 372,
        },
        3: {
          x1: 340, y1: 423,
        },
        4: {
          x1: 340, y1: 433,
        },
        5: {
          x1: 340, y1: 458,
        },
        6: {
          x1: 340, y1: 479,
        },
        7: {
          x1: 340, y1: 494,
        },
      },
      [FIELDS.FACILITIES_DETAILS]: { x: 89, y: 487 },//'33_costs_left_details'
      [FIELDS.PAYER_SPONSOR_DETAILS]: { x: 458, y: 389 },//'33_costs_right_details'

      [FIELDS.RELATIVE_FAMILY]: { x: 100, y: 595 },//'34_ES_citizen_family'
      [FIELDS.RELATIVE_NAME]: { x: 440, y: 600 },//'34_ES_citizenName'
      [FIELDS.RELATIVE_BIRTH_DATE]: { x: 100, y: 660 },//'34_ES_citizen_birthday'
      [FIELDS.RELATIVE_CITIZENSHIP]: { x: 260, y: 660 },//'34_ES_citizen_citizenship'
      [FIELDS.RELATIVE_PASSPORT]: { x: 440, y: 680 },//'34_ES_citizen_passport'


    [FIELDS.RELATIVE_RANK]: {//'35_citMarried'
    [ENUMS_NAMES.RELATIVE_RANK.SPOUSE]: {
      x1: 68, y1: 721,
    },
    [ENUMS_NAMES.RELATIVE_RANK.CHILD]: {
      x1: 127, y1: 721,
    },
    [ENUMS_NAMES.RELATIVE_RANK.GRANDSON]: {
      x1: 174, y1: 721,
    },
    [ENUMS_NAMES.RELATIVE_RANK.DEPENDENT]: {
      x1: 226, y1: 721,
    },
  },


      // '36_placeAndDate': { x: 100, y: 800 },//'36_placeAndDate'
      // '37_sign': { x: 400, y: 830 },//'37_sign'
      // 'sign_2': { x: 533, y: 876 },//'sign_2'
      // 'sign_3': { x: 349, y: 932 }//'sign_3'
    },
    {
      // 'dateAndPlace': { x: 137, y: 937 },//'dateAndPlace'
      // 'sign_1': { x: 433, y: 937 },//'sign_1'
    }
  ]
}