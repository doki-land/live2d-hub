<template>
  <nav class="navigation-bar">
    <div class="nav-brand">Live2D Hub</div>
    <div class="nav-links">
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/model" class="nav-link">模型</router-link>
      <router-link to="/world" class="nav-link">世界</router-link>
      <router-link to="/group" class="nav-link">分组</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .nav-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;

    .nav-link {
      text-decoration: none;
      color: #666;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: #333;
      }

      &.router-link-active {
        color: #333;
        font-weight: 600;
      }
    }
  }
}
</style>