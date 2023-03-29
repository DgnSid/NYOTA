<template>
    <header class="c-header-profilecompany page-offset">
        <div class="container">
            <div class="c-header-profilecompany__content">
                <shape-ellipse class="c-header-profilecompany__content__ellipse" :size="220" />
                <div class="c-header-profilecompany__content__top">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="c-header-profilecompany__left">
                                <div class="c-header-profilecompany__photocontainer a-stagger-element__header-profile-company">
                                    <img v-if="photo" class="c-header-profilecompany__photo" :src="this.$config.API_URL + photo.contentUrl" :alt="'Avatar of' + company_name" />
                                    <no-avatar v-else />
                                </div>
                                <h1 class="c-header-profilecompany__title a-stagger-element__header-profile-company">
                                    {{company_name}}
                                </h1>
                                <div class="c-header-profilecompany__updatephoto a-stagger-element__header-profile-company">
                                    <span @click="triggerPictureUpload()">{{ $t('page_profile_company.editpicture') }}</span>
                                    <input type="file"  accept=".jpg, .jpeg, .png" hidden ref="input_file_logo" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-10 offset-lg-2">
                                    <div class="c-header-profilecompany__content__infos">
                                        <h2 class="c-header-profilecompany__content__infos__title a-stagger-element__header-profile-company">Contact référent</h2>
                                        <div class="c-header-profilecompany__content__infos__name a-stagger-element__header-profile-company">{{contact_name}}</div>
                                        <div class="c-header-profilecompany__content__infos__role a-stagger-element__header-profile-company">{{contact_role}}</div>
                                        <a :href="'mailto:' + contact_mail" class="c-header-profilecompany__content__infos__phone a-stagger-element__header-profile-company">
                                            <IconMail class="mr-sm" />
                                            <div>{{contact_mail}}</div>
                                        </a>
                                        <a :href="'tel:' + contact_phone" class="c-header-profilecompany__content__infos__mail a-stagger-element__header-profile-company">
                                            <IconPhone class="mr-sm" />
                                            <div>{{contact_phone}}</div>
                                        </a>
                                        <div @click="openFormInfo()">
                                            <cta                                                
                                                url=""
                                                title="Modifier"
                                                class="--bordered a-stagger-element__header-profile-company"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-header-profilecompany__content__bottom">
                    <h2  class="c-header-profilecompany__content__bottom__title">{{ title }}</h2>
                    <div  class="c-header-profilecompany__content__bottom__text">{{ text }}</div>
                    <div  class="c-header-profilecompany__content__bottom__searchtext">{{ search_title }}</div>
                    <form class="c-header-profilecompany__content__bottom__form" method="get">
                        <input v-model="input_search" type="text" :placeholder="search_placeholder" />
                        <input type="submit" value="" @click.prevent="redirectSearchTalent()" />
                    </form>
                </div>
            </div>
        </div>

        <div class="c-header-profilecompany__popup-form-info" ref="form_edit" :class="{ active: is_form_edit_active }">
            <div class="c-header-profilecompany__popup-form-info__content">
                <div class="c-header-profilecompany__popup-form-info__content__close" @click="closeFormInfo()">✕</div>
                <h2 class="c-header-profilecompany__popup-form-info__content__title">Modifier mes infos</h2>
                
                <form class="c-formeditcompany" @submit.prevent="handleSubmit">
                    <div class="c-editcompany__field">
                        <label>{{$t('page_profile_talent.label_name')}}</label>
                        <input v-model="input_name" type="text" :name="$t('page_profile_talent.id_lastname')" placeholder="" />
				        <div class="c-editcompany__field__error">{{ $t('registerform.form.error_message') }}</div>
                    </div>

                    <div class="c-editcompany__field">
                        <label>{{$t('page_profile_talent.label_role')}}</label>
                        <input v-model="input_role" type="text" :name="$t('page_profile_talent.id_firstname')" placeholder="" />
				        <div class="c-editcompany__field__error">{{ $t('registerform.form.error_message') }}</div>
                    </div>

                    <div class="c-editcompany__field">
                        <label>{{$t('page_profile_talent.label_mail')}}</label>
                        <input v-model="input_mail" type="text" :name="$t('page_profile_talent.id_mail')" placeholder="" />
				        <div class="c-editcompany__field__error">{{ $t('registerform.form.error_message') }}</div>
                    </div>

                    <div class="c-editcompany__field">
                        <label>{{$t('page_profile_talent.label_phone')}}</label>
                        <input v-model="input_phone" type="text" :name="$t('page_profile_talent.id_phone')" placeholder="" />
				        <div class="c-editcompany__field__error">{{ $t('registerform.form.error_message') }}</div>
                    </div>

                    <div class="c-editcompany__submit__bottom">
                        <button class="c-editcompany__submit --bordered" type="submit" ref="submit">
					        <span class="c-editcompany__submit__text">{{$t('page_profile_talent.label_submit')}}</span>
					    </button>
                    </div>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    import NoAvatar from '@/components/svg/NoAvatar.vue'
    import IconMail from '@/components/svg/Mail.vue'
    import IconPhone from '@/components/svg/Phone.vue'
    import Cta from '../Cta.vue';
    import ShapeEllipse from "../ui/ShapeEllipse";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'HeaderProfileTalent',
        components: { NoAvatar, IconMail, IconPhone, Cta, ShapeEllipse },
        data () {
            return {
                input_search: '',
                input_name: this.$props.contact_name,
                input_mail: this.$props.contact_mail,
                input_phone: this.$props.contact_phone,
                input_role: this.$props.contact_role,
                is_form_edit_active: false,
            }
        },
        props: {
            photo: Object,
            company_name: String,
            contact_name: String,
            contact_role: String,
            contact_mail: String,
            contact_phone: String,
            title: String,
            text: String,
            search_title: String,
            search_placeholder: String,
            id: String,
        },
        async mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-header-profilecompany",
                }
            })

            this.tl.set('.a-stagger-element__header-profile-company', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__header-profile-company', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")

            this.$refs.input_file_logo.addEventListener('change', async () => {

                let image_uploaded_id = null
				const formData = new FormData();
				formData.append("imageFile", this.$refs.input_file_logo.files[0]);

                if(this.$refs.input_file_logo.files[0].name) {
					await this.$axios.post('/api/profile-pictures', formData, {
    					headers: {
      						'Content-Type': 'multipart/form-data'
    					}
					})
					.then(function (response) {
						image_uploaded_id = response.data['@id']
                        console.log('image_uploaded_id : ', image_uploaded_id)
  					})

                    await this.$axios.put(`/api/c/companies/${this.$props.id}`, {
                        "email": this.$props.contact_mail,
                        "name": this.$props.company_name,
                        "contactName": this.$props.contact_name,
                        "profilePicture": image_uploaded_id
                    })
                    .then(function (response) {
                        console.log('response', response)
                        window.location.reload(true)
  					})
				}
            })
                   
        },
        methods: {
            async handleSubmit() {
                console.log('handleSubmit')

                await this.$axios.put(`/api/c/companies/${this.$props.id}`, {
                    "contactName": this.input_name,
                    "contactJob": this.input_role,
                    "email": this.input_mail,
                    "phoneNumber": this.input_phone,
                })
                .then(function (response) {
                    console.log('response', response)
                    window.location.reload(true)
  				})
            },
            triggerPictureUpload() {
                this.$refs.input_file_logo.click()
            },
            redirectSearchTalent() {
                console.log('redirectSearchTalent')
                this.$router.push({ path: '/talents', query: { job: this.input_search } })
            },
            openFormInfo() {
                console.log('openFormInfo')
                this.$refs.form_edit.classList.add('active')
            },
            closeFormInfo() {
                this.$refs.form_edit.classList.remove('active')
            }
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    @import '@/assets/sass/app/form/register.scss';
    .c-header-profilecompany {
        position: relative;
        // height: 512px;

        display: flex;
        align-items: center;

        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        margin-bottom: 180px;

        .c-header-profilecompany__content {
            padding-top: 50px;

            .c-header-profilecompany__content__ellipse {
                position: absolute;
                bottom: 120px;
                right: -80px;

                @include media-breakpoint-down(md) {
                    display: none;
                }
            }
            
            .c-header-profilecompany__content__infos {
                .c-header-profilecompany__content__infos__title {
                    color: $black;
                    font-size: 2rem;
                    line-height: 2.25rem;
                    margin-bottom: 16px;
                }

                .c-header-profilecompany__content__infos__name {
                    font-size: 1.5rem;
                    line-height: 1.5rem;

                    background: $gradientOrange;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .c-header-profilecompany__content__infos__role {
                    color: $black;
                    margin-bottom: 20px;
                }
                .c-header-profilecompany__content__infos__phone {
                    display: flex;
                    align-items: center;
                    color: $black;

                    svg {
                        min-width: 32px;
                    }
                }

                .c-header-profilecompany__content__infos__mail {
                    display: flex;
                    align-items: center;
                    color: $black;
                    margin-bottom: 20px;

                    svg {
                        min-width: 32px;
                    }
                }

                .c-header-profilecompany__content__infos__file {
                    display: flex;
                    align-items: center;
                    color: $black;

                    .c-header-profilecompany__content__infos__file__name {
                        word-break: break-all;
                    }

                    svg {
                        min-width: 32px;
                    }
                }
            }
        }

        .c-header-profilecompany__photo {
            object-fit: cover;
            object-position: center;
            height: 100%;
            width: 100%;
        }
        .c-header-profilecompany__left {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-right: 1px solid $light-grey;
            height: 100%;
        }
        .c-header-profilecompany__photocontainer {
            height: 100px;
            width: 100px;
            border-radius: 100%;
            background-color: $white;
            border: 4px solid $orange;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .c-header-profilecompany__title {
            font-family: $font-family-custom;
            font-size: 4rem;
            line-height: 4.5rem;
            font-weight: 800;
            margin-bottom: 24px;
            margin-right: 20px;
            color: $black;

            strong, b {
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            @include media-breakpoint-down(md) {
                display: flex;
                flex-direction: column;
                text-align: center;

                font-size: 2.75rem;
                line-height: 2.875rem;

                word-break: break-all;
            }

            @include media-breakpoint-down(sm) {
                font-size: 2.75rem;
                line-height: 2.875rem;
            }
            
        }

        .c-header-profilecompany__updatephoto {
            color: $orange;
            text-decoration: underline;
            font-size: 1.125rem;
            cursor: pointer;

            @include media-breakpoint-down(md) {
                margin-bottom: 40px;
            }
        }

        .c-header-profilecompany__logo {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);

            @include media-breakpoint-down(md) {
                display: none;
            }
        }

        .c-header-profilecompany__content__top {
            margin-bottom: 70px;
        }

        .c-header-profilecompany__content__bottom {
            color: $black;
            text-align: center;

            .c-header-profilecompany__content__bottom__title {
                font-size: 4rem;
                line-height: 4.2rem;
                margin-bottom: 24px;
            }

            .c-header-profilecompany__content__bottom__text {
                margin-bottom: 50px;
            }

            .c-header-profilecompany__content__bottom__searchtext {
                color: $orange;
                font-family: $font-family-custom;
                text-align: center;
                font-size: 2rem;
                line-height: 2.2rem;
            }

            .c-header-profilecompany__content__bottom__form {
                transform: translateY(50%);
                position: relative;
                display: table;
                margin: 0 auto;

                input[type="text"] {
                    height: 72px;
                    border: 1px solid $orange;
                    width: 360px;
                    border-radius: 90px;
                    padding-left: 40px;
                    padding-right: 70px;

                    @include media-breakpoint-down(sm) {
                        width: 95%;  
                    }

                    &::placeholder {
                        color: $orange;
                    }

                    background-image: url('/search-glass.svg');
                    background-repeat: no-repeat;
                    background-position: 15px center;
                }

                input[type="submit"] {
                    position: absolute;
                    right: 18px;
                    cursor: pointer;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 56px;
                    width: 56px;
                    border-radius: 100%;
                    background-color: $orange;
                    border: 1px solid $orange;
                    color: $white;

                    background-image: url('/arrow.svg');
                    background-repeat: no-repeat;
                    background-position: center center;

                    &:hover {
                        background-color: $white;
                        color: $orange;
                        background-image: url('/arrow-orange.svg');
                    }
                }
            }
        }

        .c-header-profilecompany__popup-form-info {
            height: 100vh;
            width: 100vw;
            background-color: rgba(0,0,0,.5);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 20;
            justify-content: center;
            align-items: center;

            opacity: 0;
            display: none;
            visibility: hidden;
            
            &.active {
                opacity: 1;
                visibility: visible;
                display: flex;
            }

            .c-header-profilecompany__popup-form-info__content {
                position: relative;
                width: 90%;
                max-width: 600px;
                background-color: $white;
                border-radius: 50px;
                max-height: 90vh;
                overflow-y: auto;
                padding: 50px;

                .c-header-profilecompany__popup-form-info__content__close {
                    position: absolute;
                    top: 40px;
                    right: 50px;
                    font-size: 2rem;
                    cursor: pointer;
                    color: $orange;
                }

                .c-header-profilecompany__popup-form-info__content__title {
                    color: $orange;
                    font-size: 2rem;
                }
            }
        }
    }
</style>
