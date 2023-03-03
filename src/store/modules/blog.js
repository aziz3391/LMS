import axios from "axios"

const Blog = {
    state: () => ({
        Blogs: [],
        Blog: {},
        errorcase: ''
    }),
    getters: {
        Blogs(state) {
            if (state.Blogs) {
                return state.Blogs
            }
            else {
                return ''
            }
        },
        Blog(state) {
            return state.Blog
        },
        lastBlogs(state) {
            return state.Blogs.slice(0, 3)
        },
        giveerror(state) {
            return state.errorcase
        }

    },
    mutations: {
        changeBlogs(state, payload) {
            state.Blogs = payload
        },
        changeBlog(state, payload) {

            state.Blog = payload
        },
        giveerror(state, payload) {
            state.errorcase = payload
        }
    },
    actions: {
        getBlogs(context) {
            axios.get(`${context.getters.url}/blog/getall`).then(res => {
                if (res.status == 200) {
                    context.commit('changeBlogs', res.data)
                }
            })
        },
        getBlogId(context, payload) {
            axios.get(`${context.getters.url}/blog/view/${payload}`).then(res => {
                if (res.status == 200) {
                    let { blog, others } = res.data
                console.log(res.data, "nothing special")

                    context.commit('changeBlog', blog)
                    context.commit('changeBlogs', others)
                }
                else {
                    context.commit('giveerror', ' There is an internal error ')
                }
            })
        }
    }

}
export default Blog