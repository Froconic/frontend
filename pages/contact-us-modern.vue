<template>
    <div class="main-container">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <ContactUsBreadcrumb />

        <ContactModern />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            ContactUsBreadcrumb: () => import('@/components/ContactUsBreadcrumb'),
            ContactModern: () => import('@/components/sections/ContactModern'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },

        head() {
            return {
                title: 'Contact Us Modern'
            }
        },
    };
</script>