<script setup lang="ts">
// Subtle animated spotlight shafts. Each beam is a soft vertical light shaft
// whose source sits just above the section (out of view), spread across the
// top (2 left, 1 center, 3 right) and kept roughly parallel with only small
// tilts. Short vertical fade = subtle length; colors are shuffled mint/indigo.
// Each drifts slowly on its own timing. Pure CSS.
</script>

<template>
  <div class="spotlight" aria-hidden="true">
    <div class="beam b-l1" />
    <div class="beam b-l2" />
    <div class="beam b-m1" />
    <div class="beam b-r1" />
    <div class="beam b-r2" />
    <div class="beam b-r3" />
  </div>
</template>

<style scoped>
.spotlight {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.beam {
  position: absolute;
  top: -12%;
  width: 240px;
  height: 95%;
  transform-origin: 50% 0; /* pivot at the source (top, off-screen) */
  filter: blur(28px);
  opacity: 0;
  mix-blend-mode: screen;
  will-change: transform, opacity;
  /* Soft left/right edges so it reads as a shaft, not a rectangle */
  -webkit-mask-image: linear-gradient(to right, transparent, #000 50%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 50%, transparent);
}

/* left pair */
.b-l1 {
  left: 2%;
  background: linear-gradient(to bottom, rgba(110, 231, 183, 0.16) 0%, rgba(110, 231, 183, 0.05) 30%, transparent 66%);
  animation: fade-in 1.4s ease-out forwards, sw-l1 16s ease-in-out infinite alternate;
}
.b-l2 {
  left: 9%;
  background: linear-gradient(to bottom, rgba(129, 140, 248, 0.15) 0%, rgba(129, 140, 248, 0.045) 28%, transparent 56%);
  animation: fade-in 1.6s ease-out forwards, sw-l2 20s ease-in-out infinite alternate;
}
/* center */
.b-m1 {
  left: 46%;
  background: linear-gradient(to bottom, rgba(110, 231, 183, 0.13) 0%, rgba(110, 231, 183, 0.04) 32%, transparent 72%);
  animation: fade-in 1.8s ease-out forwards, sw-m1 24s ease-in-out infinite alternate;
}
/* right trio */
.b-r1 {
  left: 64%;
  background: linear-gradient(to bottom, rgba(129, 140, 248, 0.16) 0%, rgba(129, 140, 248, 0.05) 30%, transparent 62%);
  animation: fade-in 1.5s ease-out forwards, sw-r1 18s ease-in-out infinite alternate;
}
.b-r2 {
  left: 81%;
  background: linear-gradient(to bottom, rgba(110, 231, 183, 0.15) 0%, rgba(110, 231, 183, 0.045) 29%, transparent 68%);
  animation: fade-in 1.7s ease-out forwards, sw-r2 22s ease-in-out infinite alternate;
}
.b-r3 {
  left: 90%;
  background: linear-gradient(to bottom, rgba(129, 140, 248, 0.13) 0%, rgba(129, 140, 248, 0.04) 27%, transparent 54%);
  animation: fade-in 1.9s ease-out forwards, sw-r3 26s ease-in-out infinite alternate;
}

@keyframes fade-in { to { opacity: 1; } }

/* Small tilts → roughly parallel; gentle sweep on each */
/* Left-corner pair angled in toward center (positive = lean right) */
@keyframes sw-l1 { from { transform: rotate(14deg); } to { transform: rotate(19deg); } }
@keyframes sw-l2 { from { transform: rotate(13deg); } to { transform: rotate(18deg); } }
/* Center + the separate third right beam stay near-vertical */
@keyframes sw-m1 { from { transform: rotate(-2deg); } to { transform: rotate(3deg); } }
@keyframes sw-r1 { from { transform: rotate(-3deg); } to { transform: rotate(-8deg); } }
/* Right-corner pair angled in toward center (negative = lean left) */
@keyframes sw-r2 { from { transform: rotate(-14deg); } to { transform: rotate(-19deg); } }
@keyframes sw-r3 { from { transform: rotate(-13deg); } to { transform: rotate(-18deg); } }

@media (prefers-reduced-motion: reduce) {
  .beam { animation: none !important; opacity: 0.8 !important; }
}
</style>
