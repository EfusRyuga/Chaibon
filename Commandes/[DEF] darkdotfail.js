const Discord = require('discord.js');
ContentM = "Meow, je connais un vieux sage qui peut vous indiquer le chemin.. Il se situais ici avant : ||https://dark.fail/|| \n Aujourd'hui on ne le trouve plus que sur le chemin des brumes.. Il est sur cette route : darkfailllnkf4vf.onion"


module.exports.run = (client, message,... args) => {
      let EmbedDDF = new Discord.RichEmbed()
        .setTitle("Meow voici la voie !")
        .setDescription(ContentM)
        .setImage("https://media.giphy.com/media/D7CSxMVMvj95e/giphy.gif")
        .setFooter("Je vous montre la voie mais je décline toute responsabilité ! \n Merci à dark.fail pour son travail d'exception !")
    message.channel.send(EmbedDDF)
}
module.exports.help = {
    name: 'darkdotfail',
    aliases:["darkdotfails", "dark.fail","dark.fails", "ddf"]
};