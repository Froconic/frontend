<template>
    <div class="blog-grid blog-standard" :class="addClass">
        <div class="post-thumb">
            <n-link :to="`/blog/${blog.slug}`">
                <img :src="blog.image" :alt="blog.title">
            </n-link>
        </div>
        <div class="post-content text-center">
            <div class="post-inner">
                <div class="post-meta mb--10">
                    <div class="post-date">
                        {{ blog.date }}
                    </div>
                    <div class="post-category">
                        <n-link v-for="(category, i) in blog.categories.slice(0, 1)" :key="i" :to="`/blog/category/${slugify(category)}`">{{ category }}</n-link>
                    </div>
                </div>
                <h5 class="heading heading-h5">
                    <n-link :to="`/blog/${blog.slug}`">
                        {{ blog.title }}
                    </n-link>
                </h5>
                <n-link class="post-read-more" :to="`/blog/${blog.slug}`" v-show="readMoreButton"></n-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {slugify} from '~/mixins/slugify';
    export default {
        mixins: [slugify],
        
        props: ["blog", "addClass", "readMoreButton"]
    };
</script>