const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "Kurucu For Win🔥",
        "Reklam Yapma✨",
        "Saygılı Ol⭐️",
        "For Win'e Özelden Yazarak Kendine Özel Bot Yaprıra Bilirsin💥",
        "Sizi Seviyorum🌹",
        "Film Önerileri İçin 🎥fi̇lm-önerileri🎥 Kanalına Gidiniz⚡️",
        "Arkadaş Edin🍂 ",
        "Bota Ve Sunucuya Bir Şey Önermek İstiyorsan f!öneri📫 ",
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/For_Win_Bot" );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
};
