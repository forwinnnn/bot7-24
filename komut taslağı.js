const Discord = require('discord.js');


exports.run = function(client, message) {

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['',''], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: '', //adını belirledik (kullanmak için gereken komut)
  description: '', //açıklaması
  usage: '' //komutun kullanım şekli (mesela hava <bölge>)
};
