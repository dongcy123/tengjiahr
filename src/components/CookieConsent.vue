<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
    <div class="container-custom flex flex-col md:flex-row items-center justify-between">
      <p class="text-secondary mb-4 md:mb-0">
        继续使用此网站，表明您同意我们的
        <a href="#" class="text-primary hover:underline">服务协议</a>
        和
        <a href="#" class="text-primary hover:underline">隐私协议</a>
      </p>
      <button @click="$emit('accept')" class="btn-primary">好的</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  emits: ['accept']
}
</script>