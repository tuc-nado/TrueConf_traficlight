<template>
    <Light :isActive="false" :classList="['red-on', 'red-off']"/>
    <Light :isActive="false" :classList="['yellow-on', 'yellow-off']"/>
    <Light :timer="true" :isActive="getActiveLight" :classList="['green-on', 'green-off']"/>
</template>


<script>
import Light from '@/components/Light'
import { mapGetters } from 'vuex'

export default {
    computed:mapGetters(['getTimer', 'getActiveLight']),
    components:{
        Light
    }
}
</script>