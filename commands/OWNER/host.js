const { MessageEmbed } = require('discord.js');
const os = require('os');

module.exports ={
    name: 'host',
  aliases: ["vps","vpsinfo","hostinfo"],
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
  description: 'The ping Command',
  category: 'Info',

    run: async(client,message) => {
        const totalSeconds = os.uptime();
        const realTotalSecs = Math.floor(totalSeconds % 60);
        const days = Math.floor((totalSeconds % (31536 * 100)) / 86400);
        const hours = Math.floor((totalSeconds / 3600) % 24);
        const mins = Math.floor((totalSeconds / 60) % 60);

        const statsEmbed = new MessageEmbed()
            .setAuthor('MY HOST')
            .setColor("green")
            .addField('Host', `${os.type()} ${os.release()} (${os.arch()})`)
            .addField('CPU', `${os.cpus()[0].model}`)
            .addField('Uptime', `${days} days, ${hours} hours, ${mins} minutes, and ${realTotalSecs} seconds`)
            .addField('RAM', `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`)
            .addField('Memory Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
            .addField('CPU Load', `${(os.loadavg()[1]).toFixed(2)}%`)
            .addField('CPU Cores', `${os.cpus().length}`)
            .setFooter(`Node Version: ${process.version}`)
            .setTimestamp();
        return message.channel.send(statsEmbed);
    }
};