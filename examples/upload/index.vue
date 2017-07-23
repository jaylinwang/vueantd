<template>
<div>
  <h3>picture-single</h3>
  <picture-single></picture-single>
  <h3>picture-card</h3>
  <picture-card></picture-card>
  <h3>picture</h3>
  <picture></picture>
  <h3>error</h3>
  <error></error>
  <h3>basic</h3>
  <basic></basic>
</div>
</template>

<script>
import basic from './basic.vue'
import error from './error.vue'
import picture from './picture.vue'
import pictureCard from './picture-card.vue'
import pictureSingle from './picture-single.vue'

export default {
  components: {
    basic, error, picture, pictureCard, pictureSingle
  }
}
</script>
