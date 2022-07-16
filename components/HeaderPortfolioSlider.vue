<template>
    <fixed-header>
        <header class="br_header header-default header-portfolio-slide position-from--top black-logo--version haeder-fixed-width header-mega-menu clearfix">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="header__wrapper ptb--40 ptb-sm--20 justify-content-between mr--0">
                            <div class="header-left">
                                <div class="simple-logo">
                                    <n-link to="/">
                                        <img src="/img/logo/simple-dark-logo2.png" alt="Brand Logo">
                                    </n-link>
                                </div>
                            </div>

                            <div class="header-right">
                                <div class="manu-hamber hamberger-trigger black-version d-none d-xl-block" @click="$emit('toggleFullpageMenu')">
                                    <div>
                                        <i></i>
                                    </div>
                                </div>

                                <div class="manu-hamber popup-mobile-click black-version d-block d-xl-none" @click="$emit('togglenav')">
                                    <div>
                                        <i></i>
                                    </div>
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
    export default {
        components: {
            FixedHeader
        },
    };
</script>