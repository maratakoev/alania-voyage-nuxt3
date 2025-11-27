<template>
  <transition name="modal-fade">
    <div
      class="modal-overlay"
      v-if="isOpen"
      @click.self="emitClose"
    >
      <div class="modal-content">
        <button class="modal-close" @click="emitClose">&times;</button>
        <h3 class="modal-title">{{ modalData.title }}</h3>
        <div class="modal-body" v-html="modalData.content"></div>
        <div class="modal-buttons">
          <template v-if="modalData.button1Text">
          <btn-one
            v-if="!buttonLink"
            :buttonText="modalData.button1Text"
            :buttonBgColor="modalData.button1BgColor"
            :buttonFontColor="modalData.button1FontColor"
            @click="emitButton1Click"
          />
          <a v-else :href="buttonLink">
            <btn-one
              :buttonText="modalData.button1Text"
              :buttonBgColor="modalData.button1BgColor"
              :buttonFontColor="modalData.button1FontColor"
            />
          </a>
        </template>
          <btn-second
            v-if="modalData.button2Text"
            :buttonText="modalData.button2Text"
            :buttonBgColor="modalData.button2BgColor"
            :buttonFontColor="modalData.button2FontColor"
            @click="emitButton2Click"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import BtnOne from './buttons/BtnOne.vue';
import BtnSecond from './buttons/BtnSecond.vue';

defineProps({
  isOpen: Boolean,
  modalData: {
    type: Object,
    required: true
  },
  buttonLink: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close', 'button1-click', 'button2-click']);

function emitClose() {
  emit('close');
}

function emitButton1Click() {
  emit('button1-click');
}

function emitButton2Click() {
  emit('button2-click');
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-height: 80vh;
}

.modal-title {
  margin-top: 0;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.modal-body {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  transition: color 0.2s ease;
}

.modal-close:hover {
  color: #000;
}

.modal-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
