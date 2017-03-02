const startCommands = ['/start'];
const ideaCommands = ['/idea'];


module.exports = {
  reactOnMessage: function reactOnMessage(bot, msg) {

  //TODO - change bot name
  //TODO - create anonymus command
    const command = msg.text.replace(/@SkrivTest2bot$/, '');
    let t = msg.text;


      if (['/test'].includes(command)) {
        console.log('InvisibleComand' + t);
      }


      if (['/skip'].includes(command)) {
        console.log('VisibleComand' + t);
      }

    }
  };
