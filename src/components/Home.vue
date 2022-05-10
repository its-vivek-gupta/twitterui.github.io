<template>
<div class="home">
</div>
<NewTweet />
<Timeline />
</template>

<script>
import NewTweet from './NewTweet.vue'
import Timeline from './Timeline.vue'

export default {
    name: 'Home',
    components: {
        Timeline,
        NewTweet
    }
}
</script>

<style>
.home {
    width: 45%;
    left: 25%;
    color: rgba(0, 00, 0, 0.7);
    height: 100%;
    position: fixed;
    padding-left: 10px;
    border-right: 0.5px solid rgba(0, 0, 00, 0.1);
}
</style>
