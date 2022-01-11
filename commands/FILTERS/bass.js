const { MessageEmbed} = require("discord.js")
const delay = require('delay');

module.exports = {
  name:"bass",

   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
  run: async(client,message,args) => {
    
   
const player = message.client.manager.players.get(message.guild.id)
  
    
     if (!player) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(" There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription("Please connect to a channel")
  message.channel.send(embed)
  }

   if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("428CCF")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }

if (!args[0]) {

player.setEQ([
  {
    band: 0,
    gain: 0.6
 },
 {
    band: 1,
    gain: -0.67
 },
 {
    band: 2,
    gain: 0.67
 },
 {
    band: 3,
    gain: 0
 },
 {
    band: 4,
    gain: -0.5
 },
 {
    band: 5,
    gain: 0.15
 },
 {
    band: 6,
    gain: 0.45
 },
 {
    band: 7,
    gain: 0.23
 },
 {
    band: 8,
    gain: 0.35
 },
 {
    band: 9,
    gain: 0.70,
 },
 {
   band: 10,
   gain: 0.30,
 },
 {
   band: 11,
   gain: -0.22
 },
 {
   band:12,
   gain:-0.75,
 },
 {
   band:13,
   gain:0.8,
 },

        ]);       
        const msg = await message.channel.send(`Turning on **bass**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned on **bass**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
		}

		if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		  player.setEQ(Array(13).fill(0).map((n, i) => ({
            band: i,
            gain: 0
        })));
		player.clearEffects()
		const msg = await message.channel.send(`Turning off **bass**.`);
			const embed = new MessageEmbed()
				.setDescription('Turned off **bass**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
		}

	}
};