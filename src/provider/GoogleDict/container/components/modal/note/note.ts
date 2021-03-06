import { defineComponent } from '@vue/composition-api'
import labels from '../labels/labels.vue'
import { Note } from '~/provider/GoogleDict/types'

interface Props {
  note: Note
}

export default defineComponent({
  name: 'GNote',
  components: {
    labels,
  },
  props: {
    note: null,
  },
  setup: (props: Props) => ({
    props,
  }),
})
