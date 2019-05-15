const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Ne çekilişi olucak onuda yazman lazım.');
    const embed = new Discord.RichEmbed()
    .addField("Çekilişi Yapan:", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField("Çekilişin Yapıldığı Zaman:", message.createdAt)
        .setColor("#36393F")
        .addField('Ödül', `${mesaj}`)
   .addField(`Çekilişi Kazanan:`, `<@${message.guild.members.random().id}>`, true)
    return message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'çekilişyap',
    description: 'çekilişyap.',
    usage: 'çekilişyap'
};