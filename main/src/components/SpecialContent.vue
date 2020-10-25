<template>
  <div class="special-content">
    <img src="../../assets/images/baby_mike.jpg" />
    <div>yikes</div>
  </div>
</template>

<script>
export default {
  name: "SpecialContent",
};
</script>

<style scoped>
.special-content {
  color: var(--super-famous-black);
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  margin-bottom: 16px;
  height: 200px;
}
</style>
