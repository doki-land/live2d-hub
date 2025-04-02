<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>社交媒体</h3>
        <div class="social-links">
          <a href="https://discord.gg/live2d" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://github.com/live2d" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div class="footer-section">
        <h3>友情链接</h3>
        <div class="friend-links">
          <a href="https://www.live2d.com" target="_blank" rel="noopener noreferrer">Live2D官网</a>
          <a href="https://cubism.live2d.com" target="_blank" rel="noopener noreferrer">Cubism</a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>© 2024 Live2D Hub. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import '../style/variable';

.footer {
  background-color: $background-color;
  padding: 2rem 0;
  margin-top: auto;
  border-top: 1px solid $border-color;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 0 2rem;

    .footer-section {
      h3 {
        color: $text-color-primary;
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }

      .social-links,
      .friend-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        a {
          color: $text-color-secondary;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: $hover-color;
          }
        }
      }
    }
  }

  .copyright {
    text-align: center;
    margin-top: 2rem;
    color: $text-color-secondary;
    font-size: 0.9rem;
  }
}
</style>