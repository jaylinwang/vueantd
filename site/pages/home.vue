<template>
<div>
  首页 {{ date }}
</div>
</template>

<script>
export default {
  data () {
    return {
      date: new Date()
    }
  }
}
</script>
