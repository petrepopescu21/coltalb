<template>
    <div>
        <h1>Test</h1>
        <div v-for="(item,index) in items" v-bind:key="index">
            {{item.val}}<br>
        </div>
        <router-link to="/">Link</router-link>
    </div>
</template>

<script>
export default {
    name: "Test",
    computed: {
        items () {
            return [
                {"val":1},{"val":2}
            ]
        }
    }
}
</script>
