<template>
    <div class="brook-pricing-table-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5">
        <div class="container">
            <div class="row mtn--40">
                <div class="col-lg-4 col-md-6 mt--40" v-for="pricing in data.pricingItems" :key="pricing.id">
                    <PricingItemStyleOne :pricing="pricing" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/pricing.json';

    export default {
        components: {
            PricingItemStyleOne: () => import('../PricingItemStyleOne'),
        },
        data () {
            return {
                data
            }
        }
    };
</script>