const Discord = require("discord.js"); // eslint-disable-line no-unused-vars
const Command = require("../base/Command.js");
const Settings = require("../models/settings.js");

class AntiBad extends Command {
  constructor(client) {
    super(client, {
      name: "antibad",
      description: "Enable/Disable anti-bad words filter.",
      category: "Automod",
      usage: "<on/off/status>",
      enabled: true,
      guildOnly: true,
      aliases: [],
      permLevel: "Administrator",
      cooldown: 5,
      args: true
    });
  }

  async run(message, args, level, reply) {
    // eslint-disable-line no-unused-vars
    Settings.findOne(
      {
        guildID: message.guild.id
      },
      async (err, settings) => {
        if (err) this.client.logger.log(err, "error");

        if (args[0].toLowerCase() === "on") {
          if (settings.antiBad === "on")
            return reply(
              "<a:aRedTick:584866618039861249> Seems like anti-bad words filter its already active."
            );

          settings.antiBad = "on";
          await settings.save().catch(e => this.client.logger.log(e, "error"));
          return reply(
            `<a:aGreenTick:584866617780076576> Anti-word filter has been activated. You can ype \`${settings.prefix}antiBad off\` to deactivate it.`
          );
        } else if (args[0].toLowerCase() === "off") {
          if (settings.antiBad === "off")
            return reply("Seems like anti-word filter is already disabled.");

          settings.antiBad = "off";
          await settings.save().catch(e => this.client.logger.log(e, "error"));
          return reply(
            `<a:aGreenTick:584866617780076576> Anti-bad words filter has been deactivated. You can ype \`${settings.prefix}antiBad on\` to activate it.`
          );
        } else if (args[0].toLowerCase() === "status") {
          var state;

          if (settings.antiBad === "on") state = "activated";
          if (settings.antiBad === "off") state = "deactivated";

          return reply(`Anti-bad words filter its currently **${state}**.`);
        } else {
          return reply(
            "<a:aRedTick:584866618039861249> Options available for this command are `on`, `off`, `status`."
          );
        }
      }
    );
  }
}

module.exports = AntiBad;
