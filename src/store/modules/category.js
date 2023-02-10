import axios from "axios"

const category = {
    state: () => ({
        categories: [],
        category: {}
    }),
    getters: {
        categories(state) {
                return state.categories
        },
        category(state) {
            return state.category
        }
    },
    mutations: {
        changeCategories(state,payload){
            state.categories=payload
        }
    },
    actions: {
        getCategories(context){
            axios.get(`${context.getters.url}/category/catall`).then(res=>{
                if(res.status==200){
                    // console.log(res.data);
                    context.commit('changeCategories', res.data)
                }
            })
        }
    }

}
export default category