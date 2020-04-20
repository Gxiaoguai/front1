<template>
  <div class="tab-container">
    <el-input v-model="input"  style="width: 500px;" class="filter-item" @keyup.enter.native="handleFilter" />

    <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
      搜索
    </el-button>
    <router-link to="/user/message/sending">
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-s-promotion" >
        发消息
      </el-button>
    </router-link>
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key"  />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabPane from './components/TabPane'

export default {
  name: 'Tab',
  components: { TabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '我接收的消息', key: 'receive' },
        { label: '我发送的消息', key: 'send' }
      ],
      activeName: 'receive'
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
</style>
