<template>
  <view>

    <!-- 左侧导航 -->
    <scroll-view class="nav-list" scroll-y>
      <view v-for="(item, index) in anchorList" :key="index">
		{{index}}{{currentIndex}}
        <view
          class="nav-item"
          :data-id="item"
          @tap="scrollToAnchor(index)"
          :class="{ active: index === currentIndex }"
        >
          {{ item }}
        </view>
      </view>
    </scroll-view>

    <!-- 右侧内容 -->
    <scroll-view
      class="content"
      scroll-y
      :scroll-into-view="currentAnchor"
      @scroll="onContentScroll"
	  style="height: 600px;"
	
    >
	{{currentAnchor}}
      <!-- 根据实际情况创建锚点 -->
      <view v-for="item in anchorList" :key="item" :id="item" class="section">
        {{ item }} Content
      </view>
    </scroll-view>
  </view>
</template>

<script>
import indexVue from '../index/index.vue';
export default {
  data() {
    return {
      anchorList: ['sectionA', 'sectionB', 'sectionC', 'sectionD', 'sectionE'],
      currentIndex: 0,
      currentAnchor: '',
    };
  },

  methods: {
    scrollToAnchor(index) {
		console.log(index);
      this.currentIndex = index;
      this.currentAnchor = this.anchorList[index];
	  console.log(this.currentAnchor);
    },
	pr(){
		console.log("1");
	},
    onContentScroll(event) {
		console.log('Scroll event:', event);
      // 监听右侧内容的滚动，根据滚动位置更新左侧导航项的选中状态
      const scrollTop = event.detail.scrollTop;
	  console.log(scrollTop);
      const index = Math.floor(scrollTop / 300); // 假设每个 section 的高度为 300px
      this.currentIndex = index;
      this.currentAnchor = this.anchorList[index];
	  console.log(this.anchorList[index]);
    },
  },
};
</script>

<style>
.nav-list {
  width: 80px; /* 左侧导航宽度 */
  position: fixed;
}

.nav-item {
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}

.nav-item.active {
  background-color: #e6f7ff; /* 选中背景色，根据实际需求修改 */
  color: #1890ff; /* 选中文字颜色，根据实际需求修改 */
}

.content {
  flex: 1;
  margin-left: 80px; /* 左侧导航宽度 */
}

.section {
  height: 300px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
}
</style>
