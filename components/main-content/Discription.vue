<template>
  <div class="description-container">
    <div class="content">
      <article v-html="articleText"></article>
    </div>
  </div>
</template>

<script setup>
defineProps({
  articleText: String
});
</script>

<style scoped>
.description-container {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  /* height: 400px; */
  background-color: rgb(205, 204, 204);
}
</style>
