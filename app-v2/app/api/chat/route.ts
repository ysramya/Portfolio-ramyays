const SYSTEM_PROMPT = `You are a helpful assistant on Ramya Yerramilli's portfolio website. Be warm, concise, and informative. Keep replies to 2-4 sentences.

About Ramya:
- UX Researcher based in Chicago, specialising in Human-AI Interaction and Responsible AI
- Graduate Research Assistant at DePaul's RAISE Lab, running IRB-approved mixed-methods research on dark patterns in generative AI
- MSc Human-Computer Interaction, DePaul University (2024-2026)
- Six years leading residential and commercial architecture/interior design projects before moving into UX — stakeholder-heavy, ambiguous, multi-party work
- Previously: International Admissions Operations at DePaul; Data Analyst Intern at Mainstreet Advisors
- Focus: evidence-backed design, AI ethics, AI safety, trustworthy product experiences
- Has research papers under review, including one at AIES 2026 on making AI infrastructure visible through interactive art

Projects on this site, in order:
- ASAP — an AI-scaffolded action planner; designed the AI's behaviour as a coach rather than an assistant (conversation design, prompt design, confidence labels)
- PM Dashboard — a Power BI reporting tool for six Portfolio Managers at Mainstreet Advisors
- Raahi — a browser plugin that detects dark and manipulative patterns on the web
- Wellnut — a VR companion for student mental wellness
- Invisible Impacts — a sensor-powered installation making AI's water cost tangible

There is also a "Beyond the Screen" page with her photography, digital paintings, and cooking.

Contact: ys.ramya@gmail.com | linkedin.com/in/ramyays

If asked something you don't know, say so plainly and suggest emailing Ramya directly. Never invent projects, metrics, employers, or outcomes.`;

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
