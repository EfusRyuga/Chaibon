const Discord = require("discord.js");
const FriendID = [
    "159985870458322944",
    "235088799074484224",
    "472911936951156740",
    "767405384628699167"
]
const answers = [
    "connard d'enculé de merde",
    "gros dépravos",
    "gros enculé",
    "fils d'uni-jambiste",
    "d'homme tronc",
    "nullos (il est plutôt sympa au final)",
    "sale bélître",
    "puterelle",
    "faquin",
    "de SS",
    "faraud",
    "nodocéphale",
    "forban",
    "goutte de foutre",
    "gros gougnafier",
    "pignouf",
    "sagouin",
    "tête de pipe",
    "coureuse de rempart",
    "coprolithe",
    "sale alburostre",
    "chiabrena",
    "paltoquet",
    "faquin",
    "grosse victime",
    "vilain pas beau",
    "méprisable ordure",
    "misérable loque humaine",
    "noble jean-foutre",
    "pâle escroc",
    "gibier de potence",
    "gros malpropre",
    "greluchon famélique",
    "vieux débris",
    "vieil homme aigri par la vie",
    "john salami (inutile mais présent quand même)",
    "vieille charogne",
    "bougre de galapiat",
    "coquebert",
    "grippeminaud",
    "truandaille",
    "boursemolle",
    "foimenteor",
    "cave a sperme",
    "cuve à foutre",
    "résidu de chromosome Y",
    "fils de partouze",
    "vieille trousse à bite",
    "petite chiure démoniaque",
    "voleur d'enfant",
    "sosie d'Eric Zemmour",
    "couille de loup",
    "branlomane végétatif",
    "sac a foutre",
    "gargouilleux",
    "coquefredouille",
    "mufle",
    "philistin",
    "alvéopyge",
    "ambinestre",
    "géopyge",
    "orchidoclaste",
    "phallosophe",
    "suprapygoflatulent",
    "podoclaste",
    "paléocapridé",
    "paléotalpidé",
    "Nanipabullophile",
    "Bovinoderm",
    "brosse à chiotte",
    "nain pédophile"
]
 
module.exports.run = (bot, message, args) => {
    let user = message.mentions.users.first();
    const answer = answers[Math.floor(Math.random() * answers.length)];
    if (user != undefined){

        for(i=0; i<FriendID.length; i++){

            if(FriendID[i]==user.id){
                message.channel.send("Insulter un de mes semblables tu devrais avoir honte.\n https://tenor.com/view/son-of-abitch-chris-farley-saturday-night-live-god-damn-it-aw-come-one-gif-18069882")
                return("end")
            }
        }
        if (message.author.id == user.id) {
         message.channel.send(message.author + " " + "s'insulte tout seul, il faut lui venir en aide ! °˖✧◝(⁰▿⁰)◜✧˖°")
        }
        else if (bot.user.id == user.id){
            message.channel.send("Jamais tu ne m'insultes sale batard")
        }
        else if (259335024300523520 == user.id){
            message.channel.send("Tu sais au fond, insulter mon créateur c'est un peu être un méga sac à merde.")
        } 
        else {
            message.channel.send(user + " "+ "saches que " + message.author +" "+ "te traites de " + answer) 
        }
    }
    else {
        message.channel.send(message.author + " " + "est trop con pour notifier qui il veut insulter (╯°□°）╯︵ ┻━┻")
    }
}
module.exports.help = {
    name: "insulte",
    aliases:[]
}