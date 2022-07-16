<template>
    <div class="brook-counterup-area ptb--120 ptb-md--80 ptb-sm--60 bg_color--1 counterup-bg-shape">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-section-title text-center mb--80">
                        <h3 class="heading heading-h3 font-large">{{ sectionTitle }}</h3>
                        <div class="thumb mt--35">
                            <img src="/img/service/icon-box/wavy-icon.png" alt="Multipurpose">
                        </div>
                        <div class="bkseparator--30"></div>
                        <p class="bk_pra font-16 line-height-1-87" v-html="sectionSubTitle"></p>
                    </div>
                </div>
            </div>
            
            <div class="row mtn--40">
                <div class="col-md-4 col-sm-6 mt--40" v-for="counter in counters" :key="counter.id">
                    <div class="brook-counter text-center onepage-counter">
                        <div class="icon">
                            <i :class="counter.icon"></i>
                        </div>
                        <div class="content">
                            <span class="count">{{ counter.count }}</span>
                            <h6 class="heading heading-h6">{{ counter.heading }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                sectionTitle: "Numbers Speak", 
                sectionSubTitle: "Our quality of service assessment involves controlling and managing resources to <br> ensure customers' satisfaction.",
                counters: [
                    {
                        id: 1,
                        icon: "ion-ios-people-outline",
                        heading: "Satisfied clients",
                        count: "99"
                    },
                    {
                        id: 2,
                        icon: "ion-ios-eye-outline",
                        heading: "Unique designs",
                        count: "2034"
                    },
                    {
                        id: 3,
                        icon: "ion-ios-filing-outline",
                        heading: "Completed projects",
                        count: "580"
                    }
                ]
            }
        }
    };
</script>