const { Client, Message, MessageEmbed } = require ("discord.js");
const glob = require("glob");
module.exports = {
name: "reload",

run: async (client , message, args) => {
 if(!client.config.owner.includes(message.author.id)) {
      return message.channel.send(`\`\`\`YOU ARE NOT ALLOWED TO USE IT\`\`\``);
    }

await client.commands.sweep(() => true)
glob(`${__dirname}/../**/*.js` , async (err, filePaths) => {
    if (err) return console.log(err);
    filePaths.forEach((file) => {
 delete require.cache[require.resolve(file)];

const pull = require(file);
if(pull.name) {
     message.channel.send(new MessageEmbed()
     .setDescription(`Reloaded ${pull.name} (cmd)`));
    console.log(`Reloaded ${pull.name} (cmd)`);
    client.commands.set(pull.name, pull);

}
if(pull.aliases && Array.isArray(pull.aliases)) {
    pull.aliases.forEach((alias) => {
        
    client.aliases.set(alias, pull.name);
    });
}

    });
   
});
message.channel.send(`\`Reloaded All Commands Sucessfuly\``)
},
};