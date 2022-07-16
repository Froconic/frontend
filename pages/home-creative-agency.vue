<template>
    
    <div class="main-container bg_color--4">

        <Header @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <HeroAgency />

        <AboutAgency />

        <ServiceAgency />

        <FeaturedProjects />

        <AgencyCounterup />

        <TestimonialFour />

        <BlogTwo />

        <Firefly />

        <FooterAgency />

    </div>

</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroAgency: () => import('@/components/HeroAgency'),
            AboutAgency: () => import('@/components/AboutAgency'),
            ServiceAgency: () => import('@/components/ServiceAgency'),
            FeaturedProjects: () => import('@/components/FeaturedProjects'),
            AgencyCounterup: () => import('@/components/AgencyCounterup'),
            TestimonialFour: () => import('@/components/sections/TestimonialFour'),
            BlogTwo: () => import('@/components/sections/BlogTwo'),
            Firefly: () => import('@/components/Firefly'),
            FooterAgency: () => import('@/components/FooterAgency'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false
            }
        },

        head() {
            return {
                title: 'Home Creative Agency'
            }
        },
    };
</script>