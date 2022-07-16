<template>
  <div class="contact-area ptb--100 ptb-md--80 ptb-sm--60">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-6">
          <div class="contact-wrap neubrutalist">
            <div class="row">
              <div class="col-lg-12">
                <div class="brook-section-title text-center mb--40">
                  <h3 class="heading heading-h3 fw-200">Send us a message</h3>
                  <p class="mt--15">Feel free to reach us if you need any assistance.</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="contact-form">
                  <form id="contact-form">
                    <div class="row">
                      <div class="col-lg-12">
                        <input name="con_name" type="text" placeholder="Name *">
                      </div>

                      <div class="col-lg-12 mt--30">
                        <input name="con_email" type="email" placeholder="Email *">
                      </div>

                      <div class="col-lg-12 mt--30">
                        <input type="text" placeholder="Phone number">
                      </div>

                      <div class="col-lg-12 mt--30">
                        <textarea name="con_message" placeholder="Your message"></textarea>
                      </div>

                      <div class="col-lg-12 mt--30">
                        <input class="accent neubrutalist" type="submit" value="Submit message">
                        <p class="form-messege"></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 offset-xl-1 col-lg-6 mt_md--30 mt_sm--30">
          <div class="row">
            <div class="col-lg-12 mt-5">
              <div class="contact-form bg_color--1 contact-form--2 neubrutalist">
                <h4 class="heading heading-h4">Stay updated</h4>
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
                      <input class="accent neubrutalist" type="submit" placeholder="Subscribe">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>


          <!-- Single Contact Address -->
          <div class="row pt-5">
            <div class="col">
              <div class="single-contact-address">
                <h5 class="title">information</h5>
                <div class="mail-phone">
                  <p><a href="mailto:info@blancanvas.art">info@blancanvas.art</a></p>
                </div>
              </div>
            </div>
            <!-- Single Contact Address -->

            <!-- Single Contact Address -->
            <div class="col">
              <div class="single-contact-address">
                <h5 class="title">Socials</h5>
                <div class="social-share">
                  <!-- <p><a href="https://www.facebook.com/" target="_blank">Facebook</a></p> -->
                  <!-- <p><a href="https://twitter.com/" target="_blank">Twitter</a></p> -->
                  <p><a href="https://www.instagram.com/blancanvas_8" target="_blank">Instagram</a></p>
                </div>
              </div>
            </div>
            <!-- Single Contact Address -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
  };

</script>
