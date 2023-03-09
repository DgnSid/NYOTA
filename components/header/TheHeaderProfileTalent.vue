<template>
    <header class="c-header-profiletalent">
        <div class="container">
            <div class="c-header-profiletalent__content">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="c-header-profiletalent__left">
                            <div class="c-header-profiletalent__photocontainer">
                                <img v-if="photo" class="c-header-profiletalent__photo" :src="this.$config.API_URL + mutable_photo.contentUrl" :alt="'Avatar of' + lastname" />
                                <no-avatar v-else />
                            </div>
                            <h1 class="c-header-profiletalent__title a-stagger-element__header-profile-talent">
                                {{ firstname }} {{lastname}}
                            </h1>
                            <div class="c-header-profiletalent__updatephoto a-stagger-element__header-profile-talent">
                                <span @click="triggerPictureUpload()">{{ $t('page_profile_talent.editpicture') }}</span>
                                <input type="file"  accept=".jpg, .jpeg, .png" hidden ref="input_file_avatar" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 offset-lg-2">
                        <div class="row">
                            <div class="col-lg-11">
                                <div class="c-header-profiletalent__content__infos">
                                    <h2 class="c-header-profiletalent__content__infos__title">{{$t('page_profile_talent.personal_info')}}</h2>
                                    <div class="c-header-profiletalent__content__infos__name">{{lastname}} {{ firstname }}</div>
                                    <div class="c-header-profiletalent__content__infos__contact">
                                        <div v-if="input_mail" class="c-header-profiletalent__content__infos__mail">
                                            <IconMail class="mr-xs" />
                                            <div>{{input_mail}}</div>
                                        </div>
                                        <div v-if="input_phone" class="c-header-profiletalent__content__infos__phone">
                                            <IconPhone class="mr-xs" />
                                            <div>{{input_phone}}</div>
                                        </div>
                                    </div>
                                    <div class="c-header-profiletalent__content__infos__cta" @click="openFormInfo()">
                                        <cta
                                            url=""
                                            :title="$t('page_profile_talent.modify')"
                                            class="--bordered"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 offset-lg-1">
                                <div class="c-header-profiletalent__content__infos">
                                    <h2 class="c-header-profiletalent__content__infos__title">{{$t('page_profile_talent.cv')}}</h2>
                                    <div class="c-header-profiletalent__content__infos__file">
                                        <IconFile class="mr-xs" />
                                        <div class="c-header-profiletalent__content__infos__file__name">{{resume.fileOriginalName}}</div>
                                    </div>
                                    
                                    

                                    <div class="c-header-profiletalent__content__infos__field">
						            	<div class="c-header-profiletalent__content__infos__field__upload">
						            		<div ref="input_file_dropzone" class="c-header-profiletalent__content__infos__field__upload__trigger" @click="triggerUpload('input_file_cv')">
						            			<div class="c-header-profiletalent__content__infos__field__upload__dropzone" @dragenter="onDragenter('input_file_dropzone')" @dragleave="onDragleave('input_file_dropzone')" @dragover.prevent="" @drop="onDrop($event, 'input_file_dropzone')"></div>
						            			<div class="c-header-profiletalent__content__infos__field__upload__delete" ref="input_file_cv_close" @click="deleteFile($event)">✕</div>
						            			<div class="c-header-profiletalent__content__infos__field__upload__trigger__uploaded hidden" ref="input_file_cv_uploaded"></div>
						            			<div class="c-header-profiletalent__content__infos__field__upload__trigger__container" ref="input_file_cv_container">
						            				<icon-download class="c-header-profiletalent__content__infos__field__upload__trigger__icon" />
						            				<div class="c-header-profiletalent__content__infos__field__upload__trigger__text">{{$t('registerform.steps.three.cv_instruction')}}</div>
						            				<div class="c-header-profiletalent__content__infos__field__upload__trigger__meta">{{$t('registerform.steps.three.cv_meta')}}</div>
						            			</div>
						            		</div>
						            		<input type="file"  accept=".jpg, .jpeg, .png, .pdf" hidden ref="input_file_cv" @change="onChangeInput($event)"/>
						            		<div ref="input_file_cv_error" class="c-header-profiletalent__content__infos__field__error">{{ $t('registerform.form.error_message') }}</div>
						            	</div>
						            </div>


                                    <div @click="updateCv()">
                                        <cta
                                            url=""
                                            title="Valider"
                                            class="--bordered"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="c-header-profiletalent__popup-form-info" ref="form_edit" :class="{ active: is_form_edit_active }">
            <div class="c-header-profiletalent__popup-form-info__content">
                <div class="c-header-profiletalent__popup-form-info__content__close" @click="closeFormInfo()">✕</div>
                <h2 class="c-header-profiletalent__popup-form-info__content__title">Modifier mes infos</h2>
                
                <form class="c-formedittalent" @submit.prevent="handleSubmit">
                    <div class="c-edittalent__field">
                        <label>{{$t('page_profile_talent.label_lastname')}}</label>
                        <input v-model="input_lastname" type="text" :name="$t('page_profile_talent.id_lastname')" placeholder="" />
				        <div class="c-edittalent__field__error">{{ $t('registerform.form.error_message') }}</div>
                    </div>

                    <div class="c-edittalent__field">
                        <label>{{$t('page_profile_talent.label_firstname')}}</label>
                        <input v-model="input_firstname" type="text" :name="$t('page_profile_talent.id_firstname')" placeholder="" />
				        <div class="c-edittalent__field__error">{{ $t('registerform.form.error_message') }}</div>
                    </div>

                    <div class="c-edittalent__field">
                        <label>{{$t('page_profile_talent.label_mail')}}</label>
                        <input v-model="input_mail" type="text" :name="$t('page_profile_talent.id_mail')" placeholder="" />
				        <div class="c-edittalent__field__error">{{ $t('registerform.form.error_message') }}</div>
                    </div>

                    <div class="c-edittalent__field">
                        <label>{{$t('page_profile_talent.label_phone')}}</label>
                        <input v-model="input_phone" type="text" :name="$t('page_profile_talent.id_phone')" placeholder="" />
				        <div class="c-edittalent__field__error">{{ $t('registerform.form.error_message') }}</div>
                    </div>

                    <div class="c-edittalent__submit__bottom">
                        <button class="c-edittalent__submit --bordered" type="submit" ref="submit">
					        <span class="c-edittalent__submit__text">{{$t('page_profile_talent.label_submit')}}</span>
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
    import IconFile from '@/components/svg/File.vue'
    import IconPhone from '@/components/svg/Phone.vue'
    import IconDownload from '@/components/svg/IconDownload.vue'
    import Cta from '../Cta.vue';

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'HeaderProfileTalent',
        components: { NoAvatar, IconMail, IconPhone, IconFile, IconDownload, Cta },
        data () {
            return {
                mutable_photo: {},
                mutable_resume: {},
                input_firstname: this.$props.firstname,
                input_lastname: this.$props.lastname,
                input_mail: this.$props.mail,
                input_phone: this.$props.phone,
                is_form_edit_active: false,
                file_cv: '',
                mutable_input_file_cv: '',
                upload_technic: '',
            }
        },
        props: {
            photo: String,
            profile_picture: String,
            resume: Object,
            firstname: String,
            lastname: String,
            mail: String,
            phone: String,
            file: String,
            id: String,
        },
        async mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-header-profiletalent",
                }
            })

            await this.$axios.$get(this.$props.photo)
            .then((res) => {
                this.mutable_photo = res
            })
            .catch((err) => {
                console.error(err)
            });

            await this.$axios.$get(`/api/c/talents/${this.id}/download-resume`)
            .then((res) => {
                console.log('resume : ', res)
                this.mutable_resume = res
            })
            .catch((err) => {
                console.error(err)
            });

            this.tl.set('.a-stagger-element__header-profile-talent', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__header-profile-talent', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")



            // EVENT HANDLING AVATAR CHANGE
            this.$refs.input_file_avatar.addEventListener('change', async () => {
                let image_uploaded_id = null
				const formData = new FormData();
				formData.append("imageFile", this.$refs.input_file_avatar.files[0]);

                if(this.$refs.input_file_avatar.files[0].name) {
					await this.$axios.post('/api/profile-pictures', formData, {
    					headers: {
      						'Content-Type': 'multipart/form-data'
    					}
					})
					.then(function (response) {
						image_uploaded_id = response.data['@id']
                        console.log('image_uploaded_id : ', image_uploaded_id)
  					})
				}

                await this.$axios.put(`/api/t/talents/${this.$props.id}`, {
                    "profilePicture": image_uploaded_id,
                })
                .then(function (response) {
                    console.log('response', response)
                    window.location.reload(true)
  				})
            })

            //EVENT HANDLING CV CHANGE
            this.$refs.input_file_cv.addEventListener('change', () => {
				const file = this.$refs.input_file_cv.files[0];			
				this.file_cv = file	

				if(file) {					
					this.$refs.input_file_cv_uploaded.classList.remove('hidden')
					this.$refs.input_file_cv_uploaded.innerHTML = file.name

					this.$refs.input_file_cv_container.classList.add('hidden')
				} else {
					this.$refs.input_file_cv_uploaded.classList.add('hidden')
					this.$refs.input_file_cv_container.classList.remove('hidden')
				}
			})
        },
        methods: {
            async handleSubmit() {
                console.log('handleSubmit')

                await this.$axios.put(`/api/t/talents/${this.$props.id}`, {
                    "lastname": this.input_lastname,
                    "firstname": this.input_firstname,
                    "email": this.input_mail,
                    "phoneNumber": this.input_phone
                })
                .then(function (response) {
                    console.log('response', response)
                    window.location.reload(true)
  				})
            },
            triggerPictureUpload() {
                this.$refs.input_file_avatar.click()
            },
            openFormInfo() {
                this.$refs.form_edit.classList.add('active')
            },
            closeFormInfo() {
                this.$refs.form_edit.classList.remove('active')
            },
			triggerUpload(ref) {
                if(this.file_cv) {
					return;
				}

				this.upload_technic = 'click'

				this.$refs.input_file_cv.click()
			},
			onChange($event) {
                let size = ''
				let type = ''

				type =  this.upload_technic === 'click' ? this.$refs.input_file_cv.files[0].type : this.mutable_input_file_cv[0].type
				size = this.upload_technic === 'click' ? this.$refs.input_file_cv.files[0].size : this.mutable_input_file_cv[0].size

				if(type === 'image/jpeg' || type === 'image/png') {
					if(size <= 5000000) {
						this.file_cv = this.upload_technic === 'click' ? this.$refs.input_file_cv.files[0] : this.mutable_input_file_cv[0] 
						this.$refs.input_file_cv_uploaded.classList.remove('hidden')
						this.$refs.input_file_cv_container.classList.add('hidden')
						this.$refs.input_file_cv_close.classList.add('active')
						this.$refs.input_file_cv_uploaded.innerHTML = this.file_cv.name
						this.$refs.input_file_cv_error.classList.remove('error')
						return;
					}
				}

				this.$refs.input_file_cv_error.classList.add('error')
				this.$refs.input_file_cv_uploaded.classList.add('hidden')
				this.$refs.input_file_cv_container.classList.remove('hidden')
    		},
			onDragenter(ref) {
				this.$refs[`${ref}`].classList.add('active')
			},
			onDragleave(ref) {
				this.$refs[`${ref}`].classList.remove('active')
			},
			onDrop(e, ref) {
				e.preventDefault();
				this.$refs[`${ref}`].classList.remove('active')

				this.upload_technic = 'drop'

				this.mutable_input_file_cv = e.dataTransfer.files;
				this.onChange(e)
			},
			onChangeInput(e) {
				this.onChange(e)
			},
			deleteFile(e) {
				e.preventDefault()
				setTimeout(() => {
					this.file_cv = ''
					this.$refs.input_file_cv_close.classList.remove('active')
					this.$refs.input_file_cv_container.classList.remove('hidden')
					this.$refs.input_file_cv_uploaded.classList.add('hidden')
					this.$refs.input_file_cv_uploaded.innerHTML = ''
				})
			},
            async updateCv() {
                console.log('UPDATE CV')
                let cv_uploaded_id = null
				const formData_cv = new FormData();					
				formData_cv.append("file", this.file_cv)

                console.log('this.file_cv.name ', this.file_cv)
				
				if(this.file_cv.name) {
					await this.$axios.post('/api/resumes', formData_cv, {
    					headers: {
      						'Content-Type': 'multipart/form-data'
    					}
					})
					.then(function (response) {
                        console.log(response)
						cv_uploaded_id = response.data['@id']
                        // window.location.reload(true)
  					})

                    if(cv_uploaded_id) {
                        await this.$axios.put(`/api/t/talents/${this.$props.id}`, {
                            "resume": cv_uploaded_id,
                        })
                        .then(function (response) {
                            console.log('response', response)
                            window.location.reload(true)
  				        })
                    }
				}
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
    .c-header-profiletalent {
        position: relative;
        height: auto;
        padding: 120px 0 100px 0;

        display: flex;
        align-items: center;

        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        @include media-breakpoint-down(md) {
            height: auto;
            padding-top: 120px;
        }

        .c-header-profiletalent__content {
            .c-header-profiletalent__content__infos {
                height: 100%;
                position: relative;
                .c-header-profiletalent__content__infos__field {
                    .c-header-profiletalent__content__infos__field__upload {
			            position: relative;
			            margin-bottom: 32px;
                    }

			        .c-header-profiletalent__content__infos__field__upload__dropzone {
			        	position: absolute;
			        	top: 0;
			        	left: 0;
			        	width: 100%;
			        	height: 100%;
			        }

                    .c-header-profiletalent__content__infos__field__upload__delete {
			        	position: absolute;
			        	top: 10px;
			        	right: 10px;
			        	z-index: 2;
			        	color: $orange;
			        	height: 25px;
			        	width: 25px;
			        	border-radius: 100%;
			        	border: 1px solid $orange;
			        	opacity: 0;
			        	display: none;


			        	&.active {
			        		display: flex;
			        		align-items: center;
			        		justify-content: center;
			        		opacity: 1;
			        	}
			        }
                
			        .c-header-profiletalent__content__infos__field__upload__trigger {
			        	border: 1px dashed orange;
			        	border-radius: 10px;
			        	padding: 20px;
			        	margin-bottom: 0;
			        	height: 150px;
			        	cursor: pointer;
			        	margin-bottom: 16px;
                    
			        	&.active {
			        		background-color: rgba($orange, .1)
			        	}
                    
			        	.c-header-profiletalent__content__infos__field__upload__trigger__uploaded {
			        		width: 100%;
			        		height: 100%;
			        		background-size: contain;

                            word-break: break-all;
                        
			        		text-align: center;
			        		display: flex;
			        		justify-content: center;
			        		align-items: center;
			        		color: $black;
                        
			        		&.hidden {
			        			display: none;
			        		}
			        	}
                    
			        	.c-header-profiletalent__content__infos__field__upload__trigger__container {
			        		display: flex;
			        		flex-direction: column;
			        		justify-content: center;
			        		align-items: center;
			        		&.hidden {
			        			display: none;
			        		}
			        	}
                    
			        	.c-header-profiletalent__content__infos__field__upload__trigger__icon {
			        		margin-bottom: 20px;
			        	}
                    
			        	.c-header-profiletalent__content__infos__field__upload__trigger__text {
			        		color: $black;
			        		font-size: .8rem;
			        		margin-bottom: 20px;
                            text-align: center;
			        	}
                    
			        	.c-header-profiletalent__content__infos__field__upload__trigger__meta {
			        		color: $orange;
			        		font-size: .75rem;
                            text-align: center;
			        	}
			        }
                }
                .c-header-profiletalent__content__infos__title {
                    color: $black;
                    font-size: 2rem;
                    line-height: 2.25rem;
                    margin-bottom: 16px;
                }

                .c-header-profiletalent__content__infos__name {
                    font-size: 1.5rem;
                    line-height: 1.5rem;
                    margin-bottom: 20px;

                    background: $gradientOrange;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .c-header-profiletalent__content__infos__cta {
                    position: absolute;
                    bottom: 0;

                    @include media-breakpoint-down(md) {
                        position: static;
                        margin-bottom: 50px;
                    }
                }


                .c-header-profiletalent__content__infos__contact {
                    margin-bottom: 80px;

                    @include media-breakpoint-down(md) {
                        margin-bottom: 20px;
                    }
                }

                .c-header-profiletalent__content__infos__phone {
                    display: flex;
                    align-items: center;
                    color: $black;                    
                }
                .c-header-profiletalent__content__infos__mail {
                    display: flex;
                    align-items: center;
                    color: $black;
                   
                }

                .c-header-profiletalent__content__infos__file {
                    display: flex;
                    align-items: center;
                    color: $black;
                    margin-bottom: 20px;

                    .c-header-profiletalent__content__infos__file__name {
                        word-break: break-all;
                    }

                    svg {
                        min-width: 32px;
                    }
                }

                .c-header-profiletalent__content__infos__field__error {
                    display: none;

                    &.error {
                        display: block;
                    }
                }
            }
        }

        .c-header-profiletalent__photo {
            object-fit: cover;
            object-position: center;
            height: 100%;
            width: 100%;
        }
        .c-header-profiletalent__left {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-right: 1px solid $light-grey;
        }
        .c-header-profiletalent__photocontainer {
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

        .c-header-profiletalent__title {
            font-family: $font-family-custom;
            text-align: center;
            font-size: 4rem;
            line-height: 4.5rem;
            font-weight: 800;
            margin-bottom: 24px;
            margin-right: 20px;
            color: $black;
            word-break: break-all;

            strong, b {
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            @include media-breakpoint-down(md) {
                display: flex;
                flex-direction: column;

                font-size: 4.75rem;
                line-height: 3.875rem;

                padding-top: 20px;
            }

            @include media-breakpoint-down(sm) {
                font-size: 3.75rem;
                line-height: 2.875rem;
            }
        }

        .c-header-profiletalent__updatephoto {
            color: $orange;
            text-decoration: underline;
            font-size: 1.125rem;
            cursor: pointer;

            @include media-breakpoint-down(md) {
                margin-bottom: 80px;
            }
        }

        .c-header-profiletalent__logo {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);

            @include media-breakpoint-down(md) {
                display: none;
            }
        }

        .c-header-profiletalent__popup-form-info {
            height: 100vh;
            width: 100vw;
            background-color: rgba(0,0,0,.5);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2;
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

            .c-header-profiletalent__popup-form-info__content {
                position: relative;
                width: 90%;
                max-width: 600px;
                background-color: $white;
                border-radius: 50px;
                max-height: 90vh;
                overflow-y: auto;
                padding: 50px;

                @include media-breakpoint-down(md) {
                    max-height: calc(90vh - 120px);
                    margin-top: 120px;
                }
                .c-header-profiletalent__popup-form-info__content__close {
                    position: absolute;
                    top: 40px;
                    right: 50px;
                    font-size: 2rem;
                    cursor: pointer;
                    color: $orange;
                }

                .c-header-profiletalent__popup-form-info__content__title {
                    color: $orange;
                    font-size: 2rem;
                }
            }
        }
    }
</style>
