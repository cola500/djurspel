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

type SoundConfig = {
  frequencies: number[];
  duration: number;
  type: OscillatorType;
  ramp?: boolean;
};

const ANIMAL_SOUNDS: Record<string, SoundConfig> = {
  cat:          { frequencies: [800, 600, 400], duration: 0.4, type: 'sine', ramp: true },
  dog:          { frequencies: [300, 350, 300], duration: 0.3, type: 'square' },
  cow:          { frequencies: [150, 120, 150], duration: 0.6, type: 'sawtooth', ramp: true },
  horse:        { frequencies: [500, 600, 500, 400], duration: 0.5, type: 'square' },
  bird:         { frequencies: [1200, 1400, 1200, 1600], duration: 0.3, type: 'sine' },
  frog:         { frequencies: [200, 250, 200], duration: 0.2, type: 'square' },
  fish:         { frequencies: [600, 800, 1000], duration: 0.2, type: 'sine' },
  lion:         { frequencies: [150, 130, 110, 100], duration: 0.6, type: 'sawtooth' },
  trex:         { frequencies: [100, 80, 60, 50], duration: 0.8, type: 'sawtooth', ramp: true },
  triceratops:  { frequencies: [120, 100, 80, 100], duration: 0.6, type: 'square', ramp: true },
};

function playSoundConfig(config: SoundConfig): void {
  const ctx = getAudioContext();
  const now = ctx.currentTime;
  const stepDuration = config.duration / config.frequencies.length;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = config.type;
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  config.frequencies.forEach((freq, i) => {
    const time = now + i * stepDuration;
    if (config.ramp) {
      oscillator.frequency.linearRampToValueAtTime(freq, time);
    } else {
      oscillator.frequency.setValueAtTime(freq, time);
    }
  });

  gainNode.gain.setValueAtTime(0.3, now);
  gainNode.gain.linearRampToValueAtTime(0, now + config.duration);

  oscillator.start(now);
  oscillator.stop(now + config.duration);
}

export function playAnimalSound(animal: AnimalType | string): void {
  const config = ANIMAL_SOUNDS[animal];
  if (config) playSoundConfig(config);
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
