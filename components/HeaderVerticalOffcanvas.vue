<template>
    <header class="br_header-sidebar">
        <div class="side-header-inner">
            <div class="header-wrap">
                <div class="header-top">
                    <div class="branding">
                        <n-link to="">
                            <img src="/img/logo/simple-dark-logo.png" alt="brand logo">
                        </n-link>
                    </div>
                    <!-- Start MEnu -->
                    <div id="popop-open-menu" class="popop-open-menu hamberger-trigger">
                        <div class="menu-icon" @click="$emit('toggleFullpageMenu')">
                            <i></i>
                        </div>
                    </div>
                    <!-- End MEnu -->
                </div>
                <div class="header-center">
                    <div class="header-social-neworks">
                        <div class="inner">
                            <a href="https://www.facebook.com/"><span>Facebook</span></a>
                            <a href="https://twitter.com/"><span>Twitter</span></a>
                            <a href="https://www.instagram.com/"><span>Instagram</span></a>
                        </div>
                    </div>
                </div>
                <div class="header-bottom">
                    <div class="popup-search-wrap pr_lg--30 pr_md--30 pr_sm--30">
                        <button class="btn-search-click" @click="$emit('toggleSearch')">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                    <!-- Start Hamberger -->
                    <div class="manu-hamber popup-mobile-click d-block d-xl-none gray-version d-block d-xl-none" @click="$emit('togglenav')">
                        <div>
                            <i></i>
                        </div>
                    </div>
                    <!-- End Hamberger -->
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
            
    };
</script>