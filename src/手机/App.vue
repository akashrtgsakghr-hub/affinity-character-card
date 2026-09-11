<template>
  <main class="stage">
    <section class="phone" aria-label="手机角色状态栏">
      <div class="phone__rim">
        <div class="notch" aria-hidden="true"><span></span></div>

        <header class="status-bar">
          <span>{{ currentTime }}</span>
          <div class="status-bar__icons" aria-label="手机信号状态">
            <span class="signal"><i></i><i></i><i></i><i></i></span>
            <span class="wifi">◔</span>
            <span class="battery"><b></b></span>
          </div>
        </header>

        <div class="screen">
          <header class="chat-header">
            <button class="icon-button" type="button" aria-label="返回">‹</button>
            <div class="chat-header__identity">
              <div class="avatar avatar--small">{{ avatarLetter }}</div>
              <div>
                <strong>{{ character.name }}</strong>
                <span><i class="online-dot"></i>正在输入...</span>
              </div>
            </div>
            <button class="icon-button" type="button" aria-label="更多选项">•••</button>
          </header>

          <div class="chat-body">
            <div class="date-pill">今天 {{ currentTime }}</div>
            <div class="message message--received">
              <div class="avatar">{{ avatarLetter }}</div>
              <div class="message__content">
                <span class="message__name">{{ character.name }}</span>
                <p>{{ character.greeting }}</p>
                <time>刚刚</time>
              </div>
            </div>
            <div class="message message--sent">
              <div class="message__content">
                <p>我在这里。今天的状态怎么样？</p>
                <time>刚刚</time>
              </div>
            </div>
            <div class="message message--received message--latest">
              <div class="avatar">{{ avatarLetter }}</div>
              <div class="message__content">
                <p>{{ character.reply }}</p>
                <time>刚刚</time>
              </div>
            </div>
          </div>

          <section class="profile-sheet">
            <div class="profile-sheet__heading">
              <div>
                <span class="eyebrow">CURRENT PROFILE</span>
                <h1>{{ character.name }}</h1>
              </div>
              <span class="mood-tag">{{ character.mood }}</span>
            </div>

            <div class="vital-grid">
              <div class="vital-card">
                <span>心情</span>
                <strong>{{ character.mood }}</strong>
                <div class="meter"><i :style="{ width: `${character.moodValue}%` }"></i></div>
              </div>
              <div class="vital-card">
                <span>体力</span>
                <strong>{{ character.energy }}%</strong>
                <div class="meter meter--mint"><i :style="{ width: `${character.energy}%` }"></i></div>
              </div>
            </div>

            <div class="detail-row"><span>当前地点</span><strong>{{ character.location }}</strong></div>
            <div class="detail-row"><span>关系进度</span><strong>{{ character.relationship }}</strong></div>
          </section>

          <nav class="bottom-nav" aria-label="手机导航">
            <button class="bottom-nav__item bottom-nav__item--active" type="button"><span>⌂</span>主页</button>
            <button class="bottom-nav__item" type="button"><span>♡</span>关系</button>
            <button class="bottom-nav__item" type="button"><span>⌁</span>记录</button>
          </nav>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

interface CharacterState {
  name: string;
  mood: string;
  moodValue: number;
  energy: number;
  location: string;
  relationship: string;
  greeting: string;
  reply: string;
}

const fallbackState: CharacterState = {
  name: '白娅',
  mood: '平静',
  moodValue: 76,
  energy: 82,
  location: '窗边 · 晚风里',
  relationship: '熟悉 · 68%',
  greeting: '你来了。窗外的风刚好，今天也想和你聊一会儿。',
  reply: '放心，我的状态很好。看到你的消息，心情又亮了一点。',
};

const currentTime = ref('21:48');
let timer: ReturnType<typeof setInterval> | undefined;

function readState(): CharacterState {
  try {
    const variables = getVariables({ type: 'message', message_id: getCurrentMessageId() }) as Record<string, unknown>;
    const source = (variables.status_data ?? variables.stat_data ?? variables.character_status) as
      | Partial<CharacterState>
      | undefined;
    return { ...fallbackState, ...source };
  } catch {
    return fallbackState;
  }
}

const character = ref(readState());
const avatarLetter = computed(() => character.value.name.slice(0, 1));

