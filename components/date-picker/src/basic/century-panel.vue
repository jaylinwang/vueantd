<template>
<div class="v-calendar-panel v-calendar-century-panel">
  <div class="v-calendar-panel-header">
    <a
      class="v-calendar-prev"
      href="javascript:void(0)"
      @click="prevCentury">
      <v-icon type="double-left"></v-icon>
    </a>
    <span class="v-calendar-select">
      <a
        class="v-calendar-select-block"
        href="javascript:void(0)">
        {{centuryStart}}-{{centuryStart + 99}}
      </a>
    </span>
    <a
      class="v-calendar-next"
      href="javascript:void(0)"
      @click="nextCentury">
      <v-icon type="double-right"></v-icon>
    </a>
  </div>
  <div class="v-calendar-panel-body">
    <ul>
      <li
        v-for="(ds, index) in decadeList"
        :key="ds"
        :class="{
          'v-calendar-century-prev':  index === 0,
          'v-calendar-century-next':  index === 11,
          'v-calendar-decade-selected': ds === decadeStart
        }">
        <a
          href="javascript:void(0)"
          @click.stop="handleDecadeClick(ds, index)">
          {{ds}}-{{ds + 9}}
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
        if (parent.$options.componentName === 'vDatePicker') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return parent
    },
    centuryStart () {
      return this.picker && this.picker.centuryStart
    },
    decadeStart () {
      return this.picker && this.picker.decadeStart
    },
    decadeList () {
      let decadeList = []
      for (let i = 0; i < 12; i++) {
        let decadeStart = this.centuryStart + (i - 1) * 10
        decadeList.push(decadeStart)
      }
      return decadeList
    }
  },

  methods: {
    nextCentury () {
      this.dispatch('vDatePicker', 'century.next', this.centuryStart + 100)
    },
    prevCentury () {
      this.dispatch('vDatePicker', 'century.prev', this.centuryStart - 100)
    },
    handleDecadeClick (decadeStart, index) {
      if (index === 0) {
        this.prevCentury()
      } else if (index === 11) {
        this.nextCentury()
      } else {
        this.dispatch('vDatePicker', 'decade.selected', decadeStart)
      }
    }
  }
}
</script>
