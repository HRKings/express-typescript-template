import { Router } from 'express';
import getEmojisFromSomewhere from '@/services/EmojiService';

const router = Router();

router.get('/', (_, response) => {
  const emojis = getEmojisFromSomewhere();

  response.json(emojis);
});

export default router;
