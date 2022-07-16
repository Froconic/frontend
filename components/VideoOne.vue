<template>
    <div class="brook-video-area bg_color--1 pb--130 pb_md--80 pb_sm--60">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="video-with-thumb text-center">
                        <div class="thumb">
                            <img src="/img/about/macbook-01.png" alt="video images">
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
                <div class="col-lg-5 mt_sm--30 mt_md--30">
                    <div class="video-content move-up wow">
                        <h3 class="heading heading-h3">Fresh ideas & unique <br> designs</h3>
                        <div class="bkseparator--25"></div>
                        <p class="bk_pra">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities.</p>
                        <div class="bkseparator--40"></div>
                        <n-link to="" class="moredetails-btn">
                            <span>More details</span> 
                            <i class="fa fa-arrow-right"></i>
                        </n-link>
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
