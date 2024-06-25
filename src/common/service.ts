import httpbaseURL from '../common/axios';
class commonservices {
    getdata(doc) {
        return httpbaseURL.httpbaseURL.post("Hospitalsetup/Category_Department_Ins_Upd_sel", doc)
    }
}
export default new commonservices()