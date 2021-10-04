const Discord = require('discord.js');
var cron = require('cron');
module.exports.run = (client, message, args) => {
    let scheduledMessage = new cron.CronJob('00 40 18 * * *', () => {
        // This runs every day at 10:30:00, you can do anything you want
        let channel = yourGuild.channels.get('857296136213757952');
        channel.send('dick');
        });
};
module.exports.help = {
    name: '',
    aliases:[""]
};