const discord  =  require("discord.js")
const {MessageButton} = require('discord-buttons')

const embed = new discord.MessageEmbed()
module.exports = {
  name: "help",
  aliases: ["hp","h"],
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => { 
    if (args[0] && args[0].length > 0) {
      
      const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));
      if (!cmd) {
        return message.reply(`No command was found for name :- \`${args[0].toLowerCase()}\``);
      }
      if (cmd.name) embed.addField("**Command name**", `\`${cmd.name}\``);
      if (cmd.name) embed.setTitle(`Detailed Information about:\`${cmd.name}\``);
      if (cmd.description) embed.addField("**Description**", `\`${cmd.description}\``);
      if (cmd.aliases) embed.addField("**Aliases**", `\`${cmd.aliases.map((a) => `${a}`).join("`, `")}\``);
      if (cmd.cooldown) embed.addField("**Cooldown**", `\`${cmd.cooldown} Seconds\``);
      else embed.addField("**Cooldown**", `\`no cooldown\``);
      if (cmd.usage) {
        embed.addField("**Usage**", `\`${client.config.prefix}${cmd.usage}\``);
        embed.setFooter("Syntax: <> = required, [] = optional");
      }
      return message.channel.send(embed);}
      else { 
    
    embed.setColor("GREEN")
      .setAuthor("💗💗 HELP PANNEL 💗💗")
embed .setDescription(`

**Music**
\`clear,join,leave,loop,move,nowplaying,pause,play,previous,queue,remove,resume,search,skip,seek,stop,volume\`

**Filters**
\`bass,lightbass,bassboost,earrape,nightcore,pitch,pop,reset,soft,speed,vaporwave\`

**Info**
\`userinfo,about,uptime,ping,nightmaredevs\`

**Extra**
\`prefix,avatar,invite,24/7,bugreport,support\`


`)


embed.setFooter("FOR ANY PROBLEM FEEL FREE TO CREATE A SUPPORT TICKET BY USING THE SUPPORT COMMAND")
 message.channel.send(embed,new MessageButton()
  .setStyle('url')
  .setLabel('Invite Me')
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=139719991104&scope=bot%20applications.commands`)
  .setEmoji("875351618953052161"))
  }
 
  }
}
