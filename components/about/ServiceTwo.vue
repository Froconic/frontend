<template>
  <div class="brook-icon-boxes-area space_dec--100 pt_md--80 pt_sm--60">
    <div class="container">
      <div class="row">
        <div class="col wow move-up" v-for="service in data.services.slice(0, 3)" :key="service.id">
          <ServiceItemOneWithoutButton :service="service" class="neubrutalist" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import data from '../../data/about.json';

    export default {
        components: {
            ServiceItemOneWithoutButton: () => import('../about/ServiceItemOneWithoutButton'),
        },

        data () {
            return {
                data
            }
        }
    };
</script>