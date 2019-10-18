<template>
    <div>
        <input type="button" value="+1" @click="add()"> {{ count }}
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            add() {
                this.count++
            }
        } 
    }
</script>

<style>
</style>