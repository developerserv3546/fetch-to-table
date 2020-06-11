import {cellKey} from "./Constant";

export const setUserValueByKey = (el, key, value) => {
    switch (key) {
        case cellKey.name:
            el.name = value;
            break;
        case cellKey.username:
            el.username = value;
            break;
        case cellKey.email:
            el.email = value;
            break;
        case cellKey.street:
            el.address.street = value;
            break;
        case cellKey.suite:
            el.address.suite = value;
            break;
        case cellKey.city:
            el.address.city = value;
            break;
        case cellKey.zipcode:
            el.address.zipcode = value;
            break;
        case cellKey.phone:
            el.phone = value;
            break;
        case cellKey.website:
            el.website = value;
            break;
        case cellKey.companyName:
            el.company.name = value;
            break;
        case cellKey.catchPhrase:
            el.company.catchPhrase = value;
            break;
        default:
            el.company.bs = value;
    }
};