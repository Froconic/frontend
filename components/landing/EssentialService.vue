<template>
    <div class="service-area ptb--150 ptb-md--80 ptb-sm--60">
        <div class="container">
            <div class="row align-content-center">
                <div class="col-lg-6 col-12">
                    <div class="bk-title--default text-left">
                        <h5 class="heading-13 fw-500">{{essentialService.subHeading}}</h5>
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
                <div class="col-xl-4 col-md-6 mt-5" v-for="service in essentialService.services" :key="service.id">
                    <div class="single-svg-icon-box neubrutalist">
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
                    subHeading: "BLANCanvas",
                    heading: "A platform for creative expression",
                    serviceContent: "BLANC from French means white but also is the blankness required for creative expression. The canvas being the space to receive and hold expression",
                    services: [
                        {
                            id: 1,
                            heading: "Platform",
                            text: "| Plan of Action / Raised Surface | BLANCanvas as a platform aims to provide a space to empower and uplift creative expression ",
                            bgImg: "/img/service/service-1.jpg"
                        },
                        {
                            id: 2,
                            heading: "Hub",
                            text: "| Center of a interest / Center of activity | BLANCanvas is a hub gathering various interests in order to generate creative activity",
                            bgImg: "/img/service/service-2.jpg"
                        },
                        {
                            id: 3,
                            heading: "Culture",
                            text: "| Cultivation / Refinement / Taste | BLANCanvas gathers various tastes in order to cultivate and refine a new culture of creativity",
                            bgImg: "/img/service/service-3.jpg"
                        }
                    ]
                },
            }
        }
    };
</script>