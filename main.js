
const user = require("./cmds_user.js");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> "
});
rl.log = (msg) => console.log(msg);  // Add log to rl interface
rl.questionP = function (string) {   // Add questionP to rl interface
  return new Promise ( (resolve) => {
    this.question(`  ${string}: `, (answer) => resolve(answer.trim()))
  })
};

rl.prompt();

rl.on('line', async (line) => {
  try{
    let cmd = line.trim()

    if      ('' ===cmd)   {}
    else if ('h' ===cmd)  { user.help(rl);}

    else if (['lu', 'ul', 'u'].includes(cmd)) { await user.list(rl);}
    else if (['cu', 'uc'].includes(cmd))      { await user.create(rl);}
    else if (['ru', 'ur', 'r'].includes(cmd)) { await user.read(rl);}
    else if (['uu'].includes(cmd))            { await user.update(rl);}
    else if (['du', 'ud'].includes(cmd))      { await user.delete(rl);}
    
    else if ('e'===cmd)  { rl.log('Bye!'); process.exit(0);}
    else                 {  rl.log('UNSUPPORTED COMMAND!');
                            user.help(rl);
                         };
    } catch (err) { rl.log(`  ${err}`);}
    finally       { rl.prompt(); }
  });

