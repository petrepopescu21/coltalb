<template>
    <div>Not found...</div>
</template>
<script>
export default {
    name: "notfoundredir",
    mounted: function() {
        this.$router.replace('/404')
    }
}
</script>