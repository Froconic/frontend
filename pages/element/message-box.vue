<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="Message Box" />

        <div class="bk-message-box-area ptb--150 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row mtn--30">
                    <div class="col-lg-6 mt--30" v-for="message in messages" :key="message.i">
                        <div class="message-box move-up wow" :class="message.bgClass">
                            <div class="icon">
                                <i :class="message.icon"></i>
                            </div>
                            <div class="content">{{ message.text }}</div>
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
                messages: [
                    {
                        "icon": "fas fa-flag",
                        "text": "Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.",
                        "bgClass": "bg_cat--1"
                    },
                    {
                        "icon": "fas fa-bell",
                        "text": "Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.",
                        "bgClass": "bg_cat--2"
                    },
                    {
                        "icon": "fas fa-check-circle",
                        "text": "Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.",
                        "bgClass": "bg_cat--3"
                    },
                    {
                        "icon": "fas fa-info-circle",
                        "text": "Our quality of service assessment involves controlling and managing resources to ensure customers’ satisfaction.",
                        "bgClass": "bg_cat--4"
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
                        text: 'Message Box',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Message Box'
            }
        },
    };
</script>