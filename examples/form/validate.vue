<template>
<div class="form-box">
<v-form
  :model="form"
  :rules="rules"
  @submit="handleFormSubmit">
  <v-form-item
    title="输入框"
    rule-name="name">
    <v-input
      v-model="form.inputVal"
      placeholder="请输入..."></v-input>
  </v-form-item>
  <v-form-item
    rule-name="required"
    title="选择器">
    <v-select
      v-model="form.selectVal"
      placeholder="请选择">
      <v-option :label="1" text="选项一"></v-option>
      <v-option :label="2" text="选项二"></v-option>
    </v-select>
  </v-form-item>
  <v-form-item
    title="单选框"
    rule-name="required">
    <v-radio-group
      v-model="form.radioVal">
      <v-radio label="7">
        初一
      </v-radio>
      <v-radio label="8">
        初二
      </v-radio>
      <v-radio label="9">
        初三
      </v-radio>
    </v-radio-group>
  </v-form-item>
  <v-form-item
    rule-name="required"
    title="多选框">
    <v-checkbox-group
      v-model="form.checkboxVal">
      <v-checkbox label="7">
        初一
      </v-checkbox>
      <v-checkbox label="8">
        初二
      </v-checkbox>
      <v-checkbox label="9">
        初三
      </v-checkbox>
    </v-checkbox-group>
  </v-form-item>
  <v-form-item title="开关">
    <v-switch
      v-model="form.switchVal">
      <span slot="on">开</span>
      <span slot="off">关</span>
    </v-switch>
  </v-form-item>
  <v-form-item>
    <v-button
      native-type="submit"
      type="primary">提交</v-button>
  </v-form-item>
</v-form>
</div>
</template>

<style>
.form-box{
  width: 600px;
  background-color: #FFF;
  padding: 32px;
}
</style>

<script>
export default {
  data () {
    return {
      form: {
        inputVal: '',
        selectVal: '',
        radioVal: '',
        checkboxVal: [],
        switchVal: false
      },
      rules: {
        required: [{
          required: true, message: '此项必填'
        }],
        name: [{
          required: true, message: '请输入密码'
        }, {
          min: 3, max: 5, message: '长度在 3 到 5 个字符'
        }]
      }
    }
  },

  methods: {
    handleFormSubmit (model) {
      console.log(model)
    }
  }
}
</script>
