<template>
    <div class="bk-blog-area section-ptb-120 clearfix">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title--between wow move-up">
                        <div class="title">
                            <h3 class="theme-creative">Blog <span>Updates</span></h3>
                        </div>
                        <div class="section-btn mt_mobile--30">
                            <n-link to="/blog/blog-grid-simple" class="button-text">
                                <span>View All Posts</span>
                                <i class="fa fa-arrow-right"></i>
                            </n-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt--40">
                <div class="col-xl-3 col-sm-6 wow move-up mt--30" v-for="blog in data.blogs.slice(3, 7)" :key="blog.id">
                    <BlogPostTwo :blog="blog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/blog.json';

    export default {
        components: {
            BlogPostTwo: () => import('@/components/BlogPostTwo'),
        },

        data () {
            return {
                data
            }
        }
    };
</script>