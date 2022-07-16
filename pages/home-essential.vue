<template>
    
    <div class="main-container">

        <HeaderBlack class="bg_color--23 border-bottom" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <HeroEssential />

        <div class="brook-call-to-action bg_color--24 ptb--40">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-md-6">
                        <div class="call-content essential-cta-content text-center text-sm-left">
                            <h3 class="text-white wow move-up">Let’s create something extraordinary together.</h3>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="call-btn text-center text-md-right mt_mobile--20 wow move-up">
                            <n-link to="/contact-us-modern" class="brook-btn bk-btn-white text-theme btn-sd-size essential-btn">Join us now</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <EssentialIconBox />

        <EssentialService />

        <EssentialCaseStudy />

        <EssentialSkillProgress />

        <EssentialTestimonial />

        <PricingItemStyleTwo />

        <ContactUsThree />

        <div class="brook-call-to-action bg_image--61 ptb--120 ptb-md--80 ptb-sm--60" :style="{ backgroundImage:`url('/img/bg/bg-image-61.jpg')` }">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-12">
                        <div class="call-content vertical-call-toaction text-center essential-cta">
                            <h3 class="text-white wow move-up">In love with what we do?</h3>
                            <p class="text-white wow move-up">Let's work together to have new approaches, new ideas and new ways of doing things.</p>
                            <div class="spacing"></div>
                            <div class="call-btn text-center wow move-up">
                                <n-link to="/contact-us-modern" class="brook-btn bk-btn-green text-theme btn-sd-size"> GET IN TOUCH </n-link>
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
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroEssential: () => import('@/components/HeroEssential'),
            EssentialIconBox: () => import('@/components/EssentialIconBox'),
            EssentialService: () => import('@/components/EssentialService'),
            EssentialCaseStudy: () => import('@/components/EssentialCaseStudy'),
            EssentialSkillProgress: () => import('@/components/EssentialSkillProgress'),
            EssentialTestimonial: () => import('@/components/EssentialTestimonial'),
            PricingItemStyleTwo: () => import('@/components/PricingItemStyleTwo'),
            PricingItemStyleTwo: () => import('@/components/PricingItemStyleTwo'),
            ContactUsThree: () => import('@/components/ContactUsThree'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-23', 'template-font-7', 'CerebriSans-font')
        },

        head() {
            return {
                title: 'Home Essential'
            }
        },
    };
</script>