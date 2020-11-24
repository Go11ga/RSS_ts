import { Store } from 'vuex'
import { Context } from '@nuxt/types'
import { initialiseStores } from '~/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  async nuxtServerInit (_: Store<any>, ctx: Context) {
    initialiseStores(ctx.store)
    await ctx.store.dispatch('newses/fetch')
  }
}
