const Discord = require('discord.js');


module.exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("The real 9 tails fox !")
    .setImage("https://i.imgur.com/CZgaZqM.png")
    

   message.channel.send(embed)
};
module.exports.help = {
    name: '9tf',
    aliases:[]
};