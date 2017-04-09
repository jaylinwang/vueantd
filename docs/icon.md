# Icon 图标

空心图标`-o`结尾

## 方向性图标

<v-row>
  <v-col :span="4" v-for="(icon, index) in orientationIconList" :key="index">
    <div class="icon-block">
      <v-icon :type="icon"></v-icon>
      <p>{{icon}}</p>
    </div>
  </v-col>
</v-row>

## 通知类图标

<v-row>
  <v-col :span="4" v-for="(icon, index) in notifyIconList" :key="index">
    <div class="icon-block">
      <v-icon :type="icon"></v-icon>
      <p>{{icon}}</p>
    </div>
  </v-col>
</v-row>

## 通用类图标

<v-row>
  <v-col :span="4" v-for="(icon, index) in usualIconList" :key="index">
    <div class="icon-block">
      <v-icon :type="icon"></v-icon>
      <p>{{icon}}</p>
    </div>
  </v-col>
</v-row>

## 按钮旋转
<v-row>
  <v-col :span="4">
    <div class="icon-block">
      <v-icon type="loading" spin></v-icon>
      <p>loading</p>
    </div>
  </v-col>
</v-row>

<style>
.icon-block{
  text-align: center;
  padding:5px;
}
.icon-block .v-icon::before{
  font-size: 24px;
}
.icon-block:hover{
  background-color: #f2f2f2;
  cursor: pointer;
}
</style>

<script>
const orientationIconList = [
  'up','down', 'right', 'left', 'caret-up', 'caret-down',
  'caret-left', 'caret-right', 'arrow-up','arrow-down', 'arrow-right', 'arrow-left',
  'round-up', 'round-down', 'round-left', 'round-right', 'circle-up', 'circle-down',
  'circle-left', 'circle-right', 'double-left','double-right', 'top', 'bottom'
];
const notifyIconList = [
  'question-circle-o', 'question-circle', 'info-circle-o', 'info-circle', 'close', 'close-circle-o',
  'close-circle', 'check', 'check-circle-o', 'check-circle', 'plus','plus-circle-o',
  'plus-circle', 'minus', 'minus-circle', 'minus-circle-o', 'squre', 'check-squre-o',
  'check-squre', 'circle', 'radio-cricle-o', 'radio-circle', 'clock-o','clock',
  'bell', 'bell-o'
];
const usualIconList = [
  'edit', 'clouddown', 'cloudup', 'cloud-o', 'cloud', 'unlock',
  'lock', 'poweroff', 'link', 'desktop', 'save', 'import',
  'star', 'star-o', 'return','share', 'buychart', 'buycart-o',
  'service', 'service-o', 'comment', 'comment-o', 'group', 'group-o',
  'ticket', 'scan', 'filter', 'delete', 'config','idcard',
  'home', 'home-o', 'search', 'search-block', 'search-block-o', 'refund',
  'mine', 'mine-o', 'logistic', 'heart', 'heart-o', 'message',
  'message-o','coupon', 'text', 'change', 'foot',
  'location', 'location-o', 'camera', 'camera-o', 'camera-plus',
  'loading', 'refresh', 'wifi', 'card', 'user', 'user-o',
  'tag', 'tag-o', 'zengsong', 'helper', 'menu', 'like',
  'like-o', 'exitfull', 'record', 'qrcode', 'sold', 'chart-pie',
  'chart-line', 'chart-bar', 'full', 'mail', 'app-o', 'medal',
  'medal-o', 'app', 'android', 'android-o', 'apple-o', 'apple',
  'file', 'folder','folderopen', 'export', 'more-v', 'more-h',
  'list-block', 'list'
];
export default {
  data(){
    return {
      orientationIconList: orientationIconList,
      notifyIconList: notifyIconList,
      usualIconList: usualIconList,
    };
  },
}
</script>
