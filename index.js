const express = require("express")
const app = express();

app.listen(() => console.log("Server can do it"));

app.get("/", (req, res) => {
  res.send("pedro")
})
app.listen(3000, () => {
  console.log('Im ready Now');
});



const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const ms = require("ms");
const db = require('quick.db');
require("events").EventEmitter.defaultMaxListeners = 50000;
const inlinereply = require('discord-reply');
const disbut = require('discord-buttons');
const probot = require("probot-tax");

//add 
/*
const {Client, Intents, MessageEmbed, User, MessageActionRow, MessageButton, Collection, permissionOverwrites, TextInputComponent, ChannelType, Modal,
Permissions, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder} = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,   
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
}); */









setInterval(() => {
  const channelid = "1326280235330568275";
  const channel = client.channels.cache.get(channelid);
  if (!channel) return;
  channel.join().catch((err) => {
    console.error(err);
  });
}, 1000);

client.on('messageCreate', message => {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات الأخرى

    const channel = message.channel;

    if (channel && channel.messages) {
        const existing = channel.messages.cache.get(message.id);
        if (existing) {
            console.log('Message found in cache:', existing.content);
        } else {
            console.log('Message not found in cache');
        }
    } else {
        console.error('Channel or channel.messages is undefined');
    }

    // مثال للرد على رسالة معينة
    if (message.content === '!hello') {
        message.reply('Hello!');
    }
});


////Bot Status
client.on('ready', () => {
  console.log(`🤠 : ${client.user.username}`);
  client.user.setStatus('dnd');///dnd/online/idle
  let status = [`PD TEAM`];
  setInterval(()=>{
  client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})
///Definitions 
const prefix = "+";///your prefix
const owner = ["1124310141928493126"]///owner id
const supportServer = "https://discord.gg/X3UjwDSCxN" ///server support
//const help_info_color = "#690707"///color in help
const color = "#671ec7"//main color
const moreInfo = `Need more info? use ${prefix}help`
const line = "https://media.discordapp.net/attachments/1326280186559205436/1326289722875838545/DALLE-2025-01-07-21.38.jpg?ex=677ee30f&is=677d918f&hm=14233489a3ad39910268d41b9f62eb12e296a37da0c9caf47a3cce197168007c&=&format=webp&width=947&height=541"///url line link
const صح = "✅";//react
const غلط = "❌";//react

///auto react


client.on("message", async token => {
   ///replace 83838388 with id channel
 
  if (token.channel.id !=1002539463525810276) return;
  if(token.author.id === client.user.id) return;
      token.react("❤️")//react


  
 
  }
  
)

//tax channel

client.on('message', message => {
  let args = message.content
  if (message.author.bot) return;
  if (message.channel.id !== '1144371252077793400') return;
let args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace('b',"000000000000").replace('B',"000000000000")
let tax = Math.floor(args2 * (20) / (19) + (1))
let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
let tax3 = Math.floor(tax2 * (20) / (19) + (1))
let tax4 = Math.floor(tax2 + tax3 + args2)
if (isNaN(args2)) return message.channel.send(`**__Error__**`)
if (args2 < 1) return message.channel.send("**Error**");
if (args2 == 1) return message.channel.send(`> **Please Write a Number Hight to \`1\`**`);


  if (message) {
  message.channel.send(`> **Your Tax : __${probot.taxs(args2)}__**`)
  }
}); 


client.on("message", message => {
  if (message.content == ("ip") || message.content === "ip server" || message.content === "Ip" || message.content === "IP") 
  {

message.lineReply(`
\`\`\`
94.23.168.153:1298
\`\`\`

 `)

  }
})


///line
client.on("message", message => {
  if (message.content == ("line") || message.content === "-") 
  {

message.channel.send(
  new Discord.MessageEmbed()

  .setColor(color)
  .setImage(line)
)
message.delete()

  }
})

//line 
client.on("message", message => {
  if (message.content == ("line") || message.content === `**:moneybag: | ${message.author.username}, has transferred**`) 
  {

message.channel.send(
  new Discord.MessageEmbed()

  .setColor(color)
  .setImage(line)
)
message.delete()

  }
})


///link
client.on("message", message => {
  if (message.content == ("لينك") || message.content === "link") {

message.lineReply(`
> \`-\` **My Link :** https://discord.gg/pd-store

> \`/\` **𝖧𝖺𝗏𝖾 𝖥𝗎𝗇 𝖶𝗂𝗍𝗁 𝖴𝗌**   
`)

  }
})



client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'id')) {
    var user = message.guild.member(message.mentions.members.first() || message.author);
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic: true}))  
    .setAuthor(message.author.username,message.author.avatarURL({dynamic: true}))
  .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setColor(color)
      .addField(`> ID USER : [ ${user.id} ]`, `> ${user.user}`)

    message.lineReply({ embed });
  }
});


//avatar 

