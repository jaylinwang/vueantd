<template>
<div class="form-box">
<v-form @submit="handleSubmit">
  <v-row>
    <v-col :span="12">
      <v-form-item title="用户名" >
        <v-input
          placeholder="请输入..."></v-input>
      </v-form-item>
    </v-col>
    <v-col :span="12">
      <v-form-item title="密码">
        <v-input
          placeholder="请输入"></v-input>
      </v-form-item>
    </v-col>
  </v-row>
  <v-row>
    <v-col :span="24">
      <v-form-item title="多选框">
      <v-checkbox-group>
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
    </v-col>
  </v-row>
  <v-row>
    <v-col :span="24">
      <v-form-item title="选择器">
        <v-select
          v-model="selectVal"
          placeholder="请选择">
          <v-option :label="1" text="选项一"></v-option>
          <v-option :label="2" text="选项二"></v-option>
        </v-select>
      </v-form-item>
    </v-col>
  </v-row>
  <v-row>
    <v-col :span="24">
      <v-form-item title="文本">
        <v-input
          v-model="text"
          type="textarea"
          placeholder="文本输入..."
          :min-rows="5"
          :max-rows="10"
          autosize>
        </v-input>
      </v-form-item>
    </v-col>
  </v-row>
  <v-row>
    <v-col :span="24">
      <v-form-item title="图片上传">
        <v-upload action="www.baidu.com" list-type="picture-card"></v-upload>
      </v-form-item>
    </v-col>
  </v-row>
  <v-button>
    提交
  </v-button>
</v-form>
</div>
</template>

<style>

</style>


<script>
export default {
  data () {
    return {
      selectVal: '',
      text: ''
    }
  },

  methods: {
    handleSubmit () {
      console.log('submit')
    }
  }
}
</script>
