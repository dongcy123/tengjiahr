<template>
  <div class="home">
    <!-- 英雄区域 -->
    <section class="hero-section relative text-white py-20 md:py-32">
      <div class="absolute inset-0 overflow-hidden">
        <div class="hero-background"></div>
        <div class="hero-overlay"></div>
      </div>
      <div class="container-custom relative z-10 px-4 md:px-8 text-center">
        <h1 class="text-3xl md:text-5xl font-bold mb-6 text-white">正直担当、合作共赢、客户导向、积极进取</h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">腾佳人力资源解决方案，助力企业招贤纳士，成就卓越团队</p>
        <button class="btn-primary text-lg px-8 py-3">了解更多</button>
      </div>
    </section>

    <!-- 热招职位入口 -->
    <section id="hot-jobs" class="section bg-bg-light">
      <div class="container-custom px-4 md:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">探索所有工作机会</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <!-- 深圳 -->
          <div class="card hover:scale-105 duration-300">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2">深圳</h3>
            <p class="text-gray-600 text-center mb-4">科技创新中心，提供多样化的职业发展机会</p>
            <div class="text-center">
              <a href="#" class="text-primary font-medium hover:underline flex items-center justify-center">
                查看岗位
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <!-- 上海 -->
          <div class="card hover:scale-105 duration-300">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2">上海</h3>
            <p class="text-gray-600 text-center mb-4">国际金融中心，汇聚全球顶尖人才</p>
            <div class="text-center">
              <a href="#" class="text-primary font-medium hover:underline flex items-center justify-center">
                查看岗位
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <!-- 北京 -->
          <div class="card hover:scale-105 duration-300">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2">北京</h3>
            <p class="text-gray-600 text-center mb-4">政治文化中心，拥有丰富的教育资源</p>
            <div class="text-center">
              <a href="#" class="text-primary font-medium hover:underline flex items-center justify-center">
                查看岗位
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <!-- 成都 -->
          <div class="card hover:scale-105 duration-300">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2">成都</h3>
            <p class="text-gray-600 text-center mb-4">西部创新高地，生活舒适工作平衡</p>
            <div class="text-center">
              <a href="#" class="text-primary font-medium hover:underline flex items-center justify-center">
                查看岗位
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么选择我们 -->
    <section class="section bg-white">
      <div class="container-custom px-4 md:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">在腾佳成就卓越</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 驱动前沿创新 -->
          <div class="text-center">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">驱动前沿创新</h3>
            <p class="text-gray-600">参与定义行业未来的项目，与顶尖人才共同创造价值</p>
          </div>

          <!-- 赋能个人成长 -->
          <div class="text-center">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">赋能个人成长</h3>
            <p class="text-gray-600">完善的职业发展路径和学习资源，助你不断突破自我</p>
          </div>

          <!-- 拥抱多元文化 -->
          <div class="text-center">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">拥抱多元文化</h3>
            <p class="text-gray-600">自由、包容的工作氛围，尊重每个独特的你</p>
          </div>

          <!-- 全面的福利关怀 -->
          <div class="text-center">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">全面的福利关怀</h3>
            <p class="text-gray-600">提供有竞争力的薪酬和贴心福利，让你工作无后顾之忧</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化与工作环境 -->
    <section class="section bg-white">
      <div class="container-custom px-4 md:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">企业文化与工作环境</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- 上面2个大图 -->
          <div class="culture-card large-card">
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="团队协作" class="w-full h-full object-cover">
              <div class="overlay"></div>
              <div class="title-overlay">腾佳Talk</div>
              <div class="description-panel">
                <h3 class="text-xl font-semibold mb-2">腾佳Talk</h3>
                <p class="text-sm">定期举办的技术分享会，让团队成员交流最新技术趋势和项目经验，促进知识共享和技能提升。</p>
              </div>
            </div>
          </div>
          
          <div class="culture-card large-card">
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="学习培训" class="w-full h-full object-cover">
              <div class="overlay"></div>
              <div class="title-overlay">腾佳学院</div>
              <div class="description-panel">
                <h3 class="text-xl font-semibold mb-2">腾佳学院</h3>
                <p class="text-sm">完善的培训体系，提供专业技能培训、领导力发展课程和行业前沿知识分享，助力员工持续成长。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <!-- 下面4个小图 -->
          <div class="culture-card small-card">
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="团队建设" class="w-full h-full object-cover">
              <div class="overlay"></div>
              <div class="title-overlay">团队建设</div>
              <div class="description-panel">
                <h3 class="text-lg font-semibold mb-2">团队建设</h3>
                <p class="text-sm">丰富多彩的团建活动，增进团队凝聚力，营造轻松愉快的工作氛围。</p>
              </div>
            </div>
          </div>
          
          <div class="culture-card small-card">
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="创新空间" class="w-full h-full object-cover">
              <div class="overlay"></div>
              <div class="title-overlay">创新空间</div>
              <div class="description-panel">
                <h3 class="text-lg font-semibold mb-2">创新空间</h3>
                <p class="text-sm">现代化的办公环境，配备先进的设备和舒适的休息区，激发创意灵感。</p>
              </div>
            </div>
          </div>
          
          <div class="culture-card small-card">
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="健康生活" class="w-full h-full object-cover">
              <div class="overlay"></div>
              <div class="title-overlay">健康生活</div>
              <div class="description-panel">
                <h3 class="text-lg font-semibold mb-2">健康生活</h3>
                <p class="text-sm">提供健身房、健康餐饮和定期体检，关注员工身心健康，平衡工作与生活。</p>
              </div>
            </div>
          </div>
          
          <div class="culture-card small-card">
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="职业发展" class="w-full h-full object-cover">
              <div class="overlay"></div>
              <div class="title-overlay">职业发展</div>
              <div class="description-panel">
                <h3 class="text-lg font-semibold mb-2">职业发展</h3>
                <p class="text-sm">清晰的职业发展路径，定期评估和晋升机会，让每位员工都能实现职业理想。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Q&A 部分 -->
    <section id="qa" class="section bg-bg-light">
      <div class="container-custom px-4 md:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">常见问题</h2>
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div v-for="(item, index) in qaItems" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
              <button 
                @click="toggleQA(index)" 
                class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span class="font-medium text-lg">{{ item.question }}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 text-gray-700 transition-transform duration-300" 
                  :class="{ 'transform rotate-180': item.isOpen }"
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div 
                v-show="item.isOpen" 
                class="px-6 py-4 border-t border-gray-200"
              >
                <p class="text-gray-600">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    const qaItems = ref([
      {
        question: '招聘对象是哪些同学？',
        answer: '我们招聘对象主要包括应届毕业生、在校实习生以及有1-3年工作经验的社会人才。我们欢迎各个专业背景的优秀人才加入腾佳团队。',
        isOpen: false
      },
      {
        question: '简历投递（网申）是否有截止时间？',
        answer: '我们的校园招聘一般在每年3月和9月集中进行，但社会招聘全年开放。具体岗位的申请截止时间请查看职位详情页面，建议您尽早提交申请以获得更多面试机会。',
        isOpen: false
      },
      {
        question: '如何获知我的招聘进展？',
        answer: '提交申请后，您将收到确认邮件。我们的HR团队会在2周内审核您的简历，如果符合要求，将通过邮件或电话通知您参加面试。您也可以登录我们的招聘系统查询申请状态。',
        isOpen: false
      },
      {
        question: '面试流程是怎样的？',
        answer: '我们的面试通常包括：HR初筛、技术/专业面试、团队主管面试和最终HR面试。根据岗位不同，可能还会有笔试或项目展示环节。整个流程一般在2-4周内完成。',
        isOpen: false
      }
    ]);

    const toggleQA = (index) => {
      // 手风琴效果：先关闭所有问题
      qaItems.value.forEach((item, i) => {
        if (i !== index) {
          item.isOpen = false;
        }
      });
      // 然后切换当前问题的状态
      qaItems.value[index].isOpen = !qaItems.value[index].isOpen;
    };

    return {
      qaItems,
      toggleQA
    };
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

/* 企业文化与工作环境样式 */
.culture-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.culture-card:hover {
  transform: translateY(-4px);
}

.large-card {
  height: 300px;
}

.small-card {
  height: 200px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.culture-card:hover .image-container img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.title-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.description-panel {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 3;
}

.culture-card:hover .description-panel {
  transform: translateY(0);
}

.description-panel h3 {
  margin-bottom: 8px;
  font-size: 1.1rem;
  font-weight: 600;
}

.description-panel p {
  font-size: 0.875rem;
  line-height: 1.4;
  opacity: 0.9;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .large-card {
    height: 250px;
  }
  
  .small-card {
    height: 150px;
  }
  
  .title-overlay {
    font-size: 1rem;
    top: 15px;
    left: 15px;
  }
  
  .description-panel {
    padding: 15px;
  }
  
  .description-panel h3 {
    font-size: 1rem;
  }
  
  .description-panel p {
    font-size: 0.8rem;
  }
}
</style>