
import axios from 'axios';
import { SERVICE_URL } from '../constants/config';

const API_URL='http://localhost:4000/api/v1';


const axiosInstance= axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json"
    }

})

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
)

const processResponse=(response)=>{
    if(response?.status===200){
        return ({isSuccess:true,data:response.data})
    }else{
        return {
        isFailure:true,
        status:response?.status,
        msg:response?.msg,
        code:response?.code,
        }
        
    }
}

const processError=(error)=>{
    if(error.response){
        console.log(error.toJson());
        return{
            isError:true,
            title:'error in response',
            message:"an error occured while fetching response from the server. please try again",
            code:error.response.status,
        }

    }else if(error.request){
        return{
            isError:true,
            title:"error in request",
            message:"an error occured while parsing request data",
            code:""
        }
    }else{
        return{
            title:"error",
            message:"unable to connect...please check internet connectivity",
            code:""
        }

    }
}




axios.interceptors.response.use(
    function (response){

        return processResponse(response);
    },
    function (error){
        return Promise.reject(processError(error));
    }

)

const API={};

for (const [key,value] of Object.entries(SERVICE_URL)){
    API[key] =(body,showUploadProgress,showDownloadProgress)=>
        axiosInstance({
            method:value.method,
            url:value.url,
            data:body,
            responseType:value.responseType,
            // onUploadProgress: function(progressEvent){
            //     if(showUploadProgress){
            //         let percentCompleted=Math.round((progressEvent*100)/progressEvent.total);
            //         showUploadProgress(percentCompleted)
            //     }
            // },
            // onDownloadProgress: function(progressEvent){
            //     if(showDownloadProgress){
            //         let percentCompleted=Math.round((progressEvent*100)/progressEvent.total);
            //         showDownloadProgress(percentCompleted)
            //     }
            // }
        })
    
}
export {API};
