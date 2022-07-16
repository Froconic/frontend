<template>
    <div class="main-container">

        <HeaderAbout @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcrumb-area pt--210 pt_lg--200 pt_md--50 pt_sm--50 pb--50 bg_image--54 breadcrumb-title-bar breadcrumb-title-white" :style="{ backgroundImage: `url('/img/bg/bg-image-54.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-center">
                            <h1 class="heading heading-h1">Pricing plans 02</h1>
                            <div class="breadcrumb-insite mt--140 mt_sm--50">
                                <b-breadcrumb class="core-breadcrumb" :items="items"></b-breadcrumb>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-pricing-table-area pt--150 pt_md--80 pt_sm--80 bg_color--1">
            <div class="container">
                <!-- Start Choose Area -->
                <div class="choose-us-area">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="choose-plan-area">
                                <h3 class="heading heading-h3">Choose your plan</h3>
                                <div class="desc mt--25">
                                    <p class="bk_pra">If you are unsure which pricing plan to choose, then register
                                        for a 14-day free trial to start building your business.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-1 col-md-6 col-sm-6 col-12 mt_mobile--40">
                            <div class="plans-about">
                                <h6 class="heading heading-h6 theme-color">About</h6>
                                <div class="desc mt--25">
                                    <p class="bk_pra">We offer competitive rates and amazing pricing plans to help
                                        you find one that fits your needs and budget. If you are unsure which
                                        pricing plan to choose, don’t worry, you can always get a refund from us.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                            <div class="plans-about">
                                <h6 class="heading heading-h6 theme-color">Features</h6>
                                <!-- Start Single List -->
                                <div class="bk-list--2 mt--25 move-up wow">
                                    <div class="list-header with-ckeck">
                                        <div class="marker"></div>
                                        <div class="title-wrap">
                                            <h6 class="heading heading-h5">Business Architecture</h6>
                                        </div>
                                    </div>
                                    <div class="list-header with-ckeck">
                                        <div class="marker"></div>
                                        <div class="title-wrap">
                                            <h6 class="heading heading-h5">Cognitive Architecture</h6>
                                        </div>
                                    </div>

                                    <div class="list-header with-ckeck">
                                        <div class="marker"></div>
                                        <div class="title-wrap">
                                            <h6 class="heading heading-h5">Interior Architecture</h6>
                                        </div>
                                    </div>

                                    <div class="list-header with-ckeck">
                                        <div class="marker"></div>
                                        <div class="title-wrap">
                                            <h6 class="heading heading-h5">Landscape Architecture</h6>
                                        </div>
                                    </div>

                                </div>
                                <!-- End Single List -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Start Pricing Plans -->
        <div class="pricing-plans bg_color--1 pt--50 pb--150">
            <div class="container">
                <div class="row mt--40">
                    <div class="col-lg-12">
                        <form action="#">
                            <!-- Cart Table -->
                            <div class="ht-pricing-list-view table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="pricing-header">
                                                <span class="heading-h4">Available <br> pricing plans</span>
                                            </th>

                                            <th class="pricing-header">
                                                <span class="heading-h6 theme-color">Basic</span>
                                                <div class="price-wrap">
                                                    <div class="price-wrap-inner">
                                                        <span class="currency">$</span>
                                                        <span class="price">59</span>
                                                        <span class="period">/ monthly</span>
                                                    </div>
                                                </div>
                                            </th>

                                            <th class="pricing-header">
                                                <div class="feature-park">Popular Choice</div>
                                                <span class="heading-h6 theme-color">Regular</span>
                                                <div class="price-wrap">
                                                    <div class="price-wrap-inner">
                                                        <span class="currency">$</span>
                                                        <span class="price">59</span>
                                                        <span class="period">/ monthly</span>
                                                    </div>
                                                </div>
                                            </th>

                                            <th class="pricing-header">
                                                <span class="heading-h6 theme-color">Premium</span>
                                                <div class="price-wrap">
                                                    <div class="price-wrap-inner">
                                                        <span class="currency">$</span>
                                                        <span class="price">59</span>
                                                        <span class="period">/ monthly</span>
                                                    </div>
                                                </div>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td class="price-list">
                                                <ul>
                                                    <li><span>Users</span></li>
                                                    <li><span>File storage</span></li>
                                                    <li><span>Premium supports</span></li>
                                                    <li><span>Secure transfer</span></li>
                                                    <li><span>Statistics and tracking</span></li>
                                                    <li><span>File size limit</span></li>
                                                    <li><span>Mobile app</span></li>
                                                    <li>&nbsp;</li>
                                                </ul>
                                            </td>

                                            <td class="price-list">
                                                <ul>
                                                    <li><span>Up to 20 users</span></li>
                                                    <li><span>60 GB</span></li>
                                                    <li><span class="item-checked fa fa-check"></span></li>
                                                    <li>&nbsp;</li>
                                                    <li>&nbsp;</li>
                                                    <li><span>100 GB</span></li>
                                                    <li><span class="item-checked fa fa-check"></span></li>
                                                    <li class="ft--foot">
                                                        <button class="brook-btn bk-btn-dark btn-sd-size btn-rounded">Sign up</button>
                                                    </li>
                                                </ul>
                                            </td>

                                            <td class="price-list">
                                                <ul>
                                                    <li><span>Up to 20 users</span></li>
                                                    <li><span>50</span></li>
                                                    <li><span class="item-checked fa fa-check"></span></li>
                                                    <li><span class="item-checked fa fa-check"></span></li>
                                                    <li>&nbsp;</li>
                                                    <li><span>300 GB</span></li>
                                                    <li><span class="item-checked fa fa-check"></span></li>
                                                    <li class="ft--foot">
                                                        <button class="brook-btn bk-btn-dark btn-sd-size btn-rounded">Sign up</button>
                                                    </li>
                                                </ul>
                                            </td>

                                            <td class="price-list">
                                                <ul>
                                                    <li><span>Up to 20 users</span></li>
                                                    <li><span>50 GB</span></li>
                                                    <li><span>60 GB</span></li>
                                                    <li><span class="item-checked fa fa-check"></span></li>
                                                    <li><span class="item-checked fa fa-check"></span></li>
                                                    <li><span class="item-checked fa fa-check"></span></li>
                                                    <li><span>300 MB</span></li>
                                                    <li class="ft--foot">
                                                        <button class="brook-btn bk-btn-dark btn-sd-size btn-rounded">Sign up</button>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Pricing Plans -->

        <FooterTwo />

    </div>
</template>

<script>
    import data from '../data/pricing.json';
    export default {
        components: {
            HeaderAbout: () => import('@/components/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            PricingItemStyleOne: () => import('../components/PricingItemStyleOne'),
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
                        text: 'Element',
                        to: "/"
                    },
                    {
                        text: 'Pricing Plans 02',
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
                title: 'Pricing Plans 02'
            }
        },
    };
</script>