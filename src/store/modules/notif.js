const notification = {
    state: () => ({
        notif: {
            msg: '',
            class: ''
        }
    }),
    getters: {
        notif(state) {
            return state.notif
        }
    },
    mutations: {
        notif(state, payload) {
            state.notif = payload,

                setTimeout(() => {
                    state.notif = { msg: '', class: '' }
                }, 4000);
        }
    },
    actions: {
        notif(context, payload) {
            context.commit('notif', payload)
        }
    }
}
export default notification

