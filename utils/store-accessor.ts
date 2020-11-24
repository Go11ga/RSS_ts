import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import NewsStore from '@/store/newses'

let newsStore: NewsStore

function initialiseStores (store: Store<any>): void {
  newsStore = getModule(NewsStore, store)
}

export { initialiseStores, newsStore }
