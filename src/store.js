import { createStore } from 'vuex'

export default createStore({
    state:{
        timer: 0,
        isActiveLight: true
    },
    mutations:{
        setTimer(state, time){
            state.timer = time
        },
        decrTimer(state){
            state.timer--
        },
        setActive(state){
            state.isActiveLight = true
        },
        blinkLight(state){
            state.isActiveLight = !(state.isActiveLight)
        }
    },
    getters:{
        getTimer(state){
            return state.timer
        },
        getActiveLight(state){
            return state.isActiveLight
        }
    }
})