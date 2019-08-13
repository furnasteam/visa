import {VISA_APPLICATION_FORM_FILEDS} from "../../pages/visa-application-form/VisaApplicationFormModel";

const FILEDS = VISA_APPLICATION_FORM_FILEDS;
export const mainSchema = {
    // "$id": "http://example.com/schemas/schema.json",
    "type": "object",
    "properties": {
        [FILEDS.FIRST_NAME]: { "type": "string" },
        [FILEDS.LAST_NAME]: { "type": "string" },
        // [FILEDS.BIRTH_DATE]: { "type": "string", "format" : "date" },
        [FILEDS.CITIZENSHIP]: { "type": "string" },
        [FILEDS.BIRTH_COUNTRY]: { "type": "string" },
        [FILEDS.BIRTH_PLACE]: { "type": "string" },
        [FILEDS.BIRTH_LAST_NAME]: { "type": "string" },
        [FILEDS.GENDER]: { "type": "string" },
        [FILEDS.MARITAL_STATUS]: { "type": "string" },
        [FILEDS.MARITAL_STATUS_DETAILS]: { "type": "string" },
        [FILEDS.BIRTH_CITIZENSHIP]: { "type": "string" }
    },
    "required": [
        FILEDS.FIRST_NAME,
        FILEDS.LAST_NAME,
        FILEDS.BIRTH_DATE,
        FILEDS.CITIZENSHIP,
        FILEDS.BIRTH_COUNTRY,
        FILEDS.BIRTH_PLACE,
        FILEDS.BIRTH_LAST_NAME,
        FILEDS.GENDER,
        FILEDS.MARITAL_STATUS,
        FILEDS.MARITAL_STATUS_DETAILS,
        FILEDS.BIRTH_CITIZENSHIP
    ]
};

// export const MainSchema = {
//     "$id": "http://example.com/schemas/schema.json",
//     "type": "object",
//     "properties": {
//         "foo": { "$ref": "defs.json#/definitions/int" },
//         "bar": { "$ref": "defs.json#/definitions/str" }
//     }
// };

//
// var schema = {
//     "properties": {
//         "foo": { "type": "string" },
//         "bar": { "type": "number", "maximum": 3 }
//     }
// };