client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0]
    command = command.slice(prefix.length)
    if (command == "avatar") {
        let args = message.content.split(" ")
        let user = message.mentions.users.first() || client.users.cache.find(u => u.id === args[1]) || message.author
        if (args[1] !== "server") {
            message.lineReply(
                new Discord.MessageEmbed()
                .setColor(color)
                .setAuthor(user.username, user.avatarURL({dynamic: true}))
                .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
                .setImage(user.avatarURL({
                    dynamic: true,
                    format: 'png',
                    size: 1024
                }))
                .setFooter(user.username, user.avatarURL({ dynamic: true }))
                .setTimestamp()
            );
        } else if (args[1] === "server") {
            message.lineReply(
                new Discord.MessageEmbed()
                .setColor(color)
                .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__[Avatar Link]__(${message.guild.iconURL({ dynamic: true })})**`)
                .setImage(message.guild.iconURL({
                    dynamic: true,
                    format: 'png',
                    size: 1024
                }))
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            );
        }
    }
});

//user
client.on('message',message => {
    if(message.content.startsWith(prefix + 'user')){
if(!message.guild)return;
const args = message.content.split(" ")[1];
let mID = message.guild.members.cache.get(args);
    let member;
    let user;
    if(args && !message.mentions.members.first() && !mID)return message.lineReplyNoMention({embed:{description:`😒 - **${message.author.username}**, **I can't find \`${args}\` in the server Please Join Your Id a Server**`,color:color}});
    if(message.mentions.members.first()||mID){
        member = message.mentions.members.first()||mID;
        user = member.user;
    }else{member = message.member;
    user = message.author;}
    let em = new Discord.MessageEmbed()
    .setColor(color)
    .setThumbnail(user.displayAvatarURL({dynamic:true}))
    .addField(`Joined Discord :`,`\n\`\`${moment(user.createdAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(user.createdAt).fromNow()}**`,true)
    .addField(`Joined Server :`,`\`\`${moment(member.joinedAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(member.joinedAt).fromNow()}**`,true)
    .setFooter(user.tag,user.avatarURL({dynamic:true}))
    
    .setAuthor(user.tag,user.avatarURL({dynaimc:true}))
    message.lineReply(em);
}
})

//ban
client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "ban")){
        if(!normal.member.hasPermission('BAN_MEMBERS'))
       return normal.lineReply(
          new Discord.MessageEmbed()
           .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```انت لست من الادمن | You are not addicted```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )

           if(!normal.guild.me.hasPermission('BAN_MEMBERS'))
         return  normal.lineReply(
             new Discord.MessageEmbed()
             .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
             .setColor(color)
             .setTitle("** I Dont Have a Permissions **")
             .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
           )
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
      if(!member) return  normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(`\`\`\`Please Mention user or Type the user ID/Username ${args.slice(1).join(' ')}\`\`\` `)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
                if (member.id === normal.author.id)return normal.reply(`\`\`\`You can't ban Yourself\`\`\` `)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't ban me dumbass**`)
     if(!member.bannable) return normal.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```The Member Role Is Higher Than Me```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )


         await member.ban({reason:`He/She just got bannned`})
        normal.lineReply(`**${member.user.username} Has been BANNNED ✈**`)
    } 
})






/// hide/show

client.on('message', message =>{
if(message.content === prefix +"hide"){
if(message.author.bot || !message.guild) return;
if(!message.member.hasPermission('MANAGE_CHANNELS'))
 return message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setTitle("``` You Dont Have a Permissions```")
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
);

let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : false
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))         
                .setColor(color)
                .setDescription(`> **Done Hide This Room  ${message.channel}**`)
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
                message.lineReply(embed)
                })
}
});

client.on('message', message =>{
if(message.content === prefix +"show"){
if(message.author.bot || !message.guild) return;
if(!message.member.hasPermission('MANAGE_CHANNELS'))
return message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setTitle("``` You Dont Have a Permissions```")
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
);

let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
               VIEW_CHANNEL: true
            }).then(() => {
                const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setColor(color)
                .setDescription(`> **Done Show This Room  ${message.channel}** `)
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
                message.lineReply(embed)
                })
}
});



//add-emoji

client.on('message', token =>{
  if (token.content.startsWith(prefix + 'add-emoji')) {
     const args = token.content.split(' ').slice(1)
    if (!token.member.hasPermission('MANAGE_EMOJIS')) {
    return  token.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(token.author.tag, token.author.avatarURL({ dynamic: true }))
        
        .setColor(color)
        
        .setTitle(`
> **You Dont Have a Permissions __Here__ \`MANAGE_EMOJIS\`**        
      `)
        .setFooter(token.author.tag, token.author.avatarURL({ dynamic: true }))
  .setTimestamp()

      )
    }

    if (!token.guild.me.hasPermission('MANAGE_EMOJIS')) {
        return token.lineReplyNoMention(`
        > **I Dont Have a Permissions \`MANAGE_EMOJIS\`**
        `);
    }

    const emoji = args.join("");
    if (!emoji) return token.lineReply(
      new Discord.MessageEmbed()

      .setColor(color)
      .setDescription(`
      > **Please Write a Emoji add to __Server__**
      `)
               .setThumbnail(token.guild.iconURL())
       .setAuthor(token.author.tag, token.author.avatarURL({ dynamic: true }))
      .setTimestamp()
    )

    let the_typed_emoji = Discord.Util.parseEmoji(emoji);

    if (the_typed_emoji.id) {
        const link = `https://cdn.discordapp.com/emojis/${the_typed_emoji.id}.${
            the_typed_emoji.animated ? 'gif' : 'png'
        }`;
        const name = args.slice(1).join(' ');

        token.guild.emojis.create(`${link}`, `${name || `${the_typed_emoji.name}`}`);
        const done = new Discord.MessageEmbed()
        .setAuthor(token.author.tag, token.author.avatarURL({ dynamic: true }))
            .setTitle(`
            > **Done addd a __Emoji__**
            `)
         
        
            .setColor(color)
            .setTimestamp()

                token.react(صح)
            
        return token.lineReplyNoMention(done);
    } else {
        let CheckEmoji = parse(emoji, { assetType: 'png' });
        if (!CheckEmoji[0])
            return token.lineReply('invalied emojiev');
        token.lineReply(`
        > **Please add Emoji Auhtor**

        > **من فضلكك قم باضافة ايموجي اخر**
        `);
}
}
})






