<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="Call to action banners" />

        <!-- Start Call To Action -->
        <div class="brook-call-to-action bg_color--3 ptb--70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-6 col-12">
                        <div class="call-content text-center text-sm-left">
                            <h3 class="heading heading-h3 text-white wow move-up">Horizontal solid #1</h3>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12">
                        <div class="call-btn text-center text-sm-right mt_mobile--20 wow move-up">
                            <n-link to="/contact-us-modern" class="brook-btn bk-btn-white text-theme btn-sd-size btn-rounded">Find out more</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Call To Action -->

        <!-- Start Call To Action -->
        <div class="brook-call-to-action bg_color--2 ptb--70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-6 col-12">
                        <div class="call-content text-center text-sm-left">
                            <h3 class="heading heading-h3 text-white wow move-up">Horizontal solid #2</h3>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12">
                        <div class="call-btn text-center text-sm-right mt_mobile--20 wow move-up">
                            <n-link to="/contact-us-modern" class="brook-btn bk-btn-white text-theme btn-sd-size btn-rounded">Find out more</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Call To Action -->

        <!-- Start Call To Action -->
        <div class="brook-call-to-action bg_color--1 ptb--70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-6 col-12">
                        <div class="call-content text-center text-sm-left">
                            <h3 class="heading heading-h3 wow move-up">Horizontal solid #3</h3>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12">
                        <div class="call-btn text-center text-sm-right mt_mobile--20 wow move-up">
                            <n-link to="/contact-us-modern" class="brook-btn bk-btn-theme btn-sd-size btn-rounded">Find out more</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Call To Action -->

        <!-- Start Call To Action -->
        <div class="brook-call-to-action bg_image--9 ptb--70" :style="{backgroundImage: `url('/img/bg/bg-image-9.jpg')`}">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-6 col-12">
                        <div class="call-content text-center text-sm-left">
                            <h3 class="heading heading-h3 text-white wow move-up">Horizontal solid #4</h3>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12">
                        <div class="call-btn text-center text-sm-right mt_mobile--20 wow move-up">
                            <n-link to="/contact-us-modern" class="brook-btn bk-btn-theme btn-sd-size btn-rounded">Find out more</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Call To Action -->

        <!-- Start Call To Action -->
        <div class="brook-call-to-action bg_color--3 ptb--120 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-12">
                        <div class="call-content vertical-call-toaction text-center">
                            <h3 class="heading heading-h3 text-white wow move-up">Vertical solid #1</h3>
                            <div class="spacing"></div>
                            <div class="call-btn text-center wow move-up">
                                <n-link to="/contact-us-modern" class="brook-btn bk-btn-white text-theme btn-sd-size btn-rounded">Find out more</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Call To Action -->

        <!-- Start Call To Action -->
        <div class="brook-call-to-action bg_color--2 ptb--120 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-12">
                        <div class="call-content vertical-call-toaction text-center">
                            <h3 class="heading heading-h3 text-white wow move-up">Vertical solid #2</h3>
                            <div class="spacing"></div>
                            <div class="call-btn text-center wow move-up">
                                <n-link to="/contact-us-modern" class="brook-btn bk-btn-white text-theme btn-sd-size btn-rounded">Find out more</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Call To Action -->

        <!-- Start Call To Action -->
        <div class="brook-call-to-action bg_color--1 ptb--120 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-12">
                        <div class="call-content vertical-call-toaction text-center">
                            <h3 class="heading heading-h3 wow move-up">Vertical solid #3</h3>
                            <div class="spacing"></div>
                            <div class="call-btn text-center wow move-up">
                                <n-link to="/contact-us-modern" class="brook-btn bk-btn-theme btn-sd-size btn-rounded">Find out more</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <!-- End Call To Action -->

        <!-- Start Call To Action -->
        <div class="brook-call-to-action bg_image--10 ptb--120 ptb-md--80 ptb-sm--60" data-black-overlay="5" :style="{ backgroundImage: `url('/img/bg/bg-image-10.jpg')`}">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-12">
                        <div class="call-content vertical-call-toaction text-center">
                            <h3 class="heading heading-h3 text-white wow move-up">Vertical solid #4</h3>
                            <div class="spacing"></div>
                            <div class="call-btn text-center wow move-up">
                                <n-link to="/contact-us-modern" class="brook-btn bk-btn-white text-theme btn-sd-size btn-rounded">Find out more</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Call To Action -->

        <!-- Start Call To Action -->
        <div class="brook-call-to-action bg_image--10 ptb--120 ptb-md--80 ptb-sm--60" data-overlay="8" :style="{ backgroundImage: `url('/img/bg/bg-image-10.jpg')`}">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-12">
                        <div class="call-content vertical-call-toaction text-center">
                            <h3 class="heading heading-h3 text-white wow move-up">Vertical solid #4</h3>
                            <div class="spacing"></div>
                            <div class="call-btn text-center wow move-up">
                                <n-link to="/contact-us-modern" class="brook-btn bk-btn-white text-theme btn-sd-size btn-rounded">Find out more</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Call To Action -->
        
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
                        text: 'Call to action banners',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Call to action banners'
            }
        },
    };
</script>