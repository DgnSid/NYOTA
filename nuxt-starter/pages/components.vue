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
                </div>
            </div>
        </section>

        <!-- ****************
        Slider
        ***************** -->
        <section class="section pt-0">
            <div class="container">
                <ui-slider>
                    <template v-slot:slides>
                        <div class="swiper-slide" v-for="index in 6" :key="index">
                            <div class="swiper-slide-img">
                                <utils-figure :image="require('~/assets/images/app/banner.jpg')" :overlay="true"></utils-figure>
                            </div>
                        </div>
                    </template>
                </ui-slider>
            </div>
        </section>

        <!-- ****************
        Banner components 
        ***************** -->
        <ui-banner 
            :image="require('~/assets/images/app/banner.jpg')"
            :overlay="true"
            uiClass="--small"    
        >
            <div class="ta-c">
                <h2 class="title-xl">Lorem ipsum dolor amet</h2>
                <div class="mt-md">
                    <ui-button-primary uiClass="--white">Learn more</ui-button-primary>
                </div>
            </div>
        </ui-banner>

        <!-- ****************
        News
        ***************** -->
        <section class="section">
            <div class="container">
                <div class="row">
                    <card-news v-for="index in 3" :key="index"
                        :image="require('~/assets/images/app/banner.jpg')"
                        date="14 JANVIER 2022"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fermentum aliquet viverra libero. Tempor malesuada donec fames tortor."
                        uiClass="col-md-4"
                    ></card-news>
                </div>
            </div>
        </section>

        <!-- ****************
        Form
        ***************** -->
        <section class="section pt-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <h2 class="title-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                        <div class="cms mt-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fermentum aliquet viverra libero. Tempor malesuada donec fames tortor. Mattis aliquet tincidunt non eget integer enim et facilisis sed. Vulputate vel, felis dolor fermentum lectus dui neque commodo.
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1">
                        <FormulateForm
                            class="form"
                        >
                            <div class="form__row row">
                                <div class="col-12">
                                    <FormulateInput
                                        type="text"
                                        name="company"
                                        placeholder="Your company name"
                                        validation="required"
                                    />
                                </div>
                            </div>
                            <div class="form__row row">
                                <div class="col-12">
                                    <FormulateInput
                                        type="text"
                                        name="business"
                                        placeholder="Nature of business"
                                        validation="required"
                                    />
                                </div>
                            </div>
                            <div class="form__row row">
                                <div class="col-md-8">
                                    <FormulateInput
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        validation="required"
                                    />
                                </div>
                                <div class="col-md-4">
                                    <FormulateInput
                                        type="number"
                                        name="postcode"
                                        placeholder="Postcode"
                                        validation="max:5,length"
                                        error-behavior="live"
                                    />
                                </div>
                            </div>
                            <div class="form__row row">
                                <div class="col-12">
                                    <FormulateInput
                                        type="text"
                                        name="contactName"
                                        placeholder="Contact name"
                                        validation="required"
                                    />
                                </div>
                            </div>
                            <div class="form__row row">
                                <div class="col-12">
                                    <FormulateInput
                                        type="tel"
                                        name="phone"
                                        placeholder="Contact phone"
                                        validation="required|max:10,length"
                                    />
                                </div>
                            </div>
                            <div class="form__row row">
                                <div class="col-12">
                                    <FormulateInput
                                        type="email"
                                        name="email"
                                        placeholder="Contact email"
                                        validation="required|email"
                                    />
                                </div>
                            </div>
                            <div class="form__row row">
                                <div class="col-12">
                                    <FormulateInput
                                        type="textarea"
                                        name="message"
                                        placeholder="Your message"
                                        validation="required"
                                    />
                                </div>
                            </div>
                            <div class="form__row row">
                                <div class="col-12">
                                    <FormulateInput
                                        type="checkbox"
                                        label="I want to protect my data by signing an NDA"
                                        class="form__checkbox"
                                    />
                                </div>
                            </div>
                            <div class="form__row row mt-lg">
                                <div class="col-12 ta-r">
                                    <FormulateInput
                                        type="submit"
                                        name="Send a request"
                                    />
                                </div>
                            </div>
                        </FormulateForm>
                    </div>
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
<script>
import ButtonPrimary from '~/components/ui/button/ButtonPrimary.vue'
import CardNews from '~/components/ui/cards/CardNews.vue'

	export default {
  components: { CardNews, ButtonPrimary },
		
	}

</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>

	.swiper-slide-img {
        position: relative;

        &:after {
            content: "";

            display: table;

            padding-bottom: 150%;
        }
    }

</style>