const Discord = require("discord.js");

module.exports = {
  name: "eval",
  aliases: ["el"],
  description: "owner only",
  run: async (client, message, args) => {
    this.client = client
     b
    if(!client.config.owner.includes(message.author.id)) 
    {
    
      const content = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      const result = new Promise(resolve => resolve(eval(content)));

      return result
        .then(output => {
          if (typeof output !== "string") {
            output = require("util").inspect(output, { depth: 0 });
          }
          if (output.includes(client.token)) {
            output = output.replace(
              client.token,
              "NIKAL"
            );
          }
          message.channel.send(output, {
            code: "js"
          });
        })
        .catch(err => {
          err = err.toString();
          if (err.includes(client.token)) {
            err = err.replace(client.token, "BHAG BISI");
          }
          message.channel.send(err, {
            code: "js"
          });
        });
    
}}
};