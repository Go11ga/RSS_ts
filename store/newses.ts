import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from './../utils/api'
// import { $axios } from '~/utils/api'
import rssToJSON  from '~/utils/rssToJSON';
import convertJSON  from '~/utils/convertJSON';
import sortNews  from '~/utils/sortNews';
import { NewsItem } from '~/interfaces/interfaces'

@Module({
  name: 'newses',
  stateFactory: true,
  namespaced: true
})
export default class NewsesStore extends VuexModule {
  /**
   * * Новости lenta
   */
  public lenta: Array<NewsItem> = []

  /**
   * * Новости meduza
   */
  public meduza: Array<NewsItem> = []

  get lentaNewses () {
    return this.lenta
  }

  get meduzaNewses () {
    return this.meduza
  }

  @Mutation
  public setLenta (lenta: any) {
    const news = rssToJSON(lenta)
    this.lenta = sortNews(convertJSON(news))
  }

  @Mutation
  public setMeduza (meduza: any) {
    const news = rssToJSON(meduza)
    this.meduza = sortNews(convertJSON(news))
  }

  @Action
  async fetch (): Promise<any> {
    try {
      let lentaPromise = $axios.$get('rss/news');
      let meduzaPromise =  $axios.$get('rss2/all');
      
      const [ lenta, meduza ] = await Promise.all([lentaPromise, meduzaPromise])
      
      this.setLenta(lenta)
      this.setMeduza(meduza)

      // todo обработка ошибки
    } catch (e) {
      console.log(e)
    }
  }
}





// todo вопросы

/**
 * * Общая концепция?
 */

/**
 * * Почему не работает interface NewsItem?
 */

/**
 * * Почему происходит ошибка импорта компонента?
 */

