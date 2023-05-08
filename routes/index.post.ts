import { bot } from "../bot"
import { config } from 'dotenv'

const conf = config()

export default eventHandler(async (event) => {
  const body = await readBody(event)
  bot.telegram.sendMessage(conf.parsed.CHAT_ID, String(body))
  return { nitro: body }
})
