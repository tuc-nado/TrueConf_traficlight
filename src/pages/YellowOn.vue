<template>
    <Light :isActive="false" :classList="['red-on', 'red-off']"/>
    <Light :timer="true" :isActive="true" :classList="['yellow-on', 'yellow-off']"/>
    <Light :isActive="false" :classList="['green-on', 'green-off']"/>
</template>


<script>
import Light from '@/components/Light'
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters(['getTimer']),
    components:{
        Light
    }
}
</script>