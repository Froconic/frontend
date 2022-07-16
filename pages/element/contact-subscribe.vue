<template>
  <div class="main-wrapper">

    <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

    <Breadcrumb :items="items" title="Contact & subscribe forms" />

    <div class="brook-contact-form-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="contact-form">
              <form id="contact-form">
                <div class="row">
                  <div class="col-lg-12">
                    <input name="con_name" type="text" placeholder="Name *">
                  </div>

                  <div class="col-lg-12 mt--30">
                    <input name="con_email" type="text" placeholder="Email *">
                  </div>

                  <div class="col-lg-12 mt--30">
                    <input type="text" name="con_phone" placeholder="Phone number">
                  </div>

                  <div class="col-lg-12 mt--30">
                    <textarea name="con_message" placeholder="Your message"></textarea>
                  </div>

                  <div class="col-12 mt--30">
                    <div class="check-box">
                      <input type="checkbox" name="check" id="check">
                      <label for="check">I agree this terms and condition.</label>
                    </div>
                  </div>

                  <div class="col-lg-12 mt--30">
                    <input type="submit" value="Send message">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="brook-contact-form-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--4">
      <div class="container">
        <div class="row">

          <div class="col-md-6">
            <div class="contact-form bg_color--1 contact-form--2">
              <h4 class="heading heading-h4">Newsletter sign-up</h4>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <input type="text" placeholder="Your name">
                  </div>

                  <div class="col-lg-12 mt--30">
                    <input type="email" placeholder="Your e-mail">
                  </div>

                  <div class="col-lg-12">
                    <div class="form-desc"> Sign up to our newsletter for regular updates and
                      more.</div>
                  </div>
                  <div class="col-lg-12 mt--30">
                    <input type="submit" placeholder="Subscribe">
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="col-md-6 pl--140 pl_md--40 pl_sm--5 mt_sm--40">

            <div class="contact-form bg_color--2 contact-form--3">
              <h4 class="heading heading-h4 text-white">Newsletter sign-up</h4>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="input-box mt--30">
                      <input type="email" placeholder="Your e-mail">
                      <button class="fas fa-envelope"></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="contact-form mt--60 contact-form--4">
              <h4 class="heading heading-h4 text-white">Subscribe simple form</h4>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="input-box">
                      <input type="text" placeholder="Your name">
                      <button class="fas fa-envelope"></button>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="input-box mt--20">
                      <input type="email" placeholder="Your e-mail">
                      <button class="fas fa-envelope"></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>

    <FooterTwo />

  </div>
</template>

<script>
  export default {
    components: {
      HeaderElement: () => import('@/components/HeaderElement'),
      OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
      SearchPopup: () => import('@/components/SearchPopup'),
      Breadcrumb: () => import('@/components/Breadcrumb'),
      FooterTwo: () => import('@/components/FooterTwo'),
    },

    data() {
      return {
        navOpen: false,
        searchOpen: false,
        items: [{
            text: 'Home',
            to: "/"
          },
          {
            text: 'Element',
            to: "/"
          },
          {
            text: 'Contact & subscribe forms',
            active: true
          }
        ]
      }
    },

    head() {
      return {
        title: 'Contact & subscribe forms'
      }
    },
  };

</script>
