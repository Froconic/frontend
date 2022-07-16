<template>
    <div class="hero-startup bg-cover" :style="{ backgroundImage: `url('/img/slider/start-ups-slide-01.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="hero-content">
                        <h2 class="hero-title">Result-driven creative agency.</h2>
                        <h5>We design & build brands, campaigns & digital projects for businesses large & small</h5>
                        <n-link to="/about-us-01" class="btn-hero-startup">More About Us</n-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .hero-startup {
        height: 800px;
        display: flex;
        align-items: center;
        position: relative;
        // res
        @media #{$md-layout}{
            height: 600px;
        }
        @media #{$sm-layout}{
            height: 550px;
        }
        @media #{$small-mobile}{
            height: 450px;
        }
        &:before {
            width: 100%;
            height: 100%;
            content: "";
            top: 0;
            left: 0;
            position: absolute;
            background-color: rgba($white, 0.7);
            display: none;
            // res
            @media #{$sm-layout}{
                display: block;
            }
        }
        .hero-content {
            max-width: 500px;
            .hero-title {
                font-size: 55px;
                font-weight: 600;
                // res
                @media #{$sm-layout}{
                    font-size: 40px;
                }
                @media #{$small-mobile}{
                    font-size: 32px;
                }
            }
            h5 {
                color: #999;
                font-size: 20px;
                font-weight: 500;
                line-height: 2;
                margin-top: 32px;
                // res
                @media #{$sm-layout}{
                    color: #444;
                }
                @media #{$small-mobile}{
                    margin-top: 15px;
                    line-height: 1.5;
                }
            }
            .btn-hero-startup {
                background-color: #F8A440;
                border: 1px solid #F8A440;
                border-radius: 50px;
                color: $white;
                font-size: 14px;
                font-weight: 600;
                padding: 18px 40px;
                display: inline-block;
                margin-top: 36px;
                // res
                @media #{$small-mobile}{
                    margin-top: 20px;
                    padding: 12px 30px;
                }

                &:hover {
                    background-color: $white;
                    color: #F8A440;
                }
            }
        }
    }
</style>