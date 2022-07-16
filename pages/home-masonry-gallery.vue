<template>

    <div class="main-container">

        <HeaderVerticalOffcanvas @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        
        <div class="page-content ml--100 mr--100 ml_md--50 mr_md--50 ml_sm--30 mr_sm--30 ml_lg--50 mr_lg--50">
            <!-- Start Gallery Area -->
            <div class="brook-gallery-area pt--30 pb--150 pt_md--30 pb_md--80 pt_sm--0 pb_sm--80 bg_color--1 masonry-activation">
                <div class="container-fluid pl--0 pr--0">
                    <div class="row row--0">
                        <div class="col-lg-12">
                            <div class="gallery-wrapper row clearfix mtn--30">
                                <masonry class="w-100"
                                    :cols="{default: 3, 991: 2, 575: 1}"
                                    :gutter="50"
                                    >
                                    <!-- Start Single Gallery -->
                                    <n-link to="/portfolio/portfolio-details">
                                        <div class="masonary-item width-33">
                                            <div class="gallery">
                                                <div class="thumb">
                                                    <img src="/img/gallery/gallery-2/gallery-1.jpg" alt="Gallery Images">
                                                </div>
                                                <div class="hover-overlay yellow-overlay">
                                                    <div class="inner">
                                                        <span class="ion ion-android-add"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </n-link>
                                    <!-- End Single Gallery -->

                                    <!-- Start Single Gallery -->
                                    <n-link to="/portfolio/portfolio-details">
                                        <div class="masonary-item width-33">
                                            <div class="gallery">
                                                <div class="thumb">
                                                    <img src="/img/gallery/gallery-2/gallery-2.jpg" alt="Gallery Images">
                                                </div>
                                                <div class="hover-overlay yellow-overlay">
                                                    <div class="inner">
                                                        <span class="ion ion-android-add"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </n-link>
                                    <!-- End Single Gallery -->

                                    <!-- Start Single Gallery -->
                                    <n-link to="/portfolio/portfolio-details">
                                        <div class="masonary-item width-33">
                                            <div class="gallery">
                                                <div class="thumb">
                                                    <img src="/img/gallery/gallery-2/gallery-3.jpg" alt="Gallery Images">
                                                </div>
                                                <div class="hover-overlay yellow-overlay">
                                                    <div class="inner">
                                                        <span class="ion ion-android-add"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </n-link>
                                    <!-- End Single Gallery -->

                                    <!-- Start Single Gallery -->
                                    <n-link to="/portfolio/portfolio-details">
                                        <div class="masonary-item width-33">
                                            <div class="gallery">
                                                <div class="thumb">
                                                    <img src="/img/gallery/gallery-2/gallery-4.jpg" alt="Gallery Images">
                                                </div>
                                                <div class="hover-overlay yellow-overlay">
                                                    <div class="inner">
                                                        <span class="ion ion-android-add"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </n-link>
                                    <!-- End Single Gallery -->

                                    <!-- Start Single Gallery -->
                                    <n-link to="/portfolio/portfolio-details">
                                        <div class="masonary-item width-33">
                                            <div class="gallery">
                                                <div class="thumb">
                                                    <img src="/img/gallery/gallery-2/gallery-5.jpg" alt="Gallery Images">
                                                </div>
                                                <div class="hover-overlay yellow-overlay">
                                                    <div class="inner">
                                                        <span class="ion ion-android-add"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </n-link>
                                    <!-- End Single Gallery -->

                                    <!-- Start Single Gallery -->
                                    <n-link to="/portfolio/portfolio-details">
                                        <div class="masonary-item width-33">
                                            <div class="gallery">
                                                <div class="thumb">
                                                    <img src="/img/gallery/gallery-2/gallery-6.jpg" alt="Gallery Images">
                                                </div>
                                                <div class="hover-overlay yellow-overlay">
                                                    <div class="inner">
                                                        <span class="ion ion-android-add"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </n-link>
                                    <!-- End Single Gallery -->

                                    <!-- Start Single Gallery -->
                                    <n-link to="/portfolio/portfolio-details">
                                        <div class="masonary-item width-33">
                                            <div class="gallery">
                                                <div class="thumb">
                                                    <img src="/img/gallery/gallery-2/gallery-7.jpg" alt="Gallery Images">
                                                </div>
                                                <div class="hover-overlay yellow-overlay">
                                                    <div class="inner">
                                                        <span class="ion ion-android-add"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </n-link>
                                    <!-- End Single Gallery -->

                                    <!-- Start Single Gallery -->
                                    <n-link to="/portfolio/portfolio-details">
                                        <div class="masonary-item width-33">
                                            <div class="gallery">
                                                <div class="thumb">
                                                    <img src="/img/gallery/gallery-2/gallery-8.jpg" alt="Gallery Images">
                                                </div>
                                                <div class="hover-overlay yellow-overlay">
                                                    <div class="inner">
                                                        <span class="ion ion-android-add"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </n-link>
                                    <!-- End Single Gallery -->
                                </masonry>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Gallery Area -->

            <FooterStyleFour />
        </div>

    </div>

</template>

<script>
    export default {
        components: {
            HeaderVerticalOffcanvas: () => import('@/components/HeaderVerticalOffcanvas'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroPhotoSliderGallery: () => import('@/components/HeroPhotoSliderGallery'),
            FooterStyleFour: () => import('@/components/FooterStyleFour'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
                fullpageOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1');
        },

        head() {
            return {
                title: 'Home Masonry Gallery'
            }
        },
    };
</script>
