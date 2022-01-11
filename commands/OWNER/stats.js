//client.guilds.cache.size
const discord = require('discord.js');

module.exports = {
  name: 'stats',
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  description: 'stats',
  category: 'Info',
  aliases: ['stat'],
  run: async (client, message, args) => {
    
    if(!client.config.owner.includes(message.author.id)) 
    {
      message.channel.send("\`\`\`YOU ARE NOT ALLOWED TO USE THIS COMMAND\`\`\`")
    }
    else{
    message.channel.send(`counting.......`).then(m => {
      
     
      
      let embed = new discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(`MY STATS`,message.author.displayAvatarURL())
    
    .setDescription(`**SERVER COUNT: ${client.guilds.cache.size}**\n
    **USER COUNT: ${message.client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}**\n
    **EVAL ACCESS: ${client.config.owner.map(x => client.users.cache.get(x).username).join('\n')}** \n
    **Bot Uptime: ${require('pretty-ms')(client.uptime)}**`)
      
      m.edit('', embed);
    })
  }
}
};