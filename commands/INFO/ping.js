const discord = require('discord.js');

module.exports = {
  name: 'ping',
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  description: 'The ping Command',
  category: 'Info',
  aliases: ['pong'],
  run: async (client, message, args) => {
    
    message.channel.send(`Pinging...`).then(m => {
      
      let ping = m.createdTimestamp - message.createdTimestamp;
      
      let embed = new discord.MessageEmbed().setAuthor(`| my ping`,message.author.displayAvatarURL())
      .setDescription(`BOT:-\n\`\`\`js\nGateway Ping : ${client.ws.ping}ms\nREST Ping    : ${ping}ms\`\`\``,
   )
      
      m.edit('', embed);
    })
  }
}