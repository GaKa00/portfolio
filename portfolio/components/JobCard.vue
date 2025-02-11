<template>
  <div class="transition-all duration-300" :class="showDetails ? 'bg-white shadow-lg rounded-lg p-4 sm:p-6' : 'rounded-lg p-3 bg-gray-100 shadow-md'">
    <h3 class="text-xl sm:text-2xl font-semibold text-center text-gray-800">{{ title }}</h3>
    <template v-if="showDetails">
      <h2 class="px-2 sm:px-3 text-center text-gray-600">At {{ location }}</h2>
      <ul class="m-4 sm:m-5 text-sm sm:text-base text-gray-700">
        <li>Duration: {{ duration }}</li>
      </ul>
    </template>
  </div>
</template>

<script setup>
defineProps(['title', 'location', 'duration']);
</script>
