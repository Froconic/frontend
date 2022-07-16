<template>
    <div class="brook-feature-area pb--150 pb_md--80 pb_sm--60 bg_color--1">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="brook-section-title mb--10">
                        <h3 class="heading heading-h3">{{ title }}</h3>
                    </div>
                    <div class="row">
                        <div class="col-sm-6" v-for="feature in features" :key="feature.id">
                            <div class="bk-feature d-flex mt--70 mt_sm--40">
                                <div class="icon">
                                    <i :class="feature.icon"></i>
                                </div>
                                <div class="content">
                                    <h5 class="heading heading-h5">{{ feature.heading }}</h5>
                                    <div class="bkseparator--20"></div>
                                    <p class="bk_pra">{{ feature.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mt_md--50 mt_sm--50">
                    <div class="thumb text-center">
                        <img :src="thumb" alt="about images">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: "Features you will love",
                features: [
                    {
                        id: 1,
                        icon: "ion-ios-infinite theme-color",
                        heading: "Digital marketing",
                        text: "We conduct the marketing of products & services using latest digital technologies."
                    },
                    {
                        id: 2,
                        icon: "ion-monitor theme-color",
                        heading: "UI/UX designs",
                        text: "We conduct the marketing of products & services using latest digital technologies."
                    },
                    {
                        id: 3,
                        icon: "ion-ios-baseball-outline theme-color",
                        heading: "SEO marketing",
                        text: "We conduct the marketing of products & services using latest digital technologies."
                    },
                    {
                        id: 4,
                        icon: "ion-pinpoint theme-color",
                        heading: "Resource use",
                        text: "We conduct the marketing of products & services using latest digital technologies."
                    }
                ],
                thumb: "/img/about/iphone-01.png"
            }
        }
    };
</script>