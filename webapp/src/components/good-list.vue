<template lang="html">
  <div class="suwis-good-list">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.suwis-good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 12px;
    .suwis-good-item {
        flex: 1;
        min-width: calc(50vw - 18px);
        max-width: calc(50vw - 18px);
    }
}
</style>
