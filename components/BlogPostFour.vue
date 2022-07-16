<template>
    <div class="blog-grid" :class="addClass">
        <div class="post-thumb">
            <n-link :to="`/blog/${blog.slug}`">
                <img :src="blog.image" :alt="blog.title">
            </n-link>
        </div>
        <div class="post-content">
            <div class="post-inner">
                <h4 class="heading heading-h4">
                    <n-link :to="`/blog/${blog.slug}`">
                        {{ blog.title }}
                    </n-link>
                </h4>
                <div class="post-meta">
                    <div class="post-date">{{ blog.date }}</div>
                    <div class="post-category">
                        <n-link v-for="(category, i) in blog.categories.slice(0, 1)" :key="i" :to="`/blog/category/${slugify(category)}`">{{ category }}</n-link>
                    </div>
                </div>
                <div class="desc mt--20">
                    <p class="bk_pra">{{ blog.details }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {slugify} from "~/mixins/slugify";
    
    export default {
        props: ["blog", "addClass"],
        mixins: [slugify]
    };
</script>