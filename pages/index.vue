<template>
  <div class="bg-green-100 min-h-screen" style="background-image: url('https://www.notion.so/images/page-cover/met_william_morris_1877_willow.jpg')">
    <!-- 页眉 -->
    <header class="flex items-center bg-white shadow-lg py-4 bg-gradient-to-r from-#b1b887 to-#b1cc8c bg-opacity-25 backdrop-blur-lg">
      <div class="px-4 md:px-8">
        <h1 class="text-2xl font-bold text-gray-800">ChatGPT</h1>
      </div>
      <div class="w-60">
        <Listbox v-model="selectedPerson">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <span class="block truncate">{{ selectedPerson.name }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
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
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="person in people"
                  :key="person.name"
                  :value="person"
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
                      >{{ person.name }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
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
    <div class="container mx-auto px-4 md:px-8 mt-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Shortcut</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat euismod dolor, ac suscipit libero commodo eget. Ut porta aliquet massa at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <!-- <a href="#" class="block mt-4 text-green-500 font-bold hover:underline"><NuxtLink to="/">Home page</NuxtLink></a> -->
          <NuxtLink class="block mt-4 text-green-500 font-bold hover:underline" to="/chat">Try ChatGPT</NuxtLink>
          
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Shortcut</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat euismod dolor, ac suscipit libero commodo eget. Ut porta aliquet massa at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <a href="#" class="block mt-4 text-green-500 font-bold hover:underline">Try ChatGPT</a>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Shortcut</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat euismod dolor, ac suscipit libero commodo eget. Ut porta aliquet massa at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <a href="#" class="block mt-4 text-green-500 font-bold hover:underline">Try ChatGPT</a>
        </div>
      </div>
    </div>
    
    <!-- 聊天框 -->
    <!-- <div class="container h-full mx-auto px-4 md:px-8 mt-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="h-72"></div>
      
        <div class="flex mt-4">
          <input type="text" class="border border-gray-400 rounded-md p-2 w-full mr-2" placeholder="Type your message...">
          <button class="bg-green-500 text-white rounded-md py-2 px-4">Send</button>
        </div>
      </div>
    </div> -->
    
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

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]
const selectedPerson = ref(people[0])


</script>