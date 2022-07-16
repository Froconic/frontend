<template>
    <div class="brook-service-area bg_color--13">
        <div class="row align-items-center">
            <div class="col-xl-7">
                <div class="row startupservice-wrapper mtn--40">
                    <div class="col-lg-6 mt--40" v-for="feature in data.features" :key="feature.id">
                        <FeatureItemStyleOne :feature="feature" />
                    </div>
                </div>
            </div>
            <div class="col-xl-5">
                <div class="clint-succeed bg_image--24 ptb--220 ptb-md--80 ptb-lg--80 ptb_lp--130 ptb-sm--60" data-black-overlay="9" :style="{ backgroundImage: `url('/img/bg/bg-image-24.jpg')` }">
                    <div class="row align-items-center plr_md--40 plr_sm--40">
                        <div class="col-lg-4">
                            <client-only>
                                <silent-box :image="videos[0]">
                                    <template v-slot:silentbox-item>
                                        <div class="video-btn">
                                            <div class="play__btn">
                                                <div class="video-icon second-icon yellow-color-2"></div>
                                            </div>
                                        </div>
                                    </template>
                                </silent-box>
                            </client-only>
                        </div>
                        <div class="col-lg-8">
                            <div class="content pr--30 pr_sm--0">
                                <h3 class="heading heading-h3 font-32 text-white line-height-1-88">We help our clients succeed by delivering products that improve life, work and play.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/features.json';

    export default {
        components: {
            FeatureItemStyleOne: () => import('@/components/FeatureItemStyleOne'),
        },
        data () {
            return {
                data,
                videos: [
                    {
                        src: 'https://www.youtube.com/watch?v=9No-FiEInLA',
                        thumbnail: ""
                    }
                ],
            }
        }
    };
</script>