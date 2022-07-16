<template>
    <div class="portfolio portfolio_style--1">
        <div class="thumb">
            <img :src="portfolio.image" :alt="portfolio.heading">
        </div>
        <div class="port-overlay-info">
            <div class="hover-action">
                <h3 class="post-overlay-title">
                    <n-link :to="`/portfolio/${portfolio.slug}`">{{ portfolio.heading }}</n-link>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['portfolio'],
    };
</script>