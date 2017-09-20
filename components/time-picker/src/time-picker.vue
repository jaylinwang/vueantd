<template>
  <div
    class="v-time-picker"
    :class="{
      'v-time-picker-disabled': disabled
    }"
    v-outsideclick="handleClickoutside">
    <v-input
      v-model="timeText"
      icon="clock-o"
      ref="input"
      :placeholder="placeholder"
      @focus="handleInputFocus"
      @change.native="handleInputChange"
      :disabled="disabled"
      :readonly="true">
    </v-input>
    <div
      class="v-time-picker-panel"
      v-show="pickerPanelVisible"
      ref="drop">
      <div class="v-time-picker-panel-header">
        <input
          v-model="timeText"
          type="text"
          :placeholder="placeholder"
          @change="handleInputChange">
          <div
            class="v-time-picker-clear"
            @click.stop="clearTime">
            <v-icon type="close-circle"></v-icon>
          </div>
      </div>
      <div
        class="v-time-picker-panel-body"
        :is="currentPanel"></div>
    </div>
  </div>
</template>


<script>
import moment from 'moment'
import outsideclick from 'components/_directives/outsideclick'
import Time24Panel from './basic/time-24-panel.vue'

export default {
  name: 'vTimePicker',
  componentName: 'vTimePicker',

  directives: {
    outsideclick
  },

  components: {
    Time24Panel
  },

  data () {
    return {
      currentPanel: 'Time24Panel',
      pickerPanelVisible: false,
      timeText: ''
    }
  },

  props: {
    value: {},
    placeholder: { // 帮助信息
      type: String
    },
    disabled: { // 禁用状态
      type: Boolean,
      default: false
    },
    format: { // 事件格式化形式
      type: String,
      default: 'HH:mm:ss'
    },
    disabledHours: { // 禁用部分小时选项
      type: Function
    },
    disabledMinutes: { // 禁用部分分钟选项
      type: Function
    },
    disabledSeconds: { // 禁用部分秒选项
      type: Function
    },
    use12Hours: { // 使用12小时制
      type: Boolean,
      default: false
    }
  },

  computed: {
    time () {
      return this.value
    }
  },

  created () {
    this.timeText = this.time ? this.time.format(this.format) : ''
    this.$on('hour.selected', this.handleHourSelected) // 小时选中
    this.$on('minute.selected', this.handleMinuteSelected) // 分钟选中
    this.$on('second.selected', this.handleSecondSelected) // 秒选中
  },

  watch: {
    time (val) {
      this.timeText = val ? val.format(this.format) : ''
    }
  },

  methods: {
    handleInputChange () {
      if (moment(this.timeText, this.format).isValid()) {
        this.time = moment(this.timeText, this.format)
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

    handleHourSelected (hour) {
      let time = this.time ? this.time.clone() : moment('00:00:00', this.format)
      this.$emit('input', time.hour(hour))
    },

    handleMinuteSelected (minute) {
      let time = this.time ? this.time.clone() : moment('00:00:00', this.format)
      this.$emit('input', time.minute(minute))
    },

    handleSecondSelected (second) {
      let time = this.time ? this.time.clone() : moment('00:00:00', this.format)
      this.$emit('input', time.second(second))
    },

    clearTime () {
      this.time = null
    }
  }
}
</script>
