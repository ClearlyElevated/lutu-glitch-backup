const Discord = require ("discord.js"); // eslint-disable-line no-unused-vars
const Command = require("../base/Command.js");
const Settings = require("../models/settings.js");

class Joinrole extends Command {
  constructor (client) {
    super(client, {
      name: "joinrole",
      description: "Sets a join auto role for your server.",
      category: "Settings",
      usage: "<@role/reset>",
      enabled: true,
      guildOnly: true,
      aliases: [],
      permLevel: "Administrator",
      cooldown: 5,
      args: true
    });
  }

  async run (message, args, level, reply) { // eslint-disable-line no-unused-vars
    Settings.findOne({
      guildID: message.guild.id
    }, async (err, settings) => {
      if (err) this.client.logger.log(err, "error");

      if (args[0].toLowerCase() === "reset") {
        settings.joinrole = "";
        await settings.save().catch(e => this.client.logger.log(e));
        return reply("<a:aGreenTick:584866617780076576> Auto join role has been reset on this server.");
      }

      const role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
      if (!role) return reply("<a:aRedTick:584866618039861249> You must specify a role to be marked as auto join role.");

      const confirmation = await this.client.awaitReply(message, `Are you sure you want to set the join auto role as ${role}? Type \`yes\` to porceed or \`no\` to abort.`);
      if (confirmation === false) return reply("<a:aRedTick:584866618039861249> Confirmation prompt timed out. ");
      if (confirmation.toLowerCase() !== "yes") return reply("<a:alert:616754182162087946> Aborted.");

      settings.joinrole = role.id;
      await settings.save().catch(e => this.client.logger.log(e));
      return reply(`<a:aGreenTick:584866617780076576> Set ${role} as the join auto role for this server.`);
    });
  }
}

module.exports = Joinrole;