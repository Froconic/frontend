<template>
    <div class="brook-icon-boxes-area bg_color--1 pb_lg--50">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-lg-7 pl--350 plr_lg--30 plr_md--50 plr_sm--15">
                    <div class="row mtn--50">
                        <div class="col-sm-6 wow move-up mt--50" v-for="service in data.services.slice(0, 4)" :key="service.id">
                            <div class="icon-box text-left no-border">
                                <div class="inner">
                                    <div class="icon">
                                        <i :class="service.icon"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="heading heading-h5">{{ service.heading }}</h5>
                                        <p class="bk_pra">{{ service.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 mt_md--40 mt_sm--40">
                    <div class="thumb">
                        <img class="w-100" src="/img/service/modern/service-1.jpg" alt="service image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';

    export default {
        data () {
            return {
                data
            }
        }
    };
</script>

<style lang="scss">
    .mtn--50 {
        margin-top: -50px;
    }
</style>