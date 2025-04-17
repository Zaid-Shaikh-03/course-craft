import { streamText, Message } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage } from "@/lib/data";

const google = createGoogleGenerativeAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "",
});

export const runtime = "edge";

const generateId = () => Math.random().toString(36).substring(2, 15);

const buildGoogleGenAIPrompt = (messages) => [
  {
    id: generateId(),
    role: "user",
    content: initialMessage.content,
  },
  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
];

export async function POST(request) {
  const { messages } = await request.json();
  const stream = await streamText({
    model: google("gemini-2.0-flash"),
    messages: buildGoogleGenAIPrompt(messages),
    temperature: 0.7,
  });
  return stream?.toDataStreamResponse();
}
