import {_fetchBooks, _createBook} from './../../api/books'

const state = () => ({
    books:[
    ]
})
const getters = {
    allBooks: (state) => state.books
};
const actions = {
    async fetchBooks({commit}){
        const res = await _fetchBooks();
        commit('setBooks', res);
    },
    async addBook({commit}, book){
        const res = await _createBook(book);
        console.log(res);
    },
};

const mutations = {
    setBooks:(state, books) => (state.books = books),
    addBook:(stsate, book) => state.books =[book, ...state.books] 
};

export default {
    state,
    getters,
    actions,
    mutations
}