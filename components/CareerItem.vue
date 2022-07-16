<template>
    <div class="career">
        <div class="inner">
            <div class="title">
                <h3 class="heading heading-h3 theme-color">{{ career.position }}</h3>
            </div>
            <div class="content mt--35">
                <h6 class="heading heading-h6">{{ career.aboutHeading }}</h6>
                <div class="desc mt--25">
                    <p class="bk_pra">Location: {{ career.location }}</p>
                    <div class="bkseparator--25"></div>
                    <p class="bk_pra">{{ career.desc }}</p>
                </div>
            </div>

            <div class="career-list mt--65">
                <h6 class="heading heading-h6">{{ career.requirementHeading }}</h6>
                <div class="bk-list--2 move-up wow mt--35">
                    <div class="list-header with-ckeck" v-for="requirement in career.requirements" :key="requirement.id">
                        <div class="marker dark-color"></div>
                        <div class="title-wrap">
                            <h6 class="heading heading-h5">{{ requirement }}</h6>
                        </div>
                    </div>
                </div>
                <div class="career-btn mt--60">
                    <button class="brook-btn bk-btn-dark btn-sd-size btn-rounded space-between">Apply now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['career']
    };
</script>