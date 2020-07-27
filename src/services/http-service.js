import axios from 'axios'

class HttpService {
    getProducts = () => {
        let promise = new Promise((resolve, reject) => {
            axios.get('http://127.0.0.1:5000/products')
                .then(res => {
                    resolve(res.data);
                })
        });
        return promise;
    }

    getNextProducts = (currentId) => {
        let promise = new Promise((resolve, reject) => {
            axios.get('http://127.0.0.1:5000/products/'+currentId+1)
                .then(res => {
                    resolve(res.data);
                })
        });
        return promise;
    }

    // postFeedback = (feedback) => {
    //     let promise = new Promise((resolve, reject) => {
    //         axios.post(`http://127.0.0.1:5000/feedback/2`, { feedback })
    //             .then(res => {
    //                 console.log(res);
    //                 console.log(res.data);
    //             })
    //     });
    //     return promise;
    // }



}

export default HttpService;
