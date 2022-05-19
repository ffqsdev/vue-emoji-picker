<template>
  <div>
    <slot
      name="emoji-invoker"
      :events="{ click: (e) => toggle(e) }"
    ></slot>
    <div v-if="display.visible">
      <slot
        name="emoji-picker"
        :emojis="emojis"
        :insert="insert"
        :display="display"
      ></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue, { PropType } from 'vue'
  import emojis from './emojis'

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  type Data = {
    display: {
      x: number
      y: number
      visible: boolean
    }
  }

  export default /*#__PURE__*/Vue.extend({
    name: 'EmojiPicker',
    props: {
      search: {
        type: String as PropType<string>,
        required: false,
        default: '',
      },
      emojiTable: {
        type: Object as PropType<Record<string, Record<string, string>>>,
        required: false,
        default() {
          return emojis
        },
      },
    },
    data(): Data {
      return {
        display: {
          x: 0,
          y: 0,
          visible: false,
        },
      }
    },
    computed: {
      emojis(): Record<string, Record<string, string>> {
        if (this.search) {
          const obj: Record<string, Record<string, string>> = {}

          for (const category in this.emojiTable) {
            obj[category] = {}

            for (const emoji in this.emojiTable[category]) {
              if (new RegExp(`.*${escapeRegExp(this.search)}.*`).test(emoji)) {
                obj[category][emoji] = this.emojiTable[category][emoji]
              }
            }

            if (Object.keys(obj[category]).length === 0) {
              delete obj[category]
            }
          }

          return obj
        }

        return this.emojiTable
      },
    },
    methods: {
      insert(emoji: string): void {
        this.$emit('emoji', emoji)
      },
      toggle(e: MouseEvent): void {
        this.display.visible = ! this.display.visible
        this.display.x = e.clientX
        this.display.y = e.clientY
        this.$emit('toggle', this.display.visible)
      },
      hide(): void {
        this.display.visible = false
        this.$emit('toggle', this.display.visible)
      },
      escape(e: KeyboardEvent): void {
        if (this.display.visible === true && e.keyCode === 27) {
          this.display.visible = false
        }
      },
    },
    mounted() {
      document.addEventListener('keyup', this.escape)
    },
    destroyed() {
      document.removeEventListener('keyup', this.escape)
    },
  })
</script>
