const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  var p = '..'
  
 const embed = new Discord.RichEmbed()
 .setAuthor(client.user.username, client.user.avatarURL)
 .setTitle('Müzik Komutları')
 .setDescription(`:white_small_square: \`${p}oynat\` = İstediğiniz Müziği Açar. \n:white_small_square: \`${p}geç\` = Çalan Müziği Geçer. \n:white_small_square: \`${p}durdur\` = Çalan Müziği Durdurur. \n:white_small_square: \`${p}ses\` = Müziğin Ses Seviyesini Ayarlar. \n:white_small_square: \`${p}çalan\` = Çalan Müziği Gösterir. \n:white_small_square: \`${p}kuyruk\` = Şarkı Kuyruğunu Gösterir. `)
 .setFooter(client.user.username, client.user.avatarURL)
 
 message.channel.send(embed)
  
}
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['music','müzik'],
        permLevel: 3
}
exports.help = {
  name: 'müzik',
  description: 'Müzik Komutlarını Listeler.',
  usage: 'müzik'
} 