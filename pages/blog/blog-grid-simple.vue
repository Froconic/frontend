<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="Blog Grid Simple" />

        <div class="bk-blog-grid-area pt--100 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60">
            <div class="container">
                <div class="row mtn--50">
                    <div class="col-lg-4 col-sm-6 move-up wow mt--50" v-for="blog in data.blogs.slice(3, 15)" :key="blog.id">
                        <BlogPostThree :blog="blog" addClass="grid-simple" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-pagination-wrapper text-center pt--80 pt_sm--50">
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
                </div>
            </div>
        </div>

        <FooterTwo />
        
    </div>
</template>

<script>
    import data from '~/data/blog.json';

    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            BlogPostThree: () => import('@/components/BlogPostThree'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Blog',
                        to: "/"
                    },
                    {
                        text: 'Blog Grid Simple',
                        active: true
                    }
                ]
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Blog Grid Simple'
            }
        },
    };
</script>