/// nick name 
client.on("message",message=>{
    if(message.content.startsWith(prefix+"nick-name")){
      if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.lineReply("```❌You Dont Have a permissions ```")
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1])||message.guild.members.cache.find(r => r.user.username === args[1])
      if(!member) return message.lineReply("nick-name @Mention (nickname)")
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if(!nick){
g.setNickname(member.username)
      }
g.setNickname(nick)
const l = g.nickname|| member.username
let embed = new Discord.MessageEmbed()
.setAuthor(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setThumbnail(message.member.user.avatarURL({dynamic:true}))
.setColor(color)
.setTitle("**__Done NickName__**")
.addField(`**(User Nick Change)**`,`${member}`,true)
.addField(`**(Befor)**`,`**${l}**`,true)
.addField(`**(After)**`,`**${nick}**`,true)
.addField(`**(from)**`,`**${message.author}**`,true)

.setFooter(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setTimestamp()
message.lineReply(embed)
    }
  })

///ping
client.on("message", async(token) => {

    if (token.content.startsWith(prefix + "ping")) {
    
        token.lineReplyNoMention(
          new Discord.MessageEmbed()

          .setColor(color)
          .setDescription(`> **Please Wait...**`)

        ).then((m) => {
            setTimeout(() => {
                m.edit((
                  new Discord.MessageEmbed()
                  .setColor(color)
                  .setDescription(`> \`-\` **My Ping Is :** \`${client.ws.ping}\` `)
                    .setAuthor(token.author.tag, token.author.avatarURL({ dynamic: true }))
    .setTimestamp()
                

                )
                )
            }, 5000)
        })
    }
})






// tax 
client.on("message", async message => {


  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
    let args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace('b',"000000000000").replace('B',"000000000000")
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    let errorembed3 = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`> **Please Wait.. **`);
    if (!args2) return message.lineReply(errorembed3).then(e=>{
      setTimeout(function(){
        e.edit(
          new Discord.MessageEmbed()
          .setColor(color)
                       .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
                    .setTitle(`>   **Error**`)

          .setDescription(`
          > **Please Write Your Number to Taxs**
          `)
  
          
        
        )
      }, 4500)
    });
    let errorembed2 = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`> **Please Wait... **`);
    if (isNaN(args2)) return message.lineReply(errorembed2).then(e=>{
      setTimeout(function(){
        e.edit(
          new Discord.MessageEmbed()
          .setColor(color)
                       .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
          .setTitle(`**Error**`)
          .setDescription(`>  **Please Write Your Namber to Taxs**

`)
        )
      }, 4500)
    });;
    let errorembed = new Discord.MessageEmbed()
           .setTitle(`**Error**`)
    .setColor(color)
    .setDescription(`> **Must The Number Larger __1__**`)
    .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.lineReply(errorembed);
    let embed3 = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`>  \`-\` **all Taxs : \`1\` ** 
    `)
                .setImage(line)
            .setTimestamp()
             .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            if (args2 == 1) return message.lineReply(embed3);
    let embed = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`> **Please Wait..  **`)
    message.lineReply(embed).then(e=>{
      setTimeout(function(){
        e.edit(
          new Discord.MessageEmbed()
          .setColor(color)
          .setDescription(`

          > **Done Send all Tax** 

          > **Tax __Here__ \`${tax}\`**
          `)
            .setImage(line)
            .setTimestamp()
             .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        )
      }, 1500)
    });;
  }
  });
///By Black Team
////////////////////////
// Sevrer 
client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(command === 'server' || command === 'معلومات') {

        const onlinemembers = message.guild.members.cache.filter(m => m.presence.status === 'online'||'dnd'||'afk').size
          const textch = message.guild.channels.cache.filter(ch => ch.type === "text").size
          const voicech = message.guild.channels.cache.filter(ch => ch.type === "voice").size
          let customembed = new Discord.MessageEmbed()
          
          
    .setTimestamp()
          
          .setAuthor(message.guild.name,message.guild.iconURL({dynamic: true}
          ))

             .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}
          ))
          
          .addField(`🆔 Server ID:`, message.guild.id, true)
          .addField(`📆 Created On`, message.guild.createdAt, true)
          .addField(`👑 Owned by`, message.guild.owner, true)
          .addFields({name:`👥  Members (${message.guild.members.cache.size})`, value: `${onlinemembers} online\n${message.guild.premiumSubscriptionCount} boosts ✨`, inline: true})
          .addField(`:speech_balloon: Channels (${message.guild.channels.cache.size})`, `${textch} Text | ${voicech} voice`, true)
          .addFields({name:`🌍 Others`, value: `**region:** ${message.guild.region}\n **Verification Level:** ${message.guild.verificationLevel}`, inline: true})
          .addField(`🔐  Roles (${message.guild.roles.cache.size})`, `To see a list with all roles use `)
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setColor(color)
          
          message.lineReplyNoMention(customembed)

          
        }
});


//Channel FeedBack 


client.on("message", message => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`> **Thanks for FeedBack**    
 
`)

  .setImage(line)
  .setThumbnail(message.author.avatarURL({dynamic: true}))
        .setAuthor(message.author.username,message.author.avatarURL({dynaimc: true}))
           .setTimestamp()
       .setColor(color)
  if (message.channel.id != "1002539463525810276") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})
///auto line

client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1118849957164761148") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})

//2
client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "id channel") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})
////mute

