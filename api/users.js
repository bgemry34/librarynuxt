import axios from 'axios'

const url = 'https://library-system-mern.herokuapp.com/api';

export const loginUser = (credentials) => {
    const {username, password, usertype} = credentials

    return axios.post(`${url}/login`, {
        username,
        password,
        userType:usertype
    }).then((res) => {
        // Handle Token Success
        const  {status} = res
        const { token } = res.data;
        localStorage.setItem('userToken', token);
        console.log('Auth Succes', res)
        return status==200
    }).catch((err) => { 
        //catch some error here
        // console.log('Error', err)
    });
}

export const checkToken = async () => {
    const userToken = await localStorage.getItem("userToken");
    try{
        const data = await axios.post(`${url}/login/me/`+userToken, {
        });
        return data;
    }catch(error){
        return error.response
    }
}  

export const fetchUsers = async () => {    
    const token = await localStorage.getItem("userToken")
    try{
        const res = await axios.get(`${url}/users`, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
        });
        const {data} = res;
        return data;
    }catch(error){
        return []
        //return error.response
    }
}

export const fetchUser = async (id) => {    
    const token = await localStorage.getItem("userToken")
    try{
        const res = await axios.get(`${url}/users/`+id, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
        });
        const {data} = res;
        return data;
    }catch(error){
        return []
        //return error.response
    }
}

export const createUser = async (user) => {
    const token = await localStorage.getItem("userToken")
    const {name, username, password, userType} = user
    try{
        const data = await axios.post(`${url}/users`, {
            name, username, password, userType
        }, {
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
        })
        return data;
    }catch(error){
        return error.response;
    }
}