const discord  =  require("discord.js")
const {MessageButton} = require("discord-buttons")
module.exports = {
  name: "invite",
  aliases: ["inv"],
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => {
    
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("INVITE ME",client.user.displayAvatarURL())
.setDescription(`CLICK ON THE BUTTON TO INVITE ME
`)
message.channel.send(embed,new MessageButton()
  .setStyle('url')
  .setLabel('Invite Me')
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=139719991104&scope=bot%20applications.commands`)
  .setEmoji("875351618953052161"))


}}