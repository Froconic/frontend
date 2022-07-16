<template>
    <div class="service service--1 text-center mt--30">
        <div class="icons">
            <i :class="service.icon"></i>
        </div>
        <div class="content">
            <h4>{{ service.heading }}</h4>
            <p>{{ service.desc }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service']
    };
</script>