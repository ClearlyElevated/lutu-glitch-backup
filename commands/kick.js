const Discord = require ("discord.js"); // eslint-disable-line no-unused-vars
const Command = require("../base/Command.js");
const logHandler = require("../handlers/serverLogger.js");

class Kick extends Command {
  constructor (client) {
    super(client, {
      name: "kick",
      description: "Kicks A Specific Discord User From Server",
      category: "Moderation",
      usage: "<user> [reason]",
      enabled: true,
      guildOnly: true,
      aliases: [],
      permLevel: "Moderator",
      cooldown: 5,
      args: true
    });
  }

  async run (message, args, level, reply) { // eslint-disable-line no-unused-vars
    const user = message.mentions.members.first() || message.guild.members.get(args[0]);
    let reason = args.slice(1).join(" ");
    if (!user) return reply("<a:aRedTick:584866618039861249> Please specify a user to kick.");
    if (!reason) reason = "None Provided";

    if (user.id === message.author.id) return reply("<a:aRedTick:584866618039861249> I'm so sorry! I can't allow self-harm.");
    if (!user.kickable) return reply("<a:aRedTick:584866618039861249> Uh! Oh! I can't kick this user.");

    try {
      await user.kick(reason);
    } catch (e) {
      return message.channel.send(`<a:aRedTick:584866618039861249> Snap, couldn't kick that user. Reason: ${e}.`);
    }
    if (message.guild.settings.moderationLogs.toLowerCase() === "on") {
      const Logger = new logHandler({ client: this.client, case: "kickAdd", guild: message.guild.id, member: user.user, moderator: message.author, reason: reason });
      Logger.send().then(t => Logger.kill());
    }

    if (message.guild.settings.moderationLogChannel !== "") {
      const Logger2 = new logHandler({ client: this.client, case: "kickAdd", guild: message.guild.id, member: user.user, moderator: message.author, reason: reason, modOption: true });
      Logger2.send().then(t => Logger2.kill());
    }

    return reply(`<a:aGreenTick:584866617780076576> Successfully kicked **${user.user.tag}** from this server.`);
  }
}

module.exports = Kick;
