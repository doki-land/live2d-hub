<template>
  <header-navigation/>
  <div class="model-page">
    <div class="filter-sidebar">
      <div class="filter-section">
        <h3>分类</h3>
        <div class="filter-options">
          <label v-for="category in categories" :key="category.id">
            <input type="checkbox" v-model="selectedCategories" :value="category.id">
            {{ category.name }}
          </label>
        </div>
      </div>
      <div class="filter-section">
        <h3>标签</h3>
        <div class="filter-options">
          <label v-for="tag in tags" :key="tag.id">
            <input type="checkbox" v-model="selectedTags" :value="tag.id">
            {{ tag.name }}
          </label>
        </div>
      </div>
      <div class="filter-section">
        <h3>作者</h3>
        <input type="text" v-model="authorFilter" placeholder="搜索作者..." class="author-search">
      </div>
    </div>
    <div class="model-content">
      <ModelList :models="filteredModels" @select="handleModelSelect"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ModelList from '../components/ModelList.vue'
import HeaderNavigation from "@/components/HeaderNavigation.vue";

const router = useRouter()

// 模拟数据
const categories = [
  { id: 1, name: '人物模型' },
  { id: 2, name: '动物模型' },
  { id: 3, name: '机械模型' }
]

const tags = [
  { id: 1, name: '动画' },
  { id: 2, name: '游戏' },
  { id: 3, name: 'VTuber' }
]

const models = [
  {
    id: '1',
    title: '示例模型1',
    author: '作者A',
    categoryId: 1,
    tags: [1, 2],
    thumbnail: ''
  },
  {
    id: '2',
    title: '示例模型2',
    author: '作者B',
    categoryId: 2,
    tags: [2, 3],
    thumbnail: ''
  }
]

const selectedCategories = ref<number[]>([])
const selectedTags = ref<number[]>([])
const authorFilter = ref('')

const filteredModels = computed(() => {
  return models.filter(model => {
    const categoryMatch = selectedCategories.value.length === 0 || selectedCategories.value.includes(model.categoryId)
    const tagMatch = selectedTags.value.length === 0 || model.tags.some(tag => selectedTags.value.includes(tag))
    const authorMatch = !authorFilter.value || model.author.toLowerCase().includes(authorFilter.value.toLowerCase())
    return categoryMatch && tagMatch && authorMatch
  })
})

const handleModelSelect = (model: any) => {
  router.push(`/model/${model.id}`)
}
</script>

<style scoped lang="scss">
.model-page {
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.filter-sidebar {
  width: 250px;
  padding: 20px;
  background-color: white;
  border-right: 1px solid #e9ecef;
}

.filter-section {
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #333;
  }
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    color: #666;

    &:hover {
      color: #333;
    }
  }
}

.author-search {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
}

.model-content {
  flex: 1;
  padding: 20px;
}
</style>