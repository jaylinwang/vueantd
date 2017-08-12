<template>
<div class="v-calendar-panel v-calendar-decade-panel">
  <div class="v-calendar-panel-header">
    <a
      class="v-calendar-prev"
      href="javascript:void(0)"
      @click="prevYear">
      <v-icon type="double-left"></v-icon>
    </a>
    <span class="v-calendar-select">
      <a
        class="v-calendar-select-block"
        href="javascript:void(0)"
        @click.stop="changePanel('DecadePanel')">
       {{ year }}
      </a>
    </span>
    <a
      class="v-calendar-next"
      href="javascript:void(0)"
      @click="nextYear">
      <v-icon type="double-right"></v-icon>
    </a>
  </div>
  <div class="v-calendar-panel-body">
    <ul>
      <li
        v-for="(m, index) in mounthList"
        :key="m"
        :class="{
          'v-calendar-month-selected': index === month
        }">
        <a
          href="javascript:void(0)"
          @click.stop="handleMonthClick(m, index)">
          {{m}}
        </a>
      </li>
    </ul>
  </div>
</div>
</template>


<script>
import Emitter from '../../../../mixins/emitter'

export default {
  mixins: [Emitter],

  computed: {
    picker () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vDatePicker') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return parent
    },

    year () {
      return this.picker && this.picker.date.year()
    },

    month () {
      return this.picker && this.picker.date.month()
    },

    mounthList () {
      return [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月'
      ]
    }
  },

  methods: {
    nextYear () {
      this.dispatch('vDatePicker', 'year.next')
    },
    prevYear () {
      this.dispatch('vDatePicker', 'year.prev')
    },
    handleMonthClick (month, index) {
      this.dispatch('vDatePicker', 'month.selected', index)
    },
    changePanel (name) {
      this.dispatch('vDatePicker', 'panel.change', name)
    }
  }
}
</script>
