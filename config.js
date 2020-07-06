const config = {
  token: process.env.TOKEN,
  prefix: "%",
  admins: [
    "542058542853521461",
    "379784651792711700",
    "571283749652660225",
    "260668078369538048",
    "295978095129657355"
  ],
  dbUrl:
    "mongodb+srv://lutu_name:01234@cluster0-modsa.azure.mongodb.net/test?w=majority",
  patreons: [379784651792711700],
  supporters: [379784651792711700],

  dashboard: {
    oauthSecret: "9A6qGfqWg_thWktKsOzg7AInprdaj0su",
    callbackURL: "https://lutu.botcord.site/callback", // add this to callback urls in your application's OAuth tab
    sessionSecret: "ohmulol12445$@%#%#fcdshfuiwedfkh",
    domain: "lutu.botcord.site",
    port: 8080
  },

  /* Channels */
  appealEmbedChannel: "650485670275579922",
  banListLogChannel: "641453731459760148",
  reportRejectedEmbedChannel: "650485564193112084",
  reportApprovedEmbedChannel: "650485581981417475",
  newReportEmbed: "650485542777257995",
  guildLogChannel: "650486057875406878",
  commandLogChannel: "650485618995888131",
  errorChannel: "650485698041872396",

  permLevels: [
    { level: 0, name: "User", check: () => true },

    {
      level: 2,
      name: "Moderator",
      check: message => {
        try {
          if (
            message.member.hasPermission("MANAGE_MESSAGES") ||
            message.member.hasPermission("MANAGE_GUILD") ||
            message.member.roles.get(message.guild.settings.modRole) !==
              undefined
          ) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }
    },

    {
      level: 3,
      name: "Administrator",
      check: message => {
        try {
          if (
            message.member.hasPermission("ADMINISTRATOR") ||
            message.member.roles.get(message.guild.settings.adminRole) !==
              undefined
          ) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }
    },

    {
      level: 4,
      name: "Server Owner",
      check: message => {
        if (message.channel.type === "text" && message.guild.ownerID) {
          if (message.guild.ownerID === message.author.id) return true;
        } else {
          return false;
        }
      }
    },

    {
      level: 9,
      name: "Bot Admin",
      check: message => config.admins.includes(message.author.id)
    },

    {
      level: 10,
      name: "Bot Owner",
      check: message => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
