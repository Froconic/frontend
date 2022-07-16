<template>
    <div class="bk-team-area bg_color--1 pt--110 pb--150 pt_md--40 pt_sm--40 pb_md--80 pb_sm--80 team-bottom-text-image" :style="   {backgroundImage: `url('/img/icons/team.png')`}">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 mt--40">
                    <div class="brook-section-title wow move-up">
                        <h3 class="heading heading-h3 font-large pr--40">Creative Team</h3>
                        <div class="thumb mt--35">
                            <img src="/img/service/icon-box/wavy-icon.png" alt="Multipurpose">
                        </div>
                        <div class="content mt--45">
                            <p class="bk_pra line-height-1-87 font-16">Each member of our team is a specialist in his or her field. Together, we make sure you're receiving the most dedicated services with best quality.</p>
                            <div class="team-button mt--40">
                                <n-link to="/team-grid" class="moredetails-btn">
                                    All members 
                                    <i class="fa fa-arrow-right"></i>
                                </n-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-9">
                    <div class="row">
                        <div class="col-lg-4 col-sm-6 wow move-up mt--40" v-for="(teamMember, index) in teamMembers" :key="index">
                            <div class="team team_style--4">
                                <div class="inner">
                                    <div class="content-header">
                                        <div class="thumb">
                                            <img :src="teamMember.image" :alt="teamMember.alt">
                                        </div>
                                        <div class="social-network">
                                            <div class="social-list">
                                                <a :href="social.url" v-for="(social, index) in teamMember.socials" :key="index">
                                                    <i :class="social.icon"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-body">
                                        <h4 class="heading">{{ teamMember.name }}</h4>
                                        <div class="position">{{ teamMember.position }}</div>
                                    </div>
                                </div>
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
                teamMembers: [
                    {
                        id: 1,
                        name: "Uzzal Hossain",
                        position: "Developer",
                        image: "/img/team/team-4/team-member-alt-01.png",
                        alt: "team member",
                        socials: [
                            {
                                url: "https://www.facebook.com/",
                                icon: "fab fa-facebook"
                            },
                            {
                                url: "https://twitter.com/",
                                icon: "fab fa-twitter"
                            },
                            {
                                url: "https://www.instagram.com/",
                                icon: "fab fa-instagram"
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Cynthia Casey",
                        position: "Marketing",
                        image: "/img/team/team-4/team-member-alt-02.png",
                        alt: "team member",
                        socials: [
                            {
                                url: "https://www.facebook.com/",
                                icon: "fab fa-facebook"
                            },
                            {
                                url: "https://twitter.com/",
                                icon: "fab fa-twitter"
                            },
                            {
                                url: "https://www.instagram.com/",
                                icon: "fab fa-instagram"
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Terry Myers",
                        position: "Marketing",
                        image: "/img/team/team-4/team-member-alt-03.png",
                        alt: "team member",
                        socials: [
                            {
                                url: "https://www.facebook.com/",
                                icon: "fab fa-facebook"
                            },
                            {
                                url: "https://twitter.com/",
                                icon: "fab fa-twitter"
                            },
                            {
                                url: "https://www.instagram.com/",
                                icon: "fab fa-instagram"
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Eva Byrd",
                        position: "Designer",
                        image: "/img/team/team-4/team-member-alt-04.png",
                        alt: "team member",
                        socials: [
                            {
                                url: "https://www.facebook.com/",
                                icon: "fab fa-facebook"
                            },
                            {
                                url: "https://twitter.com/",
                                icon: "fab fa-twitter"
                            },
                            {
                                url: "https://www.instagram.com/",
                                icon: "fab fa-instagram"
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Phillip Butler",
                        position: "Marketing",
                        image: "/img/team/team-4/team-member-alt-05.png",
                        alt: "team member",
                        socials: [
                            {
                                url: "https://www.facebook.com/",
                                icon: "fab fa-facebook"
                            },
                            {
                                url: "https://twitter.com/",
                                icon: "fab fa-twitter"
                            },
                            {
                                url: "https://www.instagram.com/",
                                icon: "fab fa-instagram"
                            }
                        ]
                    },
                    {
                        id: 6,
                        name: "Erik Murray",
                        position: "Marketing",
                        image: "/img/team/team-4/team-member-alt-06.png",
                        alt: "team member",
                        socials: [
                            {
                                url: "https://www.facebook.com/",
                                icon: "fab fa-facebook"
                            },
                            {
                                url: "https://twitter.com/",
                                icon: "fab fa-twitter"
                            },
                            {
                                url: "https://www.instagram.com/",
                                icon: "fab fa-instagram"
                            }
                        ]
                    }
                ]
            }
        }
    };
</script>