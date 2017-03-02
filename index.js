const TelegramBot = require('node-telegram-bot-api');
const botMessagesLogger = require('./lib/bot-messages-logger');
const commandInterface = require('./lib/command_interface');

//NOTE: You should create CONFIG file
const config = require('./CONFIG.json');
const BOT_API_TOKEN = config.bot_api_key;

const bot = new TelegramBot(BOT_API_TOKEN, {polling: true});

console.log('Authorizing and initializing Bot...');

//Get BOT info
bot.getMe()
  .then(me => {
    console.log('Bot has been successfully authorized. Name is', me.first_name);
    botMessagesLogger(bot);
  })
  .then(checkMessage => {
    bot.on('text', msg => commandInterface.reactOnMessage(bot, msg));
  });
