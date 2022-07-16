<template>
    <div class="bk-brand-area bg_color--1 ptb--60">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-wrapper">
                        <div class="brand__list brand-default brand-style--1">
                            <swiper :options="swiperOption">
                                <div class="brand swiper-slide" v-for="brand in data" :key="brand.id">
                                    <n-link to="/">
                                        <img :src="brand.logo" alt="logo image">
                                    </n-link>
                                </div>
                            </swiper>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/brandLogo.json';
    export default {
        data () {
            return {
                data,
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    autoplay: false,
                    // Responsive breakpoints
                    breakpoints: {
                        1200:{
                            slidesPerView : 5
                        },

                        768:{
                            slidesPerView : 3

                        },

                        480:{
                            slidesPerView : 2
                        }
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'custom',
                        renderCustom: function (e, t, i) {
                            var a = (100 / i) * t;
                            var n = t.toString(),
                                s = i.toString();
                            return '<div class="fraction"><span class="current">' + (n = n.padStart(2, "0")) + '</span><span class="separator"> - </span><span class="total">' + (s = s.padStart(2, "0")) + "</span></div>"
                        },
                    },
                }
            }
        }
    };
</script>