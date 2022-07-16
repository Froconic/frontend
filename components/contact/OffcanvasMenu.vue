<template>
  <!-- Start Hamberger Menu -->
  <div class="open-hamberger-wrapper d-none d-lg-block" id="popup-fullscreen-menu" :style="{ backgroundImage: `url('/img/bg/menu.jpg')` }">
    <div class="page-close dark-version" @click="$emit('toggleFullpageMenu')"></div>
    <div class="header-default dark-logo--version poss_relative">
      <div class="mainmenu-wrapper">
        <Navigation />
      </div>
    </div>

    <div class="offcanvas-extra-info mt--150">
      <div class="row align-items-end">
        <div class="col-lg-6">
          <div class="info">
            <div class="bk-hover mb--40">
              <h5 class="heading heading-h5 text-black">Connect</h5>
              <div class="bkseparator--20"></div>
              <n-link to="/contact" class="bk_pra font-16 copyright-link">Contact</n-link>
              <p class="bk_pra font-16">
                <a href="mailto:info@yourdomain.com">info@blancanvas.art</a>
              </p>
            </div>
            <ul class="social-icon text-left tooltip-layout icon-size-large">
              <!-- <li class="facebook">
                                <a href="https://www.facebook.com/" target="_blank" class="link hint--bounce hint--top hint--white" aria-label="Facebook">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li class="twitter">
                                <a href="https://twitter.com/" target="_blank" class="link hint--bounce hint--top hint--white" aria-label="Twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li> -->
              <li class="instagram">
                <a href="https://www.instagram.com/blancanvas/" target="_blank" class="link hint--bounce hint--top hint--white" aria-label="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>

          </div>
        </div>
        <div class="col-lg-6">
          <div class="copyright-right text-right">
            <p class="bk_pra font-16">
              &copy; 2022 <b class="text-black">Handcrafted</b> with <i class="fa fa-heart text-danger"></i> by <a class="copyright-link" href="https://froconicdesign.com/"><b class="text-black">Froconic Design</b></a>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
  <!-- End Hamberger Menu -->
</template>

<script>
    export default {
        components: {
            Navigation: () => import ('@/components/landing/Navigation'),
        },
    };
</script>

<style lang="scss" scoped>


    .offcanvas-extra-info {
        .bk_pra {
            color: #5B5B5B;
        }
    }

    .copyright-link {
      color:#5B5B5B;
      transition: ease .3s;
    }

                .copyright-link:hover {
                  color: #fff;
                }
</style>