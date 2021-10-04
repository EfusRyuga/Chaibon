const Discord = require("discord.js");
const answers = [
  
    "https://images.newscientist.com/wp-content/uploads/2010/06/mg20627641.000-1_300.jpg?width=778",
    "https://lh3.googleusercontent.com/-qS9yfsHkX48/VZLHeF2YdOI/AAAAAAABga0/3Ksba4o_gS0/s1600/6fc0bbc2fa180aaa82702fde62eaafa8.jpg",
    "https://ychef.files.bbci.co.uk/624x351/p02f7fc2.jpg",
    "https://asset-manager.bbcchannels.com/i/2doby0000f41000",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9-jwsoun9p68soWq0d0BEji3HaUgRhxtDg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmRwfT9cwmnLR7FoI2IrNVyuJudWeoDe3IQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_wZ_-YrDSn5pIBXElxzXySJG5W2wZ9opwA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRWe7Hcst9mHhM0sVbYCP2UfWI-Ig6MM0AQ&usqp=CAU",
    "https://i.pinimg.com/originals/6d/9f/53/6d9f5334e36f1ee02c73660a8247d185.jpg",
    "https://i.ytimg.com/vi/fVN14lf8yTc/maxresdefault.jpg",
    "https://i.redd.it/6jyro39ln6a41.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRCiUHr44wvIHf4p4vuh6Ji1rg-txOqCDgA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mo8nVwX7DesLhpWYqTP_mRJKwLKs7FQ2Rg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJQQIHUAE8-P4TlGiAvNBxtELKslKVzzxqQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Yn5yUBQbRCih1BEh0DdrOHBCX2rOPUxYtQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6jcY5SuwMn6V8XSvsteyIesBIfq9OnO4Xg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJk8jXauOsPFj5d_qVMQFP_wyWjPfWlBrmPw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmRSLCCQepPeDfJUaCNvK6bhApflHSpT-Ow&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4YGF11yNU6rHwyJ7ap00dLhGJV0-HGIb6A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGXf_b5F8U4yoInww0CRZSe3j8od4B-9-Ew&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lfFkuHmExalyaVX0JuP8jc96M9709f7iHw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCaoL_iMZZb3_P6vkKLEvzElblsnyKwlM7XQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mo8nVwX7DesLhpWYqTP_mRJKwLKs7FQ2Rg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnBKkdGrwAOzihHw_yeMJSaygvhK6csHQ_dQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yHGoynsnjRuSam9KPKad8L6sFFx260DM9A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRm1sDPnuEWXnKpxG3ZzTfcc-vK70fcZqkcA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-Scp3hMfWrI9YxIrm-H3i-69gESom9SikA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSQWpmZxj0w3BV37xT956BlnSf3V6LsJVmw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKSAcFGDYuBKkwNBt3aJQP1ghE_RC7VnHXw&usqp=CAU",
    "https://i.pinimg.com/originals/18/0c/c5/180cc5d13d8eb73424ea4148541cf5ca.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9a83df6-7211-4ab7-a694-beca0e4b9a05/d10yf20-d0004285-6810-499b-895b-c34fe14fc1f4.jpg/v1/fill/w_873,h_634,q_75,strp/wolf_mother_by_lordwolfgang_d10yf20-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MzQiLCJwYXRoIjoiXC9mXC9mOWE4M2RmNi03MjExLTRhYjctYTY5NC1iZWNhMGU0YjlhMDVcL2QxMHlmMjAtZDAwMDQyODUtNjgxMC00OTliLTg5NWItYzM0ZmUxNGZjMWY0LmpwZyIsIndpZHRoIjoiPD04NzMifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BMYWlNmmhAMtQaytD_RWVocaiTv1BsKBm-LV-iTLG6Q",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0T1FCosfW0vXCWVV7SfJYIyaAWkixL1mdsQ&usqp=CAU",
    "https://3.bp.blogspot.com/-QDEQC5DAG6w/Tk7_04tX25I/AAAAAAAA2oc/jCNdszgQ-YY/s1600/Mother-Wolf-Photo.jpg",
    "https://images2.alphacoders.com/808/808265.jpg",
    "https://i.pinimg.com/originals/d8/54/a1/d854a1df5d99c32ec421c2522f6ca4a9.jpg",
    "https://photographymag.tn/wp-content/uploads/2017/09/baby-animals-baby-black-wolf-super-cute.jpg",
    "https://i.imgur.com/keju0Wi.jpg",
    "https://i.imgur.com/bLhX6gE.jpg",
]
 
module.exports.run = (bot, message, args) => {

    const answer = answers[Math.floor(Math.random() * answers.length)];
 
    let embeddog = new Discord.RichEmbed()
    .setTitle("aggrrr aggrrr")
    .setImage(answer)
 
    message.channel.send(embeddog);
};
module.exports.help = {
    name: 'wolf',
    aliases:["loup"]
};