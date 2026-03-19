import { AnimalType } from './types';

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

export function initAudio(): void {
  getAudioContext();
}

// Djur som har riktiga inspelade ljud (MP3-filer i /sounds/)
const ANIMAL_AUDIO_FILES: Record<string, string> = {
  cat: '/sounds/cat.mp3',
  dog: '/sounds/dog.mp3',
  cow: '/sounds/cow.mp3',
  horse: '/sounds/horse.mp3',
  bird: '/sounds/bird.mp3',
  frog: '/sounds/frog.mp3',
  lion: '/sounds/lion.mp3',
  pig: '/sounds/pig.mp3',
  owl: '/sounds/owl.mp3',
};

// Håll en referens till senast spelade ljud så vi kan stoppa det
let currentAudio: HTMLAudioElement | null = null;

// Syntetiserad fallback för djur utan inspelning (fisk, dinos)
function playSynthFallback(animal: string): void {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  const synthSounds: Record<string, () => void> = {
    // Fisk: bubblor
    fish: () => {
      for (let i = 0; i < 4; i++) {
        const t = now + i * 0.2;
        const freq = 400 + Math.random() * 300;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.linearRampToValueAtTime(freq * 2, t + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.15, t + 0.02);
        gain.gain.linearRampToValueAtTime(0, t + 0.1);
        osc.start(t);
        osc.stop(t + 0.1);
      }
    },
    // T-Rex: djupt dån
    trex: () => {
      for (const [offset, freq, dur] of [[0, 70, 0.4], [0.3, 55, 0.8]] as const) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + offset);
        osc.connect(gain);
        gain.connect(ctx.destination);
        gain.gain.setValueAtTime(0, now + offset);
        gain.gain.linearRampToValueAtTime(0.25, now + offset + 0.05);
        gain.gain.linearRampToValueAtTime(0, now + offset + dur);
        osc.start(now + offset);
        osc.stop(now + offset + dur);
      }
    },
    // Triceratops: snörvlande
    triceratops: () => {
      for (const [offset, freq, dur] of [[0, 100, 0.3], [0.3, 85, 0.5]] as const) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now + offset);
        osc.connect(gain);
        gain.connect(ctx.destination);
        gain.gain.setValueAtTime(0, now + offset);
        gain.gain.linearRampToValueAtTime(0.2, now + offset + 0.05);
        gain.gain.linearRampToValueAtTime(0, now + offset + dur);
        osc.start(now + offset);
        osc.stop(now + offset + dur);
      }
    },
  };

  const fn = synthSounds[animal];
  if (fn) fn();
}

export function stopAnimalSound(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

export function playAnimalSound(animal: AnimalType | string): void {
  stopAnimalSound();

  const audioFile = ANIMAL_AUDIO_FILES[animal];
  if (audioFile) {
    const audio = new Audio(audioFile);
    currentAudio = audio;
    audio.play().catch(() => {
      // Om MP3-uppspelning misslyckas, ignorera tyst
    });
  } else {
    playSynthFallback(animal);
  }
}

export function playMatchSound(): void {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  [523, 659, 784].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.2, now + i * 0.15);
    gain.gain.linearRampToValueAtTime(0, now + i * 0.15 + 0.3);
    osc.start(now + i * 0.15);
    osc.stop(now + i * 0.15 + 0.3);
  });
}

export function playSnapSound(): void {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, now);
  osc.frequency.linearRampToValueAtTime(1200, now + 0.05);
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.3, now);
  gain.gain.linearRampToValueAtTime(0, now + 0.1);
  osc.start(now);
  osc.stop(now + 0.1);
}

export function playErrorSound(): void {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(200, now);
  osc.frequency.linearRampToValueAtTime(150, now + 0.15);
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.15, now);
  gain.gain.linearRampToValueAtTime(0, now + 0.15);
  osc.start(now);
  osc.stop(now + 0.15);
}

export function playWinSound(): void {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  [523, 659, 784, 1047].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.25, now + i * 0.2);
    gain.gain.linearRampToValueAtTime(0, now + i * 0.2 + 0.5);
    osc.start(now + i * 0.2);
    osc.stop(now + i * 0.2 + 0.5);
  });
}
