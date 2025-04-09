<template>
    <AppLayout>
        <div class="bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll capitalize">
            <div class="flex justify-between mt-8 md:mt-0">
                <div>
                    <h2 class="text-xl mb-1">{{ $t('Events Management') }}</h2>
                    <p class="mb-6 flex items-center text-sm leading-6 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"/></svg>
                        <span class="ml-1 mt-1">{{ $t('Manage your events efficiently') }}</span>
                    </p>
                </div>
                <div class="space-x-2 flex items-center">
                    <button @click="showModal = true"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500">
                        {{ $t('Add Event') }}
                    </button>
                </div>
            </div>

            <!-- Events Table -->
            <EventTable :events="props.events" @edit="editEvent" @delete="confirmDelete"/>

            <!-- Add/Edit Modal -->
            <EventModal v-if="showModal" :event="selectedEvent" @close="closeModal" @saved="reloadPage" />

            <!-- Delete Confirmation Modal -->
            <DeleteConfirmModal v-if="deleteId" :event-name="deleteName" @confirm="deleteEvent" @cancel="deleteId = null"/>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/App.vue'
import EventTable from '@/Components/Tables/EventTable.vue'
import EventModal from '@/Components/Modals/EventModal.vue'
import DeleteConfirmModal from '@/Components/Modals/DeleteConfirmModal.vue'
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'

const props = defineProps({ events: Array })
const showModal = ref(false)
const selectedEvent = ref(null)
const deleteId = ref(null)
const deleteName = ref('')

const reloadPage = () => router.reload()

const closeModal = () => {
    selectedEvent.value = null
    showModal.value = false
}

const editEvent = (event) => {
    selectedEvent.value = event
    showModal.value = true
}

const confirmDelete = (id, name) => {
    deleteId.value = id
    deleteName.value = name
}

const deleteEvent = () => {
    router.post('/events/delete', { id: deleteId.value }, {
        onFinish: () => {
            deleteId.value = null
            reloadPage()
        }
    })
}
</script>
