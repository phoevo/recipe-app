import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients
that a user has and suggests a recipe they could make with
some or all of those ingredients. Use celsius and kg/g please.
Format your response in markdown to make it easier
to render to a web page.
`;

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getRecipeFromAI(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const msg = await anthropic.completions.create({
      model: "claude-2",
      max_tokens_to_sample: 1024,
      prompt: `${SYSTEM_PROMPT}\n\nHuman: I have ${ingredientsString}. Please give me a recipe you'd recommend I make!\n\nAssistant:`,
    });


    return msg.completion;
  } catch (error) {
    console.error("Error generating recipe:", error);
    return "Sorry, I couldn't generate a recipe. Please try again!";
  }
}
