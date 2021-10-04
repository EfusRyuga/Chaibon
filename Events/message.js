const Discord = require('discord.js');
const prefix = '??';

module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm'|| message.webhookID) { return; }
    if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) { return; }
    if (!message.content.startsWith(prefix)) { return; }
    
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let commande = args.shift().toLowerCase();
        const cmd = client.commands.get(commande)
        || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commande))

    
        if (!cmd) { return; }
            cmd.run(client, message, args);
};