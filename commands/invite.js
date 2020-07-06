const Discord = require ("discord.js"); // eslint-disable-line no-unused-vars
const Command = require("../base/Command.js");

class Invite extends Command {
  constructor (client) {
    super(client, {
      name: "invite",
      description: "Get Lutu's invitation link.",
      category: "General",
      usage: "",
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: "User",
      cooldown: 5,
      args: false
    });
  }

  async run (message, args, level, reply) { // eslint-disable-line no-unused-vars
    const inviteEmbed = new Discord.MessageEmbed()
      .setTitle("Invite Me! <a:aGreenTick:584866617780076576>")
      .setDescription(`Lutu - All in one moderation bot.
- [Lutu's Invite](https://discordapp.com/api/oauth2/authorize?client_id=584279261368811520&permissions=0&redirect_uri=https%3A%2F%2Flutu.botccord.site%2Fcallback&response_type=code&scope=bot%20guilds%20connections%20guilds.join%20email) **__This link contains Administrator permission which are neccesary for the bot to work properly. We highly suggest you do not change default permissions.__**

- [Support Server Invite Link](https://discord.gg/VuQhEpV)
 This link redirects you to the Lutu's Support Server where you can ask for assistance, report bugs or even give us suggestions on what we should add and/or improve.
`)
      .setColor("RED")
      .setTimestamp();
    message.channel.send(inviteEmbed);
  }
}

module.exports = Invite;
