<template>
    <div class="icon-box text-center no-border with-padding mt--40">
        <div class="inner">
            <div class="icon">
                <img :src="service.icon" :alt="service.heading">
            </div>
            <div class="content">
                <h5 class="heading heading-h5">{{ service.heading }}</h5>
                <p class="bk_pra">{{ service.desc }}</p>
                <n-link to="/services-classic" class="icon-btn color-red">
                    <span>More details</span>
                    <i class="fa fa-arrow-right"></i>
                </n-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service']
    };
</script>