<template>
    <div class="hero-product-landing bg_color--15">
        <div class="container-fluid">
            <div class="hero-content-wrapper">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="hero-content">
                            <h2 class="title">The <span>gold</span> <br> decoration set.</h2>
                            <p>Brook is leading the revolution in portable, durable, powerful table lamps and lanterns to brighten up your rooms and
                            create cozy atmosphere.</p>
                            <n-link to="" class="brook-btn bk-btn-theme with-no-shadow btn-sd-size btn-bullet space-between">Shop Collection</n-link>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="hero-thumb">
                            <img src="/img/slider/product-landing-slide-01.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<style lang="scss" scoped>
    .hero-product-landing {
        height: 100vh;
        display: flex;
        align-items: center;
        // res
        @media #{$sm-layout}{
            height: 800px;
        }
        @media #{$large-mobile}{
            height: 1000px;
        }
        @media #{$small-mobile}{
            height: 900px;
        }
        .container-fluid {
            padding: 0 150px;
            @media #{$lg-layout, $laptop-device, $md-layout} {
                padding-left: 50px;
                padding-right: 50px;
            }

            @media #{$sm-layout} {
                padding-left: 20px;
                padding-right: 20px;
            }
        }
    }
    .hero-content {
        max-width: 470px;
        // res
        @media #{$sm-layout}{
            padding-top: 100px;
        }
        .title {
            color: #222;
            font-size: 60px;
            font-weight: 600;
            span {
                color: $color-12;
            }
            // res
            @media #{$md-layout}{
                font-size: 45px;
            }
            @media #{$sm-layout}{
                font-size: 30px;
            }
        }
        p {
            color: #999999;
            font-size: 18px;
            font-weight: 500;
            line-height: 1.7;
        }
    }
    .hero-thumb {
        // res
        @media #{$sm-layout}{
            max-width: 50%;
            padding-top: 30px;
        }
        @media #{$large-mobile}{
            max-width: 100%;
        }
    }
</style>