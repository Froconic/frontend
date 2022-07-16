<template>
  <div class="brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--60 bg_image--60 m-5 neubrutalist">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="brook-section-title text-center mb--70">
            <h6 class="heading-13 theme-color text-uppercase fw-500"></h6>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="testimonial-wrapper">
            <div class="testimonial-container pb--30">
              <div class="testimonial testimonial--creative">
                <div class="brook-element-carousel nav-content">
                  <swiper :options="swiperOption">
                    <div class="swiper-slide testimonial testimonial_style--4" v-for="quote in quotes" :key="quotes.id">
                      <div class="content">
                        <p class="text-uppercase">{{ quote.text }}</p>
                        <div class="quote-info">
                          <div class="clint-info">
                            <h6>- {{ quote.name }}</h6>
                            <span>{{ quote.modality }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper>
                  <!-- add pagination -->
                  <div class="swiper-pagination swiper-dots-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        speed: 2500,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },

      quotes: [{
        "id": 1,
        "name": "Oscar Wilde",
        "modality": "Poet",
        "text": "Be yourself, everyone else is already taken."
      },
      {
        "id": 2,
        "name": "Henry Ford",
        "modality": "Magnate",
        "text": "If you think you can do a thing or think you can’t do a thing, you’re right."
      },
      {
        "id": 3,
        "name": "Henry David Thoreau",
        "modality": "Philosopher",
        "text": "Go confidently in the direction of your dreams. Live the life you have imagined."
      }
      ]
    }
  }
};

</script>
