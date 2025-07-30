<template>
  <footer class="bg-secondary text-white py-10">
    <div class="container-custom px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- 公司简介 -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">腾佳</h3>
          <p class="text-gray-300 mb-4">
            腾佳是一家专业的人力资源解决方案提供商，致力于为企业提供全方位的人才招聘、培训和管理服务。
          </p>
        </div>

        <!-- 快速链接 -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">快速链接</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-300 hover:text-primary">首页</router-link></li>
            <li><router-link to="/#hot-jobs" class="text-gray-300 hover:text-primary">热招职位</router-link></li>
            <li><router-link to="/#qa" class="text-gray-300 hover:text-primary">常见问题</router-link></li>
            <li><router-link to="/campus" class="text-gray-300 hover:text-primary">校园招聘</router-link></li>
          </ul>
        </div>

        <!-- 联系我们 -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">联系我们</h3>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hr@tengjia.com
            </li>
            <li class="flex items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              400-123-4567
            </li>
            <li class="flex items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              深圳市南山区科技园
            </li>
          </ul>
        </div>

        <!-- 社交媒体 -->
        <div>
          <h3 class="text-xl font-bold text-white mb-4">关注我们</h3>
          <div class="flex space-x-4">
            <!-- 微信 -->
            <a href="#" class="text-gray-300 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .186-.059l2.114-1.225a.636.636 0 0 1 .32-.093c.062 0 .124.01.186.03.95.212 1.952.328 2.993.328 .307 0 .611-.014.914-.043-.6-.636-.914-1.346-.914-2.106 0-3.538 3.539-6.413 7.902-6.413.307 0 .611.014.914.043C16.748 4.754 13.067 2.188 8.691 2.188zm-1.847 3.49a1.107 1.107 0 1 1 .001 2.214 1.107 1.107 0 0 1-.001-2.213zm6.309 0a1.107 1.107 0 1 1 0 2.214 1.107 1.107 0 0 1 0-2.213z"/>
                <path d="M22.93 15.342c0-3.064-3.059-5.558-6.822-5.558-3.764 0-6.823 2.494-6.823 5.558 0 3.064 3.059 5.558 6.823 5.558.747 0 1.463-.098 2.136-.274a.515.515 0 0 1 .42.053l1.574.914a.279.279 0 0 0 .136.035c.13 0 .244-.108.244-.246 0-.057-.019-.108-.038-.158l-.318-1.22a.463.463 0 0 1 .181-.537c1.463-1.09 2.487-2.638 2.487-4.125zm-9.083-.95a.922.922 0 1 1 0-1.844.922.922 0 0 1 0 1.844zm4.521 0a.922.922 0 1 1 0-1.844.922.922 0 0 1 0 1.844z"/>
              </svg>
            </a>
            <!-- 小红书 -->
            <a href="#" class="text-gray-300 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </a>
            <!-- 微博 -->
            <a href="#" class="text-gray-300 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.098 20c-4.038 0-7.098-1.99-7.098-5.023 0-2.604 3.07-5.727 6.254-5.727.908 0 1.535.156 2.439.336 2.036.54 4.245-.907 3.842-2.896-.059-.211.123-.329.307-.229 2.533 1.746 4.25 4.173 4.25 6.517 0 3.032-3.059 7.022-10.098 7.022zm-.2-9.005c-2.038 0-3.684 1.575-3.684 3.54 0 1.965 1.646 3.54 3.684 3.54 2.039 0 3.685-1.575 3.685-3.54 0-1.965-1.646-3.54-3.685-3.54zm1.422 3.71c-.24.428-.725.647-1.085.487-.359-.16-.454-.647-.214-1.065.24-.429.725-.648 1.085-.488.36.16.454.647.214 1.066zm-1.986-1.045c-.788.346-1.78-.103-2.212-1.002-.434-.9-.148-1.908.639-2.255.787-.346 1.78.103 2.212 1.002.435.9.148 1.909-.639 2.255z"/>
                <path d="M15.453 15.453a7.27 7.27 0 0 1-.422.422c-1.49 1.348-3.307 1.984-5.453 1.984-3.579 0-7.578-2.228-7.578-5.922 0-1.69.451-3.078 1.309-4.103.235-.28.681-.552.878-.242.16.253-.059.537-.221.826-.535.964-.773 2.106-.773 3.301 0 3.039 2.056 5.782 6.172 5.782 3.541 0 5.172-1.724 5.172-4.73 0-1.222-.575-2.184-1.622-2.733-.312-.163-.256-.578.097-.724.16-.066.327-.103.495-.103.76 0 1.446.412 1.88 1.075.45.678.702 1.567.702 2.57 0 1.04-.22 1.965-.656 2.596z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
        <p>© 2025 腾佳人力资源有限公司. 保留所有权利.</p>
        <div class="mt-2 flex justify-center space-x-4">
          <a href="#" class="hover:text-primary">服务条款</a>
          <a href="#" class="hover:text-primary">隐私政策</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>