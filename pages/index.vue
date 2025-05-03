<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-6">
      <div class="bg-white rounded-lg p-6 border">
        <ScriptEmbed />
      </div>
      <div class="bg-white rounded-lg p-6 border" v-if="false">
        <AgentChat />
      </div>
    </div>
  </div>
</template>