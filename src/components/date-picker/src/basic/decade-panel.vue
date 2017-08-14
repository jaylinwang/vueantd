<template>
<div class="v-calendar-panel v-calendar-decade-panel">
  <div class="v-calendar-panel-header">
    <a
      class="v-calendar-prev"
      href="javascript:void(0)"
      @click="prevDecade">
      <v-icon type="double-left"></v-icon>
    </a>
    <span class="v-calendar-select">
      <a
        class="v-calendar-select-block"
        href="javascript:void(0)"
        @click.stop="changePanel('CenturyPanel')">
        {{decadeStart}}-{{decadeStart + 9}}
      </a>
    </span>
    <a
      class="v-calendar-next"
      href="javascript:void(0)"
      @click="nextDecade">
      <v-icon type="double-right"></v-icon>
    </a>
  </div>
  <div class="v-calendar-panel-body">
    <ul>
      <li
        v-for="(y, index) in yearList"
        :key="y"
        :class="{
          'v-calendar-decade-prev':  index === 0,
          'v-calendar-decade-next':  index === 11,
          'v-calendar-year-selected': y === year
        }">
        <a
          href="javascript:void(0)"
          @click.stop="handleYearClick(y, index)">
          {{y}}
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
        if (parent.$options.name === 'vDatePicker' ||
            parent.$options.name === 'vMonthPicker') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return parent
    },
    decadeStart () {
      return this.picker && this.picker.decadeStart
    },
    year () {
      return this.picker &&
             this.picker.date &&
             this.picker.date.year()
    },
    yearList () {
      let yearList = []
      for (let i = 0; i < 12; i++) {
        let year = this.decadeStart + (i - 1)
        yearList.push(year)
      }
      return yearList
    }
  },

  methods: {
    nextDecade () {
      this.dispatch('vDatePicker', 'decade.next', this.decadeStart + 10)
    },
    prevDecade () {
      this.dispatch('vDatePicker', 'decade.next', this.decadeStart - 10)
    },
    handleYearClick (year, index) {
      if (index === 0) {
        this.prevDecade()
      } else if (index === 11) {
        this.nextDecade()
      } else {
        this.dispatch('vDatePicker', 'year.selected', year)
      }
    },
    changePanel (name) {
      this.dispatch('vDatePicker', 'panel.change', name)
    }
  }
}
</script>
