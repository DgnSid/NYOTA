<template>
    <article class="c-card-talent">
        <NuxtLink class="c-card-talent__link" :to="'/talents/' + id"></NuxtLink>
        <div class="c-card-talent__top">
            <div class="c-card-talent__top__photocontainer">
                <img v-if="profilePicture" class="c-card-talent__top__photo" :src="profilePicture.url" alt="Avatar" />
                <no-avatar v-else />
            </div>
            <div>
                <div class="c-card-talent__top__name">{{ firstname }} {{ lastname }}.</div>
                <div class="c-card-talent__top__job">{{ job }}</div>
            </div>
            <div class="c-card-talent__top__arrow"></div>
        </div>
        <div class="c-card-talent__body">
            <div class="c-card-talent__body__row">
                <graduation-cap />
                <span>{{ school }}</span>
            </div>
            <div class="c-card-talent__body__row">
                <briefcase />
                <span>{{ yearsOfExperience }} {{ $t('pagetalentlist.card.years_of_experience') }} </span>
            </div>
            <div class="c-card-talent__body__row">
                <map-pin />
                <span>{{ from }}</span>
            </div>
        </div>
        <div v-if="hasBeenConsulted" class="c-card-talent__seen">
            <blue-check class="mr-sm" />
            {{ $t('pagetalentlist.card.already_seen') }}
        </div>
        <div class="c-card-talent__bottom">
            <div class="c-card-talent__bottom__element" v-for="(element, index) in industry" :key="index">
                {{ element }}
            </div>
        </div>
    </article>
</template>

<script>
    import NoAvatar from '@/components/svg/NoAvatar.vue'
    import GraduationCap from '@/components/svg/GraduationCap.vue'
    import Briefcase from '@/components/svg/Briefcase.vue'
    import MapPin from '@/components/svg/MapPin.vue'
import BlueCheck from '../svg/BlueCheck.vue'
    
    export default {
        name: 'cardTalent',
        components: { NoAvatar, MapPin, Briefcase, GraduationCap, BlueCheck },
        props: {
            firstname: String,
            lastname: String,
            job: String,
            profilePicture: Object,
            school: String,
            yearsOfExperience: Number,
            hasBeenConsulted: Boolean,
            from: {
                type: String,
                default: "Paris",
            },
            industry: Object,
            id: Number,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-card-talent {
        position: relative;
        color: $black;
        border: 1px solid $grey;
        border-radius: 40px;
        padding: 24px 32px 45px 32px;

        .c-card-talent__link {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }

        .c-card-talent__top {
            display: flex;
            align-items: center;
            margin-bottom: 24px;

            .c-card-talent__top__name {
                font-size: 2rem;
                font-family: $font-family-custom;
            }
            
            .c-card-talent__top__job {
                color: $orange;
                font-size: 1.125rem;
                line-height: 1.125rem;
            }

            .c-card-talent__top__photo {
                object-fit: cover;
                object-position: center;
                height: 100%;
                width: 100%;
            }
            .c-card-talent__top__photocontainer {
                height: 104px;
                width: 104px;
                min-width: 104px;
                border-radius: 100%;
                background-color: $white;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 16px;
            }

            .c-card-talent__top__arrow {
                margin-left: 16px;
                cursor: pointer;
                height: 56px;
                width: 56px;
                min-width: 56px;
                border-radius: 100%;
                background-color: $orange;
                border: 1px solid $orange;
                color: $white;
                background-image: url('/arrow.svg');
                background-repeat: no-repeat;
                background-position: center center;
            }
        }
        .c-card-talent__body {
            .c-card-talent__body__row {
                display: flex;
                align-items: center;

                span {
                    font-size: 1rem;
                    line-height: 1.625rem;
                    margin-left: 10px;
                }
            }
        }

        .c-card-talent__seen {
            position: absolute;
            bottom: 16px;
            right: 24px;
        }

        .c-card-talent__bottom {
            position: absolute;
            bottom: 0;
            left: 32px;
            transform: translateY(50%);
            font-size: 0.875rem;
            line-height: 1.5rem;

            .c-card-talent__bottom__element {
                color: $white;
                background: $orange;
                text-transform: uppercase;
                padding: 5px 16px;
                border-radius: 40px;
            }
        }

        .c-card-talent__seen {
            text-transform: uppercase;
            color: $blue;
            display: flex;
            align-items: center;
            font-size: .625rem;
            font-weight: 600;
            letter-spacing: 2px;
        }

        &:hover {
            .c-card-talent__top__name {
                color: $orange;
            }
            
            .c-card-talent__top__arrow {
                background-color: $white;
                color: $orange;
                background-image: url('/arrow-orange.svg');
            }
        }
    }
</style>
