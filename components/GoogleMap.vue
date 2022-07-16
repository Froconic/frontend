<template>
    <div class="google-map-area" id="support">
        <GmapMap
            :center="{lat:52.482900, lng:-1.893460}"
            :zoom="15"
            map-type-id="terrain"
        >
        </GmapMap>
    </div>
</template>

<script>
    export default {
        name: 'GoogleMap',
    }
</script>

<style lang="scss" scoped>
    .vue-map-container {
        height: 500px;
        // res
        @media #{$sm-layout}{
            height: 350px;
        }
    }
</style>
