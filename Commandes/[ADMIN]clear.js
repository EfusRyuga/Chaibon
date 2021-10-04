const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    //le clear all
    message.channel.fetchMessages()
    .then(function(list){
         message.channel.bulkDelete(list);
     }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
}
module.exports.help = {
    name: "ka",
    aliases:["clear"]
}