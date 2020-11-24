<template>
  <div>
    <div>
      {{ getNewsesNS[0] }}
    </div>
    <div v-for="(news, ind) in getNewsesNS" :key="ind">
      {{ news.pubDate }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace  } from "nuxt-property-decorator"
import { NewsItem } from '~/interfaces/interfaces'

const NewsesStore = namespace('newses')

@Component
export default class MyComponent extends Vue {

  @NewsesStore.Getter('meduzaNewses')
  public getNewsesNS!: Array<NewsItem>
}

</script>

