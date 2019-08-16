<template>
    <div>
        <el-row>
            <!-- el-row 行 -->
            <el-col :span="4">
                <el-input v-modal="input" placeholder="请输入"></el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Ele',
  data () {
    return {
      input: ''
    }
  }
}
</script>
