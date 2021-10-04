const Discord = require('discord.js');



module.exports.run = (client, message,... args) => {
    message.channel.send("Mmh Tu veux que je te suives dans ton voyage, et c'est bien normal ! Mais pour cela il va falloir que tu me montre sur la carte notre destination ! \n https://discord.com/oauth2/authorize?client_id=718041303207641089&scope=bot&permissions=175104")
}
module.exports.help = {
    name: 'invite',
    aliases:["link"]
};