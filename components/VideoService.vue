<template>
    <div class="brook-service-area plr--100 plr_lg--30 plr_md--50 plr_sm--30">
        <div class="row row--0 bg_color--14 align-items-center video-with-thumb">
            <div class="col-lg-6">
                <div class="service-thumb authenthic-service">
                    <img src="/img/about/home-authentic-studio-image-02.jpg" alt="service image">
                </div>
            </div>
            <div class="col-lg-6 ptb-md--80 ptb-sm--80">
                <div class="service-content authenthic-service plr--130 plr_lg--70 plr_md--30 plr_sm--30">
                    <h6 class="heading headin-h6 theme-color letter-spacing-3 theme-color">BEST SERVICES</h6>
                    <div class="bkseparator--30"></div>
                    <h1 class="heading heading-h1 heading-font line-height-1-5 move-up wow">Top-notch creative theme for all kind  of
                        <span class="theme-color">
                            <b>graphic</b>
                        </span>
                    </h1>
                </div>
            </div>

            <client-only>
                <silent-box :image="videos[0]">
                    <template v-slot:silentbox-item>
                        <div class="video-btn position--center d-none d-lg-block">
                            <div class="play__btn">
                                <div class="video-icon third-icon"></div>
                            </div>
                        </div>
                    </template>
                </silent-box>
            </client-only>
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