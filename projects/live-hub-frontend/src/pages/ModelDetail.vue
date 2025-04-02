<template>
  <header-navigation/>
  <div class="model-detail">
    <div class="model-preview">
      <div class="preview-placeholder">模型预览区域</div>
    </div>
    <div class="model-info">
      <h1>{{ model?.title }}</h1>
      <div class="info-meta">
        <span class="author">作者: {{ model?.author }}</span>
        <span class="version">版本: {{ model?.version }}</span>
        <span class="date">发布日期: {{ model?.publishDate }}</span>
      </div>
      <div class="info-description">
        <h2>模型说明</h2>
        <p>{{ model?.description }}</p>
      </div>
      <div class="info-tags">
        <span class="tag" v-for="tag in model?.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
    <div class="model-comments">
      <h2>评论区</h2>
      <div class="comment-form">
        <textarea v-model="newComment" placeholder="写下你的评论..."></textarea>
        <button @click="submitComment">发表评论</button>
      </div>
      <div class="comment-list">
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
          <div class="comment-header">
            <span class="comment-author">{{ comment.author }}</span>
            <span class="comment-date">{{ comment.date }}</span>
          </div>
          <div class="comment-content">{{ comment.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HeaderNavigation from "@/components/HeaderNavigation.vue";

const route = useRoute()
const modelId = route.params.model_link

// 模拟数据
const model = ref({
  id: modelId,
  title: '示例模型',
  author: '作者A',
  version: '1.0.0',
  publishDate: '2024-01-01',
  description: '这是一个示例模型的详细描述，包含了模型的特点和使用说明。',
  tags: ['动画', '游戏', 'VTuber']
})

const comments = ref([
  {
    id: 1,
    author: '用户1',
    date: '2024-01-02',
    content: '这个模型做得很棒！'
  },
  {
    id: 2,
    author: '用户2',
    date: '2024-01-03',
    content: '动作设计很自然，期待更多作品。'
  }
])

const newComment = ref('')

const submitComment = () => {
  if (!newComment.value.trim()) return
  
  comments.value.unshift({
    id: comments.value.length + 1,
    author: '当前用户',
    date: new Date().toLocaleDateString(),
    content: newComment.value
  })
  
  newComment.value = ''
}

onMounted(() => {
  // 这里可以添加获取模型数据的逻辑
  console.log('Model ID:', modelId)
})
</script>

<style scoped lang="scss">
.model-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.model-preview {
  background-color: #f5f5f5;
  border-radius: 8px;
  height: 400px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .preview-placeholder {
    color: #999;
    font-size: 1.2rem;
  }
}

.model-info {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0 0 15px 0;
    font-size: 1.8rem;
  }

  .info-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    color: #666;
    font-size: 0.9rem;
  }

  .info-description {
    margin-bottom: 20px;

    h2 {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    p {
      color: #333;
      line-height: 1.6;
    }
  }

  .info-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    .tag {
      background-color: #e9ecef;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 0.9rem;
      color: #666;
    }
  }
}

.model-comments {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .comment-form {
    margin-bottom: 30px;

    textarea {
      width: 100%;
      height: 100px;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      resize: vertical;
      margin-bottom: 10px;

      &:focus {
        outline: none;
        border-color: #007bff;
      }
    }

    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 20px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .comment-list {
    .comment-item {
      border-bottom: 1px solid #eee;
      padding: 15px 0;

      &:last-child {
        border-bottom: none;
      }

      .comment-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;

        .comment-author {
          font-weight: 500;
        }

        .comment-date {
          color: #999;
          font-size: 0.9rem;
        }
      }

      .comment-content {
        color: #333;
        line-height: 1.5;
      }
    }
  }
}
</style>