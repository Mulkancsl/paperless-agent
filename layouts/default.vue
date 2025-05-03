<template>
  <div class="min-h-screen relative flex flex-col items-center overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="magic-light-1"></div>
      <div class="magic-light-2"></div>
      <div class="magic-light-3"></div>
      <div class="magic-light-4"></div>
    </div>
    
    <NavBar />
    <main class="container max-w-4xl mx-auto px-4 pt-6 pb-8 relative z-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue';
</script>

<style scoped>
.magic-light-1, .magic-light-2, .magic-light-3, .magic-light-4 {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
}

.magic-light-1 {
  top: -10%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0) 70%);
  opacity: 0.8;
  animation: float1 20s infinite ease-in-out;
}

.magic-light-2 {
  bottom: -15%;
  left: -5%;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, rgba(167,139,250,0.4) 0%, rgba(167,139,250,0) 70%);
  opacity: 0.7;
  animation: float2 25s infinite ease-in-out;
}

.magic-light-3 {
  top: 30%;
  left: 20%;
  width: 40vw;
  height: 40vw;
  background: radial-gradient(circle, rgba(196,181,253,0.3) 0%, rgba(196,181,253,0) 70%);
  opacity: 0.6;
  animation: float3 18s infinite ease-in-out;
}

.magic-light-4 {
  top: 10%;
  left: 50%;
  width: 30vw;
  height: 30vw;
  background: radial-gradient(circle, rgba(216,180,254,0.3) 0%, rgba(216,180,254,0) 70%);
  opacity: 0.7;
  animation: float4 22s infinite ease-in-out;
}

@keyframes float1 {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(5%, 5%) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes float2 {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-5%, -2%) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes float3 {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(3%, -3%) scale(1.1); }
  66% { transform: translate(-3%, 3%) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes float4 {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-4%, 2%) scale(1.1); }
  75% { transform: translate(4%, -2%) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}
</style>