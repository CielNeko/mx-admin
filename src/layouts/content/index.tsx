import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, defineComponent, PropType } from '@vue/runtime-core'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import styles from './index.module.css'

export const ContentLayout = defineComponent({
  props: {
    actionsElement: {
      type: Object as PropType<JSX.Element>,
      required: false,
    },
    footerButtonElement: {
      type: Object as PropType<JSX.Element>,
      required: false,
    },
  },
  setup({ actionsElement, footerButtonElement }, ctx) {
    const { slots } = ctx
    const router = useRouter()
    const route = computed(() => router.currentRoute)

    return () => (
      <>
        <header class={styles['header']}>
          <h1 class={styles['title']}>{route.value.value.meta.title}</h1>

          <div class={styles['header-actions']}>
            {actionsElement ?? slots.actions?.()}
          </div>
        </header>
        <main class={styles['main']}>{slots.default?.()}</main>
        <footer class={styles['buttons']}>
          {footerButtonElement ?? slots.buttons?.()}
        </footer>
      </>
    )
  },
})