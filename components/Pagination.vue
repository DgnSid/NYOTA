<template>
    <div class="c-pagination">
      <div v-if="currentPage === 1" :class="disabledStyle">
        <span class="hidden">First</span>
        <SingleBack /> 
      </div>
  
      <nuxt-link
        v-else
        :to="{ name: 'news-page-page___fr', params: { page: 1 } }"
        :class="buttonStyles"
      >
        <DoubleBack />
        <span class="hidden">First</span>
      </nuxt-link>
  
      <div v-if="currentPage === 1" :class="disabledStyle">
        <span class="hidden">Prev</span>
        <SingleBack />
      </div>  
      <nuxt-link
        v-else
        :to="{ name: 'news-page-page___fr', params: { page: prevPage } }"
        :class="buttonStyles"
      >
        <SingleBack />
        <span class="hidden">Prev</span>
      </nuxt-link>

      <nuxt-link
          :to="{ name: 'news-page-page___fr', params: { page: currentPage } }"
          :class="buttonStyles"
          class="current"
      >
        {{(currentPage)}}
      </nuxt-link>

        <nuxt-link
            :to="{ name: 'news-page-page___fr', params: { page: nextPagePlusOne } }"
            :class="buttonStyles"
        >
          {{(currentPage + 1)}}
        </nuxt-link>

        <nuxt-link
            :to="{ name: 'news-page-page___fr', params: { page: nextPagePlusTwo } }"
            :class="buttonStyles"
        >
          {{(currentPage + 2)}}
        </nuxt-link>

      <div v-if="currentPagePlusTwo > totalPagesMinusTwo">
        <div style="color: red">...</div>
      </div>

      <nuxt-link
        :to="{ name: 'news-page-page___fr', params: { page: totalPagesMinusTwo } }"
        :class="buttonStyles"
      >
      {{totalPagesMinusTwo}}
      </nuxt-link>

      <nuxt-link
        :to="{ name: 'news-page-page___fr', params: { page: totalPagesMinusOne } }"
        :class="buttonStyles"
      >
        {{totalPagesMinusOne}}
      </nuxt-link>

      <nuxt-link
        :to="{ name: 'news-page-page___fr', params: { page: totalPages } }"
        :class="buttonStyles"
      >
        {{totalPages}}
      </nuxt-link>

      <div v-if="currentPage === totalPages" :class="disabledStyle">
        <span class="hidden">Next</span>
        <SingleFwd />
      </div>
  
      <nuxt-link
        v-else
        :to="{ name: 'news-page-page___fr', params: { page: nextPage } }"
        :class="buttonStyles"
      >
        <span class="hidden">Next</span>
        <SingleFwd />
      </nuxt-link>
  
      <div v-if="currentPage === totalPages" :class="disabledStyle">
        <span class="hidden">Last</span>
        <DoubleFwd />
      </div>
  
      <nuxt-link
        v-else
        :to="{ name: 'news-page-page___fr', params: { page: totalPages } }"
        :class="buttonStyles"
      >
        <span class="hidden">Last</span>
        <DoubleFwd />
      </nuxt-link>
    </div>
  </template>
  
  <script>
  import DoubleFwd from '@/components/svg/DoubleFwd';
  import DoubleBack from '@/components/svg/DoubleBack';
  import SingleFwd from '@/components/svg/SingleFwd';
  import SingleBack from '@/components/svg/SingleBack';
  
  export default {
    name: 'Pagination',
    components: {
      DoubleFwd,
      DoubleBack,
      SingleFwd,
      SingleBack,
    },
    props: {
      total: {
        type: Number,
        default: 0,
      },
      perPage: {
        type: Number,
        default: 5,
      },
    },
    computed: {
      buttonStyles() {
        return '';
      },
      disabledStyle() {
        return '';
      },
      totalPages() {
        return Math.ceil(this.total / this.perPage);
      },
      totalPagesMinusOne() {
        return Math.ceil(this.total / this.perPage) - 1;
      },
      totalPagesMinusTwo() {
        return Math.ceil(this.total / this.perPage) - 2;
      },
      currentPage() {
        return parseInt(this.$route.params.page) || 1;
      },
      prevPage() {
        return this.currentPage > 1 ? this.currentPage - 1 : 1;
      },
      nextPage() {
        return this.currentPage < this.totalPages
          ? this.currentPage + 1
          : this.totalPages;
      },
      nextPagePlusOne() {
        return this.currentPage < this.totalPages
          ? this.currentPage + 1
          : this.totalPages;
      },
      nextPagePlusTwo() {
        return this.currentPage < this.totalPages
          ? this.currentPage + 2
          : this.totalPages;
      },
    },
  };
  </script>

  <!-----
  *
  Style scoped
  *
  ------>
  <style lang="scss" scoped>
        .c-pagination {
            display: flex;
            align-items: center;
            justify-content: center;

            .hidden {
                display: none;
            }

            a {
                height: 20px;
                width: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: $light-grey;

                &.current {
                    color: $orange;
                }
            }
        }
  </style>