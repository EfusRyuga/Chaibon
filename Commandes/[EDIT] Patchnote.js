const Discord = require('discord.js');
const currentP = "5"; //valeur maximum du patch
/* squelette de l'annonce
("**Date**\n\n**Note du patch X** : \n\n ``-> Ajout de commandes :`` \n\n [??COMMANDE + ce qu'elle fait] \n\n ``-> Edit de commandes :`` \n\n  [??COMMANDE + raison]\n\n ``-> désactivation de commandes :`` \n\n [??COMMANDE + pourquoi] \n\n ``-> Commandes à venir :`` \n\n [INFOS] \n\n -> ``Contributeur :`` [Nom des contributeurs]")
*/
module.exports.run = (client, message, args) => {
    if (args == "" || args > currentP){
        message.channel.send("Veuillez entrer le patch que vous voulez voir, pour rappel, le patch courant = **??Patch"+"**"+" "+ "**"+currentP+"**"+" "+ "et le premier patch commence à 1")
    }
        else if (args =="0.0.1"|| args =="1"){
            //patchnote 0.0.1
            message.channel.send("**Note du patch 0.0.1** : \n\n ``-> Ajout de commandes :`` \n\n   ??RedP = image de panda roux \n   ??Patch = pour afficher le dernier patchnote \n   ??awake = vérification si le bot est bien online \n   ??9TF = le seul vrai renard, en image ! \n\n ``-> Edit de commandes :`` \n\n   ??hug = débug de certaines images + ajout d'autres \n\n ``-> désactivation de commandes :`` \n\n   ??ban ; ??kick ; ??stats qui comportaient des problèmes ou qui n'ont pas d'intérêt pour l'instant. \n\n ``-> Commandes à venir :`` \n\n Une commande qui ping et insulte gratos Hector")
        }
        else if (args =="0.0.2" || args =="2"){
            //patchnote 0.0.2
            message.channel.send("**Note du patch 0.0.2** : \n\n -> ``Rename du bot :``\n\n Terrible désillusion, c'était moi tout le temps derrière se bot. Grâce aux Miousyndicat j'ai obtenu le droit d'utiliser mon nom et une de mes photos de profil au lieu de me cacher derrière l'autre vulgaire nom :3 \n\n ``-> Ajout de commandes :`` \n\n ??I = Insulte le membre que vous avez ping, attention le bot n'insultera pas ses amis et est assez suceptible.. \n ??Wolf ooooh qu'il est beau ce louuuuup :3333 \n ??suggestion pour faire une suggestion de commande \n\n ``-> Edit de commandes :``\n\n  [NONE] \n\n ``-> désactivation de commandes :`` \n\n [NONE] \n\n ``-> Commandes à venir :`` \n\n à vous de faire ??suggestion :p \n\n ``-> Contributeur :`` Efus &  Luna ")  
        }
        else if (args == "0.0.3" || args =="3"){
            //patchnote 0.0.3
            message.channel.send("**03/02/21**\n\n**Note du patch 0.0.3** : \n\n``-> Ajout global :`` \n\n J'ai subis une amélioration ! Désormais je comprend la commande même si vous ne mettez pas de majuscule ou si vous en MeTTez N'iMpOrTE Où :) \n\n ``-> Ajout de commandes :`` \n\n ??invite : vous permet d'inviter Chaïbon sur vos discord ! \n ??compliment : permet de complimenter la personne de votre choix ! \n ??monstre : permet d'afficher un monstre de Monster Hunter \n ??palico : permet d'afficher le dessin ou la photo d'un Palico ! *miawéé* \n ??stemple : permet de prier la divinité voulue pour augmenter votre chance et améliorer votre karma !\n\n ``-> Edit de commandes :`` \n\n  ??patch : désormais vous pouvez voir les anciens patchs, à partir de maintenant ils seront datés !\n\n ``-> désactivation de commandes :`` \n\n [NONE] \n\n ``-> Commandes à venir :`` \n\n ??hardpray : qui sera comme stemple mais limité à 1x par semaine \n ??help qui vous permettra de vous retrouver avec toutes les commandes et les alias\n\n -> ``Contributeur :`` Efus")
        }
        else if (args == "0.0.4" || args == 4){
            //patchnote 0.0.4
            message.channel.send("**08/05/21**\n\n**Note du patch 0.0.4** : \n\n Durant mon long voyage j'ai appris une nouvelle chose ! Désormais je peut vous donner la liste des commandes grâce à ??help ou ??aide ``Contributeur :`` Efus")
        }
        else if (args == "0.0.5" || args == "current" || args == currentP){
            //patchnote 0.0.4
            message.channel.send("**18/05/21**\n\n**Note du patch 0.0.5** : Ajout de deux commandes ??cp et ??ddf écrit ??help pour avoir toutes les infos ! ``Contributeur :`` Efus")
        }
    else {
        message.channel.send("je n'ai pas compris l'apprentissage que vous voulez voir :x")
        return("end")
    }
}
module.exports.help = {
    name: 'patch',
    aliases:["maj", "apprentissage"]
}