const { Command } = require('discord.js-commando');
var yazılar = new Set();
yazılar.add("evet");
yazılar.add("hayır");
module.exports = class LogCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'reklam-engelle',
            aliases: ['reklamengelle', 'reklamkapa'],
            group: 'ayarlar',
            memberName: 'reklam-engelle',
            description: 'Sunucunuz için reklam engellemeyi açar/kapatır.',
            examples: ['reklamengelle evet', 'reklam-engelle hayır'],
            guildOnly: true,
            args: [
                {
                    key: 'yazı',
                    label: 'değer',
                    prompt: 'Reklamlar engellensin mi? (**evet** ya da **hayır** yazınız.)',
                    type: 'string',
                    validate: val => {
                        if (!yazılar.has(val)) return "Evet ya da hayır şeklinde cevap veriniz.";
                        return true;
                    }
                }
            ]
        });    
    }

    hasPermission(msg){
        return msg.member.hasPermission('ADMINISTRATOR');
    }

    run(msg, args) {
        var str = args.yazı;
        const prevch = this.client.provider.get(msg.guild, 'reklam-engelle')
        if (str === "evet") {
            msg.reply(`Reklam engelleme artık aktif!`);
            this.client.provider.set(msg.guild, 'reklam-engelle', true);
            if(prevch && prevch === true) return msg.reply(`Reklam engelleme zaten aktif!`);
        }
        if (str === "hayır") {
            this.client.provider.set(msg.guild, 'reklam-engelle', false);
            msg.reply(`Reklam engelleme artık de-aktif!`);
            if(prevch && prevch === false) return msg.reply(`Reklam engelleme zaten de-aktif!`);
        }
    }
};
