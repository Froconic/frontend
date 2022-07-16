<template>
    <footer class="page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30">
        <div class="bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20">
            <div class="row">
                <div class="col-lg-5 col-xl-7 col-sm-6">
                    <div class="footer-widget">
                        <div class="logo">
                            <n-link to="/">
                                <img src="/img/logo/brook.png" alt="Brand Logo">
                            </n-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-xl-2 col-sm-6 mt_mobile--40">
                    <div class="footer-widget menu--about">
                        <h2 class="widgettitle">About us</h2>
                        <div class="footer-menu">
                            <ul class="ft-menu-list bk-hover">
                                <li>
                                    <n-link to="/about-us-01">About Us</n-link>
                                </li>
                                <li>
                                    <n-link to="/team-grid">Team</n-link>
                                </li>
                                <li>
                                    <n-link to="/career">Career</n-link>
                                </li>
                                <li>
                                    <n-link to="/services-classic">Services</n-link>
                                </li>
                                <li>
                                    <n-link to="/contact-us-modern">Contact</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-3 col-sm-6 mt_md--40 mt_sm--40">
                    <div class="footer-widget menu--contact">
                        <h2 class="widgettitle">Contact</h2>
                        <div class="footer-address bk-hover mb--20">
                            <p>Your address goes here <br> ana ville 10010, USA</p>
                            <p>
                                <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                            </p>
                            <p>
                                <a href="tel:0123456789">0123456789</a>
                            </p>
                        </div>
                        <div class="social-share social--transparent text-white">
                            <a href="https://www.facebook.com/" target="_blank">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://dribbble.com/" target="_blank">
                                <i class="fab fa-dribbble"></i>
                            </a>
                            <a href="https://www.pinterest.com/" target="_blank">
                                <i class="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start Copyright Area -->
        <div class="copyright ptb--50">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="copyright-left text-left">
                        <ul class="bk-copyright-menu d-flex justify-content-center justify-content-md-start bk-hover">
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
                    <div class="copyright-right text-center text-md-right">
                        <p>&copy; 2022 <b>Brook</b> Made with <i class="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/"><b>HasThemes</b></a></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Copyright Area -->
    </footer>
</template>