<template>
    <div class="brook-whatdo-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="bk-title--default text-center">
                        <h6 class="heading heading-h6 theme-color">What we do</h6>
                        <div class="bkseparator--30"></div>
                        <h3 class="heading heading-h3">Fresh ideas & unique designs</h3>
                    </div>
                </div>
            </div>
            <div class="row mt--40">
                <div class="col-lg-6">
                    <div class="video-with-thumb text-center mt--40">
                        <div class="thumb">
                            <img src="/img/about/about-3.jpg" alt="video images">
                        </div>
                        <client-only>
                            <silent-box :image="videos[0]">
                                <template v-slot:silentbox-item>
                                    <div class="video-btn position--center">
                                        <div class="play__btn">
                                            <div class="video-icon second-icon"></div>
                                        </div>
                                    </div>
                                </template>
                            </silent-box>
                        </client-only>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!-- Start Single Progress -->
                    <div class="radial-progress-single progress-flex mt--40">
                        <div class="contant pl--30 pl_mobile--5">
                            <h5 class="heading heading-h5">Creative designs</h5>
                            <p class="bk_pra mt--30">Brook presents your services with flexible, convenient and  multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities.</p>
                        </div>
                    </div>
                    <!-- End Single Progress -->

                    <!-- Start Single Progress -->
                    <div class="radial-progress-single progress-flex mt--50">
                        <div class="contant pl--30 pl_mobile--5">
                            <h5 class="heading heading-h5">Unique solutions</h5>
                            <p class="bk_pra mt--30">Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p>
                        </div>
                    </div>
                    <!-- End Single Progress -->

                    <!-- Start Single Progress -->
                    <div class="radial-progress-single progress-flex mt--50">
                        <div class="contant pl--30 pl_mobile--5">
                            <h5 class="heading heading-h5">Digital Platform</h5>
                            <p class="bk_pra mt--30">Brook presents your services with flexible, convenient and  multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities.</p>
                        </div>
                    </div>
                    <!-- End Single Progress -->
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