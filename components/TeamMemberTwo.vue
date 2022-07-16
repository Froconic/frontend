<template>
    <div class="team team__style--2 move-up wow" data-wow-delay="0.10s">
        <div class="thumb">
            <img :src="teamMember.image" alt="team member">
            <div class="overlay"></div>
            <ul class="social-icon icon-solid-rounded icon-size-medium text-center">
                <li class="facebook">
                    <a href="https://www.facebook.com/" class="link" aria-label="Facebook">
                        <i class="fab fa-facebook"></i>
                    </a>
                </li>
                <li class="twitter">
                    <a href="https://twitter.com/" class="link" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="instagram">
                    <a href="https://www.instagram.com/" class="link" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
            <div class="team-info">
                <div class="info">
                    <h5>{{ teamMember.name }}</h5>
                    <span>{{ teamMember.position }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['teamMember']
    };
</script>