client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "mute")){
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle(` \`\`\` You Dont Have a Permissions\`\`\``)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                if(!member) return normal.lineReply(
                  new Discord.MessageEmbed()
                  .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(` \`\`\`Please Mention/ID Same One! ${args.slice(1).join(' ')}\`\`\``)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
                )
                if (member.id === normal.author.id)return normal.reply(`**You can't mute yourself**`)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't mute me dumbass**`)
        let mutedrole = normal.guild.roles.cache.find(ro => ro.name === 'muted')
        if(!mutedrole) {
        try {
        var createdrole = await normal.guild.roles.create({
                      data : {
                        name : 'muted',
                        permissions: [],
                    }});
                        normal.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(createdrole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                } catch (err) {
                console.log(err)
            }};
let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
         member.roles.add(muterole)
        normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(` **Done Has Been Muted
BY : \`${member.user.username}\`**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()

        )
    } 
})

client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "unmute")){
    var args = normal.content.slice(prefix.length).trim().split(/ +/g);
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle(`\`\`\` You Dont Have a Permissions\`\`\``)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                     if(!member) return normal.lineReply(
                       new Discord.MessageEmbed()
                       .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(`\`\`\`Please Mention/ID Same One! ${args.slice(1).join(' ')}\`\`\``)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
                     )
                let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
        if(!member.roles.cache.has(muterole.id))return normal.lineReply(`**${member.user.username} is not muted**`)
        await member.roles.remove(muterole);
        normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(`**Done Has remove Muted

BY : \`${member.user.username}\`**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        )
  }})

///lock

client.on('message', async message => {
    if (message.content.startsWith(prefix + 'lock')) {
        if (!message.member.hasPermission("MANAGE_CHANNELS"))
        return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ You Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );

        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        });
        message.lineReply(
            new Discord.MessageEmbed()
            .setColor(color)
                  .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}))
            .setDescription(` Done Locked This Channel  ${channel_find.name}`)
        );
    }
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + 'unlock')) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ You Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel;
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: true
        });
        message.lineReply(
            new Discord.MessageEmbed()
            .setColor(color)
            .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}))
            .setDescription(` Done Unlocked This Channel  ${channel_find.name}`)
        );
    }
});
///Line After transfer
 let channelid = '1002540961794097203'  
client.on('message', message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== channelid) return;
  message.channel.send(line)
  
  }
})
////////////////////

///////////////dm
client.on('message', message => {
 if(message.content.startsWith(prefix+ "dm")) {
   if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
  const args = message.content.split(" ").slice(1).join(" ");
if (!args) return message.channel.send(`برجاء الكتابه الرساله الي هترسل اليه`)
const user = message.mentions.users.first();
if(!user) return message.channel.send (`برجاء المنشن علي الشخص`)
 user.send(
   new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
   .setColor(color)
   .setDescription(`> \`#\` **From : ${message.author}**


> \`#\` **Dm Meesage :** ${args}
`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
 ).catch(error => message.channel.send(
   new Discord.MessaegEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
   .setColor(color)
   .setDescription(`>  \`/\` **خاص الشخص الذي منشنتله الخاص بيه مقفول**
> \`#\` **Erorr User : <@${user.id}>**
> \`!\` **User Message : ${message.author}**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    ))
    message.delete({timeout : 2000})
 message.channel.send(
   new Discord.MessageEmbed()
   .setColor(color)
   .setDescription(`> \`#\` **تم ارسال الرساله بنجاح** 
>  \`#\` **العضو المرسل اليه : <@${user.id}>**
> \`#\` **الشخص الي بعت الرساله : ${message.author}**`)
 )
  
 }
});

//unban

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.cache.forEach(NoNo => {
          message.guild.members.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
    .members.unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///come

client.on("message" , wanted => { if(wanted.content.startsWith(prefix + "come")) {


    const user = wanted.mentions.users.first()
    if(!user) return wanted.channel.send("**Mention a user**")
    const args = wanted.content.split(" ").slice(2).join(" ");
 
    user.send(`> ${user} { <#${wanted.channel.id}> } **تم طلبك هنا من فضلك**`)
    wanted.lineReplyNoMention(
      new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(wanted.author.username,wanted.author.avatarURL({dynamic: true}))

       .setAuthor(wanted.guild.name,wanted.guild.iconURL({dynamic: true}))
      
      .setDescription(`
      
      > **Done Send Privet ${user}**

      > **Please Wait **
      `)
      .setTimestamp()
      .setThumbnail(wanted.guild.iconURL({dynamic: true}))
    )
  }
}); 

//profile

client.on('message', message => {
    if (message.content.startsWith(prefix + "profile")) {
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
      let uus = message.mentions.users.first() || message.author;
  
      message.guild.fetchInvites().then(invites => {
  
        let personalInvites = invites.filter(
          i => i.inviter.id === message.mentions.users.first() || message.author.id
        );
        
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      
        var heg;
        if (men) {
          heg = men
        } else {
          heg = message.author
        }
        var mentionned = message.mentions.members.first();
        var h;
        if (mentionned) {
          h = mentionned
        } else {
          h = message.member
        }
  
  
        var id = `https://api.probot.io/profile/${uus.id}`
        message.lineReplyNoMention(id)
      }
      );
    }
    });
//server banner
client.on('message', message => {
  if(message.content.startsWith(prefix + 's-banner')) {
     message.lineReply(
      new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor(color)
     .setTitle(message.guild.banner ? '**__Done Send Banner__** |' : 'السيرفر ليس لديه اي بانر | The server does not have any banner')
     .setImage(message.guild.bannerURL({ size: 1024 }) || null)
     .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
     
     )
     
  }
})
///clear

client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "clear") {
        
        if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
        if (!message.member.hasPermission('MANAGE_GUILD'))
        return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        )

        if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.lineReply(`> ** I don't have perms :x:**`);
        let args = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 100) return message.lineReply(
            new Discord.MessageEmbed()
            .setDescription(`\`\`\`js
i cant delete more than 100 messages 
\`\`\``)
        ).then(messages => messages.delete({ timeout: 5000 }))
        if (!messagecount) messagecount = '100';
        message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
            message.lineReply(
                new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setColor(color)
                .setDescription(`\`\`\`js
${msgs.size} messages cleared
\`\`\``)
            ).then(messages =>
                messages.delete({ timeout: 5000 }));
        })
    }
});


