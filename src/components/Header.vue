<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container-custom flex items-center justify-between py-4 px-4 md:px-8">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img 
          src="https://www.tengjiahr.com/img/logo.png?1685675953" 
          alt="腾佳人力资源" 
          class="h-8 md:h-10 w-auto"
        />
      </router-link>

      <!-- 右侧导航区域 -->
      <div class="hidden md:flex items-center space-x-6">
        <!-- 导航链接 -->
        <nav class="flex items-center space-x-6">
          <router-link 
            to="/" 
            class="nav-link" 
            :class="{ 'active': isActive('/') && !isHash }"
            @click="isHash = false"
          >
            首页
          </router-link>
          <router-link 
            to="/#hot-jobs" 
            class="nav-link" 
            :class="{ 'active': isHash && currentHash === '#hot-jobs' }"
            @click="isHash = true; currentHash = '#hot-jobs'"
          >
            热招
          </router-link>
          <router-link 
            to="/#qa" 
            class="nav-link" 
            :class="{ 'active': isHash && currentHash === '#qa' }"
            @click="isHash = true; currentHash = '#qa'"
          >
            Q&A
          </router-link>
          <router-link 
            to="/campus" 
            class="nav-link" 
            :class="{ 'active': isActive('/campus') }"
            @click="isHash = false"
          >
            校招
          </router-link>
        </nav>

        <!-- 登录按钮 -->
        <button class="btn-primary text-lg font-semibold">登录</button>
      </div>

      <!-- 移动端菜单按钮 -->
      <button @click="toggleMobileMenu" class="md:hidden text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- 移动端菜单 -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-md">
      <div class="container-custom py-4 px-4 flex flex-col space-y-4">
        <router-link 
          to="/" 
          class="nav-link block py-2" 
          :class="{ 'active': isActive('/') && !isHash }"
          @click="closeMobileMenu(); isHash = false"
        >
          首页
        </router-link>
        <router-link 
          to="/#hot-jobs" 
          class="nav-link block py-2" 
          :class="{ 'active': isHash && currentHash === '#hot-jobs' }"
          @click="closeMobileMenu(); isHash = true; currentHash = '#hot-jobs'"
        >
          热招
        </router-link>
        <router-link 
          to="/#qa" 
          class="nav-link block py-2" 
          :class="{ 'active': isHash && currentHash === '#qa' }"
          @click="closeMobileMenu(); isHash = true; currentHash = '#qa'"
        >
          Q&A
        </router-link>
        <router-link 
          to="/campus" 
          class="nav-link block py-2" 
          :class="{ 'active': isActive('/campus') }"
          @click="closeMobileMenu(); isHash = false"
        >
          校招
        </router-link>
        <button class="btn-primary w-full text-lg font-semibold">登录</button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Header',
  setup() {
    const route = useRoute();
    const mobileMenuOpen = ref(false);
    const isHash = ref(false);
    const currentHash = ref('');

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
    };

    const isActive = (path) => {
      return route.path === path;
    };

    // 监听hash变化
    const handleHashChange = () => {
      if (window.location.hash) {
        isHash.value = true;
        currentHash.value = window.location.hash;
      }
    };

    onMounted(() => {
      window.addEventListener('hashchange', handleHashChange);
      handleHashChange();
    });

    onUnmounted(() => {
      window.removeEventListener('hashchange', handleHashChange);
    });

    return {
      mobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
      isActive,
      isHash,
      currentHash
    };
  }
};
</script>

<style scoped>
.nav-link {
  @apply text-secondary font-semibold text-lg transition-colors duration-200 hover:text-primary relative;
}

.nav-link.active {
  @apply text-primary;
}

.nav-link.active::after {
  content: '';
  @apply absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary;
}


</style>