<template>
    <div class="popup-mobile-menu popup-mobile-visiable">
        <div class="mobile-menu-overlay" @click="$emit('togglenav')"></div>
        <div class="inner">
            <div class="mobileheader">
                <div class="logo">
                    <n-link to="/">
                        <img src="/img/logo/header-logo.png" alt="brand logo">
                    </n-link>
                </div>
                <button class="mobile-close" @click="$emit('togglenav')"></button>
            </div>
            <div class="menu-content">
                <MobileNavigation />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            MobileNavigation: () => import('@/components/landing/MobileNavigation'),
        },
    };
</script>

<style>


.popup-mobile-menu .inner .mobileheader {
  background-color: #D7D2C9;
}

.menu-content {
  background-color: #5B5B5B;
  margin: 0;
  padding: 2rem;
}
</style>