///say
client.on("message", msg => {
    let say1 = msg.content.split(" ").slice('1').join(" ")
  
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + 'say')) {
      if (!msg.member.hasPermission('ADMINISTRATOR'))
        return msg.channel.send('Permission required!"ADMINISTRATOR"')
      msg.delete()
      msg.channel.send(say1)

    }
});



client.on("message", function(message){
  if(message.content.includes(client.user.id)){
   const embed = new Discord.MessageEmbed()
   .setColor(color)
     .setDescription(`> **Please Wait..**`)

message.lineReply(embed).then(m=>{
       setTimeout(function(){
         m.edit(
           new Discord.MessageEmbed()
           .setColor(color)
           .setImage(line)
           .setDescription(`**Welcome To __Server Name__** Cheaters Family

**My Prefix Is : \`${prefix}\`** 

**Dev By : \`PEDRO\`** `)
           .setThumbnail(message.guild.iconURL({ dynamic: true }))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
         )
       }, 6000)
     })
  }
})

////say embed
client.on("message", msg => {
    let moonlight = msg.content.split(" ").slice('1').join(" ")
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + 's-embed')) {
      if (!msg.member.hasPermission('ADMINISTRATOR'))
        return msg.channel.send('Permission required! "ADMINISTRATOR"')
      msg.delete()
msg.channel.send(
  new Discord.MessageEmbed()      
            .setThumbnail(msg.guild.iconURL({dynamic:true}))
      .setAuthor(msg.guild.name,msg.guild.iconURL({dynamic:true}))
            .setColor(color)
            .setDescription(moonlight)
      .setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
            .setImage(line)
)

    }
});

// help // 




//boost and level

client.on('message', mor3eb => {
  if(mor3eb.content.startsWith(prefix + "boost")){
    
 if(mor3eb.author.bot || !mor3eb.guild) return mor3eb.reply("this command for server only")
 
    
    let level = mor3eb.guild.premiumTier === 0 ? "No Level" : `${mor3eb.guild.premiumTier}`;
 
    let boost = mor3eb.guild.premiumSubscriptionCount;
    
    
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`Boost of ${mor3eb.guild.name}`)

.addField("Boost", `${boost}`)
.addField("Level", `${level}`)
 .setColor(color)
 
 mor3eb.channel.send(embed)
 
  }
});





//bans

client.on('message', message => {
  if (message.content.startsWith(prefix + "allbans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`<a:ss_3:942445534034141255> **Server Ban List :** ${bans.size} `))
      .catch(console.error);
  }
});






///الامر فارغ للتعديل عليه علي حسب الرغبه
///rules
      client.on('message', function(message) {
    if(message.content.startsWith(prefix + "rules")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL({dynamic: true}))  
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.channel.send(
  new Discord.MessageEmbed()
  .setColor(color)
.setThumbnail(message.guild.iconURL({dynamic: true}))  
        .setImage(line)
 
.setDescription(`الكلام الي عايزو`)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()

).then(r=>{
   r.react("اي ريأكت عايزو")
 })
 }})




///role
require('discord-reply')
client.on('message', async(message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
if(command === 'role') {
      if(message.channel.type === 'dm') return;
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let member = message.guild.member(user)
        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.toLocaleLowerCase().includes(args[1]))|| message.guild.roles.cache.get(args[1])
        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **${prefix}role __(@user|user id)__ || __(role name |id)__**`))
        if(!role) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> \`\`\`Role Not Found!\`\`\` `))

         if(!member.roles.cache.has(role.id)) {
        member.roles.add(role.id)
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **The Role** **(${role.name})** **__Was Added To__** **(${member.user.tag})**`))
        
            
         }
    }
});

///re-role
require('discord-reply')
client.on('message', async(message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
if(command === 're-role') {
      if(message.channel.type === 'dm') return;
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let member = message.guild.member(user)
        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.toLocaleLowerCase().includes(args[1]))|| message.guild.roles.cache.get(args[1])
        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **${prefix}role __(@user|user id)__ || __(role name |id)__**`))
        if(!role) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> \`\`\`Role Not Found!\`\`\` `))
        if(member.roles.cache.has(role.id)) {
         member.roles.remove(role.id)
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **The Role** **(${role.name})** **__Was Removed From__** **(${member.user.tag})**`))
        

        
            
         }
    }
});







///warn

client.on("message", message => {
  if (message.content.startsWith(prefix + "warn")) {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```You are not addicted```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      );
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("``` ❌ I Dont Have a Permissions```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )
    var user = message.mentions.users.first();
 
    if (!user)
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```برجاء المنشن علي الشخص مع ذكر السبب | Please tag the person with the reason``` => warn (Mention) : (Reason) ")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )
    var args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args) return message.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor(color)
      .setTitle("```Please write the reason```")
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    )
message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setDescription(`**From : ${user.username}**

**Reason : ${args}**`)
)
let embed = new Discord.MessageEmbed() 
 .setTitle(`>️ You have Warned
 ${args}`)  

 .setColor(color)  
 .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
 .setTimestamp()
 user.send(embed)    
 .then(m => {
  var owners = message.guild.owner
  let embed = new Discord.MessageEmbed() 
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setTitle('**__New warn __**')  
 .addField("`From`",`**The person who made the warning : ${message.author}**`)
 .addField("`To Me`",`**I took the warning : ${user}**`,true)
 .addField("`Message`",`**The message is : ${args}**`)
 .addField("`Time`",`**Time Message : ${message.createdAt.toLocaleString()}**`)
 
 .setColor(color)    
 .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
 .setTimestamp()


owners.send(embed);     
 }) 
  }
});
////remove warn
client.on("message" , message => {
  if(message.content.startsWith(prefix + "remove-warn")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let user = message.mentions.users.first()
    if(!user) return message.lineReply("❌ | **Mention a user**")
    if(user.bot) return message.lineReply("🙄 | **Bots don't have warns**")
    if(user.id == message.member.id) return message.lineReply("🙄 | **You can't remove from yourself**")
    if(!db.has(`warns_${user.id}`)) return message.lineReply("❌ | **This user doesn't have any warns**")
    db.subtract(`warns_${user.id}` , 1)
    message.lineReply(`> **Done removing 1 warn for ${user}**`)
  }
});


//////////tag


client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'tag') {
if(!message.member.hasPermission("MANAGE_NICKNAME")) {
return message.channel.send(`not enought perms`)
}

    let user = await message.mentions.members.first() || await message.guild.members.cache.get(args[0]);
    if(!user) return await message.lineReplyNoMention('__**User?**__');

    await user.setNickname(`tag ${user.user.username}`,'idk').then(async () => {
      await message.lineReplyNoMention('__**Done**__');
    }).catch(err => message.channel.send(`Erorr :${err}`));
  }
});

///suggestions
let sug = ['1007035356987805777'];//channel sug

client.on('message', function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
.setColor(color)      .setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}  
message.channel.send(embed).then(msg => {
 msg.react(`<:verifym:995049529378361414>`).then(() => {
 msg.react('<:verify:995049531668435006>')
      })
    message.channel.send({files: [line]});
})
      }
});


////welcome


client.on("message", mor3eb => {
  let wprefix = prefix
    if (mor3eb.content.startsWith(wprefix + "set-welcome")) {
       if (!mor3eb.guild.member(mor3eb.author).hasPermission('ADMINISTRATOR'))
            return mor3eb.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('```انت لست من الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
            
        );
