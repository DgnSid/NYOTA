<!-----
*
Template
*
------>
<template>
	<div class="layout__components">
        
        <!-- ****************
        Banner components 
        ***************** -->
        <ui-banner 
            :image="require('~/assets/images/app/banner.jpg')"
            :overlay="true">
            <div class="col-lg-10">
                <ui-breadcrumbs uiClass="mb-xl"></ui-breadcrumbs>
                <h1 class="title-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
                <div class="cms mt-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fermentum aliquet viverra libero. Tempor malesuada donec fames tortor. Mattis aliquet tincidunt non eget integer enim et facilisis sed. Vulputate vel, felis dolor fermentum lectus dui neque commodo.
                </div>
                <div class="mt-md">
                    <ui-button-primary uiClass="--white" to="/">
                        Learn more
                    </ui-button-primary>
                </div>
            </div>
        </ui-banner>

        <!-- ****************
        Just text 
        ***************** -->
        <section class="section pb-xl">
            <header>
                <div class="container ta-c">
                    <h2 class="title-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                </div>
            </header>
            <div class="mt-md">
                <div class="container ta-c">
                    <div class="cms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fermentum aliquet viverra libero. Tempor malesuada donec fames tortor. Mattis aliquet tincidunt non eget integer enim et facilisis sed. Vulputate vel, felis dolor fermentum lectus dui neque commodo.</div>
                    <div class="cms mt-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fermentum aliquet viverra libero. Tempor malesuada donec fames tortor. Mattis aliquet tincidunt non eget integer enim et facilisis sed. Vulputate vel, felis dolor fermentum lectus dui neque commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fermentum aliquet viverra libero. Tempor malesuada donec fames tortor. Mattis aliquet tincidunt non eget integer enim et facilisis sed. Vulputate vel, felis dolor fermentum lectus dui neque commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fermentum aliquet viverra libero. Tempor malesuada donec fames tortor. Mattis aliquet tincidunt non eget integer enim et facilisis sed. Vulputate vel, felis dolor fermentum lectus dui neque commodo.</div>
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