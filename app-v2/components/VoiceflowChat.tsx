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

// The widget's generated palette forces a bright mint green whatever base
// colour it is given, so the site's deep green is spelled out shade by shade
// (500 is the primary: header, launcher, buttons). Fonts and finer touches live
// in public/voiceflow-chat.css.
const PALETTE = {
  50: "#f4f5f7",
  100: "#e3e7ec",
  200: "#c5ced8",
  300: "#9aa9bb",
  400: "#5f748c",
  500: "#0e1822",
  600: "#1a2a3a",
  700: "#0b141c",
  800: "#080f15",
  900: "#05090d",
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
    assistant: {
      color: "#0e1822",
      palette: PALETTE,
      header: { title: "Raya" },
      stylesheet: `${window.location.origin}/voiceflow-chat.css`,
    },
  });
}

export default function VoiceflowChat() {
  return <Script src="https://cdn.voiceflow.com/widget-next/bundle.mjs" strategy="afterInteractive" onReady={load} />;
}
