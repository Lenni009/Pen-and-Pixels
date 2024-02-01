<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { isShowTime } from '../variables/constants';

const dieRig = ref('');
const rollBtn = ref<HTMLButtonElement | null>(null);
const die = ref<HTMLDivElement | null>(null);

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
    baseScale: getDieSize(),
    strength: 2,
  });

  Box.initialize()
    .then(() => {
      // give code sandbox a chance to load up
      nextTick(() => {
        Box.roll(getRandomDieNumber(dieRig.value));
      });
    })
    .catch((e) => console.error(e));

  rollBtn.value?.addEventListener('click', () => {
    Box.roll(getRandomDieNumber(dieRig.value));
  });
});

const getRndInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomDieNumber = (result?: string) => `1d20@${result ?? getRndInteger(1, 20)}`;

function getDieSize() {
  if (!die.value) return;
  const width = die.value.getBoundingClientRect().width;
  return width / 4;
}
</script>

<template>
  <div class="die-control">
    <input
      v-if="!isShowTime"
      v-model="dieRig"
      class="rig-input"
      type="text"
      placeholder="Gewünschtes Ergebnis"
    />
    <button
      ref="rollBtn"
      class="roll-button"
    >
      Würfeln
    </button>
  </div>
  <div class="die-wrapper">
    <div id="die" ref="die"></div>
  </div>
</template>

<style scoped lang="scss">
.die-control {
  --border-radius: 5px;
  --outline-color: rgb(135, 211, 236);
  display: flex;
  border-color: var(--vp-c-text-1);
  gap: 0.5rem;
  margin-block-end: 0.5rem;
  margin-block-start: 1rem;

  & * {
    font-family: inherit;
    font-size: inherit;
  }

  input {
    border: 1px solid;
    border-radius: var(--border-radius);
    padding: 0.25rem;
    padding-inline: 0.5rem;

    &:hover {
      outline: 1px solid var(--outline-color);
    }
  }

  input {
    &:focus,
    &:focus-visible {
      outline: 2px solid var(--outline-color);
    }
  }

  button {
    padding: 1rem;
    border: 1px solid;
    border-color: var(--vp-c-text-1);
    border-radius: var(--border-radius);
    transition: background-color 0.2s ease;

    &:hover {
      background-color: lightgrey;
    }
  }
}

.dark .die-control {
  input {
    background-color: #2b2a33;
  }

  button:hover {
    background-color: rgb(66, 66, 66);
  }
}

.die-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/Dice-box-sample_2_square_fill.webp');
  max-width: 800px;
  background-size: cover;
  aspect-ratio: 1 / 1;

  #die {
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
