export default class httpService {

    // url= "http://127.0.0.1:8000/api";

    postData = async (item, added_url, tokenId="") =>{
        const url= "http://127.0.0.1:8000/api";

        const token = await localStorage.getItem(tokenId);
        console.log(token, item);
        const requestOptions = this.postRequestOptions(token, item);

        console.log(requestOptions, this.url+added_url);
        return fetch(url+added_url, requestOptions).then(res=>res.json());
    }

    getData = async (item, added_url, tokenId="") =>{
        const url= "http://127.0.0.1:8000/api";

        const token = await localStorage.getItem(tokenId);
        const requestOptions = this.getRequestOptions(token);
        return fetch(url+"/"+added_url, requestOptions).then(res=>res.json());
    }

    getRequestOptions = (token)=>{
        let requestOptions={
            method:'GET',
            header:{
                'Authorization':token,
                'Content-Type':'application/json'
            }
        }
        return requestOptions
    }

    postRequestOptions = (token,item)=>{
        let requestOptions={
            method:'POST',
            header:{
                'Authorization':token,
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }
        return requestOptions;
    }
}
