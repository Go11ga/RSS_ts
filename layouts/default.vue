<template>
  <div>
    <nuxt />
    
    <toast />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Toast from '@/components/common/toast/index.vue'

@Component({
  components: { Toast }
})
export default class DefaultPage extends Vue {
 
}
</script>
