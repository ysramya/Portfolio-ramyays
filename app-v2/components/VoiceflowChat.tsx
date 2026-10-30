"use client";

import Script from "next/script";

/**
 * The portfolio assistant: a Voiceflow agent (chat, dictation, spoken replies
 * and voice mode) answering from the site's own pages and resume.
 *
 * Mounted once in the root layout, so it persists across client-side route
 * changes. The project id below is Voiceflow's public browser verification id,
 * not a credential. Widget look and behaviour are saved on the Voiceflow side
 * (Widget settings), and the agent's content in its knowledge base.
 */

type VoiceflowWindow = Window & {
  voiceflow?: { chat: { load: (config: unknown) => void } };
};

// `onReady` fires again on every mount (and twice under Strict Mode in dev);
// the SDK script is deduplicated by next/script, `chat.load()` is not.
let loaded = false;

function load() {
  const vf = (window as VoiceflowWindow).voiceflow;
  if (loaded || !vf) return;
  loaded = true;
  vf.chat.load({
    verify: { projectID: "6ae4e67d92dfeb54e780add6" },
    url: "https://general-runtime.voiceflow.com",
    voice: { url: "https://runtime-api.voiceflow.com" },
    environmentID: "main",
    versionVariant: "published",
  });
}

export default function VoiceflowChat() {
  return <Script src="https://cdn.voiceflow.com/widget-next/bundle.mjs" strategy="afterInteractive" onReady={load} />;
}
