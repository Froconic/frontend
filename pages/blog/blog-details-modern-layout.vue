<template>
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcaump-area pt--260 pt_md--200 pt_sm--150 pb--160 pb_sm--100 bg_color--18 breadcaump-title-bar breadcaump-title-white">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcaump-inner text-center">
                            <div class="breadcrumb-insite">
                                <div class="header mb--40 text-center">
                                    <h3 class="heading heading-h3 font-32 text-white">What Motivates You to Work?</h3>
                                    <div class="post-meta mt--20 text-white bk-hover align-items-center d-flex justify-content-center">
                                        <div class="post-date">May 21, 2018</div>
                                        <div class="post-category">
                                            <n-link to="/">Inspiration</n-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Start Blog Details -->
        <div class="brook-blog-details-area space_dec--100 pt_md--80 pt_sm--80">
            <div class="container">
                <div class="row mb--85">

                    <div class="col-lg-12">
                        <div class="blog-modern-layout">
                            <div class="thumbnail mb--60">
                                <img class="w-100" src="/img/blog/big-img/modern-layout.jpg" alt="Multipurpose">
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 order-2 order-lg-1 mt_md--40 mt_sm--40">
                        <div class="blog-post-return-button">
                            <button><i class="fa fa-arrow-left"></i> Back</button>
                        </div>
                    </div>
                    <div class="col-lg-8 order-1 order-lg-2">
                        <div class="blog-details-wrapper">
                            <article class="blog-post blog-modern-layout">
                                <!-- Start Content -->
                                <div class="content basic-dark2-line-1px pb--50 mb--35">
                                    <div class="inner">
                                        <h5 class="heading heading-h5 line-height-1-95 wow move-up">
                                            Each of us respond to different drives and motivations, but there are many drives we can choose from that not only make our careers more fruitful but also more enjoyable. Those people who experience the “Sunday Blues” are in careers which may provide security and certain freedoms, but they lack joy and fulfillment.</h5>
                                        <div class="desc mt--45 mb--50">
                                            <p class="bk_pra wow move-up">Sunday comes around and many of us immediately begin dreading our work week; thereby, ruining the rest of their weekend for ourselves and those we are close with. There is no point in staying in careers that make us miserable. There is so much opportunity in the world. We have to find the correct motivations to go out and make these opportunities happen.</p>
                                        </div>
                                    </div>
                                    <div class="thumbnail wow move-up">
                                        <img class="w-100" src="/img/blog/big-img/standard-post-2.jpg" alt="Multipurpose">
                                    </div>
                                    <div class="desc mt--45">
                                        <p class="bk_pra wow move-up">Initially, the main thing we view as the most worthy motivating force inspiring us to work hard is money. Making money is a noble and necessary motivation which directs us into our careers and motivates us to stay in them. Money is a tool we all need for survival, but earning money also provides us with feelings of status, success and achievement.</p>
                                    </div>

                                    <!-- Start Blockquote -->
                                    <div class="bk-quote-content">
                                        <blockquote class="brook-quote move-up wow">
                                            <div class="quote-text">Music makes one feel so romantic – at least it always gets on one’s nerves –which is the same thing nowadays. ― Oscar Wilde</div>
                                        </blockquote>
                                    </div>
                                    <!-- End Blockquote -->
                                    <div class="desc mt--45">
                                        <p class="bk_pra wow move-up">Money provides us the freedoms we crave in terms of the lifestyles we want to live. The one thing money doesn't’t bring is happiness, as we can see from the many well-known people in our society who appear to have it all, but the decisions they make clearly show us that money is far from the only motivation that drives us to work hard and to feel happy. (Source: entrepreneur.com)</p>
                                    </div>
                                </div>
                                <!-- Start Footer -->
                                <div class="blog-footer wow move-up">
                                    <div class="row">
                                        <div class="col-lg-12 col-12">
                                            <div class="post-tag d-flex align-items-center justify-content-center">
                                                <h6 class="heading heading-h6">TAGS:</h6>
                                                <div class="blog-tag-list pl--5">
                                                    <n-link to="/blog/blog-creative">business</n-link>
                                                    <n-link to="/blog/blog-creative">format</n-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- End Blog Details -->

        <!-- Start Pagination Area -->
        <div class="blog-modern-pagination bg_color--18 ptb--110 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="modern-pagination text-center">
                            <n-link to="/">
                                <p class="bk_pra body-color">Next</p>
                                <div class="title mt--25 mb--40">
                                    <h4 class="heading heading-h4 text-white">4 Best Ways to Keep Inspired</h4>
                                </div>
                                <span class="nav-icon fa fa-arrow-right"></span>
                            </n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Pagination Area -->

        <!-- Start Post Comment Area -->
        <div class="blog-post-review-area bg_color--5 pt--100 pt_sm--60 pt_md--80 pb--100 pb_sm--60 pb_lg--100 pb_md--80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <!-- Start Comment Area -->
                        <div class="comments-wrapper bg_color--1">
                            <div class="inner">
                                <h4 class="heading heading-h4">3 Comments</h4>
                                <div class="commnent-list-wrap mt--25">

                                    <!-- Start Single Comment -->
                                    <div class="comment wow move-up">
                                        <div class="thumb">
                                            <img src="/img/blog/client/client-1.jpg" alt="Multipurpose">
                                        </div>
                                        <div class="content">
                                            <h6 class="heading heading-h6">SCOTT JAMES</h6>
                                            <div class="text mt--10 pr--50 pr_sm--5">
                                                <p class="bk_pra">To link your Facebook and Twitter accounts, open the Instagram app on your phone or tablet, and select the Profile tab in the bottom-right corner of the screen.</p>
                                            </div>
                                            <div class="comment-footer mt--10">
                                                <span>May 17, 2018 at 1:59 am</span>
                                                <span class="reply-btn">
                                                    <button>Reply</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Single Comment -->

                                    <!-- Start Single Comment -->
                                    <div class="comment comment-reply wow move-up">
                                        <div class="thumb">
                                            <img src="/img/blog/client/client-2.jpg" alt="Multipurpose">
                                        </div>
                                        <div class="content">
                                            <h6 class="heading heading-h6">OWEN CHRIST</h6>
                                            <div class="text mt--10 pr--50 pr_sm--5">
                                                <p class="bk_pra">To link your Facebook and Twitter accounts, open the Instagram app on your phone or tablet, and select the Profile tab in the bottom-right corner of the screen.</p>
                                            </div>
                                            <div class="comment-footer mt--10">
                                                <span>May 17, 2018 at 1:59 am</span>
                                                <span class="reply-btn">
                                                    <button>Reply</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Single Comment -->

                                    <!-- Start Single Comment -->
                                    <div class="comment wow move-up">
                                        <div class="thumb">
                                            <img src="/img/blog/client/client-3.jpg" alt="Multipurpose">
                                        </div>
                                        <div class="content">
                                            <h6 class="heading heading-h6">EDNA WATSON</h6>
                                            <div class="text mt--10 pr--50 pr_sm--5">
                                                <p class="bk_pra">To link your Facebook and Twitter accounts, open the Instagram app on your phone or tablet, and select the Profile tab in the bottom-right corner of the screen.</p>
                                            </div>
                                            <div class="comment-footer mt--10">
                                                <span>May 17, 2018 at 1:59 am</span>
                                                <span class="reply-btn">
                                                    <button>Reply</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Single Comment -->

                                </div>
                            </div>
                        </div>
                        <!-- End Comment Area -->

                        <!-- Start Comment Form -->
                        <div class="comment-form-wrapper">
                            <div class="header wow move-up">
                                <h4 class="heading heading-h4">Leave A Comment</h4>
                                <div class="coppent-note mt--20 mb--30">
                                    <p class="bk_pra">Your email address will not be published. Required fields are marked</p>
                                </div>
                            </div>
                            <!-- Start Contact Area -->
                            <div class="contact-form wow move-up">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <input type="text" placeholder="Name *">
                                        </div>

                                        <div class="col-lg-12 mt--30">
                                            <input type="text" placeholder="Email *">
                                        </div>

                                        <div class="col-lg-12 mt--30">
                                            <input type="text" placeholder="Website">
                                        </div>

                                        <div class="col-lg-12 mt--30">
                                            <textarea placeholder="Your Comment"></textarea>
                                        </div>

                                        <div class="col-lg-12 mt--30">
                                            <div class="blog-btn">
                                                <button class="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between">Post Comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- End Contact Area -->

                        </div>
                        <!-- End Comment Form -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Post Comment Area -->

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
                title: 'Blog Details'
            }
        },
    };
</script>