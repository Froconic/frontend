<template>
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="blog-creative-area pt--70 pb--100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="blog-details-wrapper">
                            <article class="blog-post standard-post">
                                <!-- Start Header -->
                                <div class="header mb--40 text-center">
                                    <h3 class="heading heading-h3 font-32">Why DIY Tools were Rejected by the Market?</h3>
                                    <div class="post-meta mt--20">
                                        <div class="post-date">May 21, 2020</div>
                                        <div class="post-category">
                                            <n-link to="/blog/blog-creative">Life Style</n-link>
                                        </div>
                                    </div>
                                </div>
                                <!-- Start Thumbnail -->
                                <div class="thumbnail mb--60">
                                    <img class="w-100" src="/img/blog/big-img/standard-post.jpg" alt="Blog Image 01">
                                </div>
                                <!-- Start Content -->
                                <div class="content basic-dark2-line-1px pb--50 mb--35">
                                    <div class="inner">
                                        <h5 class="heading heading-h5 line-height-1-95 wow move-up">“With the web design service industry a $20.1B market in the US alone, and more than 16M new websites added every month, who creates these millions of new sites? More than 70% of websites are created in a professional process by developers usingpro-developers platforms. These B2B solutions offer tools for building advanced websites including custom design and CMS (Content Management Systems), such as WordPress, Joomla and Drupal.”</h5>
                                        <div class="desc mt--45 mb--50">
                                            <p class="bk_pra wow move-up">While 70% of websites are built by developers, agencies, andfreelancers, only 3% of websites are built by small-businesses with self-serve DIY tools like Squarespace, Wix, and Weebly. The DIY model has barely putting a dent in the website building market, despite aggressively building out features for over a decade.</p>
                                        </div>
                                    </div>
                                    <div class="thumbnail">
                                        <img class="w-100" src="/img/blog/big-img/standard-post-2.jpg" alt="Blog Image 02">
                                    </div>
                                    <div class="desc mt--45">
                                        <p class="bk_pra wow move-up">Why do businesses still depend on internal teams or service providers, ie agencies and freelancers, to build websites for them? Can’t these feature-rich self-serve platforms provide powerful, easy-to-use tools businesses need to build a site themselves, without needing to depend on “the web guy?” Shouldn’t building a website be as easy as setting up a Facebook.</p>
                                    </div>

                                    <!-- Start Blockquote -->
                                    <div class="bk-quote-content">
                                        <blockquote class="brook-quote move-up wow">
                                            <div class="quote-text">Platform companies are product organizations that think in terms of roadmaps and features and sprints.</div>
                                        </blockquote>
                                    </div>
                                    <!-- End Blockquote -->
                                    <div class="desc mt--45">
                                        <p class="bk_pra wow move-up">While some websites are simple and any luddite can quickly build them with existing DIY tools, many business websites are extremely complex and are custom built by internal teams and / or digital agencies for hundreds of thousands of dollars. Or millions. And, many small businesses just don’t want to learn how to use DIY tools, or don’t care to, or have time to. They’d rather focus on their day to day business. Digital marketing is not their forte or interest.</p>
                                    </div>
                                </div>
                                <!-- Start Footer -->
                                <div class="blog-footer mb--85 wow move-up">
                                    <div class="row">
                                        <div class="col-lg-6 col-sm-6 col-12">
                                            <div class="post-tag d-flex align-items-center">
                                                <h6 class="heading heading-h6">TAGS:</h6>
                                                <div class="blog-tag-list pl--5">
                                                    <n-link to="/blog/blog-creative">business</n-link>
                                                    <n-link to="/blog/blog-creative">format</n-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-6 col-12">
                                            <div class="post-share text-left text-sm-right">
                                                <h6 class="heading heading-h6">SHARE:</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <!-- Start Post Nav Links -->
                            <div class="post-nav-lisnt mb--45 wow move-up">
                                <div class="nav-item previous">
                                    <n-link to="/blog/blog-creative">
                                        <div class="link-text">
                                            <span class="fa fa-arrow-left"></span>
                                            <p class="">Prev</p>
                                        </div>
                                        <span>US Ranks Near Bottom on Development Commitment</span>
                                    </n-link>
                                </div>
                                <div class="nav-item next mt_sm--30">
                                    <n-link to="/blog/blog-creative">
                                        <div class="link-text">
                                            <p class="">Next</p>
                                            <span class="fa fa-arrow-right"></span>
                                        </div>
                                        <span>Career Tips For Emerging Photographers</span>
                                    </n-link>
                                </div>
                            </div>
                            <!-- End Post Nav Links -->

                            <div class="comments-wrapper">
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

                    <div class="col-lg-4 mt_md--40 mt_sm--40">
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
            BlogSidebar: () => import('@/components/BlogSidebar'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },
        
        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
                id: this.$route.params.id,
            }
        },

        mounted () {
            this.data = data.blogs.find(blog => blog.id == this.$route.params.id);

            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Blog Details'
            }
        },
    };
</script>