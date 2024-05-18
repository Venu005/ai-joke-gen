import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(process.env.API_KEY!);

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const model = genAi.getGenerativeModel({ model: "gemini-pro" });
    const joke_prompt = `Can you tell me 2 funny jokes on ${prompt}`;
    const result = await model.generateContent(joke_prompt);
    const res = await result.response;
    const text = res.text();

    return Response.json(
      {
        success: true,
        text,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to generate jokes",
      },
      { status: 500 }
    );
  }
}
