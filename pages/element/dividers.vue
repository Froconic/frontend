<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="Dividers" />

        <!-- Start Divider Area -->
        <div class="brook-dividers-area bg_color--1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="dividers-inner">
                            <div class="space"></div>
                            <h5 class="heading heading-h5">Basic thick line</h5>
                            <p class="bk_pra mt--15">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p>
                            <div class="space"></div>
                            <div class="basic-thine-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Divider Area -->

        <!-- Start Divider Area -->
        <div class="brook-dividers-area bg_color--1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="dividers-inner">
                            <div class="space"></div>
                            <h5 class="heading heading-h5">Dash line</h5>
                            <p class="bk_pra mt--15">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p>
                            <div class="space"></div>
                            <div class="basic-dash-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Divider Area -->

        <!-- Start Divider Area -->
        <div class="brook-dividers-area bg_color--1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="dividers-inner">
                            <div class="space"></div>
                            <h5 class="heading heading-h5">Modern dots</h5>
                            <p class="bk_pra mt--15">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p>
                            <div class="space"></div>
                            <div class="text-center">
                                <div class="basic-modern-dots">
                                    <div class="dot first-circle"></div>
                                    <div class="dot second-circle"></div>
                                    <div class="dot third-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Divider Area -->

        <!-- Start Divider Area -->
        <div class="brook-dividers-area bg_color--1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="dividers-inner">
                            <div class="space"></div>
                            <h5 class="heading heading-h5">Thick short line</h5>
                            <p class="bk_pra mt--15">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p>
                            <div class="space"></div>
                            <div class="text-center">
                                <div class="basic-short-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Divider Area -->

        <!-- Start Divider Area -->
        <div class="brook-dividers-area bg_color--1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="dividers-inner">
                            <div class="space"></div>
                            <p class="bk_pra mt--15">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p>
                            <p class="bk_pra mt--15">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p>
                            <div class="space"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Divider Area -->

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

        data () {
            return {
                navOpen: false,
                searchOpen: false,
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Element',
                        to: "/"
                    },
                    {
                        text: 'Dividers',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Dividers'
            }
        },
    };
</script>