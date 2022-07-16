<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="Team Member" />

        <TeamOne />

        <TeamTwo />

        <div class="brook-team-area bg_color--1 ptb--100 ptb-sm--60 ptb-md--80">
            <TeamCarouselFull />
        </div>

        <TeamThree />

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
            TeamOne: () => import('@/components/sections/TeamOne'),
            TeamTwo: () => import('@/components/sections/TeamTwo'),
            TeamCarouselFull: () => import('@/components/TeamCarouselFull'),
            TeamThree: () => import('@/components/sections/TeamThree'),
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
                        text: 'Team Member',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Team Member'
            }
        },
    };
</script>