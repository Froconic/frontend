<template>
    <div class="single-motive-speach text-white">
        <div class="icon">
            <i :class="feature.icon"></i>
        </div>
        <div class="content">
            <h4>{{ feature.heading }}</h4>
            <p>{{ feature.text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["feature"]
    };
</script>