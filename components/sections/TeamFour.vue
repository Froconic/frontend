<template>
    <div class="brook-team-area bg_color--1 ptb--100 ptb-sm--60 ptb-md--80 swiper-arrow-hover">
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-12">
                    <div class="brook-element-carousel">
                        <swiper :options="swiperOption">
                            <div class="swiper-slide" v-for="teamMember in data.teamMembers.slice(4, 7)" :key="teamMember.id">
                                <TeamMemberThree :teamMember="teamMember" />
                            </div>
                        </swiper>

                        <!-- slider arrow navigation -->
                        <div class="ht-swiper-button ht-swiper-button-prev ht-swiper-button-triangle">
                            <i class="ion ion-ios-arrow-back"></i>
                        </div>
                        <div class="ht-swiper-button ht-swiper-button-next ht-swiper-button-triangle">
                            <i class="ion ion-ios-arrow-forward"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TeamMemberThree from '@/components/TeamMemberThree';

    import data from '../../data/team.json';

    export default {
        components: {
            TeamMemberThree,
        },

        data () {
            return {
                data,
                swiperOption: {
                    spaceBetween: 60,
                    autoplay: false,
                    loop: true,
                    speed: 1000,
                    navigation: {
                        nextEl: '.ht-swiper-button',
                        prevEl: '.ht-swiper-button'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        1499:{
                            slidesPerView : 5
                        },

                        768:{
                            slidesPerView : 3

                        },

                        480:{
                            slidesPerView : 2
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
        left: 0;
        width: 68px;
        height: 68px;
        font-size: 30px;
        padding: 0;
        z-index: 2;
        line-height: 75px;
        border-radius: 50%;
        position: absolute;
        text-align: center;
        background-color: $white;
        color: rgba(34, 34, 34, 0.3);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.01);
        transform: translateY(-50%);
        transition: 0.4s;
        opacity: 0;
        visibility: hidden;
        &-next {
            left: auto;
            right: 0;
        }
        &:focus {
            outline: none;
        }
        &:hover {
            background-color: $theme-color;
            color: $white;
        }
        &-triangle {
            width: 85px;
            height: 108px;
            line-height: 108px;
            background-color: rgba(255, 255, 255, 0.5);
            color: $white;
            &.ht-swiper-button-prev {
                left: -35px;
                border-bottom-right-radius: 108px;
                border-top-right-radius: 108px;
                i {
                    left: 15px;
                    position: relative;
                }
            }
            &.ht-swiper-button-next {
                right: -35px;
                left: auto;
                border-bottom-left-radius: 108px;
                border-top-left-radius: 108px;
                i {
                    right: 15px;
                    position: relative;
                }
            }
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