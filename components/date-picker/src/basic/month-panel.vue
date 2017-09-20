<template>
<div class="v-calendar-panel v-calendar-month-panel">
  <div class="v-calendar-panel-header">
    <a
      class="v-calendar-prev"
      href="javascript:void(0)"
      @click="prevYear">
      <v-icon type="double-left"></v-icon>
    </a>
    <a
      class="v-calendar-prev-step"
      href="javascript:void(0)"
      @click="prevMonth">
      <v-icon type="left"></v-icon>
    </a>
    <span class="v-calendar-select">
      <a
        class="v-calendar-select-block"
        href="javascript:void(0)"
        @click.stop="changePanel('DecadePanel')">
        {{ year }}年
      </a>
      <a
        class="v-calendar-select-block"
        href="javascript:void(0)"
        @click.stop="changePanel('YearPanel')">
        {{ month + 1 }}月
      </a>
    </span>
    <a
      class="v-calendar-step"
      href="javascript:void(0)"
      @click="nextMonth">
      <v-icon type="right"></v-icon>
    </a>
    <a
      class="v-calendar-next"
      href="javascript:void(0)"
      @click="nextYear">
      <v-icon type="double-right"></v-icon>
    </a>
  </div>
  <div class="v-calendar-panel-body">
    <table>
      <thead>
        <tr>
          <th>日</th>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(dateChunk, index) in dateList"
          :key="index">
          <td
            v-for="date in dateChunk"
            :key="date"
            :class="{
              'v-calender-month-next': date.isNext,
              'v-calender-month-prev': date.isPerv,
              'v-calender-date-selected': date.isSelected,
              'v-calender-date-disabled': date.isDisabled,
              'v-calender-date-today': date.isToday
            }">
            <a
              href="javascript:void(0)"
              :title="date.dateText"
              @click.stop="handleDateClick(date)">
              {{date.dateNum}}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="v-calendar-panel-footer">
    <button
      @click.stop="toToday"
      class="v-calendar-today-btn">
      今天
    </button>
  </div>
</div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import Emitter from 'components/_mixins/emitter'

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
    pickerDate () {
      return (this.picker && this.picker.date) || moment()
    },
    date () {
      return this.pickerDate.date()
    },
    year () { // 年
      return this.pickerDate.year()
    },
    month () { // 月
      return this.pickerDate.month()
    },
    dateList () { // 一个月总的月数
      let dateList = []
      let currentMonth = moment([this.year, this.month])
      let prevMonth = moment([this.year, this.month]).subtract(1, 'M') // 上一月
      let nextMonth = moment([this.year, this.month]).add(1, 'M') // 下一月
      let firstDayOfCurrentMonth = currentMonth.startOf('day').day() // 一个月的第一天

      // 生成上一月的衔接日期
      for (let i = prevMonth.daysInMonth() - firstDayOfCurrentMonth; i <= prevMonth.daysInMonth(); i++) {
        dateList.push({
          isPerv: true,
          isDisabled: this.picker && this.picker.disabledDate && this.picker.disabledDate(moment([prevMonth.year(), prevMonth.month(), i])),
          dateObj: moment([prevMonth.year(), prevMonth.month(), i]),
          dateNum: i,
          dateText: moment([prevMonth.year(), prevMonth.month(), i]).format('YYYY-MM-DD')
        })
      }
      // 生成当月日期
      for (let i = 1; i <= currentMonth.daysInMonth(); i++) {
        dateList.push({
          isSelected: i === this.date,
          isDisabled: this.picker && this.picker.disabledDate && this.picker.disabledDate(moment([currentMonth.year(), currentMonth.month(), i])),
          isToday: moment().date() === i,
          dateObj: moment([currentMonth.year(), currentMonth.month(), i]),
          dateNum: i,
          dateText: moment([currentMonth.year(), currentMonth.month(), i]).format('YYYY-MM-DD')
        })
      }

      // 生成次月衔接日期
      for (let i = 1; i < (42 - firstDayOfCurrentMonth - currentMonth.daysInMonth()); i++) {
        dateList.push({
          isNext: true,
          isDisabled: this.picker && this.picker.disabledDate && this.picker.disabledDate(moment([nextMonth.year(), nextMonth.month(), i])),
          dateObj: moment([nextMonth.year(), nextMonth.month(), i]),
          dateNum: i,
          dateText: moment([nextMonth.year(), nextMonth.month(), i]).format('YYYY-MM-DD')
        })
      }
      return _.chunk(dateList, 7)
    }
  },

  methods: {
    prevYear () {
      this.dispatch('vDatePicker', 'year.prev')
    },
    nextYear () {
      this.dispatch('vDatePicker', 'year.next')
    },
    prevMonth () {
      this.dispatch('vDatePicker', 'month.prev')
    },
    nextMonth () {
      this.dispatch('vDatePicker', 'month.next')
    },
    handleDateClick (date) {
      if (!date.isDisabled) {
        this.dispatch('vDatePicker', 'date.selected', date.dateObj)
      }
    },
    toToday () {
      this.dispatch('vDatePicker', 'date.selected', moment())
    },
    changePanel (name) {
      this.dispatch('vDatePicker', 'panel.change', name)
    }
  }
}
</script>
