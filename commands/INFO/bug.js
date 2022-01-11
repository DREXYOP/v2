const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'bug',
    aliases:["report","bugreport","err","error"],
	
	run: async (client, message, args) => {
		
		if (!args[0])
			return message.channel.send(new MessageEmbed()
				.setDescription("⚠️ Please specify the bug. Example:\n`play isn't working its not playing any song.`"
			));
		if (args[0] === 'bug')
			return message.channel.send(new MessageEmbed()
				.setDescription("Please specify the bug. Example:\n`play isn't working its not playing any song.`"
            ));
		args = args.join(' ');
		message.channel.send(new MessageEmbed()
			.setDescription('❤ Thanks for submitting a bug!. For more help feel free to create a support ticket by ussing the support command.')
		);
		const content =new MessageEmbed()
        .setDescription( `**${message.author.tag}** (${
			message.author.id
		}) \nreported:\n~~--------------------------------~~\nBUG:\n***${args}***\n~~--------------------------------~~\nOn the server: **${
			message.guild.name
		}**\nServer ID: **${message.guild.id}**`);
		client.channels.cache.get("918540542474850305").send(content);
	}
};

