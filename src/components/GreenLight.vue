<template>
    <div class="ligth red-off"></div>
    <div class="ligth yellow-off"></div>
    <div :class="['ligth',getActiveLight ? 'green-on' : 'green-off']">
        <p>
            {{ getTimer }}
        </p>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    computed:mapGetters(['getTimer', 'getActiveLight'])
}
</script>