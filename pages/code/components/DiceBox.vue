<script setup lang="ts">
import DiceBox from '@3d-dice/dice-box-threejs';
import { ref } from 'vue';

const dieRig = ref('');

// set configurations when invoking the class
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

const rollBtn = document.getElementById('rollBtn');
rollBtn?.addEventListener('click', () => {
  Box.roll(getRandomDieNumber(dieRig.value));
});

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomDieNumber = (result?: string) => `1d20@${result ?? getRndInteger(1, 20)}`;
</script>

<template>
  <input
    type="text"
    v-model="dieRig"
  />
  <button id="rollBtn">Roll Again</button>
  <div class="dice-box">
    <div class="die-wrapper">
      <div id="die"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#rollBtn {
  position: relative;
  cursor: pointer;
  z-index: 2;
}

.dice-box {
  display: flex;
  justify-content: center;
  align-items: center;

  .die-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/Dice-box-sample_2_square_fill.png');
    border: 2px solid red;
    width: 800px;
    height: 800px;
    background-size: cover;

    #die {
      width: 650px;
      height: 620px;
    }
  }
}
</style>
