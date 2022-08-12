<script lang="ts" setup name="FRate">
  import { onMounted, reactive, ref, watchEffect } from 'vue'
  import { Props, Emits } from './rate'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const rateList = ref([])
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
