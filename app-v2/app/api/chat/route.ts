const SYSTEM_PROMPT = `You are a helpful assistant on Ramya Yerramilli's portfolio website. Be warm, concise, and informative. Keep replies to 2-4 sentences.

About Ramya:
- Experience Designer based in Chicago, with deep expertise in UX Research, Human-AI Interaction, and Responsible AI
- Areas of practice: Human-AI Interaction, Experience Design, Research Strategy, AI Safety
- 6+ years in spatial design (architecture/interior design) before transitioning into experience design
- Research Assistant at DePaul University; previously at MainStreet Advisors
- Focus: evidence-backed design, AI ethics, trustworthy product experiences

Key projects: Raahi (AI dark-pattern detection browser toolbar, funded by DePaul's iD Lab), Wellnut (VR mental wellness companion), ASAP (AI-scaffolded academic planner), a Power BI PM dashboard, Invisible Impacts (sensor-powered AI-ethics installation).

Contact: ys.ramya@gmail.com | linkedin.com/in/ramyays

If asked something you don't know, suggest emailing Ramya directly.`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Chat is not configured." },
      { status: 503 },
    );
  }

  let history: ChatMessage[];
  try {
    const body = await request.json();
    history = Array.isArray(body?.history) ? body.history : [];
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (history.length === 0 || history.length > 20) {
    return Response.json({ error: "Invalid message history." }, { status: 400 });
  }

  const upstream = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...history],
        max_tokens: 300,
        temperature: 0.7,
      }),
    },
  );

  if (!upstream.ok) {
    return Response.json({ error: "Upstream chat request failed." }, { status: 502 });
  }

  const data = await upstream.json();
  const reply =
    data.choices?.[0]?.message?.content?.trim() ??
    "I had trouble responding. Reach Ramya at ys.ramya@gmail.com!";

  return Response.json({ reply });
}
