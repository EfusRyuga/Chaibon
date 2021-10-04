const Discord = require('discord.js');
const fetch = require('node-fetch');
const base_url = ""
const ResearchByNameBaseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const green = "#66FF00"
const red = "#FF0000"
const mauve = "#6600FF"



// chercher du côté de first key -> get 1st attribute json

module.exports.run = (client, message,... args) => {
    const ResearchByNameFullUrl = ResearchByNameBaseUrl + args

    let CocktailResearchByName = async() => {
        await fetch(ResearchByNameFullUrl)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then((data) => {
                const CocktailName = data.drinks.strDrink
                const CocktailIngredient1 = data.drinks.strIngredient1
               // message.channel.send("Nom de la devise : " + CocktailName)
                // message.channel.send("voici son prix actuel : " + CocktailValue + "€")
                let EmbedOk = new Discord.RichEmbed()
                    .setTitle("Information sur le cocktail demandée :")
                    .setColor(green)
                    .setFooter("Merci à cocktailDB pour son superbe api ! :heart:")
                    .setDescription(`nom  = ${CocktailName} \n ingredient = ${CocktailIngredient1}`)
                message.channel.send(EmbedOk)
            })
            .catch((err) => console.log(err))
    }
    CocktailResearchByName()
}
module.exports.help = {
    name: 'cocktail',
    aliases:["ct", ""]
};