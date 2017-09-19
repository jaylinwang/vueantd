<template>
<div class="v-time-24-panel">
  <div
    class="v-time-select v-time-select-hour"
    ref="hourSelect">
    <ul>
      <li
        v-for="h in hourList"
        :key="h.hour"
        ref="hourOption"
        :data-selected="h.hour === hour"
        :class="{
          'selected': h.hour === hour
        }"
        @click.stop="handleHourSelected(h, $event)">
        {{h.hourText}}
      </li>
    </ul>
  </div>
  <div
    class="v-time-select v-time-select-minute"
    ref="minuteSelect">
    <ul>
      <li
        v-for="m in minuteList"
        :key="m.minute"
        ref="minuteOption"
        :data-selected="m.minute === minute"
        :class="{
          'selected': m.minute === minute
        }"
        @click.stop="handleMinuteSelected(m, $event)">
        {{m.minuteText}}
      </li>
    </ul>
  </div>
  <div
    class="v-time-select v-time-select-second"
    ref="secondSelect">
    <ul>
      <li
        v-for="s in secondList"
        :key="s.second"
        ref="secondOption"
        :data-selected="s.second === second"
        :class="{
          'selected': s.second === second
        }"
        @click.stop="handleSecondSelected(s, $event)">
        {{s.secondText}}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Emitter from '../../../../mixins/emitter'

export default {
  mixins: [Emitter],

  props: {
    optionHeight: { // 选项高度
      type: Number,
      default: 28
    }
  },

  computed: {
    picker () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === 'vTimePicker') {
          return parent
        } else {
          parent = parent.$parent
        }
      }
      return null
    },
    time () {
      this.scrollToSelected()
      return this.picker && this.picker.time
    },
    hour () {
      return this.time && this.picker.time.hour()
    },
    minute () {
      return this.time && this.picker.time.minute()
    },
    second () {
      return this.time && this.picker.time.second()
    },
    // 小时列表
    hourList () {
      let list = []
      for (let i = 0; i < 24; i++) {
        let hour = {
          hour: i
        }
        if (i < 10) {
          hour.hourText = `0${i}`
        } else {
          hour.hourText = i
        }
        list.push(hour)
      }
      return list
    },
    // 分钟列表
    minuteList () {
      let list = []
      for (let i = 0; i < 60; i++) {
        let minute = {
          minute: i
        }
        if (i < 10) {
          minute.minuteText = `0${i}`
        } else {
          minute.minuteText = i
        }
        list.push(minute)
      }
      return list
    },
    // 秒列表
    secondList () {
      let list = []
      for (let i = 0; i < 60; i++) {
        let second = {
          second: i
        }
        if (i < 10) {
          second.secondText = `0${i}`
        } else {
          second.secondText = i
        }
        list.push(second)
      }
      return list
    }
  },

  created () {
    this.scrollToSelected()
  },

  methods: {
    scrollToSelected () {
      const vm = this
      vm.$nextTick(() => {
        vm.$refs.hourOption.forEach((option) => {
          if (option.dataset.selected) {
            vm.$refs.hourSelect.scrollTop = option.offsetTop - this.optionHeight
          }
        })
        vm.$refs.minuteOption.forEach((option) => {
          if (option.dataset.selected) {
            vm.$refs.minuteSelect.scrollTop = option.offsetTop - this.optionHeight
          }
        })
        vm.$refs.secondOption.forEach((option) => {
          if (option.dataset.selected) {
            vm.$refs.secondSelect.scrollTop = option.offsetTop - this.optionHeight
          }
        })
      })
    },
    // 小时改变
    handleHourSelected (hour, e) {
      this.$refs.hourSelect.scrollTop = e.target.offsetTop - this.optionHeight
      this.dispatch('vTimePicker', 'hour.selected', hour.hour)
    },
    handleMinuteSelected (minute, e) {
      this.$refs.minuteSelect.scrollTop = e.target.offsetTop - this.optionHeight
      this.dispatch('vTimePicker', 'minute.selected', minute.minute)
    },
    handleSecondSelected (second, e) {
      this.$refs.secondSelect.scrollTop = e.target.offsetTop - this.optionHeight
      this.dispatch('vTimePicker', 'second.selected', second.second)
    }
  }

}
</script>
