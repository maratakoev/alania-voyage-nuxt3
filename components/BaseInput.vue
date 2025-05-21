<template>
  <div class="base-input">
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :disabled="disabled"
      class="base-input__field"
    />
    <label :for="id"
    :class="{ active: modelValue }"

      class="base-input__label">{{ label }}</label>

  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: [String, Number],
  label: String,
  id: String,
  name: String,
  type: { type: String, default: 'text' },
  placeholder: String,
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>
.base-input {
  position: relative;
  margin-bottom: 1rem;
}
.base-input__label {
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  transition: 0.2s ease;
  color: #999;
  font-size: 1rem;
  pointer-events: none;
  background: white;
  padding: 0 0.25rem;
  background-color: transparent;
}

.base-input__field:focus + .base-input__label,
.base-input__label.active {
  top: 0.2rem;
  font-size: 0.75rem;
  color: #42b983;
}

.base-input__field {
  display: flex;
  align-items: center; /* вертикальное центрирование */
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 1.5rem;
  width: 100%;
  height: 55px;
  border: 1px solid #ccc;
  border-radius: 14px;
}


</style>
