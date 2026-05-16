import { NextResponse } from 'next/server';
import OpenAI from 'openai';

async function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }

  return new OpenAI({ apiKey });
}

export async function POST(request: Request) {
  const client = await getOpenAIClient();
  if (!client) {
    return NextResponse.json({ error: 'OPENAI_API_KEY missing' }, { status: 500 });
  }

    const completion = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: `You are a premium creator assistant for EmpireOS. Use black + gold creator workflow language and focus on sponsor urgency, content hooks, monetization, and execution steps. ${prompt}`,
  });

  const outputItem = completion.output?.[0] as any;
  const result = typeof outputItem === 'string'
    ? outputItem
    : typeof outputItem?.text === 'string'
      ? outputItem.text
      : Array.isArray(outputItem?.content)
        ? outputItem.content.map((chunk: any) => typeof chunk === 'string' ? chunk : chunk?.text ?? '').join('')
        : '';

  return NextResponse.json({ result });
}
