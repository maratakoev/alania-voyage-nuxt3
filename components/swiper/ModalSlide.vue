<template>
  <transition name="modal">
    <div v-if="isVisible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="modal-close" @click="close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        <div class="modal-header">
          <h2 class="modal-title">{{ slideTitle }}</h2>
        </div>
        
        <div class="modal-body">
          <div class="modal-image-wrapper">
            <img :src="img" :alt="slideTitle" class="modal-image" loading="lazy" />
          </div>
          
          <div class="modal-description">
            <pre>{{ slideDescription }}</pre>
          </div>
        </div>
        
        <div class="modal-footer">
          <button class="modal-action-btn" @click="close">
            Закрыть
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
    slideTitle: String,
    slideDescription: String,
    img: String
  },
  methods: {
    close() {
      this.$emit("close");
    },
    handleKeydown(e) {
      if (e.key === 'Escape') this.close();
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
};
</script>

<style scoped>
/* Анимации */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: all 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(-20px);
  opacity: 0;
}

/* Основные стили */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  padding: 20px;
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.2s ease;
  z-index: 10;
}

.modal-close:hover {
  color: #1f2937;
  background: rgba(0, 0, 0, 0.05);
}

.modal-close svg {
  width: 24px;
  height: 24px;
}

.modal-header {
  padding: 24px 24px 0;
}

.modal-title {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
}

.modal-body {
  padding: 20px 24px;
  overflow-y: auto;
  flex-grow: 1;
}

.modal-image-wrapper {
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  display: block;
}

.modal-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #4b5563;
}

.modal-description pre {
  white-space: pre-wrap;
  font-family: inherit;
  margin: 0;
  padding: 0;
}

.modal-footer {
  padding: 16px 24px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
}

.modal-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-action-btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.modal-action-btn:active {
  transform: translateY(0);
}

.modal-action-btn svg {
  width: 16px;
  height: 16px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .modal-content {
    max-height: 95vh;
    border-radius: 12px 12px 0 0;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
  
  .modal-header {
    padding: 20px 20px 0;
  }
  
  .modal-body {
    padding: 16px 20px;
  }
  
  .modal-image {
    max-height: 250px;
  }
  
  .modal-footer {
    padding: 12px 20px;
  }
}

@media (max-width: 480px) {
  .modal-overlay {
    padding: 0;
    align-items: flex-end;
  }
  
  .modal-content {
    border-radius: 16px 16px 0 0;
    max-height: 90vh;
  }
  
  .modal-title {
    font-size: 1.3rem;
  }
  
  .modal-image {
    max-height: 200px;
  }
  
  .modal-action-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>