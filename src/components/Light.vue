<template>
    <div :class="['ligth', isActive ? classList[0]: classList[1]]">
        <p v-if="timer">
            {{ getTimer }}
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props:{
        timer:{
            type: Boolean,
            default: false
        },
        isActive:{
            type: Boolean,
            required: true
        },
        classList:{
            type: Array,
            required: true
        }
    },
    computed:mapGetters(['getTimer'])
}
</script>