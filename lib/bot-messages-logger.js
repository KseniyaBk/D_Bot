const GREEN = '\033[32m';
const BLUE = '\033[34m';
const RED = '\033[0m';

module.exports = function botMessagesLogger(bot) {
  bot.on('text', msg => {
    console.log(GREEN, '[Message]', BLUE, msg.chat.title || '[PM]', msg.from.username, RED, msg.text);
  });
};
