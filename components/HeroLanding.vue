<template>
    <div class="hero-landing" :style="{ backgroundImage: `url('/img/slider/landing-slide-01.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="hero-content text-center">
                        <div class="hero-thumb">
                            <img src="/img/slider/home-landing-slide-01.png" alt="image">
                        </div>
                        <client-only>
                            <silent-box :image="videos[0]">
                                <template v-slot:silentbox-item>
                                    <div class="video-btn mb--50">
                                        <div class="play__btn">
                                            <div class="video-icon four-icon"></div>
                                        </div>
                                    </div>
                                </template>
                            </silent-box>
                        </client-only>
                        <h1 class="title">Awesome landing <br> page design.</h1>
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

<style lang="scss" scoped>

    .hero-landing {
        height: 1000px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        // res
        @media #{$sm-layout}{
            height: 800px;
        }
        @media #{$large-mobile}{
            height: 600px;
        }
    }
    .hero-thumb {
        margin-top: -500px;
        // res
        @media #{$small-mobile}{
            margin-top: -280px;
        }
    }
    .hero-content {
        .title {
            color: $white;
            font-size: 70px;
            font-weight: 600;
            // res
            @media #{$sm-layout}{
                font-size: 50px;
            }
            @media #{$large-mobile}{
                font-size: 30px;
            }
        }
        .video-btn {
            margin-top: -180px;
            // res
            @media #{$small-mobile}{
                margin-top: -120px;
                .video-icon {
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
</style>