<template>
  <div class="bg-green-100 min-h-screen">
    <!-- 页眉 -->
    <header class="bg-white shadow-lg py-4">
      <div class="container mx-auto px-4 md:px-8">
        <h1 class="text-2xl font-bold text-gray-800">Chat App</h1>
      </div>
    </header>
    
    <!-- 卡片 -->
    <div class="container mx-auto px-4 md:px-8 mt-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Chat Room 1</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat euismod dolor, ac suscipit libero commodo eget. Ut porta aliquet massa at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <a href="#" class="block mt-4 text-green-500 font-bold hover:underline">Join Room</a>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Chat Room 2</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat euismod dolor, ac suscipit libero commodo eget. Ut porta aliquet massa at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <a href="#" class="block mt-4 text-green-500 font-bold hover:underline">Join Room</a>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Chat Room 3</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat euismod dolor, ac suscipit libero commodo eget. Ut porta aliquet massa at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <a href="#" class="block mt-4 text-green-500 font-bold hover:underline">Join Room</a>
        </div>
      </div>
    </div>
    
    <!-- 聊天框 -->
    <div class="container mx-auto px-4 md:px-8 mt-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-gray-800"></h2>
        <div class="overflow-y-scroll max-h-64">
          <div class="flex flex-col space-y-2">
            <div class="bg-gray-200 rounded-lg p-2">
              <p class="text-gray-700">User 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="bg-gray-200 rounded-lg p-2">
              <p class="text-gray-700">User 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="bg-gray-200 rounded-lg p-2">
              <p class="text-gray-700">User 1: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div class="flex mt-4">
          <input type="text" class="border border-gray-400 rounded-md p-2 w-full mr-2" placeholder="Type your message...">
          <button class="bg-green-500 text-white rounded-md py-2 px-4">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>