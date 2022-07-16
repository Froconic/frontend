<template>
    <div class="bk-service-area section-pb-120">
        <div class="container">
            <div class="row mtn--40">
                <div class="col-md-4 col-sm-6 mt--40 wow move-up" v-for="service in data.services.slice(6, 9)" :key="service.id">
                    <div class="service service--2">
                        <div class="thumb">
                            <img :src="service.icon" alt="images">
                        </div>
                        <div class="content">
                            <h4>{{ service.heading }}</h4>
                            <p>{{ service.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/service.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>