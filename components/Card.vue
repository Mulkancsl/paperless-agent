<template>
  <div 
    class="bg-white rounded-lg shadow border transition-all duration-200"
    :class="[
      padding ? `p-${padding}` : 'p-6',
      hover ? 'hover:shadow-md' : '',
      bordered ? 'border' : 'border-0',
      className
    ]"
  >
    <div v-if="title || $slots.header" class="mb-4">
      <div v-if="$slots.header" class="card-header">
        <slot name="header"></slot>
      </div>
      <h3 v-else-if="title" class="text-lg font-medium">{{ title }}</h3>
    </div>
    
    <div class="card-body">
      <slot></slot>
    </div>
    
    <div v-if="$slots.footer" class="mt-4 pt-3 border-t">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  padding: {
    type: [String, Number],
    default: '6'
  },
  bordered: {
    type: Boolean,
    default: true
  },
  hover: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
</style>