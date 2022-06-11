<template>
  <div class="current-song-box">
    <h2>{{ song.name }}</h2>
    <p>{{ song.description }}</p>
  </div>
</template>

<script>
export default {
  name: "current-song",
  props: ["song"],
};
</script>

<style lang="scss" scoped>
.current-song-box {
  text-align: center;
}
</style>
