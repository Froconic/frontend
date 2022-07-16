<template>
    <div class="service service--1 text-center ">
        <div class="icons">
            <i :class="service.icon"></i>
        </div>
        <div class="content">
            <h2>{{ service.heading }}</h2>
            <h4>{{ service.desc }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service']
    };
</script>
