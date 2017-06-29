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
      <v-option
        v-for="option in pageSizeOptions"
        :key="option"
        :label="option"
        :text="option + ' / 页'"></v-option>
    </v-select>
  </li>
</ul>
</template>

<script>
export default {
  name: 'vPagination',

  data () {
    return {
      innerCurrent: this.value.current,
      innerPageSize: this.value.pageSize
    }
  },

  props: {
    value: {
      type: Object,
      default: function () {
        return {
          current: 1,
          pageSize: 10
        }
      }
    },
    total: Number,
    pageSizeOptions: {
      type: Array,
      default: function () {
        return [10, 20, 30]
      }
    }
  },

  watch: {
    innerPageSize (val) {
      this.innerCurrent = 1
      this.$emit('pageSizeChange', this.innerCurrent, val)
      this.$emit('input', {
        current: this.innerCurrent,
        pageSize: val
      })
    },
    innerCurrent (val) {
      this.$emit('change', val, this.innerPageSize)
      this.$emit('input', {
        current: val,
        pageSize: this.innerPageSize
      })
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
      }
    },
    handleNextClick () {
      if (this.innerCurrent !== this.totalPage) {
        this.innerCurrent += 1
      }
    },

    handleItemClick (page) {
      if (this.innerCurrent !== page) {
        this.innerCurrent = page
      }
    }
  }
}
</script>
