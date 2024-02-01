<script setup lang="ts">
import { ref, onMounted } from 'vue';

const dieRig = ref('');
const rollBtn = ref<HTMLButtonElement | null>(null);

// set configurations when invoking the class
onMounted(async () => {
  const { default: DiceBox } = await import('@3d-dice/dice-box-threejs');
  const Box = new DiceBox('#die', {
    theme_customColorset: {
      background: '#55d12f',
      foreground: '#ffffff',
      texture: 'marble', // marble | ice
      material: 'plastic', // metal | glass | plastic | wood
    },
    light_intensity: 1,
    gravity_multiplier: 500,
    baseScale: 150,
    strength: 2,
  });

  Box.initialize()
    .then(() => {
      // give code sandbox a chance to load up
      setTimeout(() => {
        Box.roll(getRandomDieNumber(dieRig.value));
      }, 1000);
    })
    .catch((e) => console.error(e));

  rollBtn.value?.addEventListener('click', () => {
    Box.roll(getRandomDieNumber(dieRig.value));
  });
});

const getRndInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomDieNumber = (result?: string) => `1d20@${result ?? getRndInteger(1, 20)}`;
</script>

<template>
  <input
    v-model="dieRig"
    class="rig-input"
    type="text"
  />
  <button
    ref="rollBtn"
    class="roll-button"
  >
    Roll Again
  </button>

  <div class="die-wrapper">
    <div id="die"></div>
  </div>
</template>

<style scoped lang="scss">
.rig-input,
.roll-button {
  padding: 0.25rem;
  background-color: antiquewhite;
  color: black;
  border: 1px solid black;
}

.die-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/Dice-box-sample_2_square_fill.png');
  width: 800px;
  height: 800px;
  background-size: cover;

  #die {
    width: 650px;
    height: 620px;
  }
}
</style>
