<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="Icon Boxes" />

        <div class="brook-icon-boxes-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-section-title text-center">
                            <h3 class="heading heading-h3">Style 01</h3>
                        </div>
                    </div>
                </div>
                <div class="row mt--30">
                    <div class="col-lg-4 col-md-6 wow move-up" v-for="service in data.services.slice(0, 3)" :key="service.id">
                        <ServiceItemOne :service="service" />
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-icon-boxes-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-section-title text-center">
                            <h3 class="heading heading-h3">Style 02</h3>
                        </div>
                    </div>
                </div>
                <div class="row mt--30">
                    <div class="col-lg-4 col-md-6 wow move-up" v-for="service in data.services.slice(0, 3)" :key="service.id">
                        <ServiceItemOneWithoutButton :service="service" />
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-icon-boxes-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-section-title text-center">
                            <h3 class="heading heading-h3">Style 03</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 wow move-up mt--70" v-for="service in data.services.slice(0, 3)" :key="service.id">
                        <IconBoxItemOne :service="service" />
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />
        
    </div>
</template>

<script>
    import data from '../../data/service.json';

    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ServiceItemOne: () => import('@/components/ServiceItemOne'),
            ServiceItemOneWithoutButton: () => import('@/components/ServiceItemOneWithoutButton'),
            IconBoxItemOne: () => import('@/components/IconBoxItemOne'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                data,
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
                        text: 'Icon Boxes',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Icon Boxes'
            }
        },
    };
</script>