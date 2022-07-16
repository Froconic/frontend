<template>
    <div class="blog-grid-area pl--200 pr--200 pl_lg--100 pr_lg--100 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30 bg_color--18 pt--150 pb--150 pt_sm--80 pt_md--60 pb_md--80 pb_sm--80">
        <div class="row">
            <div class="col-lg-12">
                <div class="brook-section-title text-center mb--100 mb_md--40 mb_sm--40 wow move-up">
                    <h6 class="heading heading-h6 text-white font-400">LATEST NEWS</h6>
                    <div class="bkseparator--35"></div>
                    <h2 class="heading heading-h2 text-white">From our blog.</h2>
                </div>
            </div>
        </div>
        <div class="row row--0">
            <div class="col-lg-6 col-xl-4 wow move-up mt_sm--30" v-for="blog in blogs" :key="blog.id">
                <div class="blog-grid-no-flex post-overlay video-with-thumb">
                    <div class="post-thumb">
                        <n-link to="/blog/blog-details">
                            <img class="w-100" :src="blog.image" :alt="blog.heading">
                        </n-link>
                    </div>
                    <div class="post-content position-bottom text-center">
                        <div class="post-inner">
                            <div class="post-meta text-white">
                                <div class="post-date">{{ blog.date }}</div>
                                <div class="post-category">
                                    <n-link to="/blog/blog-creative">{{ blog.category }}</n-link>
                                </div>
                            </div>
                            <h5 class="heading heading-h5 text-white">
                                <n-link to="/blog/blog-details">{{ blog.heading }}</n-link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="blog-btn mt--80 text-center">
                    <n-link to="/blog/blog-creative" class="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between">More blog posts</n-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                blogs: [
                    {
                        id: 1,
                        image: "/img/blog/musian/musian-1.jpg",
                        heading: "An AI can now write indie music",
                        category: "Life Style",
                        date: "May 21, 2020"
                    },
                    {
                        id: 2,
                        image: "/img/blog/musian/musian-2.jpg",
                        heading: "3 Best Indie-rock Bands of All Time",
                        category: "Diigital",
                        date: "June 10, 2020"
                    },
                    {
                        id: 3,
                        image: "/img/blog/musian/musian-3.jpg",
                        heading: "1950s up to now Pop Music Defined",
                        category: "Digital",
                        date: "July 18, 2020"
                    }
                ]
            }
        }
    };
</script>