<template>
<div>
  <h3>custom</h3>
  <custom></custom>
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
import custom from './custom.vue'
import picture from './picture.vue'
import pictureCard from './picture-card.vue'

export default {
  components: {
    basic, error, custom, picture, pictureCard
  }
}
</script>
