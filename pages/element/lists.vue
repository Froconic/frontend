<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="Lists" />

        <div class="brook-list-wrapper ptb--150 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <!-- Start Single List -->
                        <div class="bk-list move-up wow">
                            <div class="list-header">
                                <div class="marker"></div>
                                <div class="title-wrap">
                                    <h5 class="heading heading-h5">Modern design</h5>
                                    <p class="bk_pra">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities.</p>
                                </div>
                            </div>
                        </div>
                        <!-- End Single List -->

                        <!-- Start Single List -->
                        <div class="bk-list mt--45 move-up wow">
                            <div class="list-header">
                                <div class="marker"></div>
                                <div class="title-wrap">
                                    <h5 class="heading heading-h5">Unique ideas</h5>
                                    <p class="bk_pra">Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p>
                                </div>
                            </div>
                        </div>
                        <!-- End Single List -->
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                        <!-- Start Single List -->
                        <div class="bk-list--2 mt--45 move-up wow">
                            <div class="list-header" v-for="list in lists" :key="list.i">
                                <div class="marker with-dot"></div>
                                <div class="title-wrap">
                                    <h6 class="heading heading-h5">{{ list.title }}</h6>
                                </div>
                            </div>
                        </div>
                        <!-- End Single List -->
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                        <!-- Start Single List -->
                        <div class="bk-list--2 mt--45 move-up wow">
                            <div class="list-header" v-for="list in lists" :key="list.i">
                                <div class="marker with-dot"></div>
                                <div class="title-wrap">
                                    <h6 class="heading heading-h5">{{ list.title }}</h6>
                                </div>
                            </div>
                        </div>
                        <!-- End Single List -->
                    </div>

                </div>
            </div>
        </div>

        <div class="brook-list-wrapper pb--130 pb_md--80 pb_sm--80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div class="bk-list--2 move-up wow">
                            <div class="list-header with-ckeck" v-for="list in lists" :key="list.i">
                                <div class="marker"></div>
                                <div class="title-wrap">
                                    <h6 class="heading heading-h5">{{ list.title }}</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--40">
                        <div class="bk-list--2 move-up wow">
                            <div class="list-header with-number" v-for="list in lists" :key="list.i">
                                <div class="marker">{{ list.marker }}</div>
                                <div class="title-wrap">
                                    <h6 class="heading heading-h5">{{ list.title }}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                        <div class="bk-list--2 move-up wow">
                            <div class="list-header with-number" v-for="list in lists" :key="list.i">
                                <div class="marker">{{ list.marker }}</div>
                                <div class="title-wrap">
                                    <h6 class="heading heading-h5">{{ list.title }}</h6>
                                </div>
                            </div>
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

        data () {
            return {
                navOpen: false,
                searchOpen: false,
                lists: [
                    {
                        title: 'Business Architecture',
                        marker: 1,
                    },
                    {
                        title: 'Cognitive Architecture',
                        marker: 2,
                    },
                    {
                        title: 'Interior Architecture',
                        marker: 3,
                    },
                    {
                        title: 'Landscape Architecture',
                        marker: 4,
                    },
                    {
                        title: 'UI/UX designs',
                        marker: 5,
                    },
                    {
                        title: 'SEO marketing',
                        marker: 6,
                    }
                ],

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
                        text: 'Lists',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Lists'
            }
        },
    };
</script>