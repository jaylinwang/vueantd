<script>
export default {
  data () {
    return {
      checkOptions: ['Apple', 'Pear', 'Orange'],
      checkedOptions: ['Pear'],
      allChecked: false
    }
  },
  computed: {
    indeterminate () {
      if (this.checkedOptions.length > 0 &&
          this.checkedOptions.length < this.checkOptions.length) {
        return true
      } else {
        return false
      }
    }

  },
  watch: {
    checkedOptions (val) {
      if (val.length === this.checkOptions.length) {
        this.allChecked = true
      } else {
        this.allChecked = false
      }
    }
  },
  methods: {
    checkAll () {
      if (this.allChecked) {
        this.checkedOptions = this.checkOptions
      } else {
        this.checkedOptions = []
      }
    }
  }
}
</script>

<template>
  <div>
    <p>
    <v-checkbox
      v-model="allChecked"
      :indeterminate="indeterminate"
      @change="checkAll">
      全选
    </v-checkbox>
     <v-checkbox-group v-model="checkedOptions">
        <v-checkbox
          v-for="(option, index) in checkOptions"
          :label="option"
          :key="index">
        {{option}}
        </v-checkbox>
      </v-checkbox-group>
    </p>
  </div>
</template>
