const OpenAI= require("openai")
console.log("Hello replit")
const mySecret = process.env['open_ai_key']
console.log(mySecret)



const openai = new OpenAI({
  apiKey: mySecret, // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Who is virat kohli' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices)
}

main();