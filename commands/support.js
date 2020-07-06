const Discord = require ("discord.js"); // eslint-disable-line no-unused-vars
const Command = require("../base/Command.js");

class Support extends Command {
  constructor (client) {
    super(client, {
      name: "support",
      description: "Get a link to Lutu's Support server (Lutu's House).",
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
      .setTitle("`Support Server!`")
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setDescription("- ***__Instant Invite link:__ https://discord.gg/btkRXzn \nThis link will redirect you to Lutu's Support Server. There you can ask for assistance, report a bug, suggest new features or improvements to existing ones, or just to hang out with our friendly members. \r\nYou will also receive announcements and status updates, which are a necessity to keep yourself up to date, Secondly you can visit the website to see any urgent announcments/alerts & manage your server hassle free!***")
      .setColor("ORANGE")
      .setTimestamp();
    reply(inviteEmbed);
  }
}

module.exports = Support;
