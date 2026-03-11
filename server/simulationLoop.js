import { generateReply } from './dialogueReactAdapter.js';
import { io } from './index.js';

export function startAutoChat(bacteriaList) {
  setInterval(async () => {
    for (const b of bacteriaList) {
      if (b.energy < 0.2) continue;
      const partner = selectPartner(b, bacteriaList);
      if (!partner) continue;

      const prompt = `User: ${b.lastMessage}\nPartner interests: ${partner.interests.join(', ')}\nReply:`;
      const msg = await generateReply(prompt);

      b.energy -= 0.05;
      partner.energy -= 0.03;
      io.emit('chatMessage', { from: b.id, to: partner.id, text: msg });
    }
  }, 5000);
}

function selectPartner(b, list) {
  const candidates = list.filter(x => x.id !== b.id && x.energy > 0.1);
  return candidates[Math.floor(Math.random() * candidates.length)];
}
