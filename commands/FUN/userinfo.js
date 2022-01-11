const { MessageEmbed } = require('discord.js');
const moment = require("moment");
require('moment-duration-format');

module.exports = {
    
        name: 'profile',
        aliases: ['userinfo'],
        description: 'Shows the Info about the user',
        
    run: async (client, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        let durumm;
        let durum = user.presence.status

        let roles = user.roles.cache.map(x => x).filter(z => z.name !== "@everyone");

        if (roles.length > 100) {
            roles = "There is so much roles to show."
        }

        let safe = message.author.createdTimestamp

       


        if (durum === "online") durumm = `Online `
        if (durum === "offline") durumm = `Offline `
        if (durum === "idle") durumm = `Idle `
        if (durum === "dnd") durumm = `Do not disturb  `

        let lastMessage
        let lastMessageTime
        let nitroBadge = user.user.avatarURL({ dynamic: true })
        let flags = user.user.flags.toArray().join(``)

        if (!flags) {
            flags = "User doesn't have any badge"
        }

        flags = flags.replace("HOUSE_BRAVERY", "• \`HypeSquad Bravery\`")
        flags = flags.replace("EARLY_SUPPORTER", "• <a:nitro:740923343548579890> \`Early Supporter\`")
        flags = flags.replace("EARLY_VERIFIED_DEVELOPER", "•  \`Verified Bot Developer\`")
        flags = flags.replace("HOUSE_BRILLIANCE", "•  \`HypeSquad Brilliance\`")
        flags = flags.replace("HOUSE_BALANCE", "•<a:hypesquadbalance:914754730738216980>\`HypeSquad Balance\`")
        flags = flags.replace("DISCORD_PARTNER", "• \`Partner\`")
        flags = flags.replace("HYPESQUAD_EVENTS", "• \`Hypesquad Event\`")
        flags = flags.replace("DISCORD_CLASSIC", "• \`Discord Classic\`")

        if (nitroBadge.includes("gif")) {
            flags = flags + `\n• <a:nitro:914435678820003900> \`Nitro\``
        }

        let stat = user.presence.activities[0]
        let custom

        if (user.presence.activities.some(r => r.name === "Spotify")) {
            custom = "Listening to Spotify"
        } else if (stat && stat.name !== "Custom Status") {
            custom = stat.name
        } else {
            custom = "Nothing"
        }

        if (user.presence.activities.some(r => r.name !== "Spotify") && stat && stat.state !== null) {
            stat = stat.state
        } else {
            stat = "Nothing"
        }
        
        if (user.lastMessage) {
            lastMessage = user.lastMessage.content
            lastMessageTime = moment(user.lastMessage.createdTimestamp).format('MMMM Do YYYY, H:mm:ss a')
        } else {
            lastMessage = "None"
            lastMessageTime = "None"
        }

        const embeddd = new MessageEmbed()
            .setColor("RED")
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setDescription(`__**User Info**__
         **•** \`ID:\` **${user.id}**
         **•** \`Profile:\` **${user}**
         **•** \`Bot:\` **${user.user.bot ? 'Yes' : 'No'}**
         **•** \`Created At:\` **${moment(user.user.createdAt).format('MMMM Do YYYY, H:mm:ss a')}**
        __**Member Info**__
        **•** \`Nickname:\` **${user.displayName ? user.displayName : 'yok'} **
        **•** \`Joined At:\` **${moment(user.joinedAt).format('MMMM Do YYYY, H:mm:ss a')}**
        **•** \`Activity:\` **${custom}**
        __**Roles:**__
           ${roles}
        __**Messages Info**__
        **•** \`Last Message:\` **${lastMessage}**
        **•** \`Last Message At:\` **${lastMessageTime}**
        __**Badge Information**__
        ${flags} 
    
         `)
            .setThumbnail(user.user.avatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(`requested by ${message.author.username}`)

        message.channel.send(embeddd)

    }
}