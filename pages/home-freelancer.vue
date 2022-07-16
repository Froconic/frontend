<template>
    
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="freelancer-wrapper bg_image--27" :style="{ backgroundImage: `url('/img/bg/bg-image-27.jpg')` }">
            <div class="row">
                <div class="col-lg-6">
                    <div class="freelancer-left">
                        <!-- Start About Area -->
                        <div class="freelancer-about-area pb--130">
                            <div class="inner wow move-up">
                                <h2 class="heading heading-h2 font-50 font-400 line-height-1-62">
                                    <span class="theme-color">Hello.</span> My name is Blake Gallene.
                                </h2>
                                <div class="thumb mt--55">
                                    <img class="w-100" src="/img/about/about-7.jpg" alt="about image">
                                </div>
                                <div class="bkseparator--40"></div>
                                <h4 class="heading heading-h4">About me</h4>
                                <div class="bkseparator--30"></div>
                                <p class="bk_pra">I focus on creating creative, original, and conceptual works for editorial illustrations, magazines, covers, and brands as well as online visual organizations. Through constant learning and improving, my works excel in designing.</p>
                                <div class="bkseparator--40"></div>
                                <div class="signeture">
                                    <img src="/img/icons/singneture2.png" alt="about image">
                                </div>
                            </div>
                        </div>
                        <!-- End About Area -->

                        <!-- Start Blog Area -->
                        <div class="freelancer-blog-area">
                            <div class="brook-section-title wow move-up">
                                <h2 class="heading heading-h2 font-50 font-400 line-height-1-62">My blog.</h2>
                            </div>
                            <div class="freelancer-blog-wrapper">
                                <div class="blog-grid blog-standard padding-left-none wow move-up mt--70" v-for="blog in blog.blogs.slice(0, 2)" :key="blog.id">
                                    <div class="post-thumb">
                                        <n-link :to="`/blog/${blog.slug}`">
                                            <img :src="blog.image" :alt="blog.title">
                                        </n-link>
                                    </div>
                                    <div class="post-content">
                                        <div class="post-inner">
                                            <h4 class="heading heading-h4 hover-yellow-color">
                                                <n-link :to="`/blog/${blog.slug}`">
                                                    {{ blog.title }}
                                                </n-link>
                                            </h4>
                                            <div class="post-meta">
                                                <div class="post-date">
                                                    {{ blog.date }}
                                                </div>
                                                <div class="post-category hover-yellow-color">
                                                    <n-link to="/blog/blog-creative">{{ blog.category }}</n-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Blog Area -->

                        <!-- Start Contact Area -->
                        <div class="freelancer-contact-area pb--100 pt--150">
                            <div class="contact-inner">
                                <div class="brook-section-title wow move-up">
                                    <h2 class="heading heading-h2 font-50 font-400 line-height-1-62">Message me.</h2>
                                </div>
                                <div class="content">
                                    <div class="bkseparator--25"></div>
                                    <p class="bk_pra pr--40 wow move-up">If you have any questions at all about starting a blog or website after reading the guide, please do not hesitate to contact me below. </p>
                                    <div class="freelancer-contact mt--40">
                                        <h5 class="heading bk-hover heading-h5 font-400 line-height-1-39 wow move-up">
                                            <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                                        </h5>
                                        <div class="bkseparator--20"></div>
                                        <h5 class="heading bk-hover heading-h5 font-400 line-height-1-39 wow move-up">
                                            <a href="tel:(+68)120034509">(+68) 120034509</a>
                                        </h5>
                                        <div class="view-more-btn heding-color font-600 mt--55 wow move-up">
                                            <n-link to="/contact-us-modern">
                                                <span>More details</span> 
                                                <span class="btn-arrow"></span>
                                            </n-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Contact Area -->

                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="freelancer-right pb--100">
                        <!-- Start Portfolio Area -->
                        <div class="freelancer-portfolio">
                            <div class="brook-section-title text-left text-lg-right mb--55">
                                <h2 class="heading heading-h2 font-50 font-400 line-height-1-62 wow move-up">Some of my works.</h2>
                            </div>

                            <div class="portfolio portfolio_style--1 mt--30 wow move-up" v-for="portfolio in portfolioData.portfolioItems.slice(0, 7)" :key="portfolio.id">
                                <div class="thumb">
                                    <img :src="portfolio.image" alt="Portfolio Images">
                                </div>
                                <div class="port-overlay-info">
                                    <div class="hover-action">
                                        <h3 class="post-overlay-title">
                                            <n-link :to="`/portfolio/${portfolio.slug}`">
                                                {{ portfolio.heading }}
                                            </n-link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Portfolio Area -->
                    </div>
                </div>
            </div>
        </div>

        <footer id="page-footer-wrapper" class="page-footer bg_color--4">
            <div class="copyright">
                <div class="container ptb--40">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="copyright-left text-md-left text-center">
                                <ul class="bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap">
                                    <li>
                                        <n-link to="/blog/blog-creative">Our Blogs</n-link>
                                    </li>
                                    <li>
                                        <n-link to="/portfolio/portfolio-grid-boxed">Latest Projects</n-link>
                                    </li>
                                    <li>
                                        <n-link to="/contact-us-modern">Contact Us</n-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="copyright-right text-md-right text-center">
                                <p>&copy; 2022 <b>Brook</b> Made with <i class="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/"><b>HasThemes</b></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>

</template>

<script>

    import blog from '../data/blog.json'
    import portfolioData from '../data/portfolio.json'

    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
        },

        data () {
            return {
                blog,
                portfolioData,
                navOpen: false,
                searchOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-4', 'template-font-1')
        },

        head() {
            return {
                title: 'Home Freelancer'
            }
        },
    };
</script>