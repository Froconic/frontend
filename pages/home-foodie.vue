<template>
    <div class="main-container">

        <HeaderForOffCanvas @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" />

        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <!-- Start Slider Area -->
        <div class="brood-slider-area foodie-slider">
            <div class="foodie-slider-inner background-marque">
                <div class="content text-center">
                    <div class="inner">
                        <img src="/img/others/foodie_text.png" alt="Multipurpose">
                        <div class="slider-btn mt--40">
                            <n-link to="/about-us-01" class="brook-btn bk-btn-dark btn-sd-size btn-rounded space-between">Explore Now</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Footer -->
        <footer id="bk-footer-area" class="page-footer pt--75 pb--40 pl--85 pr--85 pl_sm--30 pr_sm--30 pl_md--30 pr_md--30 bg_color--1">

            <!-- Start Copyright Area -->
            <div class="copyright_style--2">
                <div class="row align-items-center">
                    <div class="col-xl-4 col-lg-6 col-sm-12 col-12">
                        <div class="copyright-left text-center text-lg-left">
                            <p class="bk_pra font-16 line-height-1-88 color-dark">Brook Vue Template <br> 
                            © Designed in 2022 by <strong>Hasthemes</strong></p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-sm-12 col-12 mt_md--40 mt_sm--40">
                        <div class="bk-copyright-center">
                            <div class="footer-widget news-bulletin">
                                <div class="inner text-center">
                                    <div class="link bk-hover mb--15">
                                        <h4 class="heading heading-h4"><a class="color-dark" href="mailto:brookstudio@example.com">brookstudio@example.com</a></h4>
                                    </div>
                                    <h6 class="heading heading-h6 letter-spacing-3 color-dark">I WOULD LOVE TO HEAR FROM YOU</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-sm-12 col-12 mt_lg--40 mt_md--40 mt_sm--40">
                        <div class="bk-copyright-right text-center text-lg-right">
                            <p class="bk_pra font-16 color-dark">Follow us on</p>
                            <div class="bkseparator--25"></div>
                            <ul class="social-icon icon-border-rounded style-solid-thin-rounded-icon icon-size-medium text-center text-lg-right">
                                <li class="facebook">
                                    <a href="#" class="link"><i class="fab fa-facebook"></i></a>
                                </li>
                                <li class="twitter">
                                    <a href="#" class="link"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="instagram">
                                    <a href="#" class="link"><i class="fab fa-instagram"></i></a>
                                </li>
                                <li class="dribbble">
                                    <a href="#" class="link"><i class="fab fa-dribbble"></i></a>
                                </li>
                                <li class="pinterest">
                                    <a href="#" class="link"><i class="fab fa-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Copyright Area -->
        </footer>
        <!-- Footer -->

        
    </div>
</template>

<script>
    export default {
        components: {
            HeaderForOffCanvas: () => import('@/components/HeaderForOffCanvas'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
        },

        data() {
            return {
                navOpen: false,
                fullpageOpen: false,
            }
        },

        mounted () {
            const marque = document.querySelector('.background-marque');
            function marqueBg(){
                var t = 0;
                var i = 1;
                setInterval(function () {
                    t += i;
                    marque.style.backgroundPositionX = -t + "px"
                }, 10);  
            }
            marqueBg()
        },

        head() {
            return {
                title: 'Home Foodie'
            }
        },
    };
</script>