const Discord = require("discord.js");
const FriendID = [
    "159985870458322944",
    "235088799074484224",
    "472911936951156740",
    "767405384628699167"
]
const answers = [
    "j'aime tes cheveux soyeux",
    "J'ai baisé ta mère, elle est grave bonne",
    "Tu es extrêmement serviable",
    "Tu es une bonne et belle personne",
    "Ta gentillesse me touche profondément",
    "Tu as été d’un grand secours",
    "Ton opinion est sans prix",
    "Je parie que les enfants t’adorent",
    "Tu as le courage de tes idées",
    "Tu es absolument éblouissant(e)",
    "Tu es tellement perspicace",
    "Tu sais tirer le meilleur des gens",
    "Tu as un esprit vif",
    "T'es une perle",
    "Je pense souvent à toi nue sous la douche..",
    "Tes seins sont bien gonflés que j'ai envie de faire *bleut bleut* \n https://youtu.be/JR0yDx5OeBY?t=108",
    "Tu sais comment parler à une femme",
    "Tu peux tout réussir dans la vie !",
    "Le monde serait meilleur s’il y avait plus de personnes comme toi",
    "Tu es formidable",
    "J’aime pouvoir te faire confiance",
    "Tu prends des bonnes initiatives",
    "Tu es attentif au moindre détail",
    "Ton travail est inégalable",
    "Tes résultats sont impressionnants",
    "Pour être honnête, je suis jaloux de vos compétences",
    "Tu as dépassé toutes les espérances !",
    "J’adore ce que je ressens quand je suis avec toi",
    "Je me sens en sécurité avec toi",
    "Tu m’as manqué",
    "Tu as un excellent goût (même si tu es un peu trop salé.. <3)",
    "Tu es terriblement sexy",
    "Je me demande ce que je ferais sans toi..",
    "Tu es une personne qui voit le verre à moitier plein",
    "Tu me fais toujours sourire",
    "Tu es une bouffée d'air frais",
    "Merci pour ta bienveillance",
    "Merci d'être toi",
    "Jte très belle aujourd'hui",
    "Mec t'es beau comme un Julien",
    "T'as des jolis genoux",
    "Tes tibias sont kiffant",
    "Tu as une de ces fosses cubitales !",
    "Si mes yeux pouvaient avoir des orgasmes jpartirai en faciale dans ta gueule",
    "J'adore tes cheveux soyeux quand ils volent dans le vent",
    "j'ai envie de me glisser dans ton duvet la nuit pour que tu puisses me tenir chaud",
    "J'adore tes compliments, il me vont droit au coeur",
    "J'aime ton côté spontané",
    "Je ne peux m'empecher de penser à toi",
    "Tu es tout pour moi",
    "Ce serait de la torture que de te perdre",
    "Tu m'inspires",
    "Ton existence me réconcilie avec la vie",
    "Tu rends la monogamie facile",
    "Tu fais que je veux être une meilleure personne",
    "Tu es un elixir de vie",
    
]
 
module.exports.run = (bot, message, args) => {
    let user = message.mentions.users.first();
    const answer = answers[Math.floor(Math.random() * answers.length)];
    if (user != undefined){
        

        for(i=0; i<FriendID.length; i++){

            if(FriendID[i]==user.id){
                message.channel.send("tu mets la mifa super bien.. :smiling_face_with_3_hearts: \n https://tenor.com/view/baby-yoda-ilove-you-heartbeat-heart-love-gif-15951417")
                return("end")
            }
        }
        if (message.author.id == user.id) {
         message.channel.send(message.author + " " + "se flatte tout seul... \n https://tenor.com/view/obama-what-seriously-wtf-gif-12341428")
        }
        else if (bot.user.id == user.id){
            message.channel.send("*bruit de ronronnement puissant* \n https://tenor.com/view/kitty-highkitten-mdmacat-cat-happykitty-gif-6198981")
        }
        else if (user.id == 259335024300523520 && message.author.id != 652955409350524949){
            message.channel.send("Yes, sympa pour lui mais le caresse pas trop dans le sens du poil quand même..")
        } 
        else if (message.author.id == 652955409350524949 && user.id == 259335024300523520) {
            message.channel.send(user + " saches que ta copine t'aime vraiment très très très fort.. :heart: :smiling_face_with_3_hearts:")
        }
        else {
            message.channel.send(user + " "+ "saches que " + message.author +" "+ "te flatte : " + answer) 
        }
    }
    else {
        message.channel.send(message.author + " " + "à vraiment envie de partager des flatteries mais il à oublié de dire à qui..")
    }
};
module.exports.help = {
    name: 'compliment',
    aliases:["compliments","gentle"]
};