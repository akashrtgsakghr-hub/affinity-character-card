<template>
  <div class="status-shell">
    <div class="status-bar">
      <div class="top-row">
        <span class="time">{{ world.时间 || '--:--' }}</span>
        <span class="location">{{ world.地点 || '--' }}</span>
        <span class="weather">{{ world.天气 || '--' }} {{ world.温度 || '' }}</span>
      </div>

      <div class="character-tabs" v-if="characterEntries.length > 1">
        <button
          v-for="([name, data], index) in characterEntries"
          :key="name"
          type="button"
          class="tab"
          :class="{ active: selectedIndex === index }"
          @click="selectedIndex = index"
        >
          {{ name }}
        </button>
      </div>

      <div class="main-panel">
        <div class="avatar-wrap">
          <div class="avatar" :title="currentName">
            {{ currentMeta?.表情 || '✨' }}
          </div>
        </div>

        <div class="info-panel">
          <div class="name-row">
            <span class="name">{{ currentName }}</span>
            <span class="emoji">{{ currentMeta?.表情 || '✨' }}</span>
          </div>

          <div class="dress">{{ currentMeta?.服饰 || '常规着装' }}</div>

          <div class="metrics">
            <div class="metric">
              <span class="label">E</span>
              <div class="track"><div class="fill e" :style="{ width: `${currentMeta?.情感依恋 ?? 0}%` }" /></div>
              <span class="value">{{ currentMeta?.情感依恋 ?? 0 }}</span>
            </div>
            <div class="metric">
              <span class="label">P</span>
              <div class="track"><div class="fill p" :style="{ width: `${currentMeta?.肉体吸引 ?? 0}%` }" /></div>
              <span class="value">{{ currentMeta?.肉体吸引 ?? 0 }}</span>
            </div>
            <div class="metric">
              <span class="label">R</span>
              <div class="track"><div class="fill r" :style="{ width: `${currentMeta?.关系意愿 ?? 0}%` }" /></div>
              <span class="value">{{ currentMeta?.关系意愿 ?? 0 }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="thought-box" v-if="currentMeta?.心声">
        {{ currentMeta.心声 }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDataStore } from './store';

const store = useDataStore();
const selectedIndex = ref(0);

const world = computed(() => store.data.世界 ?? {});
const characterEntries = computed(() => Object.entries(store.data.角色 ?? {}));

const currentEntry = computed(() => {
  const entries = characterEntries.value;
  if (!entries.length) {
    return [
      '',
      { 情感依恋: 0, 肉体吸引: 0, 关系意愿: 0, 服饰: '常规着装', 表情: '✨', 心声: '' } as Record<string, any>,
    ];
  }

  const safeIndex = Math.min(selectedIndex.value, entries.length - 1);
  selectedIndex.value = safeIndex;
  return entries[safeIndex];
});

const currentName = computed(() => currentEntry.value[0] ?? '角色');
const currentMeta = computed(() => currentEntry.value[1] ?? {});
</script>

<style scoped>
.status-shell {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px 10px;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.status-bar {
  width: min(100%, 440px);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  padding: 12px 12px 10px;
  color: #171717;
}

.top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 11px;
  white-space: nowrap;
  opacity: 0.85;
  margin-bottom: 10px;
}

.character-tabs {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  margin-bottom: 10px;
  padding-bottom: 3px;
}

.tab {
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 11px;
  cursor: pointer;
}

.tab.active {
  background: #111827;
  color: white;
}

.main-panel {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar-wrap {
  flex-shrink: 0;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fdf2f8, #ede9fe, #dbeafe);
  border: 1px solid rgba(17, 24, 39, 0.08);
  font-size: 30px;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.7);
}

.info-panel {
  flex: 1;
  min-width: 0;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.name {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.emoji {
  font-size: 14px;
}

.dress {
  font-size: 11px;
  opacity: 0.8;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.metrics {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.metric {
  display: grid;
  grid-template-columns: 18px 1fr 30px;
  gap: 6px;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
}

.label {
  opacity: 0.8;
}

.track {
  height: 6px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.08);
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: inherit;
  transition: width 0.25s ease;
}

.fill.e {
  background: linear-gradient(90deg, #fb7185, #f43f5e);
}
.fill.p {
  background: linear-gradient(90deg, #a78bfa, #8b5cf6);
}
.fill.r {
  background: linear-gradient(90deg, #7dd3fc, #38bdf8);
}

.value {
  text-align: right;
}

.thought-box {
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(15, 23, 42, 0.06);
  font-size: 11px;
  line-height: 1.5;
}

@media (max-width: 420px) {
  .top-row {
    flex-wrap: wrap;
    white-space: normal;
  }

  .main-panel {
    gap: 10px;
  }

  .avatar {
    width: 54px;
    height: 54px;
  }
}
</style>
