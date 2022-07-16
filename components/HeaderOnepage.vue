<template>
    <FixedHeader>
        <header class="br_header header-default one-page-header light-logo-version headroom--sticky clearfix">
            <div class="header-wrapper">
                <div class="header-left-wrapper">
                    <div class="branding">
                        <div class="logo">
                            <n-link to="/">
                              <!-- LOGO -->
                                <img src="/img/logo/simple-light-logo.png" alt="brook logo">
                            </n-link>
                        </div>
                    </div>
                    <div class="header-left-inner">
                        <div class="header-page-menu-style-2 d-none d-xl-block">
                            <div class="manu-hamber-2 hamberger-trigger" @click="$emit('toggleFullpageMenu')">
                                <div>
                                    <i></i>
                                </div>
                            </div>
                        </div>
                        <div class="header-page-menu-style-2 d-block d-xl-none">
                            <div class="manu-hamber-2 popup-mobile-click" @click="$emit('togglenav')">
                                <div>
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="header-right-wrapper d-none d-sm-block">
                    <div class="header-text text-right">
                        <h5 class="heading heading-h5 font-20 text-white"> 
                            <span class="fa fa-bus"></span> 
                            We are Fifteen LTD
                        </h5>
                    </div>
                </div>
            </div>
        </header>
    </FixedHeader>
</template>

<script>
    import FixedHeader from 'vue-fixed-header'

    export default {
        components: {
            FixedHeader,
        },
    };
</script>

<style>

</style>