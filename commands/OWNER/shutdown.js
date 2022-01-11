
const Discord = require("discord.js");
module.exports = {
  name: "shutdown",
  category: "owner",
  run: async (client, message, args) => {
    


    if(!client.config.owner.includes(message.author.id)) {
      return message.channel.send(`\`\`\`YOU ARE NOT ALLOWED TO USE IT\`\`\``);
    }
    const embed = new Discord.MessageEmbed()
      .setTitle("Confirmation!")
      .setDescription("Are You Sure You Want To Shutdown The Bot?")
      .setFooter("React!")
      .setColor("RANDOM");
    const msg = await message.channel.send(embed);
    const cancel = new Discord.MessageEmbed()
      .setTitle("Cancelled!")
      .setDescription("Command Cancelled.")
      .setFooter(`Restart Command`)
      .setColor("#FF0000");

    const yes = new Discord.MessageEmbed()
      .setTitle("Shutingdown Bot")
      .setDescription(
        "The Bot is now restarting and should be ready in 1 - 15 seconds"
      )
      .setFooter(`shutingdown...`)
      .setColor("GREEN");
    await msg.react("✅");
    await msg.react("❌");
    const filter = (reaction, user) =>
      (reaction.emoji.name === "❌" || reaction.emoji.name === "✅") &&
      user.id === message.author.id;
    msg.awaitReactions(filter, { max: 1 }).then(collected => {
      collected.map(emoji => {
        switch (emoji._emoji.name) {
          case "✅":
            msg.edit(yes).then(() => client.destroy(0));
            break;
          case "❌":
            msg.edit(cancel);
            break;
        }
      });
    });
  }
};
