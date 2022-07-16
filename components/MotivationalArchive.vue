<template>
    <div class="bk-motivational-archive bg_image--7 digital-motivational plr_md--30 plr_sm--30 plr_lg--30" :style="{ backgroundImage: `url('/img/bg/bg-image-7.jpg')` }">
        <!-- Start Video Area -->
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Start Video Area -->
                    <div class="comp-video line--between mb--30">
                        <client-only>
                            <silent-box :image="videos[0]">
                                <template v-slot:silentbox-item>
                                    <div class="video-btn">
                                        <div class="video-icon play__btn"></div>
                                        <div class="watch-text play__btn">Watch Video</div>
                                    </div>
                                </template>
                            </silent-box>
                        </client-only>
                    </div>
                    <!-- End Video Area -->
                </div>
            </div>
        </div>
        <!-- Start Motivational Wrapper -->
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="motivational-wrap">
                    <div class="motivational-inner">
                        <h3 class="title">We're motivated by the desire to achieve.</h3>
                        <div class="content mt--70">
                            <div class="motivational-wrapper">
                                <!-- Strat Single Speach -->
                                <div class="single-motive-speach wow move-up">
                                    <div class="icon">
                                        <i class="icon-basic-globe theme-color"></i>
                                    </div>
                                    <div class="content">
                                        <h4>Successful projects</h4>
                                        <p class="bk_pra heading-font pr--40">Since its establishment in 2000, Brook Creative has been focusing on project management & implementation through cooperation. </p>
                                    </div>
                                </div>
                                <!-- End Single Speach -->

                                <!-- Strat Single Speach -->
                                <div class="single-motive-speach mt--30 wow move-up">
                                    <div class="icon">
                                        <i class="icon-basic-mouse theme-color"></i>
                                    </div>
                                    <div class="content">
                                        <h4>Unique designs</h4>
                                        <p class="bk_pra heading-font pr--40">In total, Brook Creative has created more than 2000 projects related to constructional designing and landscaping worldwide.</p>
                                    </div>
                                </div>
                                <!-- End Single Speach -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--40">
                <div class="motivational-thumbnail">
                    <img src="/img/about/home-digital-agency-image-01.png" alt="Multipurpose">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                videos: [
                    {
                        src: 'https://www.youtube.com/watch?v=9No-FiEInLA',
                        thumbnail: ""
                    }
                ],
            }
        }
    };
</script>

<style lang="scss">

</style>