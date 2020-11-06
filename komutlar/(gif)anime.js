
const request = require('request-promise-native');
const Discord = require("discord.js");

exports.run = async (Bastion, message, args) => {

let myShows = ['anime', 'animes', 'manga', 'bleach', 
'belserk', 'death note', 'Dexter'];
      
	  let show = myShows[Math.floor(Math.random() * myShows.length)];


    
let options = {

url: 'http://api.giphy.com/v1/gifs/search',

qs: {

q: show,

api_key: 'dc6zaTOxFJmzC',

limit: 10,

offset: 0

},

json: true

};

let response = await request(options);

if (response.data.length) {

const embed = new Discord.MessageEmbed()

.setColor("#27167A")
.setDescription(`Searching gifs ${args.join(' ')}`.slice(0, 256))
.setImage(response.data[Math.floor(Math.random() * response.data.length)].images.original.url)

return message.channel.send(embed);

}

else {

return Bastion.emit('Error', '', Bastion.i18n.error(message.guild.language, '404 not found', 'We are sorry '), message.channel);

}

}
  



exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['anime', 'anime-gif'],

  permLevel: 0

};

exports.help = {

  name: 'gif-arsda',

  description: "lrowsxrsdd",

  usage: 'gif-asdra'

};