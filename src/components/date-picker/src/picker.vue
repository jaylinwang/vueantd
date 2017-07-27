<template>
  <div
    class="v-picker"
    v-outsideclick="handleClickoutside">
    <v-input
      icon="date"
      ref="input"
      :placeholder="placeholder"
      @focus="handleInputFocus">
    </v-input>
    <div
      class="v-picker-panel"
      v-show="pickerPanelVisible"
      ref="drop">
      <div class="v-picker-panel-head">
        <input type="text" :placeholder="placeholder">
      </div>
      <div class="v-calendar-picker-panel">
        <div class="v-calendar-picker-panel-head">
          <a class="v-calendar-picker-prev-year">
            <v-icon type="double-left"></v-icon>
          </a>
          <a class="v-calendar-picker-prev-month">
            <v-icon type="left"></v-icon>
          </a>
          <span class="v-calendar-picker-select">
            <a class="v-calendar-picker-select-year" href="">{{ year }}年</a>
            <a class="v-calendar-picker-select-month" href=""> {{ mounth + 1 }} 月</a>
          </span>
          <a class="v-calendar-picker-next-month">
            <v-icon type="right"></v-icon>
          </a>
          <a class="v-calendar-picker-next-year">
            <v-icon type="double-right"></v-icon>
          </a>
        </div>
        <div class="v-calendar-picker-panel-body">
          <table class="v-date-picker-table">
            <thead>
              <tr>
                <th class="v-date-picker-header">
                  日
                </th>
                <th class="v-date-picker-header">
                  一
                </th>
                <th class="v-date-picker-header">
                  二
                </th>
                <th class="v-date-picker-header">
                  三
                </th>
                <th class="v-date-picker-header">
                  四
                </th>
                <th class="v-date-picker-header">
                  五
                </th>
                <th class="v-date-picker-header">
                  六
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in dateGrid"
                :key="index">
                <td
                  class="v-date-picker-cell"
                  v-for="(col, index) in row"
                  :key="index">
                  <div class="v-date-picker-cell-inner">
                    {{ col.date }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="v-calendar-picker-panel-foot">
          {{dateList}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import outsideclick from '../../../directives/outsideclick'
  import { groupByLimit } from './utils/arr_kit'
  const today = new Date()
  export default {
    name: 'vDatePicker',

    directives: {
      outsideclick
    },

    data () {
      return {
        pickerPanelVisible: true,
        year: today.getFullYear(),
        mounth: today.getMonth(),
        date: today.getDate()
      }
    },

    computed: {
      dateGrid () {
        let dateList = []
        let mounthDays = new Date(this.year, this.mounth + 1, 0).getDate()
        let prevMounthDays = new Date(this.year, this.mounth, 0).getDate()
        let beginDay = new Date(this.year, this.mounth, 1).getDay()
        for (let i = 0; i < 42; i++) {
          if (i < beginDay) {
            let date = prevMounthDays - (beginDay - i) + 1
            dateList[i] = {
              date,
              isPrev: true,
              isNext: false
            }
          }
          if (i >= beginDay && i < mounthDays + beginDay) {
            dateList[i] = {
              date: (i - beginDay) + 1,
              isPrev: false,
              isNext: false
            }
          }
          if (i >= mounthDays + beginDay) {
            dateList[i] = {
              date: (i - mounthDays - beginDay) + 1,
              isPrev: false,
              isNext: true
            }
          }
        }
        return groupByLimit(dateList, 7)
      }
    },

    props: {
      placeholder: {
        type: String
      }
    },

    methods: {
      handleInputFocus () {
        this.pickerPanelVisible = true
        this.$refs.input.blur()
      },

      handleClickoutside () {
        // this.pickerPanelVisible = false
      }
    }
  }

</script>
