import axios from "axios"

const Course = {
    state: () => ({
        Courses: [],
        Course: {}
    }),
    getters: {
        Courses(state) {
                return state.Courses
        },
        Course(state) {
            return state.Course
        }
    },
    mutations: {
        changeCourses(state,payload){
            state.Courses=payload
        }
    },
    actions: {
        getCourses(context){
            axios.get(`${context.getters.url}/product/getall`).then(res=>{
                if(res.status==200){
                    // console.log(res.data);
                    context.commit('changeCourses', res.data)
                }
            })
        }
    }

}
export default Course