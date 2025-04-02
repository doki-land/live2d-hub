<template>
  <div class="home">
    <header-navigation/>
    <main class="main-content">
      <section class="hero-section">
        <h1>欢迎来到Live2D Hub</h1>
        <p>探索Live2D的魅力世界，让你的创作更生动！</p>
        <div class="preview-container">
          <!-- Live2D模型预览区域将在此实现 -->
          <div class="preview-placeholder">Live2D模型预览区</div>
        </div>
      </section>

      <section class="resources-section">
        <h2>学习资源</h2>
        <div class="resource-cards">
          <div class="resource-card">
            <h3>入门教程</h3>
            <p>从零开始学习Live2D模型制作</p>
            <a href="#" class="card-link">开始学习</a>
          </div>
          <div class="resource-card">
            <h3>进阶指南</h3>
            <p>深入了解Live2D的高级特性</p>
            <a href="#" class="card-link">查看详情</a>
          </div>
          <div class="resource-card">
            <h3>API文档</h3>
            <p>开发者文档和API参考</p>
            <a href="#" class="card-link">浏览文档</a>
          </div>
        </div>
      </section>

      <section class="community-section">
        <h2>加入社群</h2>
        <div class="community-cards">
          <div class="community-card">
            <h3>Discord社区</h3>
            <p>与其他创作者交流经验</p>
            <a href="https://discord.gg/live2d" target="_blank" class="card-link">立即加入</a>
          </div>
          <div class="community-card">
            <h3>创作者论坛</h3>
            <p>分享你的作品和想法</p>
            <a href="#" class="card-link">访问论坛</a>
          </div>
        </div>
      </section>
    </main>
    <footer-navigation/>
  </div>
</template>

<script setup lang="ts">
import HeaderNavigation from '../components/HeaderNavigation.vue'
import FooterNavigation from '../components/FooterNavigation.vue'
</script>

<style scoped lang="scss">
@import '../style/variable';

.home {
  min-height: 100vh;
  background-color: $background-color;
  display: flex;
  flex-direction: column;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;

  section {
    margin-bottom: 4rem;
    text-align: center;

    h1 {
      color: $primary-color;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    h2 {
      color: $text-color-primary;
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    p {
      color: $text-color-secondary;
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }
}

.preview-container {
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .preview-placeholder {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $background-color;
    border: 2px dashed $border-color;
    border-radius: 0.5rem;
    color: $text-color-secondary;
  }
}

.resource-cards,
.community-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  .resource-card,
  .community-card {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    h3 {
      color: $secondary-color;
      margin-bottom: 1rem;
    }

    p {
      color: $text-color-secondary;
      margin-bottom: 1.5rem;
    }

    .card-link {
      display: inline-block;
      padding: 0.5rem 1.5rem;
      background-color: $primary-color;
      color: white;
      text-decoration: none;
      border-radius: 2rem;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: $hover-color;
      }
    }
  }
}
</style>
