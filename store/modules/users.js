import {_fetchUsers} from './../../api/users'

const state = () => ({
    users:[
    ]
})
const getters = {
    allUsers: (state) => state.users
};
const actions = {
    async fetchUsers({commit}){
        const res = await _fetchUsers();
        commit('setUsers', res);
    }
};

const mutations = {
    setUsers:(state, users) => (state.users = users)
};

export default {
    state,
    getters,
    actions,
    mutations
}