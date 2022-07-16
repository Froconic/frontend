<template>
    <div class="main-container">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <!-- Start Hero Slider Area -->
        <div class="hero-item hero-item-corona" :style="{ backgroundImage: `url('/img/corona/slider.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="hero-content-5 left">
                            <h3>Protect yourself <br> & your family from <br> Coronavirus</h3>
                            <p>Stay home, Stay sage and Stay healthy, Maintain at least 1 meter (3 feet) <br> distance between yourself and who is coughing or sneezing</p>
                            <n-link to="/about-us-01" class="brook-btn bk-btn-white btn-sd-size btn-rounded corona-btn space-between">How to Protect</n-link>
                            <n-link to="/contact-us-modern" class="brook-btn bk-btn-theme btn-sd-size btn-rounded corona-btn space-between">Find a Doctor</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Hero Slider Area -->

        <!-- Start Contagion Area -->
        <div class="brook-contagion-area bg_color--1 pt--110 pt_md--80 pt_sm--60 pb--90 pb_md--55 pb_sm--30">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="thumbnail wow move-up animate">
                            <img src="/img/corona/contagion.png" alt="multipurpose">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="contagion-content wow move-up animate">
                            <!-- Section Title Start -->
                            <div class="brook-section-title-corona mb--50">
                                <h2>Contagion of <br> Corona <span class="text-black text-underline">Covid19</span></h2>
                                <p>Stay home, Stay safe and Stay healthy, Maintain at least 1 meter (3 feet) distance between yourself and who is coughing or sneezing</p>
                            </div>
                            <!-- Section Title End -->

                            <!-- Single Contagion Start -->
                            <div class="single-contagion mb--30">
                                <div class="contagion-image">
                                    <img src="/img/corona/contagion1.png" alt="corona">
                                </div>
                                <div class="contagion-content">
                                    <h3 class="title">Human Contact</h3>
                                    <p>Virus is spread mainly from man to man. Hands touch many surfaces and pick up viruses. Once contaminated,  hands can transfer the virus.</p>
                                </div>
                            </div>
                            <!-- Single Contagion End -->
                            <!-- Single Contagion Start -->
                            <div class="single-contagion mb--30">
                                <div class="contagion-image rotate-center">
                                    <img src="/img/corona/contagion2.png" alt="corona">
                                </div>
                                <div class="contagion-content">
                                    <h3 class="title">Air Transmission</h3>
                                    <p>Virus may spread through airborne when tiny Droplets remain in the air, so we have to use mask to prevent this virus Safely and be safe as well as healthy </p>
                                </div>
                            </div>
                            <!-- Single Contagion End -->
                            <!-- Single Contagion Start -->
                            <div class="single-contagion mb--30">
                                <div class="contagion-image">
                                    <img src="/img/corona/contagion3.png" alt="corona">
                                </div>
                                <div class="contagion-content">
                                    <h3 class="title">Contaminated Objects</h3>
                                    <p>Touching a object that has the virus. Grocery stores, Restaurants, Food processing plants, even your  home 
                                        food contamination can happen so have to careful</p>
                                </div>
                            </div>
                            <!-- Single Contagion End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Contagion Area -->

        <!-- About Coronavirus Area Start -->
        <div class="about-coronvirus-area bg_image--137 pt--90 pt_md--70 pt_sm--60 pb--80 pb_md--40 pb_sm--50" :style="{ backgroundImage: `url('/img/bg/bg-image-137.jpg')` }">
            <div class="container-fluid plr--220 plr_lp--15 plr_lg--15 plr_md--15 plr_sm--15">
                <div class="row align-items-center">
                    <div class="col-xl-5 col-lg-6 wow move-up animate">
                        <div class="about-coronavirus-content">
                            <h2>Information about <br> Coronavirus disease</h2>
                            <p class="sub-title">Coronavirus disease (COVID-19) is an infectious disease caused by a new virus, Which is began in Wuhan a city in China.</p>
                            <p class="pragraph">The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
                            <n-link to="/about-us-01" class="brook-btn bk-btn-theme btn-sd-size btn-rounded corona-btn space-between">Learn More</n-link>
                            <a class="video-btn-text play__btn ml--30 ml_sm--10 mt--0 mt_sm--20" href="https://www.youtube.com/watch?v=5DGwOJXSxqg" target="_blank"><i class="fas fa-play"></i> Watch video</a>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6 wow move-up animate">
                        <div class="about-image">
                            <img src="/img/corona/about.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About Coronavirus Area Start -->

        <!-- Coronavirus Symptom Area Start -->
        <div class="coronavirus-symptom pt--110 pt_md--70 pt_sm--50 pb--40 pb_md--50 pb_sm--40">
            <div class="container-fluid plr--220 plr_lp--50 plr_lg--15 plr_md--15 plr_sm--15">
                <div class="row mb--70 mb_md--30 mb_sm--30">
                    <div class="col-12">
                        <!-- Section Title Start -->
                        <div class="brook-section-title-corona text-center wow move-up animate">
                            <h2 class="fw-600">Coronavirus Symptom</h2>
                            <p>This is the symptom of the virus and how can you realize that <br> you are affected by this Coronavirus</p>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-xl-3 col-lg-4 col-md-6 wow move-up animate">
                        <!-- Single symptom Start -->
                        <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
                            <div class="symptom-thumb">
                                <img src="/img/corona/symptom1.png" alt="image">
                            </div>
                            <div class="symptom-content">
                                <h3>Headache</h3>
                                <p>Headache is one of main symptom of causes coronavirus disease</p>
                            </div>
                        </div>
                        <!-- Single symptom End -->

                        <!-- Single symptom Start -->
                        <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
                            <div class="symptom-thumb">
                                <img src="/img/corona/symptom2.png" alt="image">
                            </div>
                            <div class="symptom-content">
                                <h3>Fever</h3>
                                <p>Fever is also one of main symptom of causes coronavirus disease</p>
                            </div>
                        </div>
                        <!-- Single symptom End -->

                        <!-- Single symptom Start -->
                        <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
                            <div class="symptom-thumb">
                                <img src="/img/corona/symptom3.png" alt="image">
                            </div>
                            <div class="symptom-content">
                                <h3>Cough</h3>
                                <p>Cough the is one of main symptom of causes coronavirus disease</p>
                            </div>
                        </div>
                        <!-- Single symptom End -->
                    </div>
                    <div class="col-xl-6 col-lg-4 d-xl-block d-lg-block d-none wow move-up animate">
                        <!-- symptom Image -->
                        <div class="symptom-image text-center">
                            <img src="/img/corona/symptom.png" alt="image">
                        </div>
                        <!-- symptom Image -->
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 wow move-up animate">
                        <!-- Single symptom Start -->
                        <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
                            <div class="symptom-thumb">
                                <img src="/img/corona/symptom4.png" alt="image">
                            </div>
                            <div class="symptom-content">
                                <h3>Sore Throat</h3>
                                <p>Sore Throat is another symptom of causes coronavirus disease</p>
                            </div>
                        </div>
                        <!-- Single symptom End -->

                        <!-- Single symptom Start -->
                        <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
                            <div class="symptom-thumb">
                                <img src="/img/corona/symptom5.png" alt="image">
                            </div>
                            <div class="symptom-content">
                                <h3>Vomit</h3>
                                <p>Vomiting a is one of main symptom of causes coronavirus disease</p>
                            </div>
                        </div>
                        <!-- Single symptom End -->

                        <!-- Single symptom Start -->
                        <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
                            <div class="symptom-thumb">
                                <img src="/img/corona/symptom6.png" alt="image">
                            </div>
                            <div class="symptom-content">
                                <h3>Shortness of Breath</h3>
                                <p>Shortness of breath is the main symptom of coronavirus disease</p>
                            </div>
                        </div>
                        <!-- Single symptom End -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Coronavirus Symptom Area Start -->

        <!-- Coronavirus World Map Area Start -->
        <div class="coronavirus-world-map pb--120 pb_md--80 pb_sm--60">
            <div class="container">
                <div class="row">
                    <div class="col-12 position-relative wow move-up animate">
                        <div class="corona-map-area">
                            <img src="/img/corona/map.jpg" alt="map">
                        </div>
                        <div class="country-area">
                            <div class="single-country one">
                                <div class="country-box">
                                    <div class="animated-dot light-color">
                                        <div class="middle-dot"></div>
                                        <div class="signal"></div>
                                        <div class="signal2"></div>
                                    </div>
                                    <div class="country-number-box">
                                        <div class="country-text">
                                            <p>277,161 <span class="theme-color">Affected</span></p>
                                            <p><span class="theme-color">7,392</span> Deaths</p>
                                        </div>
                                        <div class="country-image">
                                            <img src="/img/corona/country/united-states.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-country two">
                                <div class="country-box">
                                    <div class="animated-dot light-color">
                                        <div class="middle-dot"></div>
                                        <div class="signal"></div>
                                        <div class="signal2"></div>
                                    </div>
                                    <div class="country-number-box">
                                        <div class="country-text">
                                            <p>277,161 <span class="theme-color">Affected</span></p>
                                            <p><span class="theme-color">7,392</span> Deaths</p>
                                        </div>
                                        <div class="country-image">
                                            <img src="/img/corona/country/brazil.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-country three">
                                <div class="country-box">
                                    <div class="animated-dot light-color">
                                        <div class="middle-dot"></div>
                                        <div class="signal"></div>
                                        <div class="signal2"></div>
                                    </div>
                                    <div class="country-number-box">
                                        <div class="country-text">
                                            <p>277,161 <span class="theme-color">Affected</span></p>
                                            <p><span class="theme-color">7,392</span> Deaths</p>
                                        </div>
                                        <div class="country-image">
                                            <img src="/img/corona/country/iran.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-country four">
                                <div class="country-box">
                                    <div class="animated-dot light-color">
                                        <div class="middle-dot"></div>
                                        <div class="signal"></div>
                                        <div class="signal2"></div>
                                    </div>
                                    <div class="country-number-box">
                                        <div class="country-text">
                                            <p>277,161 <span class="theme-color">Affected</span></p>
                                            <p><span class="theme-color">7,392</span> Deaths</p>
                                        </div>
                                        <div class="country-image">
                                            <img src="/img/corona/country/italy.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-country five">
                                <div class="country-box">
                                    <div class="animated-dot light-color">
                                        <div class="middle-dot"></div>
                                        <div class="signal"></div>
                                        <div class="signal2"></div>
                                    </div>
                                    <div class="country-number-box">
                                        <div class="country-text">
                                            <p>277,161 <span class="theme-color">Affected</span></p>
                                            <p><span class="theme-color">7,392</span> Deaths</p>
                                        </div>
                                        <div class="country-image">
                                            <img src="/img/corona/country/china.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-country six">
                                <div class="country-box">
                                    <div class="animated-dot light-color">
                                        <div class="middle-dot"></div>
                                        <div class="signal"></div>
                                        <div class="signal2"></div>
                                    </div>
                                    <div class="country-number-box">
                                        <div class="country-text">
                                            <p>277,161 <span class="theme-color">Affected</span></p>
                                            <p><span class="theme-color">7,392</span> Deaths</p>
                                        </div>
                                        <div class="country-image">
                                            <img src="/img/corona/country/spain.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Coronavirus World Map Area Start -->

        <!-- Prevenetion of Area Start -->
        <div class="prevenation-area bg_image--138 pt--110 pt_md--70 pt_sm--50 pb--40 pb_md--70 pb_sm--60" :style="{ backgroundImage: `url('/img/bg/bg-image-138.jpg')` }">
            <div class="container-fluid plr--220 plr_lp--15 plr_lg--15 plr_md--15 plr_sm--15">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-12">
                        <div class="row mb--50 mb_sm--30">
                            <div class="col-12">
                                <!-- Section Title Start -->
                                <div class="brook-section-title-corona wow move-up animate">
                                    <h2>Prevention of <br> Coronavirus <span class="text-black text-underline">Covid19</span></h2>
                                    <p>Stay home, Stay safe and Stay healthy, Maintain at least 1 meter (3 feet) <br> distance between yourself and who is coughing or sneezing</p>
                                </div>
                                <!-- Section Title End -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-6 wow move-up animate">
                                <!-- Single Prevenation Start -->
                                <div class="single-prevination mb--80 mb_md--30 mb_sm--30">
                                    <div class="prevination-iamge">
                                        <img src="/img/corona/prevent_02.png" alt="">
                                    </div>
                                    <div class="prevination-content">
                                        <h3>Wear a Mask</h3>
                                    </div>
                                </div>
                                <!-- Single Prevenation End -->
                            </div>
                            <div class="col-lg-4 col-md-4 col-6 wow move-up animate">
                                <!-- Single Prevenation Start -->
                                <div class="single-prevination mb--80 mb_md--30 mb_sm--30">
                                    <div class="prevination-iamge">
                                        <img src="/img/corona/prevent_04.png" alt="">
                                    </div>
                                    <div class="prevination-content">
                                        <h3>Avoid close Contact</h3>
                                    </div>
                                </div>
                                <!-- Single Prevenation End -->
                            </div>
                            <div class="col-lg-4 col-md-4 col-6 wow move-up animate">
                                <!-- Single Prevenation Start -->
                                <div class="single-prevination mb--80 mb_md--30 mb_sm--30">
                                    <div class="prevination-iamge">
                                        <img src="/img/corona/prevent_03.png" alt="">
                                    </div>
                                    <div class="prevination-content">
                                        <h3>Stay at Home</h3>
                                    </div>
                                </div>
                                <!-- Single Prevenation End -->
                            </div>
                            <div class="col-lg-4 col-md-4 col-6 wow move-up animate">
                                <!-- Single Prevenation Start -->
                                <div class="single-prevination mb--80 mb_md--30 mb_sm--30">
                                    <div class="prevination-iamge">
                                        <img src="/img/corona/prevent_06.png" alt="">
                                    </div>
                                    <div class="prevination-content">
                                        <h3>Wash your Hand</h3>
                                    </div>
                                </div>
                                <!-- Single Prevenation End -->
                            </div>
                            <div class="col-lg-4 col-md-4 col-6 wow move-up animate">
                                <!-- Single Prevenation Start -->
                                <div class="single-prevination mb--80 mb_md--30 mb_sm--30">
                                    <div class="prevination-iamge">
                                        <img src="/img/corona/prevent_05.png" alt="">
                                    </div>
                                    <div class="prevination-content">
                                        <h3>Cover Coughs & Sneezes</h3>
                                    </div>
                                </div>
                                <!-- Single Prevenation End -->
                            </div>
                            <div class="col-lg-4 col-md-4 col-6 wow move-up animate">
                                <!-- Single Prevenation Start -->
                                <div class="single-prevination mb--80 mb_md--30 mb_sm--30">
                                    <div class="prevination-iamge">
                                        <img src="/img/corona/prevent_01.png" alt="">
                                    </div>
                                    <div class="prevination-content">
                                        <h3>Clean & Disinfect</h3>
                                    </div>
                                </div>
                                <!-- Single Prevenation End -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 wow move-up animate">
                        <div class="prevination-image">
                            <img src="/img/corona/protection.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Prevenetion of Area End -->

        <!-- Faq Area Start -->
        <div class="faq-area pt--120 pt_md--80 pt_sm--60 pb--110 pb_md--40 pb_sm--20">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 wow move-up animate">
                        <div class="faq-content">
                            <h2>Frequently <br> Asked Question <br> for Corona</h2>
                            <p>You can learn information about Corona virus form here. If your have question check here and you can gate the answer. So don't be afraid be sage. moles tie virus.</p>
                            <p>So learn information about Corona virus form here. If your have question check here and you can </p>
                            <n-link to="/contact-us-modern" class="brook-btn bk-btn-theme btn-sd-size btn-rounded corona-btn space-between mt--20">More Questions</n-link>
                        </div>
                    </div>
                    <div class="col-lg-6 wow move-up animate">
                        <div class="bk-accordion-style--2 border-style">
                            <b-card no-body>
                                <b-card-header header-tag="header">
                                    <b-button block v-b-toggle.accordion-11 class="acc-btn">
                                        Digital strategy
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-11" visible accordion="my-accordion">
                                    <b-card-body>
                                        <b-card-text>
                                            We learn from landing page's best practices and great landing pages in order to create a clear, crisp design that suits all your needs for a responsive landing site.
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body>
                                <b-card-header header-tag="header">
                                    <b-button block v-b-toggle.accordion-22 class="acc-btn">
                                        UI/UX design and development
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-22" visible accordion="my-accordion">
                                    <b-card-body>
                                        <b-card-text>
                                            Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body>
                                <b-card-header header-tag="header">
                                    <b-button block v-b-toggle.accordion-33 class="acc-btn">
                                        Brand building 
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-33" visible accordion="my-accordion">
                                    <b-card-body>
                                        <b-card-text>
                                            Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities.
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Faq Area End -->

        <!-- Hand Wash Area Start -->
        <div class="hand-wash-section pb--120 pb_md--80 pb_sm--60">
            <div class="container bg_image--139 bg-image" :style="{ backgroundImage: `url('/img/bg/bg-image-139.jpg')` }">
                <div class="row pt--90 pt_md--50 pt_sm--50 pb--30">
                    <div class="offset-xl-1 col-xl-10">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-12 wow move-up animate">
                                        <div class="brook-section-title-corona mb--80 mb_lg--115 mb_md--30 mb_sm--30">
                                            <h2 class="text-white mb--20">How to wash <br> your Hand</h2>
                                            <a class="video-btn-text play__btn" href="https://www.youtube.com/watch?v=5DGwOJXSxqg" target="_blank">
                                                <i class="fas fa-play"></i>
                                                Watch Video
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 col-6 wow move-up animate">
                                        <div class="single-hand-wash mb--70 mb_md--30 mb_sm--30">
                                            <div class="hand-wash-image">
                                                <img src="/img/corona/hand_03.png" alt="image">
                                            </div>
                                            <div class="hand-wash-content">
                                                <h5>Between Fingers</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-6 wow move-up animate">
                                        <div class="single-hand-wash mb--70 mb_md--30 mb_sm--30">
                                            <div class="hand-wash-image">
                                                <img src="/img/corona/hand_04.png" alt="image">
                                            </div>
                                            <div class="hand-wash-content">
                                                <h5>Rinse your Hand</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-md-6 col-6 wow move-up animate">
                                        <div class="single-hand-wash mb--70 mb_lg--40 mb_md--30 mb_sm--30">
                                            <div class="hand-wash-image">
                                                <img src="/img/corona/hand_01.png" alt="image">
                                            </div>
                                            <div class="hand-wash-content">
                                                <h5>Water & Soap</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-6 wow move-up animate">
                                        <div class="single-hand-wash mb--70 mb_lg--40 mb_md--30 mb_sm--30">
                                            <div class="hand-wash-image">
                                                <img src="/img/corona/hand_02.png" alt="image">
                                            </div>
                                            <div class="hand-wash-content">
                                                <h5>Palm to Palm</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-6 wow move-up animate">
                                        <div class="single-hand-wash mb--70 mb_md--30 mb_sm--30">
                                            <div class="hand-wash-image">
                                                <img src="/img/corona/hand_05.png" alt="image">
                                            </div>
                                            <div class="hand-wash-content">
                                                <h5>Dry your Hand</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-6 wow move-up animate">
                                        <div class="single-hand-wash mb--70 mb_md--30 mb_sm--30">
                                            <div class="hand-wash-image">
                                                <img src="/img/corona/hand_06.png" alt="image">
                                            </div>
                                            <div class="hand-wash-content">
                                                <h5>Hands are Clean</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hand Wash Area End -->

        <!-- Blog Arae Start  -->
        <div class="blog-area bg_color--5 pt--105 pt_md--70 pt_sm--50 pb--120 pb_md--80 pb_sm--60">
            <div class="container">
                <div class="row mb--50 mb_md--30 mb_sm--20">
                    <div class="col-12">
                        <div class="brook-section-title-corona text-center wow move-up animate">
                            <h2 class="fw-600">Latest Update News</h2>
                            <p>This is the symptom of the virus and how can you realize that <br> you are affected by this Coronavirus</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!-- Start Single Blog -->
                    <div class="col-lg-4 col-sm-6 move-up wow mt--30">
                        <div class="blog-grid blog-restaurant">
                            <div class="post-thumb">
                                <n-link to="/blog/blog-details">
                                    <img src="/img/corona/blog1.jpg" alt="blog image">
                                </n-link>
                            </div>
                            <div class="post-content">
                                <div class="post-inner">
                                    <div class="post-categories">
                                        <n-link to="/blog/blog-creative" class="theme-color">Life Style</n-link>
                                    </div>
                                    <h3 class="heading heading-h3">
                                        <n-link to="/blog/blog-details">
                                            Test Coronavirus and be safe of the available
                                        </n-link>
                                    </h3>
                                    <div class="post-meta meta-corona">
                                        <div class="post-date">May 10, 2020</div>
                                        <div class="post-author">by <n-link to="">Owen Christ</n-link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Blog -->
                    <!-- Start Single Blog -->
                    <div class="col-lg-4 col-sm-6 move-up wow mt--30">
                        <div class="blog-grid blog-restaurant">
                            <div class="post-thumb">
                                <n-link to="/blog/blog-details">
                                    <img src="/img/corona/blog2.jpg" alt="blog image">
                                </n-link>
                            </div>
                            <div class="post-content">
                                <div class="post-inner">
                                    <div class="post-categories">
                                        <n-link to="/blog/blog-creative" class="theme-color">Corona</n-link>
                                    </div>
                                    <h3 class="heading heading-h3">
                                        <n-link to="/blog/blog-details">
                                            Researching about Corona of the available
                                        </n-link>
                                    </h3>
                                    <div class="post-meta meta-corona">
                                        <div class="post-date">June 15, 2020</div>
                                        <div class="post-author">by <n-link to="">Owen Christ</n-link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Blog -->
                    <!-- Start Single Blog -->
                    <div class="col-lg-4 col-sm-6 move-up wow mt--30">
                        <div class="blog-grid blog-restaurant">
                            <div class="post-thumb">
                                <n-link to="/blog/blog-details">
                                    <img src="/img/corona/blog3.jpg" alt="blog image">
                                </n-link>
                            </div>
                            <div class="post-content">
                                <div class="post-inner">
                                    <div class="post-categories">
                                        <n-link to="/blog/blog-creative" class="theme-color">Life Style</n-link>
                                    </div>
                                    <h3 class="heading heading-h3">
                                        <n-link to="/blog/blog-details">
                                            Patients are suffering a lot most of the available
                                        </n-link>
                                    </h3>
                                    <div class="post-meta meta-corona">
                                        <div class="post-date">May 21, 2020</div>
                                        <div class="post-author">by <n-link to="">Owen Christ</n-link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Blog -->
                </div>
            </div>
        </div>
        <!-- Blog Arae End -->

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-41', 'template-font-3')
        },

        head() {
            return {
                title: 'Home Corona'
            }
        },
    };
</script>

<style lang="scss" scoped>
    .single-symptom {
        background: url('../static/img/corona/design.png');
        background-color: #F9F2FF;
        background-position: right;
        background-repeat: no-repeat;
    }
</style>