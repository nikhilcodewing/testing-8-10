<script setup lang="ts">
// ES module imports - clean and modern!
// @ts-ignore - Workspace package import
import PageBuilder from "react-builder";
// Import the CSS for the React builder
// import "react-builder/style.css";

function loadReactBuilder() {
  PageBuilder.render({
    containerId: "page-builder",
  });
}

// Tip: To auto-load on mount, uncomment this:
import { onMounted } from "vue";
onMounted(() => {
  loadReactBuilder();
});
</script>

<template>
  <div>
    <div>Vue App</div>
    <div id="page-builder"></div>
  </div>
</template>
