<template>
  <div
    class="v-date-picker"
    v-outsideclick="handleClickoutside">
    <v-input
      v-model="dateText"
      icon="date"
      ref="input"
      :placeholder="placeholder"
      @focus="handleInputFocus"
      @change.native="handleInputChange">
    </v-input>
    <div
      class="v-date-picker-panel"
      v-show="pickerPanelVisible"
      ref="drop">
      <div class="v-date-picker-panel-header">
        <input
          v-model="dateText"
          type="text"
          :placeholder="placeholder"
          @change="handleInputChange">
      </div>
      <div
        class="v-date-picker-panel-body"
        :is="currentPanel"></div>
    </div>
  </div>
</template>


<script>
  import moment from 'moment'
  import outsideclick from '../../../directives/outsideclick'
  import CenturyPanel from './basic/century-panel.vue'
  import DecadePanel from './basic/decade-panel.vue'
  import YearPanel from './basic/year-panel.vue'
  import MonthPanel from './basic/month-panel.vue'

  export default {
    name: 'vDatePicker',

    directives: {
      outsideclick
    },

    components: {
      CenturyPanel,
      DecadePanel,
      YearPanel,
      MonthPanel
    },

    data () {
      return {
        currentPanel: 'MonthPanel',
        pickerPanelVisible: false,
        centuryStart: 0, // 世纪起始年
        decadeStart: 0, // 十年起始年
        date: moment(), // 日期
        dateText: ''
      }
    },

    created () {
      let year = this.date.year()
      this.dateText = this.date.format('YYYY-MM-DD')
      this.decadeStart = parseInt(year / 10) * 10
      this.centuryStart = parseInt(this.decadeStart / 100) * 100

      this.$on('century.prev', this.handleCenturyPrev) // 上一个世纪
      this.$on('century.next', this.handleDecadeNext) // 下一个世纪
      this.$on('decade.prev', this.handleDecadePrev) // 上一个十年
      this.$on('decade.next', this.handleDecadeNext) // 下一个十年
      this.$on('decade.selected', this.handleDecadeSelected) // 十年选中
      this.$on('year.prev', this.handleYearPrev) // 上一年
      this.$on('year.next', this.handleYearNext) // 下一年
      this.$on('year.selected', this.handleYearSelected) // 年选中
      this.$on('month.prev', this.handleMonthPrev) // 上一月
      this.$on('month.next', this.handleMonthNext) // 下一月
      this.$on('month.selected', this.handleMonthSelected) // 月选中
      this.$on('date.selected', this.handleDateSelected) // 日选中
      this.$on('panel.change', this.handlePanelChange) // 下一月
    },

    watch: {
      date (val) {
        this.dateText = val.format('YYYY-MM-DD')
        this.decadeStart = parseInt(val.year() / 10) * 10
      },
      decadeStart (val) {
        this.centuryStart = parseInt(val / 100) * 100
      },
      pickerPanelVisible (val) {
        if (!val) {
          this.currentPanel = 'MonthPanel' // 焦点失去时，定位打日的选择
        }
      }
    },

    props: {
      placeholder: {
        type: String
      },
      disabledDate: {
        type: Function
      }
    },

    methods: {
      handleInputChange () {
        if (moment(this.dateText).isValid()) {
          this.date = moment(this.dateText)
        }
      },

      handleInputFocus () {
        this.pickerPanelVisible = true
        this.$refs.input.blur()
      },

      handleClickoutside () {
        this.pickerPanelVisible = false
      },

      // 日操作
      handleDateSelected (date) {
        this.date = date
        this.pickerPanelVisible = false
      },

      // 月操作
      handleMonthPrev () {
        let date = this.date.clone()
        this.date = date.subtract(1, 'months')
      },

      handleMonthNext () {
        let date = this.date.clone()
        this.date = date.add(1, 'months')
      },

      handleMonthSelected (month) {
        let date = this.date.clone()
        this.date = date.month(month)
        this.currentPanel = 'MonthPanel'
      },

      // 年操作
      handleYearPrev () {
        let date = this.date.clone()
        this.date = date.subtract(1, 'years')
      },

      handleYearNext () {
        let date = this.date.clone()
        this.date = date.add(1, 'years')
      },

      handleYearSelected (year) {
        let date = this.date.clone()
        this.date = date.year(year)
        this.currentPanel = 'YearPanel'
      },

      // 十年操作
      handleDecadeNext (decadeStart) {
        this.decadeStart = decadeStart
      },

      handleDecadePrev (decadeStart) {
        this.decadeStart = decadeStart
      },

      handleDecadeSelected (decadeStart) {
        this.decadeStart = decadeStart
        this.currentPanel = 'DecadePanel'
      },

      // 世纪操作
      handleCenturyPrev (centuryStart) {
        this.centuryStart = centuryStart
      },

      handleCenturyNext (centuryStart) {
        this.centuryStart = centuryStart
      },

      handlePanelChange (name) {
        this.currentPanel = name
      }

    }
  }

</script>
