<template>
    <div class="ligth red-off"></div>
    <div class="ligth yellow-on">
        <p>
            {{ getTimer }}
        </p>
    </div>
    <div class="ligth green-off"></div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters(['getTimer'])
}
</script>