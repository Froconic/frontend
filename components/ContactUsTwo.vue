<template>
    <div class="contact-us-area">
        <div class="contauner-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12 bg_color--1 pl--270 pt--160 pb--160 pl_lg--50 pl_md--50 pt_md--80 pb_md--80 pl_sm--30 pr_sm--30 pt_sm--80 pb_sm--80">
                    <div class="contact-address-wrapper">
                        <div class="classic-address text-left">
                            <h4 class="heading heading-h4">Visit our studio at</h4>
                            <div class="desc mt--15">
                                <p class="bk_pra line-height-2-22">2005 Stokes Isle Apt. 896, <br> Vacaville 10010, USA</p>
                            </div>
                        </div>

                        <div class="classic-address text-left mt--60 ">
                            <h4 class="heading heading-h4">Message us</h4>
                            <div class="desc mt--15 mb--80">
                                <p class="bk_pra line-height-2-22">info@yourdomain.com <br> (+68) 120034509</p>
                            </div>
                            <div class="social-share social--transparent">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12 bg_color--5 pt--160 pb--160 pl--60 pr--200 pr_lg--50 pl_md--30 pr_md--50 pr_sm--30 pb_md--80 pt_md--80 pl_sm--30 pt_sm--80 pb_sm--80">
                    <div class="contact-form-inner">
                        <div class="brook-title mb--40">
                            <h4 class="heading heading-h4">Send us a message</h4>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ContactForm: () => import('../components/ContactForm'),
        },
    };
</script>