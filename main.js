const Discord = require('discord.js');

const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
  console.log('Ready!');

client.user.setActivity('i am not working yet', { type: 'PLAYING' });

});



  client.on("message", async message => {
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if(command === "say") {
if(!message.member.roles.some(r=>["Assisting Coder"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to say something! You need to be null or higher!");
    
    const sayMessage = args.join(" ");
    
    message.delete().catch(O_o=>{}); 
    
    message.channel.send(sayMessage);
  }


  if(command === "clear") {
  if(!message.member.roles.some(r=>["null", "null"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to clear the chat! You need to be null or higher! <#446679015999406081>");

    
    const deleteCount = parseInt(args[0], 10);
    
   
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(process.env.BOT_TOKEN);
