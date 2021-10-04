module.exports = (client) => {
    client.user.setPresence({
       // status: "online", // online / idle / (dnd / invisible)
        game: {
            type: "PLAYING", //PLAYING ; WATCHING ; LISTENNING ; STREAMING
            name: "Meow ! écrit ??help"
        }
    });
    

}