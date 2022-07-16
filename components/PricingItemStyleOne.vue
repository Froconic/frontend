<template>
    <div class="pricing-wrap move-up wow">
        <div class="pricing-box" :class="{'active mtn--40': pricing.active}">
            <div class="header">
                <div class="feature-mark" v-if="pricing.mark">Popular Choice</div>
                <div class="price">
                    <h3 class="currenct">{{ pricing.currency }}</h3>
                    <h3 class="heading headin-h3">{{ pricing.price }}</h3>
                </div>
            </div>
            <div class="content">
                <h5 class="heading heading-h5">{{ pricing.package }}</h5>
                <div class="bk-list--2">
                    <div class="list-header with-ckeck item-available" v-for="heading in pricing.headings" :key="heading.index">
                        <div class="marker"></div>
                        <div class="title-wrap">
                            <h6 class="heading heading-h5">{{ heading }}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer mt--40">
                <button class="brook-btn bk-btn-dark btn-sd-size btn-rounded">Sign up</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pricing']
    };
</script>