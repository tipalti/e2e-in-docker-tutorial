<template>
  <div class="arthur">
    <h1>Arthur's Bone Counter</h1>
    <img src="~@/assets/arthur.jpg" class="arthur__img" />
    <h2 id="dog-message">
      {{ dogMessage }}
    </h2>
    <h3 id="bone-count">
      Current bone count: {{ boneCount }}
    </h3>
    <div>
      <button class="arthur__method-button" @click="giveBone" id="give-bone">Give a bone</button>
      <button class="arthur__method-button" @click="takeBone" id="take-bone">Take a bone</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Arthur',
  data() {
    return {
      boneCount: 0,
      dogMessage: `I'm waiting...`
    }
  },
  methods: {
    giveBone() {
      this.boneCount++;
      this.dogMessage = 'Woof!';
    },
    takeBone() {
      if (this.boneCount > 0) {
        this.boneCount--;
        this.dogMessage = 'Whine!';
      } else {
        this.dogMessage = `I'm confused!`;
      }
    }
  }
}
</script>

<style lang="scss">
.arthur {
  &__img {
    height: 50vh; // width scales automatically to height when unset
  }
  &__method-button {
    margin: 1rem;
    font-size: 125%;
  }
}
</style>
