import {domain} from "./config";

export default {
    contact: () => {
        return new Promise((resolve, reject) => {
            // resolve({
            //     success: true
            // });
            reject({
                error: "Hệ thống bị lỗi vui lòng liên hệ sau"
            })
        })

    }
}