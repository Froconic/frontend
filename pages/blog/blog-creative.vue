<template>
    <div class="main-container">

        <HeaderBlack addClass="header-transparent" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcrumb-area pt--260 pb--80 pt_md--200 pt_sm--150 bg_color--5 breadcrumb-title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-center">
                            <h1 class="heading heading-h1">Creative List</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="blog-creative-area bg_color--5 pt--70 pb--100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 pr--100 pr_lg--15 pr_md--15 pr_sm--15 mtn--70">
                        <div class="creative-blog wow move-up mt--70" v-for="blog in data.blogs.slice(16, 20)" :key="blog.id">
                            <BlogPostFour :blog="blog" addClass="blog-creative" />
                        </div>

                        <div class="brook-pagination-wrapper text-center pt--80">
                            <paginate
                                :page-count="4"
                                :page-range="3"
                                :margin-pages="2"
                                :prev-text="'Prev'"
                                :next-text="'Next'"
                                :container-class="'brook-pagination'"
                                :page-class="'page-item'">
                            </paginate>
                        </div>
                    </div>

                    <div class="col-lg-4 pl--40 pl_lg--15 pl_md--15 pl_sm--15 mt_md--40 mt_sm--40">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    import data from '../../data/blog.json'
    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BlogPostFour: () => import('@/components/BlogPostFour'),
            BlogSidebar: () => import('@/components/BlogSidebar'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },
        
        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Blog Creative List'
            }
        },
    };
</script>