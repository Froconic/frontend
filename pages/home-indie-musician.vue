<template>
    <div class="main-container">

        <HeaderTransparentWithSocial />

        <OffCanvasMobileMenu />

        <HeroIndieMusician />

        <AlbumList />

        <MusicianBlog />

        <MusicianCountdown />

        <MusicianGallery />

        <MusicianMixTapes />

        <div class="brook-social-icon bg_color--20 ptb--80 ptb-sm--80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="social-icon icon-size-large text-center tooltip-layout move-up wow">
                            <li>
                                <a href="https://twitter.com/" class="link hint--bounce hint--top hint--white" aria-label="Twitter" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" class="link hint--bounce hint--top hint--white" aria-label="Instagram" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://dribbble.com/" class="link hint--bounce hint--top hint--white" aria-label="Dribbble" target="_blank">
                                    <i class="fab fa-dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.apple.com/" class="link hint--bounce hint--top hint--white" aria-label="Apple" target="_blank">
                                    <i class="fab fa-apple"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.spotify.com/" class="link hint--bounce hint--top hint--white" aria-label="Spotify" target="_blank">
                                    <i class="fab fa-spotify"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://soundcloud.com/" class="link hint--bounce hint--top hint--white" aria-label="Soundcloud" target="_blank">
                                    <i class="fab fa-soundcloud"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>

    export default {
        components: {
            HeaderTransparentWithSocial: () => import('@/components/HeaderTransparentWithSocial'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroIndieMusician: () => import('@/components/HeroIndieMusician'),
            AlbumList: () => import('@/components/AlbumList'),
            MusicianBlog: () => import('@/components/MusicianBlog'),
            MusicianCountdown: () => import('@/components/MusicianCountdown'),
            MusicianGallery: () => import('@/components/MusicianGallery'),
            MusicianMixTapes: () => import('@/components/MusicianMixTapes'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },  

        mounted () {
            document.body.classList.add('template-color-14', 'template-font-2')
        },

        head() {
            return {
                title: 'Home Indie Musician'
            }
        },
    };
</script>