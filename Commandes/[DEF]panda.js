const Discord = require("discord.js");
const answers = [
    "https://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/g/gi/giant_panda/giant_panda_1.jpg",
    "http://www.traveladventures.org/countries/china/images/giant-panda08.jpg",
    "http://img689.imageshack.us/img689/7927/pandafreeanimalpictures.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.OK6gOgKIOediTZnysCXAVQHaE7&pid=Api",
    "https://d279m997dpfwgl.cloudfront.net/wp/2015/05/0520_panda-bamboo.jpg",
    "https://dailytimes.com.pk/assets/uploads/2020/11/30/2019-11-19-beibeipanda.jpg",
    "https://www.laviezine.com/wp-content/uploads/2015/12/Bifengxia-Giant-Panda-Base-1024x679.jpg",
    "https://pixfeeds.com/images/topic/703/1200-703-giant-panda-bears-photo1.jpg",
    "http://img100.imageshack.us/img100/6150/freegiantpandaspictures.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.zwg3wez1z1a3SdtfEq6WngHaE6&pid=Api",
    "http://www.reportingday.com/wp-content/uploads/2018/07/Cute-Giant-Panda-HD-Wallpapers-1.jpg",
    "https://www.hdwallpaper.nu/wp-content/uploads/2015/08/Panda_wallpaper_036.jpg",
    "https://c.tribune.com.pk/2016/09/panda-9.jpg",
    "https://kids.sandiegozoo.org/sites/default/files/2017-06/panda-01-tree.jpg",
    "https://d3jkudlc7u70kh.cloudfront.net/panda-bamboo-fact.jpg",
    "https://cdn.mos.cms.futurecdn.net/bSmggZrKXFtDe6z7A35Us7-1200-80.jpg",
    "https://i.pinimg.com/originals/4a/5b/89/4a5b8920539c7f188f4c8469d5c937dc.jpg",
    "https://earthwiseradio.org/wp-content/uploads/2016/06/giant-pandas-1024x1024.jpg",
    "http://www.todayifoundout.com/wp-content/uploads/2013/10/giant-panda.jpg",
    "https://www.sciencenews.org/wp-content/uploads/2019/01/013019_JR_panda-diet_feat.jpg",
    "https://www.babyanimalzoo.com/wp-content/uploads/2012/07/baby-panda-games.jpg",
    "https://4.bp.blogspot.com/-sVfH-vS8XUs/UQFm21NTCTI/AAAAAAAAEU0/S48W9Ob-o3c/s1600/Panda-info-and+images+02.jpg",
    "https://getwallpapers.com/wallpaper/full/7/0/3/230762.jpg",
    "https://d3jkudlc7u70kh.cloudfront.net/panda-bamboo-fact.jpg",
    "https://wallpapertag.com/wallpaper/full/7/7/b/434891-baby-panda-wallpapers-2560x1600-for-hd.jpg",
    "https://i.pinimg.com/originals/e0/3d/5b/e03d5b812b2734826f76960eca5b5541.jpg",
    "https://inspire.amolife.com/wp-content/uploads/2014/06/panda-10.jpg",
    "https://getwallpapers.com/wallpaper/full/a/5/3/723414-download-panda-wallpaper-1920x1200.jpg",
    "https://wallpapercave.com/wp/C9SA6TC.jpg",
    "https://stonehurstplace.com/wp-content/uploads/2019/05/zoo-atlanta.jpg",
    "https://i.ytimg.com/vi/CSA0sG5jygw/maxresdefault.jpg",
    "https://4.bp.blogspot.com/-2PuKtHBNHR8/Tp1qBW-wcEI/AAAAAAAADf8/L7MKrZ6565k/s1600/Panda_Bear_Eating_Bamboo_Wallpaper_Vvallpaper.Net.jpg"
]
 
module.exports.run = (bot, message, args) => {

    const answer = answers[Math.floor(Math.random() * answers.length)];
 
    let embed = new Discord.RichEmbed()
    .setTitle("j'adore le bambou ! :heart:")
    .setImage(answer)
 
    message.channel.send(embed);
};
module.exports.help = {
    name: 'panda',
    aliases:["bambou"]
};