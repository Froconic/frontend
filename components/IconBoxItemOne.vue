<template>
    <div class="icon-box text-center no-border" :class="addClass">
        <div class="inner">
            <div class="icon">
                <i :class="service.icon"></i>
            </div>
            <div class="content">
                <h5 class="heading heading-h5">{{ service.heading }}</h5>
                <p class="bk_pra">{{ service.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service', 'addClass']
    };
</script>