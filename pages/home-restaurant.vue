<template>

    <div class="main-container">

        <HeaderVerticalRestaurant @togglenav="navOpen = !navOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        
        <div class="page-content left-vertical-header">

            <HeroRestaurant />

            <!-- Start About Area -->
            <div class="brook-about-area bg_color--1 ptb--120 ptb-md--80 ptb-sm--60">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-4 col-lg-6 col-md-12">
                            <div class="about-inner authenthick-about pr--30">
                                <div class="brook-section-title-restaurant text-left mb--50">
                                    <h3 class="theme-color">Discover</h3>
                                    <div class="bkseparator--10"></div>
                                    <h3 class="title">our story</h3>
                                </div>
                                <p class="font-size-18 wow move-up">Serving the local with over 10 years of experience, the restaurant offers our signatures, Mediterranean and European cuisines. Our simple philosophy: Delicious food, great value and excellent service to every customer.</p>
                                <div class="bkseparator--30"></div>

                                <div class="view-more-btn heding-color heading-font theme-color wow move-up">
                                    <n-link to="" class="brook-btn bk-btn-theme btn-sd-size space-between">Book A Table</n-link>
                                </div>

                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-6 offset-xl-1 col-md-12">
                            <div class="about-thumb text-center text-lg-right mt_md--40 mt_sm--40">
                                <img src="/img/restaurant/home-restaurant-about-image.jpg" alt="Multipurpose">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End About Area -->

            <!-- Icon Box Area Start -->
            <div class="brook-icon-boxes-area pb--100 pb_md--80 pb_sm--60">
                <div class="container">
                    <div class="row">
                        <!-- Single Icon Box Start -->
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div class="icon-box text-center no-border bg-transparant vibrate-style">
                                <div class="inner">
                                    <div class="icon">
                                        <img src="/img/restaurant/home-restaurant-box-image-01.png" alt="Brook">
                                    </div>
                                    <div class="content">
                                        <h5 class="heading heading-h5"> Quick Breakfast</h5>
                                        <p>Start the day with a full and balanced breakfast including local breakfast specialties.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Single Icon Box End -->
                        <!-- Single Icon Box Start -->
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div class="icon-box text-center no-border bg-transparant vibrate-style">
                                <div class="inner">
                                    <div class="icon">
                                        <img src="/img/restaurant/home-restaurant-box-image-02.png" alt="Brook">
                                    </div>
                                    <div class="content">
                                        <h5 class="heading heading-h5">  Healthy Dinner</h5>
                                        <p>Enjoy your leisurely dinner and go home feeling full, and satisfied that you spent the night at such a great place.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Single Icon Box End -->
                        <!-- Single Icon Box Start -->
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div class="icon-box text-center no-border bg-transparant vibrate-style">
                                <div class="inner">
                                    <div class="icon">
                                        <img src="/img/restaurant/home-restaurant-box-image-03.png" alt="Brook">
                                    </div>
                                    <div class="content">
                                        <h5 class="heading heading-h5"> Innovative</h5>
                                        <p>We are creative and strive to connect new ideas with business realities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Single Icon Box End -->
                    </div>
                </div>
            </div>
            <!-- Icon Box Area End -->

            <!-- Start Product Area -->
            <div class="brook-product-area pb--150 pb_md--80 pb_sm--60 bg_color--1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="brook-section-title-restaurant text-center mb--50">
                                <h3 class="theme-color">Mediterranean</h3>
                                <div class="bkseparator--10"></div>
                                <h3 class="title">Cuisine</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <ProductTab />
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Product Area -->

            <!-- Start Food Menu Area -->
            <div class="food-menu-area">
                <div class="container">
                    <div class="row no-gutters left-bg-image" :style="{ backgroundImage: `url('/img/restaurant/home-restaurant-menus-lunch-set.jpg')` }">
                        <div class="col-lg-6">
                        </div>
                        <div class="col-lg-6">
                            <div class="food-menu-wrap">
                                <div class="brook-section-title-restaurant text-center mb--50">
                                    <h3 class="theme-color">Mediterranean</h3>
                                    <div class="bkseparator--10"></div>
                                    <h3 class="title">lunch set</h3>
                                </div>
                                <div class="menu-list-wrap">
                                    <ul class="menu-list">
                                        <li class="menu-item">
                                            <div class="menu-header">
                                                <h5 class="menu-title">Authentic Greek Salad</h5>
                                                <div class="menu-separator"></div>
                                                <div class="menu-price">$20.00</div>
                                            </div>
                                            <div class="menu-text">
                                                Tomato, Cucumber, Red onion, Red bell pepper, Olive oil
                                            </div>
                                        </li>
                                        <li class="menu-item">
                                            <div class="menu-header">
                                                <h5 class="menu-title">Authentic Greek Salad</h5>
                                                <div class="menu-separator"></div>
                                                <div class="menu-price">$20.00</div>
                                            </div>
                                            <div class="menu-text">
                                                Tomato, Cucumber, Red onion, Red bell pepper, Olive oil
                                            </div>
                                        </li>
                                        <li class="menu-item">
                                            <div class="menu-header">
                                                <h5 class="menu-title">Authentic Greek Salad</h5>
                                                <div class="menu-separator"></div>
                                                <div class="menu-price">$20.00</div>
                                            </div>
                                            <div class="menu-text">
                                                Tomato, Cucumber, Red onion, Red bell pepper, Olive oil
                                            </div>
                                        </li>
                                        <li class="menu-item">
                                            <div class="menu-header">
                                                <h5 class="menu-title">Authentic Greek Salad</h5>
                                                <div class="menu-separator"></div>
                                                <div class="menu-price">$20.00</div>
                                            </div>
                                            <div class="menu-text">
                                                Tomato, Cucumber, Red onion, Red bell pepper, Olive oil
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Food Menu Area -->

            <!-- Start Food Menu Area -->
            <div class="food-menu-area pt--280 pt_md--240 pt_sm--220 pb--160 pb_md--80 pb_sm--10">
                <div class="container">
                    <div class="row no-gutters right-bg-image" :style="{ backgroundImage: `url('/img/restaurant/home-restaurant-menus-starters-set.jpg')` }">
                        <div class="col-lg-6">
                            <div class="food-menu-wrap content-top">
                                <div class="brook-section-title-restaurant text-center mb--50">
                                    <h3 class="theme-color">Mediterranean</h3>
                                    <div class="bkseparator--10"></div>
                                    <h3 class="title">Starters</h3>
                                </div>
                                <div class="menu-list-wrap">
                                    <ul class="menu-list">
                                        <li class="menu-item">
                                            <div class="menu-header">
                                                <h5 class="menu-title">Authentic Greek Salad</h5>
                                                <div class="menu-separator"></div>
                                                <div class="menu-price">$20.00</div>
                                            </div>
                                            <div class="menu-text">
                                                Tomato, Cucumber, Red onion, Red bell pepper, Olive oil
                                            </div>
                                        </li>
                                        <li class="menu-item">
                                            <div class="menu-header">
                                                <h5 class="menu-title">Authentic Greek Salad</h5>
                                                <div class="menu-separator"></div>
                                                <div class="menu-price">$20.00</div>
                                            </div>
                                            <div class="menu-text">
                                                Tomato, Cucumber, Red onion, Red bell pepper, Olive oil
                                            </div>
                                        </li>
                                        <li class="menu-item">
                                            <div class="menu-header">
                                                <h5 class="menu-title">Authentic Greek Salad</h5>
                                                <div class="menu-separator"></div>
                                                <div class="menu-price">$20.00</div>
                                            </div>
                                            <div class="menu-text">
                                                Tomato, Cucumber, Red onion, Red bell pepper, Olive oil
                                            </div>
                                        </li>
                                        <li class="menu-item">
                                            <div class="menu-header">
                                                <h5 class="menu-title">Authentic Greek Salad</h5>
                                                <div class="menu-separator"></div>
                                                <div class="menu-price">$20.00</div>
                                            </div>
                                            <div class="menu-text">
                                                Tomato, Cucumber, Red onion, Red bell pepper, Olive oil
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6"> 
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Food Menu Area -->

            <!-- Start Book Table Area -->
            <div class="book-table-area bg_image--62 pt--100 pt_md--80 pt_sm--60" :style="{ backgroundImage: `url('/img/bg/bg-image-62.jpg')` }">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="brook-section-title-restaurant text-center mb--50">
                                <h3 class="color-white">your night, your service</h3>
                                <div class="bkseparator--10"></div>
                                <h3 class="title color-white">BOOK A TABLE.</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="book-table-form">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-input mb--50">
                                                <input name="con_name" type="text" placeholder="Name *">
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-input mb--50">
                                                <input name="con_email" type="text" placeholder="Email *">
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-input mb--50">
                                                <input name="con_phone" type="text" placeholder="Phone Number *">
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-input mb--50">
                                                <input name="con_calander" type="date" placeholder="Phone Number *">
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-input mb--50">
                                                <select name="time" id="time">
                                                    <option value="Reservation Time">Reservation Time</option>
                                                    <option value="12.00 AM">12.00 AM</option>
                                                    <option value="01.00 AM">01.00 AM</option>
                                                    <option value="02.00 AM">02.00 AM</option>
                                                    <option value="03.00 AM">03.00 AM</option>
                                                    <option value="04.00 AM">04.00 AM</option>
                                                    <option value="05.00 AM">05.00 AM</option>
                                                    <option value="06.00 AM">06.00 AM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="single-input mb--50">
                                                <select name="people" id="count">
                                                    <option value="People">People</option>
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                    <option value="06">06</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row align-items-center">
                                        <div class="col-lg-8 col-md-8">
                                            <div class="table-notice">
                                                <p>* For more than 10+ people please contact us via phone</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 text-md-right">
                                            <button class="brook-btn bk-btn-theme btn-sd-size space-between">Book A Table</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Book Table Area -->

            <BlogRestaurant />

            <div class="google-map-area bg_color--1 section text-center">
                <GoogleMap />
            </div>

            <FooterTwo class="pl-0 pr-0" />

        </div>

    </div>

</template>

<script>
    export default {
        components: {
            HeaderVerticalRestaurant: () => import('@/components/HeaderVerticalRestaurant'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroRestaurant: () => import('@/components/HeroRestaurant'),
            ProductTab: () => import('@/components/ProductTab'),
            BlogRestaurant: () => import('@/components/BlogRestaurant'),
            GoogleMap: () => import('@/components/GoogleMap'),
            FooterTwo: () => import('@/components/FooterTwo')
        },

        data() {
            return {
                navOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-24', 'template-font-7', 'CerebriSans-font')
        },

        head() {
            return {
                title: 'Home Restaurant'
            }
        },
    };
</script>