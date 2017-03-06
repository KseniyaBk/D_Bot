const MainChat = require('./the_bot');

var command = '';
var msgList;


function getOrCreateChat(bot, chat) {
  const mainchat = new MainChat(bot, chat);
  return mainchat;
}

function divideCommand(userMsg){
  var re =/^(\S+)\s+/;
  msgList = userMsg.split(re);

  if (msgList.length >2) {
    msgList.shift();
  }
  return msgList;
}

module.exports = {
  reactOnMessage: function reactOnMessage(bot, msg) {

    //create new bot
    let mainchat = getOrCreateChat(bot, msg.chat);

    divideCommand(msg.text);

    //List of commands
    switch (msgList[0]) {
      case '/test1':
          mainchat.create();
          break;

        case '/test2': //this command + text
          if (msgList[1]) {
            console.log(msgList[1]);
          }else {
            console.log('забыли написать текст');
          }
          break;

      default:

      }
}
};
