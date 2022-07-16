<template>
    <div class="bk-brand-area bg_color--1 ptb--90 ptb-md--80 ptb-sm--80">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="brand-inner">
                        <div class="brook-section-title text-left">
                            <h3 class="heading heading-h3 font-large">Company Clients</h3>
                            <div class="bkseparator--25"></div>
                            <div class="title-separator w--80 color-red"></div>
                        </div>
                        <div class="bkseparator--45"></div>
                        <h6 class="heading heading-h6 font-16 line-height-1-88 font-medium body-color">Our quality of service assessment involves controlling and managing resources by setting priorities for specific types of clients and projects on the system.</h6>
                        <div class="bkseparator--35"></div>
                        <div class="brand-btn">
                            <n-link to="/contact-us-modern" class="moredetails-btn red-color">
                                Work with us 
                                <i class="fa fa-arrow-right"></i>
                            </n-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1 mt_sm--40 mt_md--40">
                    <div class="brand-wrapper">
                        <div class="brand__list brand-default brand-style--2 no-border">
                            <div class="brand" v-for="brand in data" :key="brand.id">
                                <n-link to="">
                                    <img :src="brand.logo" alt="logo image">
                                </n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/brandLogo.json';
    
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>