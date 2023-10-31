<script setup>
import {onMounted, h} from 'vue'

onMounted(() => {
  const {params, query} = this.$route
  const { path } = params

  this.$router.replace({path:`/${path}`},query)

})
h('div')

</script>
