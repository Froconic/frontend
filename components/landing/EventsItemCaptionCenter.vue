<template>
    <div class="flexale-image">
        <div class="thumb">
            <img :src="sliders.image" :alt="sliders.title">
        </div>
        <div class="port-overlay-info">
            <div class="hover-action">
                <h3 class="post-overlay-title">
                    <n-link :to="`/events`">{{ slide.title }}</n-link>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['sliders'],
    };
</script>