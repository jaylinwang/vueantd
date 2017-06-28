<template>
<ul class="v-pagination">
  <li
    class="v-pagination-prev"
    :class="{
      disabled: innerCurrent === 1
    }"
    @click="handlePrevClick">
    <a href="javascript:void(0)">
      <v-icon type="left"></v-icon>
    </a>
  </li>
  <li
    v-for="page in totalPage"
    class="v-pagination-item"
    :class="{
      active: innerCurrent === page
    }"
    :key="page"
    @click="handleItemClick(page)">
    <a href="javascripti:void(0)">
      {{page}}
    </a>
  </li>
  <li
    class="v-pagination-next"
    :class="{
      disabled: innerCurrent === totalPage
    }"
    @click="handleNextClick">
    <a href="javascript:void(0)">
       <v-icon type="right"></v-icon>
    </a>
  </li>
  <li
    class="v-pagination-pagesize-select">
    <v-select v-model="innerPageSize">
      <v-option :label="10" text="10 / 页"></v-option>
      <v-option :label="20" text="20 / 页"></v-option>
    </v-select>
  </li>
</ul>
</template>

<script>
export default {
  name: 'vPagination',

  data () {
    return {
      innerCurrent: this.current,
      innerPageSize: this.pageSize
    }
  },

  props: {
    total: Number,
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },

  watch: {
    innerPageSize (val) {
      this.innerCurrent = 1
      this.$emit('pageSizeChange', this.innerCurrent, val)
    }
  },

  computed: {
    totalPage () {
      return Math.ceil(this.total / this.innerPageSize)
    }
  },

  methods: {
    handlePrevClick () {
      if (this.innerCurrent !== 1) {
        this.innerCurrent -= 1
        this.$emit('change', this.innerCurrent, this.innerPageSize)
      }
    },
    handleNextClick () {
      if (this.innerCurrent !== this.totalPage) {
        this.innerCurrent += 1
        this.$emit('change', this.innerCurrent, this.innerPageSize)
      }
    },

    handleItemClick (page) {
      if (this.innerCurrent !== page) {
        this.innerCurrent = page
        this.$emit('change', this.innerCurrent, this.innerPageSize)
      }
    }
  }
}
</script>
