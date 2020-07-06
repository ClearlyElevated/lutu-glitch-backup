const Discord = require("discord.js"); // eslint-disable-line no-unused-vars
const Command = require("../base/Command.js");

class Info extends Command {
  constructor(client) {
    super(client, {
      name: "info",
      description: "See information About Lutu",
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

  async run(message, args, level, reply) {
    // eslint-disable-line no-unused-vars
    const infoEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setTitle("`Lutu's Information`")
      .setDescription(`I'm lutu, one of best moderation bots out there, and the only one you need for your server, easy management tons of features and even new ones every week. I have easy to use built-in AutoMod and many more features to enhance security in your server.

---------------------------------------------

- **Get in touch**:
Mention bot or type \`${
      message.guild ? message.guild.settings.prefix : "?"
    }help\` to get a list of commands.
Type \`${
      message.guild ? message.guild.settings.prefix : "?"
    }invite\` to join support server or invite bot.

---------------------------------------------

- **Features**:
• **Lockdown** Features
• **Automoderator** (Anti-NSFW), (Anti-SPAM), AND MORE!
• **Join/Auto Role** __(Beta Stage)__
• **Server/User** Tools
• [Web Dashboard](https://lutu.botcord.site/)
• [Prevent Mallicious Users](https://lutu.botcord.site/report)
• [Easy Setup!](https://lutu.botcord.site/commands)

- **Technologies Used**:
[Discord.Js - Discord Client v12.0.0-master](https://discord.js.org/#/docs/main/master/general/welcome)
[MongoDB - Database (Mongoose v5.4.19)](https://mongodb.com/)
[Express - Dashboard v4.16.4](https://expressjs.com/)
[Sightengine - Image Evaluator v1.3.1](https://sightengine.com/)
[Discord Bot List Api - DBL Webhooks v2.3.0](https://discordbots.org/api/docs)

---------------------------------------------

- **__Devolopment Team__**

- **ClearyElevated - __Founder__**

---------------------------------------------

- **__Staff Team__**:

- ItzSomone - **Bot Admin**
- DeathHound - **Bot Admin**

---------------------------------------------

- **__Dashboard Links:__**

[lutu.botcord.site](https://lutu.botcord.site) - Active
[lutu.discordjs.services](https://lutu.discordjs.services) - Inactive
[lutu.dev](https://www.lutu.dev) - Inactive 
[lutu.tk](https://lutu.tk) - Inactive

---------------------------------------------

- **__Advertising Links:__**

[Discord House](https://discordjs.services)

`);
    reply(infoEmbed);
  }
}

module.exports = Info;
