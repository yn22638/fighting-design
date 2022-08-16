<script lang="ts" setup name="FRate">
  import { ref } from 'vue'
  import { Props, Emits } from './rate'
  import FIcon from '../../icon/src/icon.vue'
  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const clickValue = ref<number | undefined>(undefined)

  function onIconClick(index: number) {
    clickValue.value = index
  }
</script>

<template>
  <div class="rate">
    <div
      ref="rateRef"
      :class="[
        'rate-content',
        'items-center',
        `${readonly ? 'rate-disable' : 'rate-select'}`
      ]"
    >
      <!-- :color="(clickValue as number) >= +index ? iconCheckColor : iconNoCheckColor" -->
      <f-icon
        v-for="(icon, index) in count"
        :key="index"
        :icon="(clickValue as number) >= +index ? iconCheck:iconNoCheck"
        :size="size"
        :color="(clickValue as number) >= +index ? iconCheckColor : iconNoCheckColor"
        @click="onIconClick(+index)"
      />
      <!-- <img
        v-for="(item, index) in rateList"
        ref="rateIconRef"
        :key="index"
        :src="item.isChecked ? item.fillUrl : item.emptyUrl"
        :class="['px-3px', 'box-content']"
        :style="{
          width: `${width}px`,
          height: `${height}px`
        }"
        :data-index="index"
        @touchstart="onTouchstartChange"
        @touchmove="onTouchmoveChange"
        @click="onRateClick(index)"
      /> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
  .rate {
    &-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-disable {
      cursor: not-allowed;
    }

    &-select {
      cursor: pointer;
    }
  }
</style>
