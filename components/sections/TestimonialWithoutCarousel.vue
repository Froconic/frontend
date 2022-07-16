<template>
    <div class="row mtn--30">
        <div class="col-lg-4 col-md-6 wow move-up mt--30" v-for="testimonial in data.testimonials.slice(0, 6)" :key="testimonial.id">
            <TestimonialItem :testimonial="testimonial" />
        </div>
    </div>
</template>

<script>
    import data from '../../data/testimonial.json';

    export default {
        components: {
            TestimonialItem: () => import('../TestimonialItem')
        },

        data () {
            return {
                data,
            }
        }
    };
</script>