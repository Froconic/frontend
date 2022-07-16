<template>
    <div class="error404 bg-cover" :style="{ backgroundImage: `url('/img/bg/bg-image-124.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="error-image">
                        <img class="img-fluid" src="/img/others/page-404-image.png" alt="Not Found Image">
                    </div>
                    <h1 class="error-404-title font-weight--light text-white" v-if="error.statusCode === 404">Oops! Page not found!</h1>
                    <h1 class="error-404-title font-weight--light text-white" v-else>An error occurred</h1>
                    <div class="error-buttons section-space--mt_30">
                        <button class="bk-btn theme-btn" @click="$router.go(-1)">
                            <span class="button-text">Go Back</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['error']
    }
</script>

<style lang="scss" scoped>
    .error404 {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        .error-image {
            max-width: 60%;
            margin: auto;
        }
    }
</style>