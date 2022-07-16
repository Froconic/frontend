<template>
    <div class="container-fluid p-0">
        <div class="row no-gutters">
            <div class="col-12">
                <div class="brook-element-carousel swiper-custom-arrow swiper-arrow-hover">
                    <swiper :options="swiperOption">
                        <div class="swiper-slide" v-for="teamMember in data.teamMembers.slice(4, 7)" :key="teamMember.id">
                            <TeamMemberThree :teamMember="teamMember" />
                        </div>
                    </swiper>

                    <!-- slider arrow navigation -->
                    <button class="swiper-btn swiper-btn-prev">
                        <i class="ion ion-ios-arrow-back"></i>
                    </button>
                    <button class="swiper-btn swiper-btn-next">
                        <i class="ion ion-ios-arrow-forward"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/team.json';
    export default {
        components: {
            TeamMemberThree: () => import('../components/TeamMemberThree'),
        },
        data () {
            return {
                data,
                swiperOption: {
                    spaceBetween: 60,
                    loop: true,
                    speed: 1000,
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev'
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
