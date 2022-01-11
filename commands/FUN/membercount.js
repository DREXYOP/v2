const discord = require("discord.js");

module.exports = {
    
        name: "membercount",
        description: "Show members in the servers",
        usage: "membercount",
        aliases: ["membercount","mc"],
    
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setAuthor(
    `YOUR SERVER MEMBERCOUNT`)
    .setDescription(`${message.guild.memberCount} MEMBERS  `)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.reply(embed)
  }
}