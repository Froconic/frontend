<template>
    <div class="main-container">

        <HeaderForOffCanvasBlack class="header-transparent" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="portfolio-type-hover">
            <div class="row row-xs-center">
                <div class="col-lg-6 col-12">
                    <!-- Start Portfolio Wrapper -->
                    <div class="type-portfolio-wrapper">
                        <div class="type-portfolio">
                            <h3 @mouseover="hover">
                                <n-link to="/portfolio/portfolio-details-left-wide" class="active" data-image="/img/portfolio/type-hover/type-hover-1.jpg">
                                    01 New York’s Breath
                                </n-link> 
                            </h3>
                        </div>

                        <div class="type-portfolio">
                            <h3 @mouseover="hover">
                                <n-link to="/portfolio/portfolio-details-left-wide" data-image="/img/portfolio/type-hover/type-hover-2.jpg" >
                                    02 Saturated Gradient Vibes
                                </n-link> 
                            </h3>
                        </div>

                        <div class="type-portfolio">
                            <h3 @mouseover="hover">
                                <n-link to="/portfolio/portfolio-details-left-wide" data-image="/img/portfolio/type-hover/type-hover-3.jpg">
                                    03 Flat Style Design
                                </n-link> 
                            </h3>
                        </div>

                        <div class="type-portfolio">
                            <h3 @mouseover="hover">
                                <n-link to="/portfolio/portfolio-details-left-wide" data-image="/img/portfolio/type-hover/type-hover-4.jpg">
                                    04 Revolution Digital Archive
                                </n-link> 
                            </h3>
                        </div>

                        <div class="type-portfolio">
                            <h3 @mouseover="hover">
                                <n-link to="/portfolio/portfolio-details-left-wide" data-image="/img/portfolio/type-hover/type-hover-5.jpg">
                                    05 DIY Lighting Arts
                                </n-link> 
                            </h3>
                        </div>
                    </div>
                    <!-- End Portfolio Wrapper -->
                </div>

                <div class="col-lg-6 col-12 mt_md--30 mt_sm--30">
                    <div class="type-portfolio-thumbnail">
                        <div class="inner">
                            <div class="type-thumbnail-bg active">
                                <div class="bg-thumb bg-image--1"></div>
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
        components: {
            HeaderForOffCanvasBlack: () => import('@/components/HeaderForOffCanvasBlack'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
                fullpageOpen: false,
            }
        },

        methods: {
            getClosest(elem, selector) {
                // Element.matches() polyfill
                if (!Element.prototype.matches) {
                    Element.prototype.matches =
                        Element.prototype.matchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector ||
                        Element.prototype.oMatchesSelector ||
                        Element.prototype.webkitMatchesSelector ||
                        function (s) {
                            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                                i = matches.length;
                            while (--i >= 0 && matches.item(i) !== this) { }
                            return i > -1;
                        };
                }

                for (; elem && elem !== document; elem = elem.parentNode) {
                    if (elem.matches(selector)) return elem;
                }
                return null;
            },
            getSiblings(elem) {

                var siblings = [];
                var sibling = elem.parentNode.firstChild;
                while (sibling) {
                    if (sibling.nodeType === 1 && sibling !== elem) {
                        siblings.push(sibling);
                    }
                    sibling = sibling.nextSibling;
                }
                return siblings;
            },
            hover(e) {
                const bgThumb = document.querySelector(".bg-thumb")
                const target = e.target;
                const parent = this.getClosest(target, ".type-portfolio");
                const parentSiblings = this.getSiblings(parent)
                parentSiblings.forEach(sib => sib.children[0].children[0].classList.remove("active"))
                const imageUrl = target.dataset.image
                target.classList.add("active")
                bgThumb.style.backgroundImage = `url(${imageUrl})`
            }
        },

        head() {
            return {
                title: 'Home Minimal Portfolio'
            }
        },
    };
</script>