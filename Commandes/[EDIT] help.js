const Discord = require("discord.js");


module.exports.run = (client, message, args) => {
    // cmdX = "``[NAME]`` : [DESCRIPTION] ``Alias`` [TOUS LES ALIAS] \n"
    cmd1 = "``Awake`` : Pour s'assurer que je ne fasse pas la sieste. ``Alias`` ??awake ; ??alive \n"
    cmd2 = "``Cannonhug`` : Pour que j'utilise mon canon distributeur d'amour. ``Alias`` ??cannonhug ; ??ch \n"
    cmd3 = "``Compliment`` : Pour que je complimente la personne de votre choix (n'oubliez pas de le @ !) ``Alias`` ??compliment ; ??compliments ; ??gentle \n"
    cmd4 = "``Hug`` : Pour que je vous des animaux tous mignons qui font des câlins ``Alias`` ??hug ; ??calin ; ??câlin \n"
    cmd5 = "``Insulte`` : Pour que j'insulte la personne de votre choix (n'oubliez pas de le @ !) ``Alias`` ??insulte \n"
    cmd6 = "``Invite`` : Pour que je vous suive sur le discord de votre choix ! ``Alias`` ??invite ; ??link \n"
    cmd7 = "``Monster`` : Je peux vous montrer des méchants monstre de MHW ``Alias`` ??monster ; ??monsters ; ??miaonstre ; monstre ; monstres \n"
    cmd8 = "``Palico`` : Je peux vous montrer des supers palicos de MHW ``Alias`` ??palico \n"
    cmd9 = "``RedPanda`` : Je peux vous montrer des panda roux tout mignons ``Alias`` ??redp ; ??redpanda \n"
    cmd10 = "``SoftTemple`` : Permet de faire votre prière au temple ``Alias`` ??stemple ; ??sprière ; ??spriere ; ??spray \n"
    cmd11 = "``Suggestion`` : Permet de faire des suggestions quant à mon apprentissage auprès de mon papa ! ``Alias`` ??suggest ; ??suggestion \n"
    cmd12 = "``Wolf`` : Je peux vous montrer des loups toubo ``Alias`` ??wolf ; ??loup \n"
    cmd13 = "``Patchnote`` : Je vous montre les notes de mes derniers apprentissage ! ``Alias`` ??patch ; ??maj ; ??apprentissage \n"
    cmd14 = "``DarkDotFail`` : Je peux vous donner le chemin pour accéder au darknet ! ``Alias`` ??darkdotfail ; ??darkdotfails ; ??dark.fail ; ??dark.fails ; ??ddf \n"
    cmd15 = "``CryptoValue`` : Je peux vous donner des informations sur certaines cryptomonnaies ! (attention à bien me préciser la crypto que tu veux, exemple : ??cp bitcoin) ``Alias`` ??cryptovalue ;  ??cp ; ??cpv\n" 

    message.channel.send("Vous avez demandé de l'aide pour les commandes, voici la liste : \n"+cmd1 +cmd2+cmd3+cmd4+cmd5+cmd6+cmd7+cmd8+cmd9+cmd10+cmd11+cmd12+cmd13+cmd14+cmd15)
}
module.exports.help = {
    name: "help",
    aliases:["aide"]
}
