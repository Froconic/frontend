<template>
    <div class="blog-sidebar-container">
        <div class="blog-sidebar-wrapper">
            <!-- Start Single Widget -->
            <div class="bl-sidebar search">
                <h5 class="widget-title">Search</h5>
                <form class="inner">
                    <div class="search-box">
                        <input type="text" placeholder="Enter search keyword…">
                        <button><span class="fa fa-search"></span></button>
                    </div>
                </form>
            </div>
            <!-- End Single Widget -->

            <!-- Start Single Widget -->
            <div class="bl-sidebar category mt--50 wow move-up">
                <h5 class="widget-title">Categories</h5>
                <div class="inner">
                    <ul class="category-list">
                        <li v-for="(category, i) in categories" :key="i">
                            <n-link :to="`/blog/category/${slugify(category)}`">{{ category }}</n-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- End Single Widget -->

            <!-- Start Single Widget -->
            <div class="bl-sidebar banner mt--50 wow move-up">
                <div class="inner">
                    <div class="thumb">
                        <img class="w-100" src="/img/blog/big-img/banner-image.jpg" alt="banner">
                    </div>
                    <div class="content">
                        <h4 class="heading heading-h4 text-white">Spot for banner</h4>
                        <div class="banner-btn mt--25">
                            <button class="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Single Widget -->

            <!-- Start Single Widget -->
            <div class="bl-sidebar tag mt--50 wow move-up">
                <h5 class="widget-title">Tags</h5>
                <div class="inner">
                    <ul class="tagcloud">
                        <li v-for="(tag, i) in tags" :key="i">
                            <n-link :to="`/blog/tag/${tag}`">{{ tag }}</n-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- End Single Widget -->

            <!-- Start Single Widget -->
            <div class="bl-sidebar instagram mt--50 wow move-up">
                <h5 class="widget-title">Instagram</h5>
                <client-only>
                    <InstagramPost addClass="instagram-grid-5 inner" />
                </client-only>
            </div>
            <!-- End Single Widget -->
        </div>
    </div>
</template>

<script>
    import data from '~/data/blog.json';

    export default {
        components: {
            InstagramPost: () => import('@/components/InstagramPost'),
        },

        data () {
            return {
                data
            }
        },

        computed: {
            categories() {
                return [...new Set(this.data.blogs.map(item => item.categories).flat())]
            },
            tags() {
                return [...new Set(this.data.blogs.map(item => item.tags).flat())]
            }
        },

        methods: {
            slugify(text) {
                return text
                    ?.toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-") // Replace spaces with -
                    .replace(/[^\w-]+/g, "") // Remove all non-word chars
                    .replace(/--+/g, "-") // Replace multiple - with single -
                    .replace(/^-+/, "") // Trim - from start of text
                    .replace(/-+$/, ""); // Trim - from end of text
            }
        },
    };
</script>