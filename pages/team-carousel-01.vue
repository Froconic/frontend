<template>
    <div class="main-container">

        <HeaderAbout @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="brook-breadcrumb-area pt--130 pb--145 bg_color--1 breadcrumb-title-bar">
            <div class="container-fluid plr--150 plr_md--50 plr_sm--20">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-center">
                            <h1 class="heading heading-h1 line-height-1-5">The A-team of <span class="theme-color">awesomeness</span><br> & creative people</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-team-area bg_color--1 swiper-arrow-hover">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-element-carousel">
                            <swiper :options="swiperOption">
                                <div class="swiper-slide" v-for="teamMember in data.teamMembers.slice(7, 10)" :key="teamMember.id">
                                    <TeamMemberTwo :teamMember="teamMember" />
                                </div>
                            </swiper>
                            
                            <!-- slider arrow navigation -->
                            <div class="ht-swiper-button ht-swiper-button-prev">
                                <i class="ion ion-ios-arrow-back"></i>
                            </div>
                            <div class="ht-swiper-button ht-swiper-button-next">
                                <i class="ion ion-ios-arrow-forward"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-call-to-action bg_color--1 ptb--120 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-12">
                        <div class="call-content vertical-call-toaction text-center">
                            <h3 class="heading heading-h3">Start working together?</h3>
                            <div class="spacing"></div>
                            <div class="call-btn text-center">
                                <n-link to="/contact-us-modern" class="brook-btn bk-btn-theme text-theme btn-sd-size btn-rounded">Find out more</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    import data from '../data/team.json';
    export default {
        components: {
            HeaderAbout: () => import('@/components/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            TeamMemberTwo: () => import('@/components/TeamMemberTwo'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
                swiperOption: {
                    spaceBetween: 20,
                    autoplay: false,
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000,
                    },
                    navigation: {
                        nextEl: '.ht-swiper-button',
                        prevEl: '.ht-swiper-button'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        992:{
                            slidesPerView : 3
                        },
                        768:{
                            slidesPerView : 2
                        },
                        300:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Team Carousel 01'
            }
        },
    };
</script>

<style lang="scss" scoped>
    .ht-swiper-button {
        top: 50%;
        width: 68px;
        left: -14px;
        height: 68px;
        font-size: 30px;
        padding: 0;
        z-index: 2;
        line-height: 75px;
        border-radius: 50%;
        position: absolute;
        text-align: center;
        background-color: #fff;
        color: rgba(34, 34, 34, 0.3);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.01);
        transform: translateY(-50%);
        transition: 0.4s;
        opacity: 0;
        visibility: hidden;
        &-next {
            left: auto;
            right: -14px;
        }
        &:focus {
            outline: none;
        }
        &:hover {
            background-color: $theme-color;
            color: $white;
        }
    }
    .swiper-arrow-hover {
        &:hover {
            .ht-swiper-button {
                opacity: 1;
                visibility: visible;
            }
        }
    }
</style>