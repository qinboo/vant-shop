<template>
<van-list :finished="finished" finished-text="没有更多了">
        <van-cell :title="item" v-for="item in listArr" :key="item" @click="cellClick(item)"/>
</van-list>
</template>

<script>

export default {
props: {
    listArr: Array
},
data() {
return {
    finished: true
};
},
methods: {
    cellClick (item) {
        this.$emit('cellClick', item)
    }
},
mounted() {

},
}
</script>
<style lang='less' scoped>
</style>