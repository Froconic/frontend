<template>
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="brook-portfolio-details">
            <div class="container">
                <div class="row pt--100 pb--80">

                    <div class="col-lg-4">
                        <div class="portfolio-left bk-portfolio-details">
                            <div class="portfolio-main-info">
                                <h3 class="heading heading-h3 line-height-1-42">The Ficus House</h3>
                                <div class="portfolio-content mt--75 mb--75 mt_md--40 mb_md--40 mt_sm--40 mb_sm--40">
                                    <h6 class="heading heading-h6">ABOUT THE PROJECT</h6>
                                    <div class="desc mt--20">
                                        <p class="bk_pra">Not only are comics available in printed form, but they’re also available digitally. Printed, on the web, or on an app? Where do you start? If you have a hard time choosing what to read and where to read it, you’re not alone, because the choices are limitless. With print and web and digital options, we now have so many comic books.</p>
                                    </div>
                                </div>
                                <!-- Start Details List -->
                                <div class="portfolio-details-list">

                                    <div class="details-list">
                                        <label>Date</label>
                                        <span>28 Sep 2007</span>
                                    </div>

                                    <div class="details-list">
                                        <label>Client</label>
                                        <span>HighGrove Partners</span>
                                    </div>

                                    <div class="details-list">
                                        <label>Categories</label>
                                        <span>
                                            <n-link to="">Digital</n-link>
                                        </span>
                                    </div>

                                    <div class="details-list">
                                        <label>Awards</label>
                                        <span>2015 Cambridge Impressive Design 2016 Best Design of the Year</span>
                                    </div>

                                </div>
                                <!-- End Details List -->

                                <!-- Start Portfolio Share -->
                                <div class="portfolio-share pt--70 pt_md--40 pt_sm--40">
                                    <h6 class="heading heading-h6">SHARE</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8 mt_md--40 mt_sm--40 pl--100 pl_md--15 pl_sm--15 pr_md--15 pr_sm--15">
                        <div class="portfolio-right portfolio-details-gallery text-center text-md-right">
                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image mb--50">
                                <img class="w-100" src="/img/portfolio/big-image/caption-1.jpg" alt="portfolio">
                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Bring natural plants into your interiors</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image mb--50">
                                <img class="w-100" src="/img/portfolio/big-image/caption-2.jpg" alt="portfolio">
                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Natural light and it's importance on your health</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                            <!-- Start Portfolio Image -->
                            <div class="portfolio-image">
                                <img class="w-100" src="/img/portfolio/big-image/caption-3.jpg" alt="portfolio">
                                <div class="cation-text ptb--20 bg_color--5 text-center">
                                    <p class="bk_pra">Bring natural light into your interiors as a design element</p>
                                </div>
                            </div>
                            <!-- End Portfolio Image -->

                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- Portfolio Nav List -->
                        <div class="portfolio-nav-list pt--50 pb--150 pb_md--80 pb_sm--60 pt_md--5 pt_sm--5">
                            <div class="portfolio-page prev">
                                <div class="inner">
                                    <n-link to="">
                                        <p>Prev</p>
                                        <h3 class="heading heading-h3">Awe-inspiring <br> Projects</h3>
                                    </n-link>
                                </div>
                            </div>
                            <div class="portfolio-page next mt_sm--30">
                                <div class="inner">
                                    <n-link to="">
                                        <p>Next</p>
                                        <h3 class="heading heading-h3">B-sharp High-end <br> Audio</h3>
                                    </n-link>
                                </div>
                            </div>
                        </div>
                        <!-- Portfolio Nav List -->
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    import data from '../../data/portfolio.json';

    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            PortfolioItemCenterCaption: () => import('@/components/PortfolioItemCenterCaption'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },
        
        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Image With Caption'
            }
        },
    };
</script>