const MainChat = require('./the_bot');

var text = '';
var command = '';


function getOrCreateChat(bot, chat) {
  const mainchat = new MainChat(bot, chat);
  return mainchat;
}



module.exports = {
  reactOnMessage: function reactOnMessage(bot, msg) {

    //create new bot
    let mainchat = getOrCreateChat(bot, msg.chat);

    //Split messages for command and text
    command = msg.text.split(' ')[0];
    text = msg.text.split(' ')[1];

    //List of commands
    switch (command) {
      case '/test1':
        console.log('Super_test1' + command);
        mainchat.create();
        break;

        case '/test2': //this command + text
          if (!text) {
            console.log('no text');
          }else {
            console.log('Super_test2' + text);
          }
          break;

      default:

      }
}
};
