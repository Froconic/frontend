<template>
    <div id="section-our-services" class="brook-icon-boxes-area ptb--120 ptb-md--80 ptb-sm--80 bg_image--17" :style="{ backgroundImage: `url('/img/bg/bg-image-17.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-section-title text-center">
                        <h3 class="heading heading-h3 font-large">Best services save the world</h3>
                        <div class="bkseparator--25"></div>
                        <div class="title-separator w--80 color-red"></div>
                    </div>
                </div>
            </div>
            <div class="row mt--40">
                <div class="col-lg-4 col-sm-6 wow move-up" v-for="service in data.services.slice(9, 12)" :key="service.id">
                    <ServiceItemStyleTwo :service="service" />
                </div>

                <div class="col-lg-12">
                    <div class="best-service-footer plr--160 plr_md--50 plr_sm--20 plr_lg--50 text-center mt--70">
                        <h6 class="heading heading-h6 font-16 line-height-1-88 font-medium body-color">Since its establishment in 2000, Brook Creative has been focusing on project management & implementation through global cooperation & partners.</h6>
                        <div class="bkseparator--45"></div>
                        <div class="brook-btn">
                            <n-link to="/contact-us-modern" class="brook-btn bk-btn-red btn-sd-size btn-rounded space-between">Learn More</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';
    export default {
        components: {
            ServiceItemStyleTwo: () => import('@/components/ServiceItemStyleTwo'),
        },
        data () {
            return {
                data
            }
        }
    };
</script>