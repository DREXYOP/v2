//client.guilds.cache.map(g=>g.name).join('\n')
const Discord = require("discord.js");
const { MessageButton,MessageActionRow } = require('discord-buttons') 
module.exports = {
  name: "serverlist",
  aliases: ["sl"],
  run: async (client, message, args) => {
    
 if(!client.config.owner.includes(message.author.id)) {
      return message.channel.send(`\`\`\`YOU CANNOT USE THIS COMMAND\`\`\``);
    }
      
      
      
       
    const serverlist = new Discord.MessageEmbed()
    .setAuthor(`MY Server List`,message.author.displayAvatarURL())
      .setDescription(`\`${client.guilds.cache.map(g=>g.name).join('\n')}\` `)
      .setFooter(`Total Servers = ${client.guilds.cache.size}`)
    .setColor("BLUE")
    .setTimestamp();

    
    const button = new MessageButton()
  .setStyle('grey')
  .setID('no_bitch')
  .setLabel('    ◀    '); 
const button2 = new MessageButton()
  .setStyle('grey')
  .setID('no_bitch2')
  .setLabel('    ⛔    ')
  ; 
    
const button3 = new MessageButton()
  .setStyle('grey')
  .setID('no_bitch3')
  .setLabel('    ▶    '); 


    
    
      
    
      const actions = new MessageActionRow()
            .addComponent(button)
            .addComponent(button2)
            .addComponent(button3);

message.channel.send({ embed:serverlist,component: actions }); 
                            
      }}
