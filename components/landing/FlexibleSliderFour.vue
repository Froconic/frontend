<template>
  <div class="flexableimage__wrapper">
    <swiper :options="swiperOption">
      <div class="swiper-slide" v-for="slide in sliders" :key="slide.id">
        <div class="flexale-image">
          <div class="has-center-content">
            <div class="has-centerinner">
              <div class="thumb">
                <img :src="slide.image" :alt="slide.alt">
              </div>
              <div class="content">
                <div class="bkseparator--30"></div>
                <h1 class="heading heading-h1 line-height-1-39">
                  <n-link to="/events" class="accent text-white">
                    {{ slide.title }}
                  </n-link>
                </h1>
                <h6>{{slide.date}}</h6>
                <h6>{{slide.time}}</h6>
                <h6>{{slide.location}}</h6>
                <h6>{{slide.price}}</h6>
                <h6>{{slide.details}}</h6>
                <div class="bkseparator--55"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper>

    <!-- Add Arrows -->
    <button class="swiper-btn swiper-btn-prev">
      <i class="fas fa-angle-left"></i>
    </button>
    <button class="swiper-btn swiper-btn-next">
      <i class="fas fa-angle-right"></i>
    </button>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    speed: 5500,
                    slidesPerView: 2,
                    spaceBetween: 60,
                    loop: true,
                    centeredSlides: true,
                    autoplay: true,
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        992:{
                            slidesPerView: 2,
                            centeredSlides: true,
                        },

                        768:{
                            centeredSlides: false,
                        },

                        576:{
                            slidesPerView : 2,
                            centeredSlides: false,
                        },
                        300:{
                            slidesPerView : 1,
                            centeredSlides: false,
                        }
                    }
                },
                sliders: [
                    {
                        id: 1,
                        title: 'House Party',
                        category: 'Open Mic',
                        image: "/img/events/house-party.png",
                        date: 'July 16th, 2022',
                        time: '6:00-9:00 PM',
                        location: 'Quince Coffee House | 1447 Quince St, Denver, CO 80220',
                        price: 'Donation',
                        details: 'Open Mic, Music, Yard Games & more',
                    },
                ]
            }
        }
    };
</script>

<style>
  /* .canvas-frame {
    border: black 5px solid;
} */
</style>