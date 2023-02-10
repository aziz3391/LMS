import axios from "axios"

const Blog = {
    state: () => ({
        Blogs: [],
        Blog: {}
    }),
    getters: {
        Blogs(state) {
                return state.Blogs
        },
        Blog(state) {
            return state.Blog
        },
        lastBlogs(state){
            return state.Blogs.slice(0,3)
        }
    },
    mutations: {
        changeBlogs(state,payload){
            state.Blogs=payload
        },
        changeBlog(state,payload){
            state.Blog=payload
        }
    },
    actions: {
        getBlogs(context){
            axios.get(`${context.getters.url}/blog/getall`).then(res=>{
                if(res.status===200){
                    // console.log(res.data);
                    context.commit('changeBlogs', res.data)
                }
            })
        },
        getBlogId(context,payload){
            axios.get(`${context.getters.url}/blog/view/${payload}`).then(res=>{
                if(res.status===200){
                    let {blog,others} = res.data

                context.commit('changeBlog',blog)
                context.commit('changeBlogs',others)
                console.log(res.data,"nothing special")
                }
            })
        }
    }

}
export default Blog