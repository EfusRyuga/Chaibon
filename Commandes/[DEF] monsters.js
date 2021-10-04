const Discord = require("discord.js");
const answers = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg", //troll image of DT
    "https://tse3.mm.bing.net/th?id=OIP._1andSId80y-LHl9JjB6EgDLEs&pid=Api", //also a troll image but of hitler
    "https://i.pinimg.com/236x/04/15/b2/0415b2deb18090f41e5a1e825c33f02c.jpg",
    "https://i.pinimg.com/236x/1b/21/79/1b2179cd8d50e74ceb1c3c7f1d3d91b8.jpg",
    "https://i.pinimg.com/236x/6f/89/f0/6f89f019216e400d9296e67927811819.jpg",
    "https://i.pinimg.com/564x/a9/fa/62/a9fa62a3575e24ebed86948c856ba90f.jpg",
    "https://i.pinimg.com/564x/13/f6/5a/13f65a203f11e4c2cfe1650fe2516293.jpg",
    "https://i.pinimg.com/564x/c7/b6/1b/c7b61b40fd9d9d4d4ba7238cbfc8f5b9.jpg",
    "https://i.pinimg.com/564x/9c/80/76/9c80766449b0024ee02c37ed35312d30.jpg",
    "https://i.pinimg.com/564x/8e/b4/86/8eb4866053e82d462207970c6075e03e.jpg",
    "https://i.pinimg.com/564x/0c/83/55/0c8355c7304b1434a0024f5362b9f8e9.jpg",
    "https://i.pinimg.com/564x/2e/77/7f/2e777fd138b9abbb966f244bf0e00eca.jpg",
    "https://i.pinimg.com/564x/74/23/3c/74233c85c8590756f0614818379bad51.jpg",
    "https://i.pinimg.com/564x/a1/4a/53/a14a53e7c3d7aca47bd3d155f1ec6e01.jpg",
    "https://i.pinimg.com/564x/3c/e1/d9/3ce1d9d2cbab8d28d69a465b14010ce0.jpg",
    "https://i.pinimg.com/564x/7e/c0/b6/7ec0b6c5dee7716639340e58cee13e7a.jpg",
    "https://i.pinimg.com/564x/13/7d/3d/137d3dd97c77942dae28fea97bc96105.jpg",
    "https://i.pinimg.com/564x/3f/c7/dc/3fc7dcc9c23b3397bc2b3850922eaed3.jpg",
    "https://i.pinimg.com/564x/6f/42/14/6f421405521ceb934759177226ea56eb.jpg",
    "https://i.pinimg.com/564x/4d/a8/41/4da8417c8f3f3172f5b766611d0a88c8.jpg",
    "https://i.pinimg.com/564x/1b/21/79/1b2179cd8d50e74ceb1c3c7f1d3d91b8.jpg",
    "https://i.pinimg.com/564x/88/2c/5a/882c5a3acc10709dcc156ddee95b1826.jpg",
    "https://i.pinimg.com/564x/cb/ac/b8/cbacb823fbb578446b3a8a1dc16090e2.jpg",
    "https://i.pinimg.com/564x/cc/9e/f2/cc9ef27e0ad136ddb7eadfce316f685c.jpg",
    "https://i.pinimg.com/564x/40/ff/c9/40ffc9e32eaf1f003b3a387d88fe536c.jpg",
    "https://i.pinimg.com/564x/f2/07/9d/f2079d697e863bcfd3ba903174edcec3.jpg",
    "https://i.pinimg.com/564x/59/0f/ab/590fab508c8af85d0be43a13441c5c62.jpg",
    "https://i.pinimg.com/564x/6e/20/50/6e2050edb2a0adaa4210faf557d924ea.jpg",
    "https://i.pinimg.com/564x/02/00/77/02007776d8af4e8dcaec30cbeb1872b9.jpg",
    "https://i.pinimg.com/564x/88/a9/78/88a978dd04950f2e054ae33c3e752b3d.jpg",
    "https://i.pinimg.com/564x/d4/a3/19/d4a31969bcaf60bfcdd5910ecc833795.jpg",
    "https://i.pinimg.com/564x/d7/21/9a/d7219a86b8226526c73eed98e9ab4aa9.jpg",
    "https://i.pinimg.com/564x/1d/61/3f/1d613fb2a75406b401756404d6967e20.jpg",
    "https://i.pinimg.com/564x/b1/54/6f/b1546feff1f5b3f192b597202ef3a1ca.jpg",
    "https://i.pinimg.com/564x/a2/7f/7a/a27f7a3b580b03f80e74c95b6d0591c0.jpg",
    "https://i.pinimg.com/564x/2e/22/32/2e22322e79d8abbed718ffbf5876b86e.jpg",
    "https://i.pinimg.com/564x/25/d5/07/25d5070c0bf42c4653ecf0fb3571cf0f.jpg",
    "https://i.pinimg.com/564x/ed/4e/e4/ed4ee439ef252838dd6bfd60f4a9787b.jpg",
    "https://i.pinimg.com/564x/ff/6a/76/ff6a764a5f6b1190fb7ab9d3a28f3bf3.jpg",
    "https://i.pinimg.com/564x/45/10/12/451012afc185718f998048f285f3e0a1.jpg",
    "https://i.pinimg.com/564x/03/85/e6/0385e64073ee7c18e4fc44ca4902076c.jpg",
    "https://i.pinimg.com/564x/3e/13/dc/3e13dc3d8175c2a96cb03960de0751d0.jpg",
    "https://i.pinimg.com/564x/53/10/60/531060f709fa05b54837165ca7dffcc9.jpg",
    "https://i.pinimg.com/564x/5c/62/c0/5c62c0848f341aa149bea8cd47881d19.jpg",
    "https://i.pinimg.com/564x/34/88/7a/34887aaf4eb5ebe0122964843336d087.jpg",
    "https://i.pinimg.com/564x/cc/b2/e6/ccb2e6fe17879a684b5548812bc9a52e.jpg",
    "https://i.pinimg.com/564x/95/fc/11/95fc113b9221fbc5745bfd123adeb337.jpg",
    "https://i.pinimg.com/564x/ac/45/fb/ac45fbf98aad8552e02edf651fbc8e25.jpg",
    "https://i.pinimg.com/564x/4c/78/51/4c7851001bd1b0fe69c391e1d08050cf.jpg",
    "https://i.pinimg.com/564x/4f/e8/90/4fe890efbd74e09048e3d0bfe778cbcf.jpg",
    "https://i.pinimg.com/564x/28/d7/aa/28d7aa3901fc7568a5ac16007ec8ea57.jpg",
    "https://i.pinimg.com/564x/25/31/fe/2531fed0b2b00867bea60672f4caa2b4.jpg",
    "https://i.pinimg.com/564x/7f/2b/61/7f2b61086adecf8512879143e7172dda.jpg",
    "https://i.pinimg.com/564x/a2/59/23/a25923f45075883307b8ca8ac7845cbb.jpg",
    "https://i.pinimg.com/564x/4f/78/18/4f7818951524e09249c57dc5aea9c8e9.jpg",
    "https://i.pinimg.com/564x/a2/4a/73/a24a730370db84d4360a7287557edce5.jpg",
    "https://i.pinimg.com/564x/8a/0c/51/8a0c515d18b45895de557c345a2fbb17.jpg",
    "https://i.pinimg.com/564x/b4/83/bd/b483bdc3ae0430443143c4f8a571167f.jpg",
    "https://i.pinimg.com/564x/c7/b6/1b/c7b61b40fd9d9d4d4ba7238cbfc8f5b9.jpg",
    "https://i.pinimg.com/564x/56/c6/a5/56c6a52c107588dee7aba2b16b237f16.jpg",
    "https://i.pinimg.com/564x/c5/a8/48/c5a84847f6ba26db86c8752d51253c25.jpg",
    "https://i.pinimg.com/564x/06/de/19/06de194fa1d3a1c66d44370142bc5d50.jpg",
    "https://i.pinimg.com/564x/81/fa/c9/81fac9bdcd23f0dda72d191a3e44aa40.jpg",
    "https://i.pinimg.com/564x/d4/3e/9f/d43e9f1036ac6736c5b6e6672722eeab.jpg",
    "https://i.pinimg.com/564x/de/8a/1c/de8a1c5a2f068e4d4ebc7ada71d0a9c3.jpg",
    "https://i.pinimg.com/564x/e9/72/da/e972da6da2e3cd3994716cb004a2fce6.jpg",
    "https://i.pinimg.com/564x/1e/88/b8/1e88b814dbe89d60408e5211e0e52a77.jpg",
    "https://i.pinimg.com/564x/c9/11/4b/c9114b76c25062e6fd07705bf56368f2.jpg",
    "https://i.pinimg.com/564x/25/23/b9/2523b969326e6eefdb6dc0f05a1d6204.jpg",
    "https://i.pinimg.com/564x/c3/34/ed/c334edebe774005c105baef4c475f8ec.jpg",
    "https://i.pinimg.com/564x/8e/8e/7a/8e8e7ae03d5b404333155255dbb52b0f.jpg",
    "https://i.pinimg.com/564x/4c/21/79/4c2179631c143115d0bde1dd2378e030.jpg",
    "https://i.pinimg.com/564x/46/05/be/4605bec5076e484fba4a10927196a970.jpg",
    "https://i.pinimg.com/564x/bf/99/2b/bf992b555c67774cb1f283d02c63407a.jpg",
    "https://i.pinimg.com/564x/39/09/4a/39094acad58fd9dcced9cbfc3f770be4.jpg",
    "https://i.pinimg.com/564x/64/01/77/64017732662410071280608167fa7a2a.jpg",
    "https://i.pinimg.com/564x/55/a7/b8/55a7b8883403ee80a5565baf248cbff1.jpg"
]
 
module.exports.run = (bot, message, args) => {
 

 
    const answer = answers[Math.floor(Math.random() * answers.length)];
    let specialEmbed = new Discord.RichEmbed()
    .setTitle("Attention, c'est un très gros miaonstre !")
    .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg")
    let specialEmbed2 = new Discord.RichEmbed()
    .setTitle("Attention, c'est un très gros miaonstre !")
    .setImage("https://tse3.mm.bing.net/th?id=OIP._1andSId80y-LHl9JjB6EgDLEs&pid=Api")
    
    let embeddog = new Discord.RichEmbed()
    .setTitle("Oh un miaonstre !")
    .setImage(answer)

    if(answer == "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg" ){
        message.channel.send(specialEmbed)
    }
    if (answer == "https://tse3.mm.bing.net/th?id=OIP._1andSId80y-LHl9JjB6EgDLEs&pid=Api"){
        message.channel.send(specialEmbed2)
    }
    else{
    message.channel.send(embeddog);
    }
 
}
module.exports.help = {
    name: "monster",
    aliases:["monsters", "miaonstre","monstre","monstres"]
}