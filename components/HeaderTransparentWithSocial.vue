<template>
    <fixed-header>
        <header class="br_header header-default header-transparent pt--15 light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="header__wrapper mr--0">
                            <!-- Header Left -->
                            <div class="header-left flex-20">
                                <div class="logo">
                                    <n-link to="/">
                                        <img src="/img/logo/brook-white.png" alt="Brook Logo">
                                    </n-link>
                                </div>
                            </div>
                            <!-- Mainmenu Wrap -->
                            <div class="header-flex-right flex-80">
                                <div class="mainmenu-wrapper have-not-flex d-none d-lg-block">
                                    <Navigation />
                                </div>

                                <div class="header-right have-not-flex d-sm-flex pl--35">
                                    <!-- Start Social Icon -->
                                    <ul class="social-icon icon-size-medium text-center tooltip-layout d-none d-sm-flex">
                                        <li class="facebook">
                                            <a href="https://www.facebook.com/" class="link hint--bounce hint--top hint--white" aria-label="Facebook"><i class="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="twitter">
                                            <a href="https://twitter.com/" class="link hint--bounce hint--top hint--white" aria-label="Twitter"><i class="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="instagram">
                                            <a href="https://www.instagram.com/" class="link hint--bounce hint--top hint--white" aria-label="Instagram"><i class="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <!-- End Social Icon -->
                                    <!-- Start Hamberger -->
                                    <div class="manu-hamber popup-mobile-click d-block d-lg-none light-version pl_md--20 pl_sm--20" @click="$emit('togglenav')">
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
    };
</script>

<style lang="scss">
    .vue-fixed-header--isFixed {
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9;
        position: fixed !important;
        background-color: #333;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
        animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;
        padding-top: 0;
        .mainmenu-wrapper .page_nav ul.mainmenu li.lavel-1 {
            padding: 20px 0;
        }
    }
</style>