<template>
  <div class="app-container">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <CookieConsent v-if="showConsent" @accept="acceptConsent" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import CookieConsent from './components/CookieConsent.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    CookieConsent
  },
  setup() {
    const showConsent = ref(true);
    
    const acceptConsent = () => {
      showConsent.value = false;
      localStorage.setItem('cookieConsent', 'accepted');
    };
    
    // 检查用户是否已经接受了协议
    if (localStorage.getItem('cookieConsent') === 'accepted') {
      showConsent.value = false;
    }
    
    return {
      showConsent,
      acceptConsent
    };
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>