function updateTime() {
  currentTime.value = new Intl.DateTimeFormat('zh-CN', { hour: '2-digit', minute: '2-digit' }).format(new Date());
}

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 30_000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style lang="scss" scoped>
:global(*) { box-sizing: border-box; }
:global(body) { margin: 0; background: #e8e2d8; }

.stage {
  width: 100%;
  padding: clamp(14px, 3vw, 34px);
  background: radial-gradient(circle at 15% 10%, #fff8ea 0 10%, transparent 34%), #e8e2d8;
  color: #292827;
  font-family: Georgia, 'Noto Serif SC', serif;
}

.phone { width: min(100%, 390px); margin: 0 auto; padding: 10px; background: #262321; border-radius: 34px; box-shadow: 0 22px 50px rgba(51, 43, 35, .22); }
.phone__rim { position: relative; overflow: hidden; border: 2px solid #514940; border-radius: 27px; background: #f7f3eb; }
.notch { position: absolute; z-index: 2; top: 0; left: 50%; width: 120px; height: 26px; transform: translateX(-50%); border-radius: 0 0 17px 17px; background: #262321; }
.notch span { display: block; width: 35px; height: 5px; margin: 9px auto; border-radius: 5px; background: #514940; }
.status-bar { display: flex; justify-content: space-between; align-items: center; padding: 10px 17px 6px; font: 700 11px/1.2 'Trebuchet MS', sans-serif; letter-spacing: .04em; }
.status-bar__icons { display: flex; align-items: center; gap: 8px; }
.signal { display: flex; align-items: end; gap: 2px; height: 10px; }
.signal i { width: 2px; background: #292827; border-radius: 2px; &:nth-child(1) { height: 4px; } &:nth-child(2) { height: 6px; } &:nth-child(3) { height: 8px; } &:nth-child(4) { height: 10px; } }
.wifi { font-size: 14px; transform: rotate(-45deg); }
.battery { width: 18px; height: 9px; padding: 1px; border: 1px solid #292827; border-radius: 3px; &:after { content: ''; position: relative; top: -1px; left: 17px; display: block; width: 2px; height: 4px; background: #292827; } b { display: block; width: 78%; height: 100%; border-radius: 1px; background: #292827; } }
.screen { background: #faf7f0; }
.chat-header { display: flex; align-items: center; justify-content: space-between; padding: 13px 14px 11px; border-top: 1px solid #e8dfd2; border-bottom: 1px solid #e8dfd2; background: rgba(255, 253, 248, .92); }
.icon-button { width: 30px; padding: 0; border: 0; color: #6d6259; background: transparent; font: 24px/1 Georgia, serif; cursor: pointer; }
.chat-header__identity { display: flex; align-items: center; gap: 9px; }
.chat-header strong { display: block; font-size: 14px; }
.chat-header span { display: block; margin-top: 2px; color: #9a8d80; font: 10px/1.2 'Trebuchet MS', sans-serif; }
.online-dot { display: inline-block; width: 5px; height: 5px; margin-right: 4px; border-radius: 50%; background: #7d9b79; }
.avatar { display: grid; width: 31px; height: 31px; place-items: center; flex: 0 0 auto; border: 1px solid #b88f77; border-radius: 50%; color: #fffaf4; background: linear-gradient(145deg, #d6a684, #9e6e5d); font: 700 14px Georgia, serif; }
.avatar--small { width: 34px; height: 34px; }
.chat-body { padding: 16px 13px 8px; background: linear-gradient(#f7f0e7 0%, #fbf8f2 65%); }
.date-pill { width: fit-content; margin: 0 auto 17px; padding: 4px 9px; border-radius: 10px; color: #a29283; background: #eee5d8; font: 9px 'Trebuchet MS', sans-serif; }
.message { display: flex; align-items: flex-start; gap: 8px; margin: 12px 0; }
.message--sent { justify-content: flex-end; }
.message__content { max-width: 77%; }
.message--sent .message__content { color: #fffaf4; background: #8c6e5d; }
.message__content { padding: 8px 10px 6px; border-radius: 4px 14px 14px 14px; background: #fffdf9; box-shadow: 0 2px 9px rgba(105, 84, 65, .07); }
.message--sent .message__content { border-radius: 14px 4px 14px 14px; }
.message__name { display: block; margin-bottom: 3px; color: #a17b62; font: 10px 'Trebuchet MS', sans-serif; }
.message p { margin: 0; font-size: 12px; line-height: 1.55; }
.message time { display: block; margin-top: 4px; text-align: right; opacity: .55; font: 9px 'Trebuchet MS', sans-serif; }
.profile-sheet { padding: 15px; border-top: 1px solid #e6dbcd; background: #fffdf8; }
.profile-sheet__heading { display: flex; align-items: start; justify-content: space-between; }
.eyebrow { color: #ae8a73; font: 9px 'Trebuchet MS', sans-serif; letter-spacing: .13em; }
h1 { margin: 2px 0 0; font-size: 25px; font-weight: 500; }
.mood-tag { padding: 5px 8px; border: 1px solid #d8c5b3; border-radius: 10px; color: #8c6e5d; font: 10px 'Trebuchet MS', sans-serif; }
.vital-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 14px 0 10px; }
.vital-card { padding: 9px; border: 1px solid #eee3d6; border-radius: 5px; background: #faf4eb; }
.vital-card span, .detail-row span { color: #9c8e81; font: 10px 'Trebuchet MS', sans-serif; }
.vital-card strong { display: block; margin: 3px 0 7px; font-size: 13px; font-weight: 500; }
.meter { height: 4px; overflow: hidden; border-radius: 3px; background: #e8ddd1; }
.meter i { display: block; height: 100%; border-radius: inherit; background: #b9876e; transition: width .4s ease; }
.meter--mint i { background: #8aa590; }
.detail-row { display: flex; justify-content: space-between; padding: 9px 0; border-top: 1px solid #eee5dc; }
.detail-row strong { max-width: 62%; text-align: right; font-size: 11px; font-weight: 500; }
.bottom-nav { display: flex; justify-content: space-around; padding: 10px 10px 13px; border-top: 1px solid #e6dbcd; background: #fffdf8; }
.bottom-nav__item { display: flex; flex-direction: column; align-items: center; gap: 3px; border: 0; color: #b1a397; background: transparent; font: 9px 'Trebuchet MS', sans-serif; cursor: pointer; }
.bottom-nav__item span { font: 18px/1 Georgia, serif; }
.bottom-nav__item--active { color: #8c6e5d; }

@media (max-width: 420px) { .stage { padding: 8px; } .phone { padding: 7px; border-radius: 27px; } .phone__rim { border-radius: 21px; } }
</style>
