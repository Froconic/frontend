<template>
    <div class="bk-accordion-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1">
        <div class="container">
            <div class="row">
                <!-- Start Single Accordion -->
                <div class="col-md-6">
                    <div class="brook-section-title mb--50 mb_sm--20 mb_md--20">
                        <h3 class="heading heading-h3">What we do</h3>
                    </div>
                    <div class="bk-accordion-style--2" id="accordionExampl3">
                        <b-card no-body>
                            <b-card-header header-tag="header">
                                <b-button block v-b-toggle.accordion-1 class="acc-btn">
                                    Digital strategy
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion">
                                <b-card-body>
                                    <b-card-text>
                                        We learn from landing page's best practices and great landing pages in order to create a clear, crisp design that suits all your needs for a responsive landing site.
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header">
                                <b-button block v-b-toggle.accordion-2 class="acc-btn">
                                    UI/UX design and development
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-2" visible accordion="my-accordion">
                                <b-card-body>
                                    <b-card-text>
                                        Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header">
                                <b-button block v-b-toggle.accordion-3 class="acc-btn">
                                    Brand building 
                                </b-button>
                            </b-card-header>
                            <b-collapse id="accordion-3" visible accordion="my-accordion">
                                <b-card-body>
                                    <b-card-text>
                                        Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities.
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </div>
                <!-- End Single Accordion -->

                <!-- Start Single Accordion -->
                <div class="col-md-6 mt_sm--30">
                    <div class="thumb">
                        <img class="w-100" src="/img/about/about-2.jpg" alt="about images">
                    </div>
                </div>
                <!-- End Single Accordion -->
            </div>
        </div>
    </div>
</template>