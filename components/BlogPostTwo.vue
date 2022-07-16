<template>
    <div class="blog blog-style--2 creative--blog">
        <div class="thumb">
            <n-link :to="`/blog/${blog.slug}`">
                <img :src="blog.image" :alt="blog.title">
            </n-link>
        </div>

        <div class="blog-content">
            <div class="content">
                <h3 class="the-title">
                    <n-link :to="`/blog/${blog.slug}`">{{ blog.title }}</n-link>
                </h3>
                <ul class="meta">
                    <li>{{ blog.date }}</li>
                    <li>
                        <n-link to="/blog/blog-creative">{{ blog.category }}</n-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blog']
    };
</script>