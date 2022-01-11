const { MessageEmbed } = require("discord.js");
const { MessageButton } =require("discord-buttons")

module.exports = {
	name: 'support',
    aliases:["contact"],
	
	run: async (client, message, args) => {
		message.channel.send(new MessageEmbed()
			.setDescription('❤ ***Thanks for submiting a support ticket. Our team will try to contact you through your dms soon so plese make sure to keep your dms open.***')
            .setFooter("IF NO REPLY WITHIN 4-5 DAYS YOU CAN JOIN OUR SUPPORT SERVER FOR HELP"), new MessageButton()
            .setStyle('url')
            .setURL('https://discord.gg/MQPfsQ4WQF')
            .setLabel('Support Server')
            .setEmoji('🙂')
		);
		const content =new MessageEmbed()
        .setDescription( `**${message.author.tag}** (${
			message.author.id
		}) \n~~--------------------------------~~\n***SUBMITED A SUPPORT TICKET***\n~~--------------------------------~~\nOn the server: **${
			message.guild.name
		}**\nServer ID: **${message.guild.id}**`)
        

		client.channels.cache.get("918546352282148924").send(content);
	}
};