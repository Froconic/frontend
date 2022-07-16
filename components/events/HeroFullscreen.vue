<template>
  <main class="page-content left-vertical-header">
    <div class="brook-slider-area">
      <div class="fullscreen-slider-activation swiper-dot-vertical-center">
        <div class="brook-element-carousel">
          <swiper :options="swiperOption">
            <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
              <div class="slide-portfolio-single fullscreen d-flex align-items-center bg_image--29" :style="{ backgroundImage: `url(${slider.bgImage})` }">
              <div class="content">
                <h5 class="heading heading-h5 text-white">{{ slider.category }}</h5>
                <h2 class="heading heading-h2 text-white">
                  {{ slider.heading }}
                </h2>
                <h3 class="heading heading-h2 text-white">
                  {{ slider.date }} |
                  {{ slider.time }}
                </h3>
                <h3 class="heading heading-h2 text-white">
                  {{ slider.location }}
                </h3>
                <h4 class="heading heading-h2 text-white">
                  {{ slider.price }}
                </h4>
                <h5 class="heading heading-h2 text-white">
                  {{ slider.details }}
                </h5>
              </div>
              </div>
            </div>
          </swiper>

          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    spaceBetween: 20,
                    loop: true,
                    speed: 1000,
                    mousewheel: true,
                    direction: 'vertical',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },

                sliders: [
                    {
                        id: 1,
                        category: "Open Mic",
                        heading: "House Party",
                        bgImage: "/img/events/House-Party.png",
                        date: "7/16/2022",
                        time: "6-9 PM",
                    location: "Quince's Coffee House | 1447 Quince St, Denver, CO 80220",
                        price: "Donation",
                        details: "Music, Yard Games, Open Mic & More!"
                    },
                ]
            }
        }
    };
</script>

<style lang="scss">
.fullscreen-slider-activation {
    .swiper-wrapper {
        max-height: 100vh;
    }
}
</style>