var text = '';
var command = '';


module.exports = {
  reactOnMessage: function reactOnMessage(bot, msg) {

    //Split messages for command and text
    command = msg.text.split(' ')[0]; // 50ml
    text = msg.text.split(' ')[1]; // $100

    //List of commands
    switch (command) {
      case '/test1':
        console.log('Super_test1' + command);
        break;

        case '/test2':
          console.log('Super_test2' + text);
          break;

      default:

      }
}
};