if (!mor3eb.guild.me.hasPermission('ADMINISTRATOR'))
            return mor3eb.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('```ليس معاك رول الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        ); {
        let wmochakis = mor3eb.mentions.channels.first()
    
    if(!wmochakis) { return mor3eb.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
      .setColor(color)
      .setDescription(`**برجاء المنشن علي الاتشنل الخاصه بترحيب**`)
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
    ).then(r=> {
      r.react("")///react here
    })
    }
    
    
    db.set(`welcomechannel_${mor3eb.guild.id}`, wmochakis.id)
    
    mor3eb.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
      .setColor(color)
      .setDescription(`> **The channel has been set successfully**
> **Channels : ${wmochakis}**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
    ).then(r=> {
      r.react("")////react here
    })
    }
    }
  })

client.on("guildMemberAdd", (memberadd,type, invite) => {
  let channelget = db.get(`welcomechannel_${memberadd.guild.id}`);
  let messagechannel = client.channels.cache.get(channelget);
  if(channelget === null) { 
    return;
  }
  messagechannel.send(
    new Discord.MessageEmbed()
    .setColor(color)
  .setThumbnail(memberadd.user.avatarURL({ dynamic: true }))

    .setFooter(memberadd.user.username, memberadd.user.avatarURL({ dynamic: true }))

 .setAuthor(memberadd.user.username, memberadd.user.avatarURL({ dynamic: true }))
  .setTimestamp()

    .setDescription(`
    
>  **Welcome To Server : __${memberadd.guild.name}__**

>  **User : ${memberadd.user}**

>  **MemberCount : \`${memberadd.guild.memberCount}\`**

>  **𝖤𝗇𝗃𝗈𝗒 𝗒𝗈𝗎𝗋 𝗍𝗂𝗆𝖾** 💖`)
.setImage("https://media.discordapp.net/attachments/1326280186559205436/1326287168175607868/DALLE-2025-01-07-21.31.jpg?ex=677ee0ae&is=677d8f2e&hm=e6cd93e1944b666390abd1869d6f430caf6027ede3a8d00014a7007311d105c0&=&format=webp&width=947&height=541")
  ).then(s=>{
  s.react("");///react here
    
  })
})

//react role


client.on("message", async message => {
  if(message.content.startsWith(prefix + "react")){
    const args = message.content.split(" ");
    if(!args[1]) return message.channel.send("Please include an emoji");
    if(!args[2]) return message.channel.send("There must be an id for the message");
    if(isNaN(args[2])) return message.channel.send("Please include a valid message id");
    if(!args[3]) return message.channel.send("Please include the id of the role ID");
    if(isNaN(args[3])) return message.channel.send("Please include a valid ID for the role that should be given upon reaction.");
    let emoji = ReactionEmojiGrab(args[1]);
    if(!isNaN(emoji)) emoji = client.emojis.cache.get(emoji);
    try{
      const msg = await message.channel.messages.fetch(args[2]);
      await msg.react(emoji);
      
      db.push(`${message.guild.id}.reactionroles`, 
        {
          message: msg.id,
          emoji: emoji.id || emoji,
          role: args[3]
        }
      );
    }catch(e){
      message.channel.send("Error\n" + e);
    }
  }
})

client.on("messageReactionAdd", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.add(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})

client.on("messageReactionRemove", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.remove(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})

function ReactionEmojiGrab(reactionArg){
  const contents = reactionArg.substring(1, reactionArg.length - 1).split(":");
  if(contents.length > 1){
    return contents[2];
  }else{
    return reactionArg;
  }
}


//boost thx

