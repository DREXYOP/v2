const {MessageEmbed} = require("discord.js")
module.exports = {
 name : "guildCreate",
 async execute (client, guild)  { 

let embed = new MessageEmbed()

.setTitle(`Thanks for adding me in your  server ☺`)
 .setColor("FF0000")
 

    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send(embed).catch(err => {})


  const ID = "900783625858060348";
  
  const embed1 = new MessageEmbed()
    .setTitle("New Server Joined!")
    
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Members:`, `${guild.memberCount}`)
    .addField(`owner`,`${guild.owner.tag}`)
    
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`My new Server Count - ${client.guilds.cache.size}`);

client.channels.cache.get(client.config.log).send(embed1)
}
}