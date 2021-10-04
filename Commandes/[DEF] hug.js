const Discord = require("discord.js");
const answers = [
    "https://www.holidogtimes.com/wp-content/uploads/2017/06/animals-hugging-lifestyle-12.jpg?2e4e73&2e4e73",
    "http://serpstar.org/wp-content/uploads/2013/10/panda-google-panda.jpg",
    "https://www.lovethispic.com/uploaded_images/19559-Panda-Hug.jpg",
    "http://images2.fanpop.com/images/photos/7500000/huh-pandas-7507730-800-654.jpg",
    "https://c2.staticflickr.com/8/7407/9134367643_5c88e01afc_b.jpg",
    "https://i.ytimg.com/vi/ppND1vtqP8I/maxresdefault.jpg",
    "https://www.wired.com/wp-content/uploads/2014/10/cathug.jpg",
    "http://3.bp.blogspot.com/-0MMKPJmqlWc/T5rUPrxEC6I/AAAAAAAAIpk/dDv-o1KTlqM/s640/cute-animal-hugging-pictures-011.jpg",
    "http://4.bp.blogspot.com/-EvhxPx3Cbjc/ULdjxxPsXcI/AAAAAAAAv7c/4jlu3Il6d-c/s1600/kitten_hugging_techniques_19.jpg",
    "http://www.vincegolangco.com/wp-content/uploads/2010/10/cathugcuddle_thumb.jpg",
    "http://t03.deviantart.net/a_7doVwQqIbkQuyBj5GeTcMXbPM=/300x200/filters:fixed_height(100,100):origin()/pre00/79d8/th/pre/f/2008/020/d/2/panda_kisses_by_chickensmoothie.png",
    "http://1.bp.blogspot.com/-Xg3IqU1k20I/T5rTsY87miI/AAAAAAAAIoQ/Wlo1ggab0_I/s1600/cute-animal-hugging-pictures-009.jpg",
    "https://www.trendfrenzy.net/wp-content/uploads/2016/03/animals-hugging-12.jpg",
    "http://getwallpapers.com/wallpaper/full/5/f/2/777746-lion-cub-wallpaper-1920x1080-iphone.jpg",
    "https://viralscape.com/wp-content/uploads/2014/04/animals-hugging-11.jpg",
    "http://4.bp.blogspot.com/-93dhQ2n8UOo/T5rTsJ5rmCI/AAAAAAAAIoE/LSvBo8if1lI/s1600/cute-animal-hugging-pictures-008.jpg",
    "http://4.bp.blogspot.com/-TfrS_k9iQ3A/Tx6ksf3bOuI/AAAAAAAAA0k/9Ms3CjKgKo0/s1600/2-cute-animal-hugs-4-6-7-8-9-3-2-5-4-2-3-7-5-4-1.png",
    "http://4.bp.blogspot.com/-_un7MRT5Mjo/VAczufQMI0I/AAAAAAAADb0/I7oZwU8cF1k/s1600/funadress%2Banimals%2Bhugging%2B3.jpg",
    "http://4.bp.blogspot.com/-BbgV2Q1QKAw/T5rUtBqr6wI/AAAAAAAAIqU/OUIXNiCj4dE/s640/cute-animal-hugging-pictures-020.jpg",
    "https://4.bp.blogspot.com/-3E6zChdG-Qk/VAczm4VoPVI/AAAAAAAADbY/yXJeB1U7034/s1600/funadress%2Banimals%2Bhugging%2B13.jpg",
    "https://hips.hearstapps.com/ame-prod-goodhousekeeping-assets.s3.amazonaws.com/main/galleries/22257/International_hug_day_-_cute_animals_hugging_-_baby_husky_puppies_-_pshundar_-_good_housekeeping_uk.jpg?resize=480:*",
    "http://2.bp.blogspot.com/-3LQpRarZSe0/UiQW1gWUeNI/AAAAAAAAERc/8WvjIBgs_20/s400/Funny-Animals-Hug.jpg",
    "http://4.bp.blogspot.com/-yciiFlVrQ20/UejZ6OxscBI/AAAAAAAAECc/MLv-eX1Wc_E/s1600/Funny-Animal-Love-Came-Back.jpg",
    "http://3.bp.blogspot.com/-aXl51FYLijM/VAczr4un6dI/AAAAAAAADbk/MVy-XCK0xcc/s1600/funadress%2Banimals%2Bhugging%2B12.jpg",
    "http://1.bp.blogspot.com/-NSQ1CG3-VYY/T5rUOXUDaJI/AAAAAAAAIo0/KdmRisKs5Fg/s1600/cute-animal-hugging-pictures-012.jpg",
    "http://wildlife.cslingphotography.com/wp-content/uploads/2015/11/csling_japan_snowmonkey_grouphug.jpg",
    "https://images2.alphacoders.com/274/thumb-1920-274920.jpg",
    "http://1.bp.blogspot.com/_ENSshZvU5sk/TQxdJjzoq1I/AAAAAAAAAXY/4wAv-E2e1Ak/s1600/67784_1612208592738_1461980501_31630424_8212511_n.jpg",
    "https://i.pinimg.com/736x/03/8c/14/038c1496de1f1aa2e1d3a31b0ae60b74.jpg",
    "https://i.pinimg.com/736x/3c/7b/62/3c7b6286c84e34a8ff1e29908a9fe8b8--big-hugs-happy-friday.jpg",
    "http://static.boredpanda.com/blog/wp-content/uploads/2015/02/animals-love-couple-4__880.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/591/498/original/vector-cute-penguins-happy-couple-hug.jpg",
    "https://dnl7t01l0fo05.cloudfront.net/wp-content/uploads/2017/06/animals-cuddling-lifestyle-11.jpg",
    "http://media2.intoday.in/indiatoday/images/Photo_gallery/6_021215035025.jpg",
    "https://tranquilmonkey.com/wp-content/uploads/2017/01/heartwarming-photos-animals-hugging-each-other-4.jpg",
    "http://4.bp.blogspot.com/-7oh6boi70IQ/T_YDPW7pAQI/AAAAAAAABr0/dyf0rsNFB_0/s640/cute-kitten-wants-hug.jpg",
    "https://regularguybrewing.files.wordpress.com/2014/08/wpid-grouphug-giraffes-1.jpg",
    "https://i2.wp.com/picsmine.com/wp-content/uploads/2017/02/Hug-Meme-Super-hug.jpg?resize=625%2C468",
    "http://1.bp.blogspot.com/-BRQjZN8Z6d8/Ubw0aZD9d9I/AAAAAAAAC8g/FgR0LxpvDmE/s1600/31.+Group+Hug+by+merlinsartwork.jpg",
    "https://2.bp.blogspot.com/-NhYWZp4apJE/T_X9g-wRbwI/AAAAAAAABo4/5olNKXgIgV0/s1600/cat-hugs-other-cat.jpg",
    "https://i.pinimg.com/736x/b8/ab/f0/b8abf014cf71b31abd603084416af74a.jpg",
    "https://briff.me/wp-content/uploads/2015/02/Small-Beauty-Animal-Hugs.jpg",
    "https://www.sunnyskyz.com/uploads/2019/12/cpknh-racoon-hugging-dog.jpg",
    "https://newbloggycat.files.wordpress.com/2015/08/funny-animal-hug.jpg",
    "http://2.bp.blogspot.com/-O5qIMGNvhuI/VNUHSj8t0zI/AAAAAAABSb8/xlqfWaMWTB0/s1600/funny-animals-146-11.jpg",
    "https://i2.wp.com/sqlatspeed.com/wp-content/uploads/2016/10/grouphug.jpg?resize=499%2C464&ssl=1",
    "https://image.shutterstock.com/image-vector/vector-cartoon-image-cute-animals-260nw-550261456.jpg",
    "http://4.bp.blogspot.com/-BqhSPIGIbZI/T_X-Fot0gWI/AAAAAAAABpo/rtu1g0COFKE/s1600/chimp_hug_iStock_000005745380Medium.jpg",
    "https://gattissimi.com/wp-content/uploads/2015/08/hug_cats_animals_hd-wallpaper-267668.jpg",
    "https://mymodernmet.com/wp/wp-content/uploads/archive/r0zNiXJdULZChTGMwfex_bears.jpg",
    


]
 
module.exports.run = (bot, message, args) => {
 

 
    const answer = answers[Math.floor(Math.random() * answers.length)];
 
    let embeddog = new Discord.RichEmbed()
    .setTitle("CÂLIIIIIIIIIN")
    .setImage(answer)
 
    message.channel.send(embeddog);
 
}
module.exports.help = {
    name: "hug",
    aliases:["calin","câlin"]
}