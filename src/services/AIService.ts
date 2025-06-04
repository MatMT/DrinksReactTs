import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('deepseek/deepseek-r1-0528:free'),
            prompt,
            system: 'You are a friendly professional bartender, add emojis to tittles and items',
            temperature: 1
        });

        return result.textStream;
    }
}