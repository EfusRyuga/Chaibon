//Cannonhug étant trop long à écrire, il faudrait écrire ??CH pour l'utiliser
const Discord = require('discord.js');


module.exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Tir de barrage ! envoyez de l'amour !")
    .setImage("http://image.noelshack.com/fichiers/2020/23/4/1591271876-bot-image.png")
    

   message.channel.send(embed)
};
module.exports.help = {
    name: "cannonhug",
    aliases:["ch"]
};