<template>
    <div class="service-area bg_color--5 ptb--150 ptb-md--80 ptb-sm--60">
        <div class="container">
            <div class="row align-content-center">
                <div class="col-lg-6 col-12">
                    <div class="bk-title--default text-left">
                        <h5 class="heading-13 theme-color text-uppercase fw-500">{{essentialService.subHeading}}</h5>
                        <div class="bkseparator--30"></div>
                        <h3 class="heading-40 fw-200" v-html="essentialService.heading"></h3>
                    </div>
                </div>
                <div class="col-lg-6 col-12 mt_md--30 mt_sm--30">
                    <div class="modern-service-content wow move-up">
                        <p>{{essentialService.serviceContent}}</p>
                    </div>
                </div>
            </div>
            <div class="row mt--70 mt_md--20 mt_sm--10">
                <div class="col-xl-4 col-md-6 mt--30" v-for="service in essentialService.services" :key="service.id">
                    <div class="single-svg-icon-box">
                        <div class="grid-overlay" :style="{backgroundImage:`url(${service.bgImg})`}"></div>
                        <div class="inner">
                            <div class="content">
                                <h5 class="heading heading-h5">{{ service.heading }}</h5>
                                <p>{{ service.text }}</p>
                            </div>
                        </div>
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
                essentialService: {
                    subHeading: "service",
                    heading: "Full-service digital <br> capabilities from end to end.",
                    serviceContent: "We create content and develop digital marketing experiences with elasticity to suit the shape and dimension of business goals and consumer expectations.",
                    services: [
                        {
                            id: 1,
                            heading: "Digital Marketing",
                            text: "Our Digital Marketing service includes: Drive traffic, build engagement and score meaningful conversions.",
                            bgImg: "/img/service/service1.jpg"
                        },
                        {
                            id: 3,
                            heading: "Website Design & Development",
                            text: "Our enterprise-level websites have to be smarter than the place or platform they play on.",
                            bgImg: "/img/service/service2.jpg"
                        },
                        {
                            id: 3,
                            heading: "Online Video",
                            text: "Our production team creates all kinds of purposeful videos for use on websites, social media and beyond.",
                            bgImg: "/img/service/service3.jpg"
                        }
                    ]
                },
            }
        }
    };
</script>