const discord  =require("discord.js")
const {MessageButton} = require('discord-buttons')
const os = require("os")
const totalSeconds = os.uptime();
const realTotalSecs = Math.floor(totalSeconds % 60);
const days = Math.floor((totalSeconds % (31536 * 100)) / 86400);
const hours = Math.floor((totalSeconds / 3600) % 24);
const mins = Math.floor((totalSeconds / 60) % 60);
module.exports  = {
name: "about",
aliases: ["info","botinfo","stats"], 
botPermission: ["EMBED_LINKS","USE_EXTERNAL_EMOJIS"],
run : async (client,message,args )=> {
  
  
  
  let embed  = new discord.MessageEmbed()
    
   .setColor("GREEN")
 .setAuthor(`ABOUT ME`)
 
    
.addField(`
**| OWNER**`,`**${client.config.owner.map(x => client.users.cache.get(x).tag).join('\n')}**`
)

.addField(`**| TOTAL USERS**`,
`${message.client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}/ ${client.users.cache.size} cached`)

.addField(`**|TOTAL SERVERS**`,
`${client.guilds.cache.size}`)

.addField(`**| PING**`,
`${client.ws.ping}ms`)

.addField(`**| GUILD ID**`,
`${message.guild.id}`)
.addField(`| Node Version`,`${process.versions.node}`)
.addField(`| Lavalink Node Name`,`Node-01`)
.addField('Uptime', `${days} days, ${hours} hours, ${mins} minutes, and ${realTotalSecs} seconds`)
.setThumbnail("https://images-ext-1.discordapp.net/external/D-eQNhdFhLNjJrY7S0OGafctN63kwOOKzQDvI7Mk2p0/https/images-ext-2.discordapp.net/external/LqkyjsMB-ILTGjb_BpiJA-6GNhW8I7T5VrTvupVxqD4/%253Fv%253D1%2526size%253D8p/https/cdn.discordapp.com/emojis/895969329655476224.gif")
.setTimestamp(Date.now());

  
  const support = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.gg/MQPfsQ4WQF')
  .setLabel('Support Server')
  .setEmoji('🙂');


message.channel.send(embed,support)
}}