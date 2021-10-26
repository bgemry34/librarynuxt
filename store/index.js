import Vuex from 'vuex'
import books from './modules/books';
import users from './modules/users';

const createStore = () => {
  return new Vuex.Store({
    modules: {
        books,
        users
    }
  })
}
export default createStore