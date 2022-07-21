<template>
  <div class="block">
    test github actions
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >
        <el-card>
          <h4>{{ activity.content }}</h4>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="'#' + iconfontList[0].name"></use>
    </svg>
  </div>
</template>

<script>
import { iconfontList } from '@/assets/svg/iconfontList.js'
export default {
  data() {
    return {
      activities: [
        {
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },
        {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        },
        {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        },
        {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }
      ],
      iconfontList: iconfontList
    }
  },
  computed: {},

  mounted() {
    console.log(this.iconfontList)
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
.block {
  padding: 20px;
  // background: url('~@/assets/img/our.png');
  background-size: 100% 100%;
}
</style>
