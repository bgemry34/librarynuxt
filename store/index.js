import Vuex from 'vuex'
import books from './modules/books'

const createStore = () => {
  return new Vuex.Store({
    modules: {
        books
    }
  })
}
export default createStore