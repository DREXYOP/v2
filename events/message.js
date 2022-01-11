
let cooldown = {}
const discord  = require("discord.js")
const config = require("../config.js");
const {  default_prefix } =require("../config.js");
module.exports = {
  name: "message",
  async execute(client,message) {
    
    let prefix = await client.db.get(`prefix_${message.guild.id}`);
    if (prefix === null) prefix = default_prefix;

    if (message.content === `${prefix}welcome`) {
    client.emit("guildMemberAdd", message.member);
    }  
    
    
    
const merakomention = new RegExp(`^<@!?${client.user.id}>( |)$`);

const color = message.guild.me.roles.highest.color;

if (message.content.match(merakomention)) {
      const embed =new discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`HEY\nMY NANE IS ${client.user.username}`)
      .setDescription(`
My prefix is \`${prefix}\` \n YOU CAN CHANGE IT BY USING \`${prefix}prefix your prefix\`
      `)
      message.reply(embed)
  };


const prefixMention = new RegExp(`^<@!?${client.user.id}>`);
const nameprefix = new RegExp(`${client.config.name}`);
  const reaperz = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : prefix;

if (message.author.bot) return;
  if (!message.guild) return;
  
  if (!message.content.startsWith(reaperz)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(reaperz.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  
  let command = client.commands.get(cmd);
  
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  
  
  if (!command) return;

  //-------------------------------------------- P E R M I S S I O N -------------------------------------------



  if (command.botPermission) {
    let neededPerms = []

    command.botPermission.forEach(p => {
      if (!message.guild.me.hasPermission(p)) neededPerms.push("`" + p + "`")
    })

    if (neededPerms.length) return message.channel.send(` I need ${neededPerms.join(", ")} permission(s) to execute the command!`)
  } 
   if (command.userPermission) {
    let neededPerms = []


    command.userPermission.forEach(p => {
      if (!message.member.hasPermission(p)) neededPerms.push("`" + p + "`")
    })

    if (neededPerms.length) return message.channel.send(`You need ${neededPerms.join(", ")} permission(s) to run the command!`)
  }

  if(command.vcOnly){
    const { channel } = message.member.voice;
  

 if (!channel) {
    let embed = new discord.MessageEmbed()
      .setColor("YELLOW")
      .setAuthor(`|   You aren't connected to a voice channel.`,message.author.displayAvatarURL())
  return message.channel.send(embed)
  }
  }

  // ---------------------------------------------O W N E R ----------------------------------------------------------

  if (command.ownerOnly) {
    if (message.author.id !== client.config.owner) return message.channel.send("This command can only be use by owner")
}

  let uCooldown = cooldown[message.author.id];

  if (!uCooldown) {
    cooldown[message.author.id] = {}
    uCooldown = cooldown[message.author.id]
  }

  let time = uCooldown[command.name] || 0

  if (time && (time > Date.now())) return message.channel.send(`You can again use this command in ${Math.ceil((time - Date.now()) / 1000)} second(s)`) 

  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;

  
if(!message.channel.permissionsFor(client.user).has("SEND_MESSAGES")) return;

if(!message.channel.permissionsFor(client.user).has("VEIW_CHANNEL")) return;

if(!message.guild.me.hasPermission("SEND_MESSAGES")) return



  if (command)
  try{
  command.run(client, message, args);
 
}catch(error){
  client.channels.cache.get("900783625858060348").send(error)
  
}

}}