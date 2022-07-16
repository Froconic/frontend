<template>
    <div class="instagram-grid-wrap" :class="addClass">
        <div class="item-grid grid-style--1" v-for="instagram in data" :key="instagram.id" >
            <a href="https://www.instagram.com/" target="_blank">
                <div class="thumb">
                    <img :src="instagram.image" alt="instagram images">
                </div>
                <div class="item-info">
                    <div class="inner">
                        <a href="https://www.instagram.com/" target="_blank">
                            <i class="fas fa-heart"></i>
                            {{ instagram.like }}
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i class="fas fa-comment-dots"></i>
                            {{ instagram.comment }}
                        </a>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    import data from '../data/instagram.json';
    export default {
        props: ['addClass'],

        data () {
            return {
                data
            }
        },
    };
</script>