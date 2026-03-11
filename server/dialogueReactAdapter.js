import fetch from 'node-fetch';

export async function generateReply(prompt) {
  const res = await fetch('http://127.0.0.1:1200/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, max_new_tokens: 64 })
  });
  const json = await res.json();
  return json.generated_text;
}
