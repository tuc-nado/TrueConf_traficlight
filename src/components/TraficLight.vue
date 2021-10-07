<template>
    <div class="trafic-light">
        <router-view/>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    data (){
        return {
            currentPath: window.location.pathname,
            prePath: '',
        }
    },

    mounted(){
        if(this.currentPath === '/yellow'){
            this.prePath = '/red'
        }
        if((window.history.state.back !== null) && (localStorage.getItem('timer') !== null)){
            this.$store.commit('setTimer', localStorage.getItem('timer'))
            this.prePath = localStorage.getItem('prePath')
        }
        this.prTimer
    },

    computed:{
        ...mapGetters(['getTimer']),
        prTimer(){
                if(this.getTimer === 0){
                    if(this.currentPath === '/red' || this.currentPath === '/'){
                        this.$store.commit('setTimer', 10)
                    }else if (this.currentPath === '/yellow'){
                        this.$store.commit('setTimer', 3)
                    }else if (this.currentPath === '/green'){
                        this.$store.commit('setTimer', 15)
                    }
                }


            let interval = setInterval(() =>{
                this.$store.commit('decrTimer')
                localStorage.setItem('timer', this.getTimer)
                if (this.getTimer < 3){
                    this.$store.commit('blinkLight')
                }
            }, 1000)
            setTimeout(()=>{
                clearInterval(interval)
                this.changePath
                this.prTimer
            }, this.$store.getters.getTimer*1000)
        },
        changePath(){
            if ((this.currentPath === '/yellow') && (this.prePath === '/red')){
                this.prePath = this.currentPath
                this.currentPath = '/green'
                this.$router.push(this.currentPath)
            }else if ((this.currentPath === '/yellow') && (this.prePath === '/green')){
                this.prePath = this.currentPath
                this.currentPath = '/red'  
                this.$router.push(this.currentPath)
            }else if(this.currentPath === '/red' || this.currentPath === '/green'){
                this.prePath = this.currentPath
                this.currentPath = '/yellow'
                this.$router.push(this.currentPath)
            }
            localStorage.setItem('prePath', this.prePath)
            this.$store.commit('setActive')
        }
    },
}
</script>


<style>
    .trafic-light{
        width: 300px;
        height: 500px;
        margin: 0 auto;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: rgb(34, 34, 34);
        border-radius: 50px;
    }

    .ligth{
        width: 150px;
        height: 150px;
        border: 1px solid black;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .green-on{
        background-color: rgba(0, 255, 0);
    }

    .red-on{
        background-color: red;
    }

    .yellow-on{
        background-color: rgb(251, 255, 0);
        color: black;
    }

    .green-off{
        background-color: rgb(62, 107, 62, 0.5);
    }

    .red-off{
        background-color:rgba(172, 19, 19, 0.527);
    }
    
    .yellow-off{
        background-color: rgba(177, 177, 57, 0.5);
        
    }

    .done{
        background-color: black;
    }
</style>