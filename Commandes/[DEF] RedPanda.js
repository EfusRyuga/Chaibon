const Discord = require("discord.js");
const answers = [
    "https://pixnio.com/free-images/2017/03/02/2017-03-02-23-43-17.jpg",
    "https://static.parade.com/wp-content/uploads/2018/09/Red-Panda-FTR.jpg",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/9/2017/05/red-pandas-2-FT-BLOG0517.jpg",
    "https://cdn.wallpapersafari.com/10/11/NVUepc.jpg",
    "https://binderparkzoo.org/wp-content/uploads/2017/10/red-panda-13-1024x683.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Panda_Hugs!_(25075783470).jpg",
    "http://2.bp.blogspot.com/-bBCuRrUXpK4/UFb2_pkm6uI/AAAAAAAAArI/rYYCM2BmENs/s1600/Red%2BPanda%2BWalking.jpg",
    "https://fsmedia.imgix.net/90/1d/68/08/cb0b/4c4c/8076/dbf5fe9b2462/a-really-cute-red-panda.jpeg?rect=0,232,3937,1967&dpr=1.5&auto=format,compress&q=75",
    "https://2.bp.blogspot.com/-g-4l-D8y4H8/U8gTdk4GmSI/AAAAAAABA_4/MWQBjg77OiQ/s1600/cute-red-panda-03.jpg",
    "http://getwallpapers.com/wallpaper/full/c/1/4/1128782-vertical-red-panda-wallpapers-3840x2160.jpg",
    "https://2.bp.blogspot.com/-orCdm1LraXA/U8gTdfhf5JI/AAAAAAABA_0/PYlKgHLyaUY/s1600/cute-red-panda-02.jpg",
    "https://www.cutenessoverflow.com/wp-content/uploads/2014/04/red-panda-4.jpg",
    "https://i.dailymail.co.uk/i/pix/2016/02/04/11/30DF694000000578-0-image-m-17_1454585285886.jpg",
    "https://i.redd.it/9xbevd5i77a31.jpg",
    "http://2.bp.blogspot.com/-d2pKMxx6cZE/U8gTlJC49UI/AAAAAAABBAQ/OJzZc_JNf_M/s1600/cute-red-panda-06.jpg",
    "https://static.pexels.com/photos/145985/pexels-photo-145985.jpeg",
    "https://www.cutenessoverflow.com/wp-content/uploads/2014/04/red-panda-17.jpg",
    "https://monotonundminimal.files.wordpress.com/2011/07/mg_2439.jpg",
    "http://3.bp.blogspot.com/-yaj2AVzRU8c/U8gTnPyU1YI/AAAAAAABBAc/eT0ZXhnbNsQ/s1600/cute-red-panda-07.jpg",
    "https://bloximages.chicago2.vip.townnews.com/journalstar.com/content/tncms/assets/v3/editorial/8/c2/8c265801-e92c-5858-a57c-d796914ead6a/555cf14440eac.image.jpg",
    "https://cdn.abcotvs.com/dip/images/957491_red-panda-6.jpg?w=1600",
    "https://elenasquareeyes.files.wordpress.com/2017/04/red-panda.jpg",
    "http://3.bp.blogspot.com/-yaj2AVzRU8c/U8gTnPyU1YI/AAAAAAABBAc/eT0ZXhnbNsQ/s1600/cute-red-panda-07.jpg",
    "https://i.pinimg.com/736x/56/d1/72/56d172e5268bcfce6036d795bc4ce4b6--baby-red-pandas-giant-pandas.jpg",
    "https://mmufutures.files.wordpress.com/2015/03/red-panda-12.jpg",
    "http://i.huffpost.com/gen/1296724/images/o-BABY-RED-PANDAS-facebook.jpg",
    "https://cml.sad.ukrd.com/image/697711-893x960.jpg",
    "https://cdn.wallpapersafari.com/7/23/4sf6bU.jpg",
    "http://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/redpanda-339440.jpg",
    "https://www.earthtouchnews.com/media/574380/-2-the-new-arrival-was-born-to-proud-parents-plocia-and-chris-she-will-be-cared-for-by-plocia-for-the-first-year-of-her-life.jpg",
    "https://www.earthtouchnews.com/media/574384/-1-belfast-zoo-is-celebrating-the-first-red-panda-cub-to-be-born-at-the-cave-hill-site-in-18-years-_gallery    large.jpg",
    "https://i.ytimg.com/vi/kOH27QkTVv4/maxresdefault.jpg",
    "https://d.ibtimes.co.uk/en/full/1460971/baby-red-panda-cubs.jpg?w=400",
    "https://www.critterbabies.com/wp-content/uploads/2014/02/red-panda-04.jpg",
    "https://www.syracuse.com/resizer/PpfbmfAuq2hjbZJu13OJ-Juqwkc=/1200x0/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.syracuse.com/home/syr-media/width2048/img/zoo/photo/2018/08/01/baby-red-pandas-7-31-18-3jpg-64f6d06b4508495cjpg-c8212a7c7a8964e5.jpg",
    "https://patch.com/img/cdn20/users/22906546/20181227/043814/styles/raw/public/processed_images/unnamed_2-1545945947-3712.jpg",
    "https://external-preview.redd.it/_2Hu7Q0kq4Tv1QFM3a5K5K8HwnMIMXixP1HzUN5rZPc.jpg?s=98f0f7f75b3246bfa3ea80f81dc8f32dd98c96d0",


]
 
module.exports.run = (bot, message, args) => {
 

 
    const answer = answers[Math.floor(Math.random() * answers.length)];
 
    let embeddog = new Discord.RichEmbed()
    .setTitle("Attaque de Panda Roux !")
    .setImage(answer)
 
    message.channel.send(embeddog);
 
}
module.exports.help = {
    name: "redp",
    aliases:["redpanda"]
}