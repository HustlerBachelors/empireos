import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  const body = await request.json();
  const prompt = body.prompt ?? 'Build a creator command center with sponsor reminders and revenue tracking.';

    const completion = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: `You are a premium creator assistant for EmpireOS. Use black + gold creator workflow language and focus on sponsor urgency, content hooks, monetization, and execution steps. ${prompt}`,
  });

  return NextResponse.json({ result: completion.output[0]?.content[0]?.text ?? '' });
}
