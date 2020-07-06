const Discord = require("discord.js"); // eslint-disable-line no-unused-vars
const moment = require("moment");
const Settings = require("../models/settings.js");

class Logger {
  constructor(options) {
    this.options = options;
  }

  async send() {
    const guildSettings = await Settings.findOne({
      guildID: this.options.guild
    });
    if (!guildSettings) return;

    const timestamp = `${moment().format("YYYY/MM/DD HH:mm:ss")} GMT+0`;
    var toSend = new Discord.MessageEmbed();
    toSend.setColor("#ff0000");
    const event = this.options.case;

    if (event === "banAdd") {
      toSend.setAuthor(
        this.options.member.tag,
        this.options.member.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        ` <:dblMod:597110377364586497> Ban Added\n**Target**: ${this.options.member.tag} (ID: ${this.options.member.id})\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Time**: ${timestamp}`
      );
    } else if (event === "muteAdd") {
      toSend.setAuthor(
        this.options.member.tag,
        this.options.member.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `🤐 Mute Added\n**Target**: ${this.options.member.tag} (ID: ${this.options.member.id})\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Duration**: ${this.options.duration}\n**Time**: ${timestamp}`
      );
    } else if (event === "kickAdd") {
      toSend.setAuthor(
        this.options.member.tag,
        this.options.member.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `<:kick:615010721758969866> Kick Added\n**Target**: ${this.options.member.tag} (ID: ${this.options.member.id})\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Time**: ${timestamp}`
      );
    } else if (event === "lockdownOn") {
      toSend.setAuthor(
        this.options.moderator.tag,
        this.options.moderator.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `<a:403:632789975871520798> Lockdown On\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Time**: ${timestamp}`
      );
    } else if (event === "lockitOn") {
      toSend.setAuthor(
        this.options.moderator.tag,
        this.options.moderator.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `<a:403:632789975871520798> Lockit On\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Channel**: ${this.options.channel} (ID: ${this.options.channel.id})\n**Time**: ${timestamp}`
      );
    } else if (event === "clearMessages") {
      let extra = " ";
      if (this.options.member) {
        let extra = `\n**Target:** ${this.options.member.tag} (ID: ${this.options.member.id})`;
      }
      toSend.setAuthor(
        this.options.moderator.tag,
        this.options.moderator.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `<:trash:615010025047457822> Messages Cleared${extra}\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Channel**: ${this.options.channel} (ID: ${this.options.channel.id})\n**Amount**: ${this.options.amount}\n**Time**: ${timestamp}`
      );
    } else if (event === "warnAdd") {
      toSend.setAuthor(
        this.options.member.tag,
        this.options.member.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `⛔ Infraction Add\n**Target**: ${this.options.member.tag} (ID: ${this.options.member.id})\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Amount**: ${this.options.amount}\n**Time**: ${timestamp}`
      );
    } else if (event === "unban") {
      toSend.setAuthor(
        this.options.member.tag,
        this.options.member.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `<:appeal:617994166613442571> Ban Removed (Unbanned)\n**Target**: ${this.options.member.tag} (ID: ${this.options.member.id})\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Time**: ${timestamp}`
      );
    } else if (event === "muteRemove") {
      toSend.setAuthor(
        this.options.member.tag,
        this.options.member.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `🔊 Mute Removed (Unmuted)\n**Target**: ${this.options.member.tag} (ID: ${this.options.member.id})\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Time**: ${timestamp}`
      );
    } else if (event === "lockdownOff") {
      toSend.setAuthor(
        this.options.moderator.tag,
        this.options.moderator.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `Lockdown Off\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Time**: ${timestamp}`
      );
    } else if (event === "lockitOff") {
      toSend.setAuthor(
        this.options.moderator.tag,
        this.options.moderator.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `<:lockedChannel:556124269265027162> Lockit Off\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Channel**: ${this.options.channel} (ID: ${this.options.channel.id})\n**Time**: ${timestamp}`
      );
    } else if (event === "automod") {
      toSend.setAuthor(
        this.options.client.user.tag,
        this.options.client.user.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `🤖 Automod Warning\n**Target**: ${this.options.member.tag} (ID: ${this.options.member.id})\n**Reason**: ${this.options.reason}\n**Time**: ${timestamp}`
      );
    } else if (event === "pardon") {
      toSend.setAuthor(
        this.options.client.user.tag,
        this.options.client.user.displayAvatarURL({ size: 512 })
      );
      toSend.setDescription(
        `🏳 Infractions Remove (Pradoning)\n**Target**: ${this.options.member.tag} (ID: ${this.options.member.id})\n**Moderator**: ${this.options.moderator.tag} (ID: ${this.options.moderator.id})\n**Reason**: ${this.options.reason}\n**Amount**: ${this.options.amount}\n**Time**: ${timestamp}`
      );
    }

    const logChannel = this.options.client.channels.get(
      guildSettings.logsChannel
    );
    if (logChannel) logChannel.send(toSend);
  }

  kill() {
    this.options = {};
  }
}

module.exports = Logger;
