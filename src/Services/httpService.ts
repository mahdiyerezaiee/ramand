import axios from "axios";
import {toast} from "react-toastify";


axios.defaults.headers.get["Content-type"] = "application/json; charset=UTF-8";

axios.interceptors.response.use(

    resp => resp, async error => {
        if ( error.response.status >= 300 ) {
            toast.error('سرور پاسخگو نیست', {
                position: "top-right",
                closeOnClick: true
            });
        }
        return Promise.reject(error);
    });
export default {
    get: axios.get,
};