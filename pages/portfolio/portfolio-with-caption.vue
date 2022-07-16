<template>
    <div class="main-container">

        <HeaderBlack addClass="header-transparent" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcaump-area pt--260 pb--80 pt_md--200 pt_sm--150 bg_color--5 breadcaump-title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcaump-inner text-center">
                            <h1 class="heading heading-h1">Portfolio With Caption</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--5">
            <div class="container">
                <div class="row mtn--30">
                    <div class="col-lg-4 col-sm-6 mt--30" v-for="portfolio in data.portfolioItems" :key="portfolio.id">
                        <PortfolioItemCaptionBottom :portfolio="portfolio" />
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
            PortfolioItemCaptionBottom: () => import('@/components/PortfolioItemCaptionBottom'),
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
                title: 'Portfolio With Caption'
            }
        },
    };
</script>