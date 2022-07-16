<template>
    <div class="main-container">

        <HeaderForOffCanvasBlack @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <MinimalMetroGrid />

        <footer class="page-footer bg_color--1 pl--150 pr--150 pl_lp--40 pr_lp--40 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--20 pr_sm--20 pl_mobile--20 pr_mobile--20">
            <div class="bk-footer-inner pt--150 pb--100 pt_sm--80 pb_sm--40 pt_md--80 pb_md--40">
                <div class="row">
                    <div class="col-lg-6 col-xl-6">
                        <div class="bk-footer-widget">
                            <h3 class="heading heading-h3 line-height-1-39">Start working on a <br> new project?</h3>
                        </div>
                    </div>

                    <div class="col-lg-6 col-xl-5 offset-xl-1">
                        <div class="bk-footer-widget menu--contact mt_md--30 mt_sm--30">
                            <h5 class="heading heading-h5 line-height-1-2">Contact us</h5>
                            <div class="bkseparator--35"></div>
                            <div class="footer-address">
                                <div class="row">
                                    <div class="col-lg-7 col-sm-6">
                                        <p class="bk_pra line-height-1-63 color-dark">Your address goes here
                                            <br> Vacaville 10010, USA</p>
                                        <div class="social-share social--transparent mt--45">
                                            <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                                            <a href="https://twitter.com/explore" target="_blank"><i class="fab fa-twitter"></i></a>
                                            <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                                            <a href="https://dribbble.com/" target="_blank"><i class="fab fa-dribbble"></i></a>
                                            <a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-sm-6 mt_mobile--30">
                                        <p class="bk_pra line-height-1-63 bk-hover">
                                            <a class="color-dark" href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                                        </p>
                                        <p class="bk_pra line-height-1-63 bk-hover">
                                            <a class="color-dark" href="tel:0123456789">0123456789</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Start Copyright Area -->
            <div class="copyright ptb--50">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="copyright-left text-md-left text-center">
                            <ul class="bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap">
                                <li>
                                    <n-link to="/blog/blog-creative" class="color-dark">Our Blogs</n-link>
                                </li>
                                <li>
                                    <n-link to="/portfolio/portfolio-grid-boxed" class="color-dark">Latest Projects</n-link>
                                </li>
                                <li>
                                    <n-link to="/contact-us-modern" class="color-dark">Contact Us</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="copyright-right text-md-right text-center">
                            <p class="color-dark">&copy; 2022 <b>Brook</b> Made with <i class="fa fa-heart text-danger"></i> by <b>HasThemes</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Copyright Area -->
        </footer>

    </div>
</template>

<script>

    export default {
        components: {
            HeaderForOffCanvasBlack: () => import('@/components/HeaderForOffCanvasBlack'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            MinimalMetroGrid: () => import('@/components/MinimalMetroGrid'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
                fullpageOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-17', 'template-font-1')
        },

        head() {
            return {
                title: 'Home Minimal Portfolio'
            }
        },
    };
</script>