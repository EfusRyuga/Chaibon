const Discord = require("discord.js");


module.exports.run = (bot, message, args) => {
    let EmbedTemple = new Discord.RichEmbed()
    .setTitle("Prière Pléonastique")
    .setDescription("petite prière en cours auprès de "+args[0] +" vous augmentez un peu votre chance et adoucissez votre karma !")
    .setImage("https://i.pinimg.com/564x/cf/f5/46/cff546dbf6bff975c860d822c179cf10.jpg")

    if(args[0] != "" && args[0] != undefined && args[1] == args[15]){
        message.channel.send(EmbedTemple)
    }
    else if (args[1] != args[15]){
        message.channel.send("Désolé vous avez définit le nom de votre divinité en plus d'un mot, faites le avec un seul, votre prière sera tout de même transmise au bon destinataire. \n foi de Chaïbon ! \n *Efus dit aussi que si vous voulez vraiment préciser vous pouvez utiliser des - ou des _ entre les mots !*")
    }
    
    
    else {
        message.channel.send("Vous n'avez pas inséré de dieu...")
    }

}
module.exports.help = {
    name: "stemple",
    aliases:["sprière","spriere","spray"]
}
