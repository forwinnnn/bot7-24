const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: f!yardım <-yardım istediğiniz konu>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Yardım istediğiniz konu yetkililere ulaştı!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcı yardım istiyor:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("yardım", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('577122905263964189').send(embed2);

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yetkili yardım',
  description: 'Yetkililerden yardım istersiniz',
  usage: 'yetkili yardım <Yardım istediğiniz konu>'
};
