import { bot } from "../bot"
import {config} from 'dotenv'

config()

export default eventHandler(() => {
  bot.telegram.sendMessage(process.env.CHAT_ID, 'asdasdas')
  return { nitro: 'asdasdas' }
})
