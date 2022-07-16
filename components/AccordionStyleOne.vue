<template>
    <div class="bk-accordion-style--2">
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-1 class="acc-btn">
                    Digital strategy
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        We learn from landing page's best practices and great landing pages in order to create a clear, crisp design that suits all your needs for a responsive landing site.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-2 class="acc-btn">
                    UI/UX design and development
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-3 class="acc-btn">
                    Brand building 
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>