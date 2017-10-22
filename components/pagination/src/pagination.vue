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
  <!-- 总页数小于10时 -->
  <template v-if="totalPage < 10">
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
  </template>
  <!-- end 总页数小于10时 -->
  <template v-else>
    <!-- 当前小于5页时 -->
    <template v-if="innerCurrent < 5">
      <li
        class="v-pagination-item"
        v-for="n in 5"
        :key="n"
        :class="{
          active: innerCurrent === n
        }"
        @click="handleItemClick(n)">
        <a href="javascripti:void(0)">
          {{n}}
        </a>
      </li>
      <li
        class="v-pagination-next5"
        @click="handleItemClick(innerCurrent + 5)">
        <a href="javascripti:void(0)"></a>
      </li>
      <li
        class="v-pagination-item"
        @click="handleItemClick(totalPage)">
        <a href="javascripti:void(0)">
          {{ totalPage }}
        </a>
      </li>
    </template>
    <!-- end 当前小于5页时 -->
    <!-- 当前小于5页时 -->
    <template v-else-if="innerCurrent > (totalPage - 4)">
      <li
        class="v-pagination-item"
        @click="handleItemClick(1)">
        <a href="javascripti:void(0)">
         1
        </a>
      </li>
      <li
        class="v-pagination-prev5"
        @click="handleItemClick(innerCurrent - 5)">
        <a href="javascripti:void(0)"></a>
      </li>
      <li
        class="v-pagination-item"
        v-for="n in 5"
        :key="totalPage - (5 - n)"
        :class="{
          active: innerCurrent === (totalPage - (5 - n))
        }"
        @click="handleItemClick(totalPage - (5 - n))">
        <a href="javascripti:void(0)">
          {{ totalPage - (5 - n) }}
        </a>
      </li>
    </template>
    <!-- end 当前小于5页时 -->
    <template v-else>
      <li
        class="v-pagination-item"
        @click="handleItemClick(1)">
        <a href="javascripti:void(0)">
         1
        </a>
      </li>
      <li
        class="v-pagination-prev5"
        @click="handleItemClick(innerCurrent - 5)">
        <a href="javascripti:void(0)"></a>
      </li>
      <li
        class="v-pagination-item"
        v-for="n in 5"
        :key="innerCurrent + n - 3"
        :class="{
          active: innerCurrent === innerCurrent + n - 3
        }"
        @click="handleItemClick(innerCurrent + n - 3)">
        <a href="javascripti:void(0)">
          {{ innerCurrent + n - 3 }}
        </a>
      </li>
      <li
        class="v-pagination-next5"
        @click="handleItemClick(innerCurrent + 5)">
        <a href="javascripti:void(0)"></a>
      </li>
      <li
        class="v-pagination-item"
        @click="handleItemClick(totalPage)">
        <a href="javascripti:void(0)">
          {{ totalPage }}
        </a>
      </li>
    </template>
  </template>
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
    class="v-pagination-pagesize-select"
    v-if="showSizeChanger">
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
  componentName: 'vPagination',

  data () {
    return {
      innerCurrent: this.value.current,
      innerPageSize: this.value.pageSize
    }
  },

  props: {
    value: { // 分页数据
      type: Object,
      default: function () {
        return {
          current: 1,
          pageSize: 10,
          total: 1
        }
      }
    },
    total: Number,
    pageSizeOptions: {
      type: Array,
      default: function () {
        return [10, 20, 30]
      }
    },
    showSizeChanger: { // 是否显示 pageSize 切换选择
      type: Boolean,
      default: false
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
      let total = this.total || this.value.total || 1
      return Math.ceil(total / this.innerPageSize)
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