client.on('guildMemberUpdate', async (oldMember, newMember) => {
    let idchannel = "1326280277600764024"// أيدي الروم
    let boostColor = '#671ec7';// هنا اختار لون الامبد
    if (!oldMember.premiumSince && newMember.premiumSince) {
        let embed = new MessageEmbed()
        .setColor(boostColor)
        .setDescription(`${newMember.user.tag} شكرا لك على البوست 🌹 `);
        return  client.channels.cache.get(idchannel).send(embed)
    }
    if (oldMember.premiumSince && newMember.premiumSince) {
        let embed = new MessageEmbed()
        .setColor(boostColor)
        .setDescription(`${newMember.user.tag} شكرا لك على البوست  🌹🌹🌹`);
        return client.channels.cache.get(idchannel).send(embed)
    }
});

//
//

//probot line

                     client.on("messageCreate", async message => {
  if (!message.guild) return;
  if (message.author.bot) return;

  if(message.channel.id != "1118849858606989433") return; 
//M3ATH#0001

  let fi = msg => msg.author.id === "282859044593598464" && msg.content.startsWith(`**:moneybag: | ${message.author.username}, has transferred`);

message.channel.awaitMessages({ filter: fi, max: 1, time: 0}).then(async () => {

    message.channel.send(line)
   
       })
})


//help

const but = require("discord-buttons")
but(client)
client.on("message", async msg => {
  if (msg.content === prefix + 'help') {
let argss = msg.content.split(" ").slice('').join(" ");
    const disbut = require('discord-buttons')
  
    let button = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("ADMIN COMMANDS")
    .setID("ADMIN")
    .setEmoji(`🤖`)
    let button2 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("PUBLIC COMMANDS")
    .setID("PUBLIC")
        .setEmoji(`🌍`)
   let button3 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("STORE COMMANDS")
    .setID('BOT')
        .setEmoji(`🛒`)

   let button5 = new disbut.MessageButton()
 .setStyle('blurple')
    .setLabel("MUSIC COMMANDS")
    .setID('PROTECTION')
    .setEmoji(`🎵`)
    let button6 = new disbut.MessageButton()
 .setStyle('red')
    .setLabel("DELETE MESSAGE")
    .setID('DELETE')
    .setEmoji(`❌`)
let nn = await msg.reply({embed :new Discord.MessageEmbed()
.setDescription(`> \`#*\` **\`Hey  : \` ** ${msg.author.username}

> \`*1\` **\`Please Click  Button to Show a Help\`** 

> \`*2\` **\`Thanks as Using Our Bot\`**

`)
.setThumbnail(msg.guild.iconURL({dynamic:true}))

.setAuthor(msg.guild.name,msg.guild.iconURL({dynamic:true}))

.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)

, buttons : [button,button2,button5,button3,button6]})

let collector = nn.createButtonCollector((button) => button.clicker.user.id === msg.author.id)

collector.on('collect', (b)=> {
  if (b.id === 'ADMIN') {
    nn.edit({embed: new Discord.MessageEmbed().setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)


.setTitle(`> **( __Admin  Commands__ )**`)

.setDescription(`
 

> **${prefix}ban  : ( __ لتبنيد العضو __ )**


> **${prefix}unban  : ( __  لفك التبنيد عن عضو __ )**


> **${prefix}mute  : ( __ لعمل ميوت لي شخص __ )**


> **${prefix}unmute  : ( __ لفك الميوت __ )**


> **${prefix}lock  : ( __ لقفل الاتشنل__ )**


> **${prefix}unlock  : ( __ لفتح الاتشنل __ )**


> **${prefix}role  : ( __ لأعطاء شخص رول __ )**


> **${prefix}hide  : ( __ لاخفاء الاتشنل__ )**


> **${prefix}show  : ( __ لاظهار الاتشنل __ )**


> **${prefix}dm  : ( __ لبعت رساله لشخص ف البرايفت__ )**


> **${prefix}warn : ( __ لارسال ورن__ )**


> **${prefix}clear : ( __ لمسح الشات__ )**


> **${prefix}s-embed : ( __لعمل ساي في ايمبد__ )**


> **${prefix}say : ( __ لعمل ساي بدون ايمبد__ )**



> **${prefix}set-welcome : ( __لتحديد اتشنل الويلكم__ )**
 `),
 
 
 
  buttons : [button,button2,button5,button3,button6]})

  } else if (b.id === 'BOT') {
    nn.edit({embed :new Discord.MessageEmbed()
    .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
.setTitle(`> **( __Store  Commands__ )**`)
.setDescription(`
> **${prefix}come : (__لطلب شخص ال التيكت__)**



   **==========Important===========**


>  \`-/\` **\`جميع الاشياء بداخل التيكت\` ** 


**==========Finshied===========**
 

`)    

     , buttons : [button,button2,button5,button3,button6]})
} else if (b.id === 'PUBLIC') {
    nn.edit({embed :new Discord.MessageEmbed()
        .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
    .setTitle(`> **( __Public  Commands__ )**`)
    .setDescription(`
> **${prefix}avatar  : ( __لاظهار الافتار الخاص بيك__ )**


> **${prefix}user  : ( __لاظهار معلومات عنك__ )**


> **${prefix}server  : ( __لاظهار معلومات عن السرفر__ )**


> **${prefix}tax  : ( __لاظهار الضريبه __ )**


> **${prefix}s-banner  : ( __لاظهار بنر السرفر __ )**
 

> **${prefix}ping  : ( __ لاظهار بنج البوت __ )**


> **${prefix}profile  : ( __لاظهار البروفايل الخاص بك __ )**


> **${prefix}boost  : ( __لاظهار بوستات السيرفر __ )**


> **${prefix}allbans   : ( __لاظهار كام واحد متبند في السيرفر __ )**
    `)
    
    .setColor(color)
    
     , buttons : [button,button2,button5,button3,button6]})
  } else if (b.id === 'PROTECTION') {
    nn.edit({embed :new Discord.MessageEmbed()
    
    
    .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
    .setDescription(`
    
    
> **${prefix}play : ( __ Play a song or add it to the queue.__ )**


> **${prefix}stop : ( __ Pause the current song.__ )**


> **${prefix}pause : ( __ Pause the current song.__ )**


> **${prefix}resume : ( __ Resume music if it was paused.__ )**


> **${prefix}np : ( __ Display the currently played song.__ )**


> **${prefix}queue : ( __ Display each song title in queue.__ )**


    `)
    .setTitle(`> **( __Music  Commands__ )**`)
    
    ///لم يتم اضافه اوامر موسيقي !
    
    
    ,
      buttons : [button,button2,button5,button3,button6]}) 
} else if (b.id === 'DELETE') {
    nn.delete({timeout : 1000})
     s.react("❌");
}
})
  }
  })
