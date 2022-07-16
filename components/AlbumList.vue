<template>
    <div class="new-album-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--1">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-xl-6">
                    <div class="thumbnail">
                        <img class="w-100" :src="albumThumb" alt="Multipurpose">
                    </div>
                </div>
                <div class="col-lg-6 col-xl-5 offset-xl-1 mt_md--40 mt_sm--40">
                    <div class="new-album-inner">
                        <h3 class="heading heading-h3 pr--120 pr_md--5 pr_sm--5 wow move-up">{{ albumName }}</h3>
                        <div class="list-wrapper mt--35 mt_lg--25 wow move-up">
                            <!-- Start Single List -->
                            <div class="bk-list--2">
                                <div class="list-header with-number with-number--body" v-for="song in songList" :key="song.id">
                                    <div class="marker">{{ song.no }}</div>
                                    <div class="title-wrap">
                                        <h6 class="heading heading-h5">{{ song.title }}</h6>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single List -->

                            <!-- New Album Button -->
                            <div class="new-album-btn mt--55 mt_lg--25 mt_md--25 mt_sm--25 wow move-up">
                                <n-link class="brook-btn bk-btn-dark red-color-3 btn-sd-size btn-rounded space-between" to="">
                                    <i class="fab fa-apple pr--5"></i>
                                    iTunes
                                </n-link>
                                <n-link class="brook-btn color-green-2 btn-sd-size btn-rounded space-between" to="">
                                    <i class="fab fa-spotify pr--5"></i>
                                    iTunes
                                </n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                albumThumb: "/img/about/home-indie-musician-image-01.jpg",
                albumName: "New album 'Wisdom' is now available worldwide",
                songList: [
                    {
                        id: 1,
                        no: 1,
                        title: "Lion's Wisdom"
                    },
                    {
                        id: 2,
                        no: 2,
                        title: "Power (Ft. Kendrick Lamar & Lance Sky walker)"
                    },
                    {
                        id: 3,
                        no: 3,
                        title: "Chrome (Like Ooh)"
                    },
                    {
                        id: 4,
                        no: 4,
                        title: "Pay Up"
                    },
                    {
                        id: 5,
                        no: 5,
                        title: "Rodin' (Ft. GQ)"
                    },
                    {
                        id: 6,
                        no: 6,
                        title: "Sassy"
                    },
                    {
                        id: 7,
                        no: 7,
                        title: "Nobody (Ft. Anderson .Paak, Black Thought & Moon child)"
                    },
                    {
                        id: 8,
                        no: 8,
                        title: "Black & Ugly (Ft. BJ The Chicago Kid)"
                    },
                    {
                        id: 9,
                        no: 9,
                        title: "You Should Know (Ft. Busta Rhymes)"
                    },
                    {
                        id: 10,
                        no: 10,
                        title: "A Rollercoaster Jam Called Love (Ft. Gwen Bun)"
                    },
                    {
                        id: 11,
                        no: 11,
                        title: "U Used 2 Love Me (Ft. Terrace Martin)"
                    },
                    {
                        id: 12,
                        no: 12,
                        title: "Knock On My Door (Ft. BJ The Chicago Kid)"
                    },
                ]
            }
        }
    };
</script>