<template>
    <div class="brook-icon-boxes-area basic-thine-line pb--150 pb_md--80 pb_sm--80">
        <div class="container">
            <div class="row mtn--70">
                <div class="col-12">
                    <div class="row bg_color--1 space_dec--110 poss_relative basic-thick-line-theme-4">
                        <div class="col-lg-4 col-sm-6 wow move-up mt--70" v-for="service in data.services.slice(0, 6)" :key="service.id">
                            <IconBoxItemOne :service="service" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';
 
    export default {
        components: {
            IconBoxItemOne: () => import('../IconBoxItemOne'),
        },

        data () {
            return {
                data
            }
        }
    };
</script>