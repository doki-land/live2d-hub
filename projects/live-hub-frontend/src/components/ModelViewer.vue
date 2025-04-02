<template>
  <div class="model-viewer">
    <div class="model-preview">
      <!-- 这里将来会集成Live2D模型渲染 -->
      <div class="placeholder">模型预览区域</div>
    </div>
    <div class="model-info">
      <h2 class="model-title">{{ title }}</h2>
      <p class="model-description">{{ description }}</p>
      <div class="model-stats">
        <span class="stat">作者: {{ author }}</span>
        <span class="stat">版本: {{ version }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  author: string
  version: string
}>()
</script>

<style scoped lang="scss">
.model-viewer {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .model-preview {
    aspect-ratio: 16/9;
    background-color: #f5f5f5;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    .placeholder {
      color: #999;
      font-size: 1.2rem;
    }
  }

  .model-info {
    .model-title {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #333;
    }

    .model-description {
      color: #666;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .model-stats {
      display: flex;
      gap: 1rem;

      .stat {
        color: #888;
        font-size: 0.9rem;
      }
    }
  }
}
</style>