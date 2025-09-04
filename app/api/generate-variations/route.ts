import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export async function POST(request: NextRequest) {
  try {
    const { imageUrl, description, platforms } = await request.json();

    if (!imageUrl || !description) {
      return NextResponse.json(
        { error: 'Image URL and description are required' },
        { status: 400 }
      );
    }

    // Generate ad copy variations
    const copyPrompts = platforms.map((platform: string) => 
      `Create compelling ${platform} ad copy for: ${description}. Make it engaging, platform-specific, and include relevant hashtags. Keep it under 150 characters for ${platform}.`
    );

    const copyResponses = await Promise.all(
      copyPrompts.map(prompt => 
        openai.chat.completions.create({
          model: 'google/gemini-2.0-flash-001',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 100,
        })
      )
    );

    // For demo purposes, we'll create variations with different copy
    // In production, you'd also generate image variations using DALL-E or similar
    const variations = copyResponses.map((response, index) => ({
      id: `var_${Date.now()}_${index}`,
      imageUrl: imageUrl, // In production, generate actual image variations
      copy: response.choices[0]?.message?.content || `Generated ad copy for ${platforms[index]}`,
      platform: platforms[index % platforms.length],
      metrics: {
        likes: Math.floor(Math.random() * 1000) + 100,
        shares: Math.floor(Math.random() * 100) + 10,
        engagement: Math.floor(Math.random() * 10) + 2
      }
    }));

    // Add some additional variations
    for (let i = 0; i < 2; i++) {
      const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
      variations.push({
        id: `var_${Date.now()}_extra_${i}`,
        imageUrl: imageUrl,
        copy: `🔥 ${description} - Limited time offer! Get yours now! #trending #${randomPlatform}`,
        platform: randomPlatform,
        metrics: {
          likes: Math.floor(Math.random() * 1000) + 100,
          shares: Math.floor(Math.random() * 100) + 10,
          engagement: Math.floor(Math.random() * 10) + 2
        }
      });
    }

    return NextResponse.json({ variations });
  } catch (error) {
    console.error('Error generating variations:', error);
    return NextResponse.json(
      { error: 'Failed to generate variations' },
      { status: 500 }
    );
  }
}
