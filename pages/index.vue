<template>
  <div class="min-h-screen bg-green-100" style="background-image: url('https://www.notion.so/images/page-cover/met_william_morris_1877_willow.jpg')">
    <!-- 页眉 -->
    <header class="flex items-center bg-white shadow-lg py-4 bg-gradient-to-r from-#b1b887 to-#b1cc8c bg-opacity-25 backdrop-blur-lg">
      <div class="px-4 md:px-8">
        <h1 class="text-2xl font-bold text-gray-800">ChatGPT</h1>
      </div>
      <div class="w-60">
        <Listbox v-model="selectedPerson">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <span class="block truncate">{{ selectedPerson.label }}</span>
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
              >
                <ChevronUpDownIcon
                  class="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="value in TagList"
                  :key="value.label"
                  :value="value"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ value.label }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
    </header>
    
    <!-- 卡片 -->
    <div class="container px-4 mx-auto mt-8 md:px-8">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div v-for="item in cards" :key="item.title" class="p-6 bg-white rounded-lg shadow-md">
          <h2 class="flex items-center mb-4 text-xl font-bold" :style="{color: selectedPerson.color}">
            <span>{{ item.title }}</span>
            <NuxtLink class="block ml-2 text-sm text-teal-500 hover:underline" to="/chat">Try ChatGPT</NuxtLink>
          </h2>
          <p class="mb-3 text-gray-700">{{ item.descn }}</p>
          <!-- <a href="#" class="block mt-4 font-bold text-green-500 hover:underline"><NuxtLink to="/">Home page</NuxtLink></a> -->
        </div>
        <!-- <div class="p-6 bg-white rounded-lg shadow-md">
          <h2 class="mb-4 text-xl font-bold text-gray-800">Shortcut</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat euismod dolor, ac suscipit libero commodo eget. Ut porta aliquet massa at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <a href="#" class="block mt-4 font-bold text-green-500 hover:underline">Try ChatGPT</a>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h2 class="mb-4 text-xl font-bold text-gray-800">Shortcut</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat euismod dolor, ac suscipit libero commodo eget. Ut porta aliquet massa at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <a href="#" class="block mt-4 font-bold text-green-500 hover:underline">Try ChatGPT</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { TagsList } from '@/assets/tag.js'
import { Users } from '@/assets/data.js'

const TagList = TagsList
const UserList = Users
const selectedPerson = ref(TagList[0])
const cards = ref([])


watchEffect(() => {
  const result = UserList.filter(e => {
    return e.tags.indexOf(selectedPerson.value.tag) !== -1
  })
  cards.value = result
})

</script>