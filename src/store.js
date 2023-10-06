import { createStore } from "vuex";

const store = createStore({
  state: {
        username: 'default'
    },
    getters: {
        username: state => state.username
    },
    mutations: {
        setusername(state) {
            state.username = 'otto'
            console.log('username changed2')
        }
    },
    actions: {
        updateusername (context) {
            context.commit('setusername')
            console.log('updated1')
        }
    }
})

// store.commit('setusername')
// store.dispatch('updateusername');






export default store;