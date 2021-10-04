const Discord = require('discord.js');



module.exports.run = (client, message,... args) => {
    //const channel = client.channels.find('name', "suggest_for_chaïbon")
    const EM = args
    //channel.send("voici la suggestion de " + message.author + " " + EM)
    client.channels.get("805442831216672788").send("voici la suggestion de " + message.author + " " + EM)
    message.reply("la suggestion à bien été prise en compte !")
}
module.exports.help = {
    name: 'suggestion',
    aliases:["suggest"]
};