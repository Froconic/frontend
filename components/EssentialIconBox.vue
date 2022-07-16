<template>
    <div class="brook-icon-boxes-area ptb--100">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-sm-6" v-for="item in boxList" :key="item.id">
                    <div class="icon-box text-center no-border bg-transparant vibrate-style">
                        <div class="inner">
                            <div class="icon">
                                <i :class="item.icon"></i>
                            </div>
                            <div class="content">
                                <h5 class="heading heading-h5">{{ item.title }}</h5>
                                <p>{{ item.text }}</p>
                            </div>
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
                boxList: [
                    {
                        id: 1,
                        icon: "fa fa-drum",
                        title: "Exceptional",
                        text: "We create an exceptional experience delighting employee and customer"
                    },
                    {
                        id: 2,
                        icon: "fa fa-cloud",
                        title: "Genuine",
                        text: "We are sincere, reliable and trustworthy about our products"
                    },
                    {
                        id: 3,
                        icon: "fa fa-fingerprint",
                        title: "Innovative",
                        text: "We are creative and strive to connect new ideas with business realities"
                    },
                    {
                        id: 4,
                        icon: "fa fa-bookmark",
                        title: "Focus on Impact",
                        text: "We always solve the most important problems to have the biggest impact"
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">

</style>