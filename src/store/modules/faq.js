import axios from "axios"

const Faqs = {
    state: () => ({
        Faqs: [],
        LastFaqs: {}
    }),
    getters: {
        Faqs(state) {
                return state.Faqs
        },
        LastFaqs(state) {
            return state.LastFaqs
        },
        // lastFaqs(state){
        //     return state.Faqs.slice(0,3)
        // }
    },
    mutations: {
        changeFaqs(state,payload){
            state.Faqs=payload
        },
        changeLastFaqs(state,payload){
            state.LastFaqs=payload
        }
    },
    actions: {
        getFaqs(context){
            axios.get(`${context.getters.url}/faq/all`).then(res=>{
                if(res.status===200){
                    context.commit('changeFaqs', res.data)
                }
            })
        },
        getLastFaqs(context){
            axios.get(`${context.getters.url}/faq/last`).then(res=>{
                if(res.status===200){
                context.commit('changeLastFaqs',res.data)
                }
            })
        }
    }

}
export default Faqs