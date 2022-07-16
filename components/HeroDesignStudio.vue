<template>
    <div class="hero-design-studio bg-cover" :style="{ backgroundImage: `url('/img/slider/design-studio-slide.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="hero-content">
                        <h1 class="title">Websites <span>&</span> digital platforms</h1>
                        <h3 class="sub-title">Insights from the world’s top design leaders.</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkout-content">
            <h2>check out our works.</h2>
            <n-link to="/portfolio/portfolio-with-caption" class="brook-btn bk-btn-white btn-sd-size btn-rounded space-between">Check Portfolio</n-link>
        </div>
    </div>
</template>

<style lang="scss">
    .hero-design-studio {
        height: 850px;
        display: flex;
        align-items: center;
        position: relative;

        .hero-content {
            .title {
                color: $white;
                font-size: 100px;
                font-weight: 600;
                line-height: 1.3;
                span {
                    color: #F0263F;
                    font-family: $playfair-font;
                }
                // res
                @media #{$lg-layout}{
                    font-size: 70px;
                }
                @media #{$md-layout}{
                    font-size: 50px;
                }
            }
            .sub-title {
                color: $white;
                font-size: 24px;
                font-weight: 500;
                margin: 40px 0 0;
            }
        }
        .checkout-content {
            position: absolute;
            right: 0;
            bottom: 70px;
            max-width: 250px;
            h2 {
                color: $white;
                font-size: 60px;
                font-weight: 600;
            }
        }
    }
</style>