<template>
    <div :class="['ligth', getActiveLight ? 'red-on' : 'red-off']">
        <p>
            {{ getTimer }}
        </p>
    </div>
    <div class="ligth yellow-off"></div>
    <div class="ligth green-off"></div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    computed:mapGetters(['getTimer', 'getActiveLight'])
}
</script>