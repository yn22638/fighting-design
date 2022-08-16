import type { PropType, ExtractPropTypes } from 'vue'

export const Props = {
  count: {
    type: Number as PropType<Number>,
    default: 5
  },
  readonly: {
    type: Boolean as PropType<Boolean>,
    default: false
  },
  iconPath: {
    type: String,
    default: 'f-icon-favorites'
  },
  iconCheck: {
    type: String,
    default: 'f-icon-bussiness-man-fill'
  },
  iconNoCheck: {
    type: String,
    default: 'f-icon-bussiness-man'
  },
  iconCheckColor: {
    type: String,
    default: 'red'
  },
  iconNoCheckColor: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '20'
  }
} as const

export const Emits = ['update:modelValue']
