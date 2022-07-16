<template>
    <div class="bk-blog-grid-area bg_color--1 ptb--150 ptb-md--80 ptb-sm--80">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-section-title text-center">
                        <h3 class="heading heading-h3 font-large">Sharing your thoughts everyday</h3>
                        <div class="bkseparator--25"></div>
                        <div class="title-separator w--80 color-red"></div>
                    </div>
                </div>
            </div>
            <div class="row mt--20">
                <div class="col-lg-4 col-sm-6 move-up wow mt--40" v-for="blog in data.blogs.slice(4, 7)" :key="blog.id">
                    <BlogPostThree :blog="blog" addClass="grid-simple" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import data from '../../data/blog.json';

    export default {
        components: {
            BlogPostThree: () => import('@/components/BlogPostThree'),
        },

        data () {
            return {
                data
            }
        }
    };
</script>