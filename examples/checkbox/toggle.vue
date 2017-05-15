<script>
export default {
  data () {
    return {
      checkOptions: ['Apple', 'Pear', 'Orange'],
      checkedOptions: [],
      v1: false,
      disabled: false
    }
  },
  methods: {
    checkAll () {
      if (this.checkedOptions.length === 0) {
        this.checkedOptions = this.checkOptions
      } else {
        this.checkedOptions = []
      }
    },
    toggleChecked () {
      this.v1 = !this.v1
    },
    toggleDisabled () {
      this.disabled = !this.disabled
    }
  }
}
</script>

<template>
  <div>
    <p>
     <v-checkbox-group v-model="checkedOptions">
        <v-checkbox
          v-for="(option, index) in checkOptions"
          :label="option"
          :key="index">
        {{option}}
        </v-checkbox>
      </v-checkbox-group>
      <v-button @click.native="checkAll">
        checkAll
      </v-button>
    </p>
    <p>
      <v-checkbox
        v-model="v1"
        :disabled="disabled">
        {{ v1 ? 'checked': 'unchecked'}} - {{ disabled ? 'disabled': 'enable'}}
      </v-checkbox>
      <v-button @click.native="toggleChecked">toggle checked</v-button>
      <v-button @click.native="toggleDisabled">toggle disabled</v-button>
    </p>
  </div>
</template>
