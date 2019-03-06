export default function getCoords(pageNumber) {
  if (pageNumber == 1) {
    return {
      '1_family': { x: 158, y: 273 },
      '2_previosFamily': { x: 375, y: 297 },
      '3_name': { x: 158, y: 324 },
      '4_birthDate': { x: 90, y: 374 },
      '5_birthPlace': { x: 268, y: 378 },
      '6_birth_Country': { x: 275, y: 428 },
      '7_citizenship': { x: 433, y: 369 },
      '7_birth_Citizenship': { x: 433, y: 443 },
      '8_birth_country': {
        0: {
          x1: 65, y1: 495,
          x2: 83, y2: 513,
        },
        1: {
          x1: 120, y1: 495,
          x2: 139, y2: 513,
        },
      },
      '9_maritalStatus': {
        0: {
          x1: 260, y1: 484,
        },
        1: {
          x1: 365, y1: 483,
        },
        2: {
          x1: 462, y1: 483,
        },
        3: {
          x1: 261, y1: 509,
        },
        4: {
          x1: 338, y1: 509,
        },
        5: {
          x1: 425, y1: 509,
        },
      },
      '10_birthCountry': { x: 85, y: 593 },
      '11_personalNumber': { x: 272, y: 661 },
      '12_pasportType': {
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
      '13_docNumber': { x: 82, y: 785 },
      '14_docStartDate': { x: 241, y: 785 },
      '15_docEndDate': { x: 359, y: 785 },
      '16_docIssuedBy': { x: 464, y: 785 },
      '17_adress_email': { x: 100, y: 831 },
      '17_telNumber': { x: 435, y: 831 },
      '18_liveCounty': {
        0: {
          x1: 70, y1: 871,
        },
        1: {
          x1: 95, y1: 871,
        },
      },
      '18_liveCounty_2': { x: 340, y: 872 },
      '18_liveCounty_3': { x: 396, y: 872 },
      '18_liveCounty_4': { x: 535, y: 872 },
      '19_profession': { x: 344, y: 941 },
    }
  }
  else if (pageNumber == 2) {
    return {
      '20_employer': { x: 90, y: 125 },
      '21_target': {
        0: {
          x1: 68, y1: 202,
        },
        1: {
          x1: 122, y1: 202,
        },
        2: {
          x1: 173, y1: 202,
        },
        3: {
          x1: 337, y1: 202,
        },
        4: {
          x1: 389, y1: 202,
        },
        5: {
          x1: 437, y1: 202,
        },
        6: {
          x1: 504, y1: 202,
        },
        7: {
          x1: 69, y1: 227,
        },
        8: {
          x1: 119, y1: 227,
        },
        9: {
          x1: 171, y1: 227,
        },
        10: {
          x1: 288, y1: 227,
        },
      },
      '21_target_other': { x: 407, y: 235 },
      '22_targetCountry': { x: 90, y: 290 },
      '23_enterCountry': { x: 350, y: 290 },
      '24_entryCount': {
        0: {
          x1: 70, y1: 339,
        },
        1: {
          x1: 148, y1: 339,
        },
        2: {
          x1: 217, y1: 339,
        },
      },
      '25_duration': { x: 485, y: 365 },
      '26_schengen': {
        0: {
          x1: 69, y1: 398,
        },
        1: {
          x1: 94, y1: 398,
        },
      },
      '26_schengenStart': { x: 237, y: 413 },
      '26_schengenEnd': { x: 345, y: 415 },
      '27_prints': {
        0: {
          x1: 69, y1: 532,
        },
        1: {
          x1: 94, y1: 532,
        },
      },
      '27_printsDate': { x: 260, y: 550 },
      '28_permExpired': { x: 150, y: 620 },
      '28_permStartDate': { x: 413, y: 620 },
      '28_permEndDate': { x: 511, y: 620 },
      '29_entryStartDate': { x: 90, y: 665 },
      '30_entryEndDate': { x: 360, y: 665 },
      '31_invatePerson': { x: 125, y: 775 },
      '31_invatePersonAdress': { x: 125, y: 955 },
      '31_invatePersonPhone': { x: 435, y: 955 }
    }
  }
  else if (pageNumber == 3) {
    return {
      '32_attractingCompany': { x: 90, y: 120 },
      '32_attractingCompanyPhone': { x: 440, y: 120 },
      '32_attractingCompanyAdress': { x: 95, y: 220 },
      '33_costs': { x: 385, y: 275 },
      '33_costs_left': {
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
      '33_costs_right': {
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
      '33_costs_left_details': { x: 89, y: 487 },
      '33_costs_right_details': { x: 458, y: 389 },
      '34_ES_citizen': { x: 225, y: 545 },
      '34_ES_citizen_family': { x: 115, y: 595 },
      '34_ES_citizenName': { x: 440, y: 600 },
      '34_ES_citizen_birthday': { x: 100, y: 660 },
      '34_ES_citizen_citizenship': { x: 275, y: 660 },
      '34_ES_citizen_passport': { x: 475, y: 680 },
      '35_citMarried': {
        0: {
          x1: 68, y1: 721,
        },
        1: {
          x1: 127, y1: 721,
        },
        2: {
          x1: 174, y1: 721,
        },
        3: {
          x1: 226, y1: 721,
        },
      },
      '36_placeAndDate': { x: 100, y: 800 },
      '37_sign': { x: 400, y: 830 },
      'sign_2': { x: 533, y: 876 },
      'sign_3': { x: 349, y: 932 }
    }
  }
  else if (pageNumber == 4) {
    return {
      'dateAndPlace': { x: 137, y: 937 },
      'sign_1': { x: 433, y: 937 },
    }
  }
}