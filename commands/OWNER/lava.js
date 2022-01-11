const discord = require('discord.js');
const os = require("os")
module.exports = {
  name: 'lavalink',
  aliases: ["lava","node"],
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
  description: 'The ping Command',
  category: 'Info',
  
  run: async (client, message, args) => {
      if(!client.config.owner.includes(message.author.id)) return;
     
  const msg = await message.channel.send(`Getting lavalink stats...`);

    var  {
            memory,
            cpu,
            uptime,
            frameStats,
            playingPlayers,
            players,
            name,
        } = client.manager.nodes.first().stats;

        const allocated = Math.floor(memory.allocated / 1024 / 1024);
        const used = Math.floor(memory.used / 1024 / 1024);
        const free = Math.floor(memory.free / 1024 / 1024);
        const reservable = Math.floor(memory.reservable / 1024 / 1024);

        const systemLoad = (cpu.systemLoad * 100).toFixed(2);
        const lavalinkLoad = (cpu.lavalinkLoad * 100).toFixed(2);
        

     
        const embed = new discord.MessageEmbed()
            .setAuthor('Lavalink Statistics')
            .setColor("FF0000")
            .setThumbnail("https://images-ext-1.discordapp.net/external/-d8qJoxWqEKrIk_omt2p-xnlp1z0EVq58YxkpuS3fc0/%3Fv%3D1%26size%3D64/https/cdn.discordapp.com/emojis/879269590855737354.png")
            
            .setDescription(`\`\`\`Playing Players/Players\n\n${playingPlayers} playing / ${players} players\n\nMemory\n\nAllocated: ${allocated} MB\nUsed: ${used} MB\nFree: ${free} MB\nReservable: ${reservable} MB\n\nCPU\n\nCores: ${cpu.cores}\nSystem Load: ${systemLoad}%\nLavalink Load: ${lavalinkLoad}% \nnode-name: node-01\`\`\``)
            
         
            .setTimestamp(Date.now());


        if (frameStats) {
            const { sent, deficit, nulled } = frameStats;
            embed.addField('Frame Stats', `\`\`\`Sent: ${sent}\nDeficit: ${deficit}\nNulled: ${nulled}\`\`\``);
        }
     
        return msg.edit('', embed);
    }

   }
/*\<@725985882749927515>/<@853157136992829470>/<@704620271553740823>/<@791897835074617355>/<@690170684873375803>/<@820199993452265472>/<@262641387642552321>/<@895532817600110652>/<@761933968978739241>/<@262641387642552321> /<@722714559210717215>\<@550298935286038548>\ <@789081639804207115>\<@852601086836736040>\<@902780594256244738>\<@837293106436243456> \<@301848138405117963>\ <@421746997561786372>\  <@703616714721460334> /<@910919398594846781>/  <@787931869039689798>**/