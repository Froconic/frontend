<template>
    <div class="bk-number-speaks section-ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-xl-5">
                    <div class="number-speaks-wrapper">
                        <div class="content wow move-up">
                            <div class="title--creative text-left">
                                <h3 class="heading">{{ data.sectionSubTitle }}</h3>
                                <h2 class="theme-creative" v-html="data.SectionTitle"></h2>
                                <p v-html="data.SectionTitleText"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-xl-7 mt_md--40 mt_sm--40">
                    <div class="speakers-number-wrap counter-grid">
                        <div class="counter-style--2 wow move-up" v-for="counter in data.counters.slice(2, 5)" :key="counter.id">
                            <div class="icon">
                                <i :class="counter.icon"></i>
                            </div>
                            <span class="count">{{ counter.count }}</span>
                            <div class="content">
                                <h6>{{ counter.heading }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/counterup.json';

    export default {
        data () {
            return {
                data
            }
        }
    };
</script>