const Discord = require("discord.js");
const answers = [
    "https://i.pinimg.com/originals/21/df/7f/21df7f68bdde6d36de60b041433d62e8.png",
    "https://external-preview.redd.it/mz4F82-qwb-vE4PI6oNxTSCkqWZHIcBr0PWm3dTts_A.jpg?s=e51caf451c3fd9d48108f38e933f37aeeb3faadc",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62464c57-c09d-4dc2-b228-19aa9a36df37/dd2odwf-d8f57e0f-2e5e-423c-9659-7188abd4fc31.png/v1/fill/w_800,h_664,q_80,strp/everyday_palico_drama_by_cecaangyal_dd2odwf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjY0IiwicGF0aCI6IlwvZlwvNjI0NjRjNTctYzA5ZC00ZGMyLWIyMjgtMTlhYTlhMzZkZjM3XC9kZDJvZHdmLWQ4ZjU3ZTBmLTJlNWUtNDIzYy05NjU5LTcxODhhYmQ0ZmMzMS5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.oIn_YkCfChJrwsz58cQif20HOc0EmwL02ZBI4JTdVGI",
    "https://i.pinimg.com/originals/ff/98/31/ff983152b0d134137f1fde281ccae1ab.png",
    "https://i.pinimg.com/originals/c1/8c/88/c18c88847845b6d4d46ed6db16b234f7.jpg",
    "http://1.bp.blogspot.com/-DWPKJGedK30/Wn7euR8rNEI/AAAAAAAAAn8/rjTOFDNYuAodsEhD5EEhdNYx1KZSO48MgCK4BGAYYCw/s1600/img_hunting_05.png",
    "https://68.media.tumblr.com/44234f91704fa04db622500f1e5bad2f/tumblr_npeuz8P0A91romn3oo1_500.png",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe606977-5c55-4905-896c-c4eb80c3f8e1/d7cs934-fde71435-8e7e-4e8d-9823-a182816981b3.png/v1/fill/w_825,h_968,q_75,strp/monster_hunter_otomo_airou_by_feylura-d7cs934.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mZTYwNjk3Ny01YzU1LTQ5MDUtODk2Yy1jNGViODBjM2Y4ZTEvZDdjczkzNC1mZGU3MTQzNS04ZTdlLTRlOGQtOTgyMy1hMTgyODE2OTgxYjMucG5nIiwid2lkdGgiOiI8PTgyNSIsImhlaWdodCI6Ijw9OTY4In1dXX0.7NqGFYCatrYyWkuYDBMU4xzHne1KcUffdJZdCAI5wK4",
    "https://i.pinimg.com/564x/50/41/c3/5041c3284ffa2b36c2146f4d62051017.jpg",
    "https://i.pinimg.com/564x/15/de/b6/15deb6a6e08454b2f546bd9aac8837aa.jpg",
    "https://i.pinimg.com/564x/67/65/fa/6765fa234fde3f5b169499484772c5c9.jpg",
    "https://i.pinimg.com/564x/4a/08/9f/4a089f4649caf5f69f5f82b01bd1c6ba.jpg",
    "https://i.pinimg.com/564x/d2/a3/16/d2a31649a68aca17294138678cd7b436.jpg",
    "https://i.pinimg.com/564x/b2/62/3f/b2623f04038e9458bd9355de71b00a32.jpg",
    "https://i.pinimg.com/564x/72/6c/59/726c5921a40765d3524d6373e8500796.jpg",
    "https://i.pinimg.com/564x/d5/30/ab/d530abd97f1a88392dc6798421133319.jpg",
    "https://i.pinimg.com/564x/e6/01/e8/e601e8e78972f533b6b6bbe2e745c9b2.jpg",
    "https://i.pinimg.com/564x/32/9a/92/329a92e0d8d1146fb46d59632ac7b51a.jpg",
    "https://i.pinimg.com/564x/13/e3/c8/13e3c8732053b8843ddb2a7b49b6530b.jpg",
    "https://i.pinimg.com/564x/d4/c2/49/d4c249770d670a429224f21a64277591.jpg",
    "https://i.pinimg.com/564x/39/83/6e/39836e51e7a33ccbf4535d1845674205.jpg",
    "https://i.pinimg.com/564x/ef/02/4f/ef024f772f4608f32966d24f30b27a9d.jpg",
    "https://i.pinimg.com/236x/be/3d/ab/be3dab5e42e82efcb77bb8405e6c73bf.jpg",
    "https://i.pinimg.com/236x/9e/5b/e6/9e5be60f3527f199d8e10de801662847.jpg",
    "https://i.pinimg.com/236x/92/c5/43/92c543c80c226e6e08ec1c4224970593.jpg",
    "https://i.pinimg.com/236x/80/bf/f1/80bff1d40ab1e1cffa5699d736449352.jpg",
    "https://i.pinimg.com/236x/09/2e/bd/092ebdeab990142b5b4c71a2b08ca752.jpg",
    "https://i.pinimg.com/236x/ae/30/0d/ae300d0c79a9f0fbe8d75edc1e7a5c82.jpg"
]
 
module.exports.run = (bot, message, args) => {
 

 
    const answer = answers[Math.floor(Math.random() * answers.length)];
 
    let embeddog = new Discord.RichEmbed()
    .setTitle("Regardez, un Palico")
    .setImage(answer)
 
    message.channel.send(embeddog);
 
}
module.exports.help = {
    name: "palico",
    aliases:[]
}