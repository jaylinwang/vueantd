<template>
  <div
    class="v-date-picker"
    :class="{
      'v-date-picker-disabled': disabled
    }"
    v-outsideclick="handleClickoutside">
    <v-input
      v-model="dateText"
      icon="date"
      ref="input"
      :placeholder="placeholder"
      @focus="handleInputFocus"
      @change.native="handleInputChange"
      :disabled="disabled">
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
  import outsideclick from 'components/_directives/outsideclick'
  import CenturyPanel from './basic/century-panel.vue'
  import DecadePanel from './basic/decade-panel.vue'
  import YearPanel from './basic/year-panel.vue'
  import MonthPanel from './basic/month-panel.vue'

  export default {
    name: 'vDatePicker',
    componentName: 'vDatePicker',

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
        dateText: ''
      }
    },

    props: {
      value: {},
      placeholder: { // 帮助信息
        type: String
      },
      disabledDate: { // 禁用的日期，传入一个返回值为 Boolean 类型的函数
        type: Function
      },
      disabled: {
        type: Boolean,
        default: false
      },
      format: { // 日期格式
        type: String,
        default: 'YYYY-MM-DD'
      }
    },

    computed: {
      date: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        }
      }
    },

    watch: {
      date (val) {
        this.dateText = val ? val.format(this.format) : ''
        this.decadeStart = val ? parseInt(val.year() / 10) * 10 : parseInt(moment().year() / 10) * 10
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

    created () {
      this.dateText = this.date ? this.date.format(this.format) : ''
      let year = this.date ? this.date.year() : moment().year()
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

    methods: {
      handleInputChange () {
        if (moment(this.dateText).isValid()) {
          this.date = moment(this.dateText)
        }
      },

      handleInputFocus () {
        if (!this.disabled) {
          this.pickerPanelVisible = true
          this.$refs.input.blur()
        }
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
        let date = this.date ? this.date.clone() : moment()
        this.date = date.subtract(1, 'months')
      },

      handleMonthNext () {
        let date = this.date ? this.date.clone() : moment()
        this.date = date.add(1, 'months')
      },

      handleMonthSelected (month) {
        let date = this.date ? this.date.clone() : moment()
        this.date = date.month(month)
        this.currentPanel = 'MonthPanel'
      },

      // 年操作
      handleYearPrev () {
        let date = this.date ? this.date.clone() : moment()
        this.date = date.subtract(1, 'years')
      },

      handleYearNext () {
        let date = this.date ? this.date.clone() : moment()
        this.date = date.add(1, 'years')
      },

      handleYearSelected (year) {
        let date = this.date ? this.date.clone() : moment()
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
