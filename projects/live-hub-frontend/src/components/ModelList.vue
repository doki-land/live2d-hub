<template>
  <div class="model-list">
    <div class="model-grid">
      <div v-for="model in models" :key="model.id" class="model-card" @click="$emit('select', model)">
        <div class="model-thumbnail">
          <div class="placeholder">{{ model.title }}</div>
        </div>
        <div class="model-card-info">
          <h3 class="model-card-title">{{ model.title }}</h3>
          <p class="model-card-author">{{ model.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Model {
  id: string
  title: string
  author: string
  thumbnail?: string
}

defineProps<{
  models: Model[]
}>()

defineEmits<{
  (e: 'select', model: Model): void
}>()
</script>

<style scoped lang="scss">
.model-list {
  padding: 1rem;

  .model-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .model-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
    }

    .model-thumbnail {
      aspect-ratio: 1;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;

      .placeholder {
        color: #999;
        font-size: 0.9rem;
      }
    }

    .model-card-info {
      padding: 1rem;

      .model-card-title {
        margin: 0;
        font-size: 1rem;
        color: #333;
        margin-bottom: 0.25rem;
      }

      .model-card-author {
        margin: 0;
        font-size: 0.8rem;
        color: #666;
      }
    }
  }
}
</style>