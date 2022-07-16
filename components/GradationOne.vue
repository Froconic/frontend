<template>
    <div class="bk-gradation mt--30 mt_sm--5">
        <div class="item-grid mt--40 move-up-x wow" data-wow-delay=".13s" v-for="gradation in data.gradations" :key="gradation.id">
            <div class="line"></div>
            <div class="dot-wrap">
                <div class="dot">
                    <div class="count">{{ gradation.count }}</div>
                </div>
            </div>
            <div class="content">
                <h5 class="heading heading-h5">{{ gradation.heading }}</h5>
                <p class="bk_pra">{{ gradation.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/gradation.json';

    export default {
        data () {
            return {
                data
            }
        }
    };
</script>