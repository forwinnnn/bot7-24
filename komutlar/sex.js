const Discord = require("discord.js");
  module.exports.run = async (bot, message, args) => {      let replies =
 ["https://www.imagefap.com/photo/411574773/?pgid=&gid=7567183&page=0&idx=20", "https://k62.kn3.net/taringa/4/6/F/A/5/3/emosidobolo/E16.gif", "https://i.imgur.com/jjlH0qn.gif"];      let result =
 Math.floor((Math.random() * replies.length));      let gifembed = new 
Discord.RichEmbed()         .setTitle("Gifiniz ❤")         .setColor("#FF69B4")
       .setFooter(`Gifiniz Elinizde!`, message.author.avatarURL)
         .setImage(replies[result]);      message.channel.send(gifembed); };
  exports.conf = {   enabled: true,
   guildOnly: false,
   aliases: ['sex-gif','sgif'],
   permLevel: 3 }; 
 exports.help = {   name: 'sexgif',
   description: 'Rastgele sex gifi atar.',
   usage: 'sexgif' }; 