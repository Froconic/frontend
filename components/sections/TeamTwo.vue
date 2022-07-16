<template>
    <div class="brook-team-area bg_color--5 ptb--150 ptb-sm--60 ptb-md--80 swiper-arrow-hover">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="bk-title--default text-center mb--70">
                        <h6 class="heading heading-h6 theme-color">TEAM MEMBERS</h6>
                        <div class="bkseparator--30"></div>
                        <h3 class="heading heading-h3">Our creative crew</h3>
                    </div>
                </div>
            </div>
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
</template>

<script>
    import TeamMemberTwo from '@/components/TeamMemberTwo';

    import data from '../../data/team.json';
    export default {
        components: {
            TeamMemberTwo,
        },
        data () {
            return {
                data,
                swiperOption: {
                    spaceBetween: 20,
                    autoplay: false,
                    loop: true,
                    speed: 1000,
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        992:{
                            slidesPerView : 3
                        },
                        576:{
                            slidesPerView : 2
                        },
                        300:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
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