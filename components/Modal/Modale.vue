<template>
    <Teleport to="body">
        <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10 backdrop-blur-sm"
            @click="closeModal">
            <div class="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative" @click.stop>
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-gray-900">
                        {{ title }}
                    </h3>
                    <button @click="closeModal" class="text-gray-400 hover:text-gray-500">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="mb-6">
                    <slot></slot>
                </div>

                <div class="flex justify-end gap-4">
                    <button @click="confirm" class="px-4 py-2 bg-custom-orange text-white rounded-md hover:bg-orange-500">
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        default: 'Modal'
    }
})

const emit = defineEmits(['update:modelValue', 'confirm'])

const closeModal = () => {
    emit('update:modelValue', false)
}

const confirm = () => {
    emit('confirm')
    closeModal()
}
</script>