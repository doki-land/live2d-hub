<template>
  <div class="home">
    <NavigationBar />
    <main class="main-content">
      <ModelViewer
        v-if="selectedModel"
        :title="selectedModel.title"
        :description="selectedModel.description"
        :author="selectedModel.author"
        :version="selectedModel.version"
      />
      <ModelList
        :models="models"
        @select="handleModelSelect"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationBar from '../components/NavigationBar.vue'
import ModelViewer from '../components/ModelViewer.vue'
import ModelList from '../components/ModelList.vue'

interface Model {
  id: string
  title: string
  author: string
  description: string
  version: string
}

// 模拟数据，实际项目中应该从API获取
const models = ref<Model[]>([
  {
    id: '1',
    title: '示例模型1',
    author: '作者A',
    description: '这是一个示例Live2D模型，展示了基本的动画和互动效果。',
    version: '1.0.0'
  },
  {
    id: '2',
    title: '示例模型2',
    author: '作者B',
    description: '另一个示例Live2D模型，包含更多的表情和动作。',
    version: '1.1.0'
  }
])

const selectedModel = ref<Model | null>(null)

const handleModelSelect = (model: Model) => {
  selectedModel.value = model
}
</script>

<style scoped lang="scss">
.home {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