/*
//Anti Bad words with Timeout Code | كود منع سب مع تايم اوت
client.on("message", async message => {
    let words = ["https://","discord.gg/","كسم","طيز","هنيكك","امك","احا","كسمك","zaml","w9","tabon","zamel","zml","t7ewa","9hba","9hab"];
    for (let s = 0; s < words.length; s++) {
        if (message.content.includes(words[s])) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                let member = message.member;
                let embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setTitle("**You Are Muted !**")
                    .setDescription(`**You are muted in \`${message.guild.name}\` server for a 1 hour**\n**For sharing bad words or links in the chat!**\n**Your message: \`${message.content}\`**`)
                    .setThumbnail(message.guild.iconURL())
                    .setFooter(message.guild.name, message.guild.iconURL());

                message.delete();
                await message.channel.send(`${message.member} **It's not allowed to share bad words or links!**`);
                await member.timeout(900000, "Inappropriate language or link sharing");
                await message.member.send({ embeds: [embed] });
            }
        }
    }
});*/
/*
client.on("message", async message => {
    let words = ["https://", "discord.gg/", "كسم", "طيز", "هنيكك", "امك", "احا", "كسمك", "zaml", "w9", "tabon", "zamel", "zml", "t7ewa", "9hba", "9hab", "ولد قحبه", "zml bok", "9ewad"];
    for (let s = 0; s < words.length; s++) {
        if (message.content.includes(words[s])) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                let member = message.member;

                let embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setTitle("**You Are Muted!**")
                    .setDescription(`**You are muted in \`${message.guild.name}\` server for 30 minutes**\n**For sharing bad words or links in the chat!**\n**Your message: \`${message.content}\`**`)
                    .setThumbnail(message.guild.iconURL())
                    .setFooter(message.guild.name, message.guild.iconURL());

                message.delete();
                await message.channel.send(`${message.member}, **It's not allowed to share bad words or links!**`);
                await message.member.send({ embeds: [embed] });

                // Apply a timeout for 30 minutes
              await member.timeout(3600000 , "idk")
            }
        }
    }
}); 
*/
/*
client.on("message", async message => {
    let words = ["https://", "discord.gg/", "كسم", "طيز", "هنيكك", "امك", "احا", "كسمك", "zaml", "w9", "tabon", "zamel", "zml", "t7ewa", "9hba", "9hab", "ولد قحبه", "zml bok", "9ewad"];
    for (let s = 0; s < words.length; s++) {
        if (message.content.includes(words[s])) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                let member = message.member;

                let embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setTitle("**You Are Muted!**")
                    .setDescription(`**You are muted in \`${message.guild.name}\` server for 30 minutes**\n**For sharing bad words or links in the chat!**\n**Your message: \`${message.content}\`**`)
                    .setThumbnail(message.guild.iconURL())
                    .setFooter(message.guild.name, message.guild.iconURL());

                message.delete();
                await message.channel.send(`${message.member}, **It's not allowed to share bad words or links!**`);
                await message.member.send({ embeds: [embed] });

                // Add a cooldown for 30 minutes by preventing the user from sending messages
                let originalPermissions = member.permissions;
                member.roles.cache.forEach(role => {
                    if (role.permissions.has("SEND_MESSAGES")) {
                        role.setPermissions(role.permissions.remove("SEND_MESSAGES"));
                    }
                });

                setTimeout(() => {
                    member.roles.cache.forEach(role => {
                        if (!role.permissions.has("SEND_MESSAGES")) {
                            role.setPermissions(role.permissions.add("SEND_MESSAGES"));
                        }
                    });
                }, 1800000); // 30 minutes in milliseconds
            }
        }
    }
});

/*
client.on('messageCreate', async message => {
  const words = ['test', 'discord.gg/'];
  for (const word of words) {
    if (message.content.includes(word)) {
      if (!message.member.permissions.has('ADMINISTRATOR')) {
        const member = message.member;
        const embed = new Discord.MessageEmbed()
         .setAuthor(message.author.username, message.author.displayAvatarURL())
         .setTitle('**You Are Muted!**')
         .setDescription(`**You are muted in ${message.guild.name} server for a 1 hour**
**For sharing a bad words or links in the chat!**
**Your message : ${message.content}**`)
         .setThumbnail(message.guild.iconURL())
         .setFooter(message.guild.name, message.guild.iconURL());
        message.delete();
        await message.channel.send(`${message.member} **It's Not allowed to share bad words or links!**`);
        await member.timeout(3600000, 'idk');
        await message.member.send({ embeds: [embed] });
      }
    }
  }
}); */




///token

client.login
