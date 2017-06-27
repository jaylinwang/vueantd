<template>
  <div
    class="v-picker"
    v-outsideclick="handleClickoutside">
    <div class="v-picker-handle" ref="popperRef">
    </div>
    <v-input
      icon="date"
      ref="input"
      :placeholder="placeholder"
      @focus="handleInputFocus">
    </v-input>
    <v-popper
      class="v-picker-panel"
      v-if="pickerPanelVisible"
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
            <a class="v-calendar-picker-select-year" href="">2017年</a>
            <a class="v-calendar-picker-select-month" href=""> 11月</a>
          </span>
          <a class="v-calendar-picker-next-month">
            <v-icon type="right"></v-icon>
          </a>
          <a class="v-calendar-picker-next-year">
            <v-icon type="double-right"></v-icon>
          </a>
        </div>
        <div class="v-calendar-picker-panel-body">

        </div>
        <div class="v-calendar-picker-panel-foot">
        </div>
      </div>
    </v-popper>
  </div>
</template>

<script>
  import outsideclick from '../../../directives/outsideclick'

  export default {
    name: 'vDatePicker',

    directives: {
      outsideclick
    },

    data () {
      return {
        pickerPanelVisible: true
      }
    },

    watch: {
      pickerPanelVisible (val) {
        const vm = this
        if (val) {
          vm.$nextTick(() => {
            vm.$refs.drop.init()
          })
        } else {
          vm.$refs.drop.distroy()
        }
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
