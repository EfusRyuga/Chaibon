const Discord = require('discord.js');
const fetch = require('node-fetch');
const base_url = "https://api.coingecko.com/api/v3/coins/"
const green = "#66FF00"
const red = "#FF0000"
const mauve = "#6600FF"
const Cryptolist = [
    "bitcoin",
    "ethereum",
    "binancecoin",
    "cardano",
    "dogecoin",
    "ripple",
    "tether",
    "polkadot",
    "bitcoin-cash",
    "litecoin",
    "uniswap",
    "usd-coin",
    "chainlink",
    "stellar",
    "solana",
    "ethereum-classic",
    "vechain",
    "eos",
    "matic-network",
    "theta-token",
    "tron",
    "okb",
    "binance-usd",
    "wrapped-bitcoin",
    "filecoin",
    "monero",
    "shiba-inu",
    "neo",
    "aave",
    "terra-luna",
    "klay-token",
    "cosmos",
    "bitcoin-cash-sv",
    "iota",
    "compound-ether",
    "huobi-token",
    "pancakeswap-token",
    "dai",
    "tezos",
    "kusama",
    "ftx-token",
    "safemoon",
    "thorchain",
    "avalanche-2",
    "algorand",
    "cdai",
    "compound-usd-coin",
    "maker",
    "crypto-com-chain",
    "bittorrent-2"
]




module.exports.run = (client, message,... args) => {
    const full_url = base_url + args

    let CryptoData = async() => {
        await fetch(full_url)
            .then((response) => response.json())
            .then((data) => {
                const CryptoName = data.name
                const CryptoImage = data.image.small 
                const CryptoValue = data.market_data.current_price.eur
                const CryptoDate = data.genesis_date
                const CryptoHigh24 = data.market_data.high_24h.eur
                const CryptoLow24 = data.market_data.low_24h.eur
                const CryptoTwitterFollow = data.community_data.twitter_followers
               // message.channel.send("Nom de la devise : " + CryptoName)
                // message.channel.send("voici son prix actuel : " + CryptoValue + "€")
                let EmbedOk = new Discord.RichEmbed()
                    .setTitle("Information sur la devise demandée :")
                    .setColor(green)
                    .setFooter("Merci à coingecko pour son superbe api ! :heart:")
                    .setImage(CryptoImage)
                    .setDescription(`Nom de la devise : ${CryptoName} \n Prix actuel de la devise : ${CryptoValue}€ \n Cette devise existe depuis le ${CryptoDate} \n Prix le plus haut sur les dernières 24h : ${CryptoHigh24}€ \n Prix le plus bas sur les dernières 24h : ${CryptoLow24}€ \n Nombre de follower sur Twitter : ${CryptoTwitterFollow}`)
                message.channel.send(EmbedOk)
            })
            .catch((err) => console.log(err))
    }
    j = 0
    for (i = 0; i <= Cryptolist.length ; i++){
        if(args == Cryptolist[i]){
            CryptoData()
            j = 1
        }
        else if(args == "rawlist"){
        //    message.channel.send("Voici toutes les cryptos dont je connais les informations ! \n" + Cryptolist)
            let EmbedRawlist = new Discord.RichEmbed()
                .setTitle("Liste des devises que je connais")
                .setColor(mauve)
                .setDescription(Cryptolist)
                .setFooter("Attention à bien écrire le nom de la devise en minuscule !")
            message.channel.send(EmbedRawlist)
            break
        }
        else if(i == Cryptolist.length && j != 1){
            let EmbedError = new Discord.RichEmbed()
                .setTitle("Je ne connais pas la device !")
                .setColor(red)
                .setDescription("Meow je ne connais pas la cryptomonnaie que vous m'avez demandé :c")
                .setFooter("??cp rawlist pour avoir la liste de toutes celles que je connais !")
            message.channel.send(EmbedError)
         //   message.channel.send("désolé, je ne connais pas la cryptomonnaie que vous m'avez demandé, ??cp rawlist pour avoir la liste de toutes celles que je connais !")
        }
    }
}
module.exports.help = {
    name: 'cryptovalue',
    aliases:["cp", "cpv"]
};