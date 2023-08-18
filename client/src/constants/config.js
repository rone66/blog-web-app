export const SERVICE_URL={
    userSignup:{url:`/signup`,method:'POST'},
    userLogin:{url:`/login`,method:'POST'},
    uploadFile:{url:'/file/upload',method:'POST'},
    createPost:{url:'/create',method:'POST'},
    getAllPost:{url:'/getpost',method:'GET',params:true},
    getPostById:{url:'/post',method:'GET',query:true},
};