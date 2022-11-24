<!-----
*
Template
*
------>
<template>
	<div class="layout__blog">
        

        <!-- ****************
        News
        ***************** -->
        <section class="section">
            <div class="container">
                <h1 class="title-xl mb-lg">Blog</h1>
                <div class="row">
                    <ui-card-news v-for="index in 9" :key="index"
                        :image="require('~/assets/images/app/banner.jpg')"
                        date="14 JANVIER 2022"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fermentum aliquet viverra libero. Tempor malesuada donec fames tortor."
                        uiClass="col-md-4 mb-lg"
                        url="blog/lorem-ipsum"
                    ></ui-card-news>
                </div>
            </div>
        </section>


    </div>
</template>

<!-----
*
Script
*
------>
<script></script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped></style>