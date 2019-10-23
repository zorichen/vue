<template>
    <div>
        <div class="container">
            <router-link to="/hotel">如程订房</router-link>&nbsp&nbsp&nbsp
            <router-link to="/goodslist">GoodsList</router-link>
            <div class="row" style="height:20px"></div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        }
    }
</script>

<style>
</style>