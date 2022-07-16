<template>
    <fixed-header>
        <header class="br_header header-default header-transparent header-bar position-from--top light-logo--version haeder-fixed-width haeder-fixed-150 headroom--sticky header-mega-menu clearfix" :class="addClass">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="header__wrapper">
                            <!-- Header Left -->
                            <div class="header-left">
                                <div class="logo">
                                    <n-link to="/">
                                        <img src="static\img\logo\Full-Logo.png" alt="Brook Logo">
                                    </n-link>
                                </div>
                            </div>

                            <!-- Header Right -->
                            <div class="header-right">
                                <!-- Start Hamberger -->
                                <div class="manu-hamber hamberger-trigger light-version d-none d-xl-block" @click="$emit('toggleFullpageMenu')">
                                    <div>
                                        <i></i>
                                    </div>
                                </div>
                                <!-- End Hamberger -->

                                 <!-- Start Hamberger -->
                                <div class="manu-hamber popup-mobile-click d-block light-version d-block d-xl-none" @click="$emit('togglenav')">
                                    <div>
                                        <i></i>
                                    </div>
                                </div>
                                <!-- End Hamberger -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </fixed-header>
</template>

<script>
    import FixedHeader from 'vue-fixed-header'
    import Navigation from '@/components/Navigation';

    export default {
        components: {
            FixedHeader,
            Navigation
        },

        props: ['addClass'],
    };
</script>

<style lang="scss" scoped>
    .vue-fixed-header--isFixed {
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        position: fixed !important;
        background-color: rgba(#000, 0.9);
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
        animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;
        padding-top: 0 !important;
    }
</style>