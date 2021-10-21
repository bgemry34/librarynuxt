import axios from 'axios'

const url = 'https://library-system-mern.herokuapp.com/api';

export const _fetchBooks = async (search = '') => {    
    const token = await localStorage.getItem("userToken")
    try{
        const res = await axios.get(`${url}/books/`+search, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
        });
        const {data} = res;
        return data;
    }catch(error){
        return [];
        //return error.response
    }
}

export const _createBook = async (book) => {
    const token = await localStorage.getItem("userToken")
    const {title, genre, author} = book
    try{
        const data = await axios.post(`${url}/books`, {
                title, genre, author
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

export const _editBook = async (book) => {
    const token = await localStorage.getItem("userToken")
    const {title, genre, author, id} = book
    console.log(book)
    try{
        const data = await axios.put(`${url}/books/`+id, {
                title, genre, author
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

export const _deleteBook = async (book) => {
    const token = await localStorage.getItem("userToken")
    const {id} = book;
    try{
        const data = await axios.delete(`${url}/books/`+id, {
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
        })
        return data;
    }catch(error){
        return error.response;
    }
}