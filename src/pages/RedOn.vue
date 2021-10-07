<template>
    <Light :timer="true" :isActive="getActiveLight" :classList="['red-on', 'red-off']"/>
    <Light :isActive="false" :classList="['yellow-on', 'yellow-off']"/>
    <Light :isActive="false" :classList="['green-on', 'green-off']"/>
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