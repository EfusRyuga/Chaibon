const Discord = require('discord.js');
const link1 = "||https://mega.nz/file/YphXgSJZ#NRn1ciK00nJEwyI-JecULz-RuXHR4F5443_tHYbMEcA||" //lève toi et code
// ??df ||ESYH_files cd /darkfiles /library /fichier1.epub||
// message.author.send()
//??df ||ESYH_files cd /darkfiles /library /LTEC.epub||

module.exports.run = (client, message, args) => {
    message.delete()
    var id_user = 999
    if(args[0] != "||ESYH_files"){
        return("end")
    } 
    if(args[0] == "||ESYH_files"){
        id_user = message.author.id
        if(args[1] == "cd"){
            if(args[2] == "/darkfiles" || args[2] == "/hidefiles"){
                if(args[3] == "/books" || args[3] == "/book" || args[3] == "/library"){
                    if(args[4] == "/LTEC.epub||"){
                        message.author.send("Please use a vpn or ToR before copy and paste the link :)")
                        message.author.send('there is the file :  "Lève toi et code" - Rabbin Des Bois \n' + link1)
                        client.channels.get("811908651559419924").send('cet utilisateur à éxécuté un commande pour obtenir un lien ("lève toi et code - livre - Rabbin Des Bois") id_user == ' + id_user)
                        return("end")
                    }
                }
            }
        }
        else if(args[1] == "-way" || args[1] == "-w"){
            if(args[2] == "book||" || args[2] == "books||" || args[2] == "library||"){
                id_user = message.author.id
                client.channels.get("811908651559419924").send("cet utilisateur a obtenu l'arborescence pour accéder à la librairie. id_user == " + id_user)
                message.author.send("This is how you can get library files : \n ??df ||ESYH_files cd /darkfiles (or /hidefiles) /books (or /book or /library) /[fichier.extension]||")
                return("end")
            }
        }
        else if(args[1] == "-ls"){
            if(args[2] == "book||" || args[2] == "books||" || args[2] == "library||"){
                id_user = message.author.id
                client.channels.get("811908651559419924").send("cet utilisateur a obtenu la liste des files présentes dans la bibliothèque. id_user == " + id_user)
                message.author.send('This is all the files you can find in the library : \n lève toi et code.epub = LTEC.epub \n')
                return("end")
            }
        }
    }
    else{
        return("end")
    } 
};
module.exports.help = {
    name: 'df',
    aliases:[""]
};