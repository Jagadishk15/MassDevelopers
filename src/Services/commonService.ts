import baseURL from "../common/axios";
class commonService {

    // file upload All filesapi call
    form1fileupload(formdata) {
        debugger;
        return baseURL.httpbaseURL.post("form-1/", formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }



    form2(data) {
        debugger;
        return baseURL.httpbaseURL.post(
            "form-2",
            data
        );
    }
    form3(data) {
        debugger;
        return baseURL.httpbaseURL.post(
            "form-3",
            data
        );
    }
    form4(data) {
        debugger;
        return baseURL.httpbaseURL.post(
            "form-4",
            data
        );
    }


}

// {
//     "name": "",
//         "phone": "",
//             "mail": "",
//                 "des": ""
// }

// //form-2
// {
//     "name": "",
//         "phone": "",
//             "type": ""
// }

// //form-3
// {
//     "name": "",
//         "phone": "",
//             "mail": "",
//                 "des": "",
//                     "title": ""
// }

// //form-4
// {
//     "name": "",
//         "phone": "",
//             "mail": "",
//                 "des": "",
//                     "title": "",
//                         "product": "",
//                             "sqft": ""
// }

export default new commonService();
