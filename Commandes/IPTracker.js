const Discord = require('discord.js');
const fetch = require('node-fetch');
const BaseUrl = "http://ip-api.com/json/"
const green = "#66FF00"
const red = "#FF0000"
const mauve = "#6600FF"





module.exports.run = (client, message,... args) => {
    const FullUrl = BaseUrl + args
    message.channel.send(FullUrl)

    let FindIp = async() => {
        await fetch(FullUrl)
            .then((response) => response.json())
            .then((data) => {
                const ip = data.query
                const NomPays = data.country
                const NomRegion = data.regionName
                const NomVille = data.city
                let EmbedOk = new Discord.RichEmbed()
                    .setTitle(`Informations pour l'ip suivante : ${ip}`)
                    .setColor(green)
                    .setDescription(`Nom  du pays : ${NomPays} \n Nom de la région : ${NomRegion} \n Nom de la ville : ${NomVille} \n Fournisseur d'accès internet : ${FAI}`)
                    .setFooter("Merci à ipapi pour son superbe api ! :heart:")
                message.channel.send(NomPays)
            })
            .catch((err) => message.channel.send(err))
           
    }
    FindIp()
}
module.exports.help = {
    name: 'searchip',
    aliases:["si", ""]
};