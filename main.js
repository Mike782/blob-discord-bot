const Discord = require('discord.js');

const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
  console.log('Ready!');

client.user.setActivity('Nebulous in Australia', { type: 'PLAYING' });

});



  client.on("message", async message => {
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if(command === "say") {
if(!message.member.roles.some(r=>["Experienced Nebulator", "Jr. Server Moderator", "Server Moderator", "Nebulous Moderator", "YouTuber", "Jr. Nebulous", "Nebulous"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to say something! You need to be `Experienced Nebulator` or higher! <#446679015999406081>");
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }


  if(command === "clear") {
  if(!message.member.roles.some(r=>["Server Moderator", "Nebulous Moderator", "Jr. Nebulous"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to clear the chat! You need to be <@&446338972394979339> or higher! <#446679015999406081>");

    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }


  if (command === 'gfm')
  {

  if(!message.member.roles.some(r=>["Nebulator", "Experienced Nebulator", "Jr. Server Moderator", "Server Moderator", "Nebulous Moderator", "YouTuber", "Jr. Nebulous"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to play music! You need to be <@&446677975815946242> or higher! <#446679015999406081>");
 message.delete().catch(O_o=>{});
  const channel = message.member.voiceChannel;
  message.reply(":musical_note: `NOW PLAYING: https://www.youtube.com/watch?v=NQ3feAJPwVI`");

  channel.join().then(connection =>
  {
     const dispatcher = connection.playFile('./gfm.mp3');
     dispatcher.on("end", end => {
       channel.leave();
       });
   }).catch(err => console.log(err));
  }

});

client.on('message', message => {
  if (message.content === '436754236256')
  {
const embed = {
  "color": 8623847,
  "timestamp": "2018-05-15T15:17:37.541Z",
  "footer": {
    "icon_url": "https://lh3.googleusercontent.com/iK24tHASom4Ie5VA8NGoF7nmhk1stz1UQal01Yhy5M_Ily0IIyODla__iy_iQJR6GIA=s180-rw",
    "text": "Nebulous"
  },
  "thumbnail": {
    "url": "https://lh3.googleusercontent.com/iK24tHASom4Ie5VA8NGoF7nmhk1stz1UQal01Yhy5M_Ily0IIyODla__iy_iQJR6GIA=s180-rw"
  },
  "image": {
    "url": "https://lh3.googleusercontent.com/iK24tHASom4Ie5VA8NGoF7nmhk1stz1UQal01Yhy5M_Ily0IIyODla__iy_iQJR6GIA=s180-rw"
  },
  "author": {
    "name": "Nebulous",
    "url": "https://play.google.com/store/apps/details?id=software.simplicial.nebulous",
    "icon_url": "https://lh3.googleusercontent.com/iK24tHASom4Ie5VA8NGoF7nmhk1stz1UQal01Yhy5M_Ily0IIyODla__iy_iQJR6GIA=s180-rw"
  },
  "fields": [
    {
      "name": "**WHATS NEW?**",
      "value": "`2.1.1`\n:white_small_square:  | `Nebulous turns 3 years old on May 16! It has been an amazing 3 years.`\n:white_small_square:  | `Pick up rare birthday cakes to receive a lot of XP or Plasma!`\n:white_small_square:  | `New Skins, Pets, Hats, Halos!`\n:white_small_square:  | `New arena mode - one v one pure (no ultraclick)!`\n:white_small_square:  | `Mass Boost in shop menu - pay plasma to start with extra mass, does not work in arenas, tournaments or clan wars!`\n:white_small_square:  | `Added options to disable ultraclick and mass boost in custom games`\n:white_small_square:  | `New Game Mode`\n:white_small_square:  | `New Powerup`\n:white_small_square:  | `New Difficulty Level - IMPOSSIBLE`\n:white_small_square:  | `UI Improvements and bug fixes`\n"
    }
  ]
};
  
  message.channel.send({embed});
  }
});

client.on('message', message => {
  if (message.content === '33333525')
  {
  message.channel.send('**3 Years Nebulous! Thank you @everyone!**');
  }
});
client.on('message', message => {
  if (message.content === '535354245')
  {
  message.channel.send("Level skins\n\n:999: |:999: Level 999 skin\n:800: |:800: Level 800 skin\n:500: |:500: Level 500 skin\n:raptor: |:raptor: Level Raptor Eye skin\n\nCountrie skins\n\n:germany: |:germany: - Germany\n:usa: |:germany: - USA\n:brazil: |:brazil: - Brazil\n:france: |:france: - France\n:spain: |:spain: - Spain\n:russia: |:russia: - Сука Блять\n\nYouTuber skins\n\n:rowdy: |:rowdy: - https://www.youtube.com/channel/UC1GV4Z4tCfmli7T-IPCpyqA\n:meptinity: |:meptinity: - https://www.youtube.com/channel/UCAjEkvYJGZD2FPjVJ0vhR0Q\n:maroo: |:maroo: - https://www.youtube.com/channel/UCuclKLaeKxV4VF9Ct-gRQdw\n:agnosia: |:agnosia: - https://www.youtube.com/channel/UCu-WOk3w393WuhCqZPeKxmQ\n:rouvel: |:rouvel: - https://www.youtube.com/channel/UCvYmAbJxTqr_1V17tko1Njg\n\n\nEmotes\n\n:emote1: |:emote1: - Emote 1\n:emote2: |:emote2: - Emote 2\n:emote3: |:emote3: - Emote 3\n:emote4: |:emote4: - Emote 4\n:emote5: |:emote5: - Emote 5\n:emote6: |:emote6: - Emote 6\n:emote7: |:emote7: - Emote 7\n\nOther\n\n:xp: |:xp: - XPx3 Icon\n:bluehole: |:bluehole: -  Energy well skin\n:blackhole: |:blackhole: - Blackhole skin\n:plasma: |:plasma: - It's plasma..\n:spacecat: |:spacecat: - Special skins: Space Cat\n:loading: |:loading: - Splash screen loading icon\n:gold_star: |:gold_star: :orange_star: |:orange_star::blue_star: |:blue_star:");
  message.channel.send("", {
            files: [
                "./emotes.png"
            ]
        });
  }
});

client.on('message', message => {
  if (message.content === '463584584854')
  {
  const embed = new Discord.RichEmbed()
  .setAuthor("Nebulous", "https://lh3.googleusercontent.com/iK24tHASom4Ie5VA8NGoF7nmhk1stz1UQal01Yhy5M_Ily0IIyODla__iy_iQJR6GIA=s180-rw")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7289da)
  .setFooter("Nebulous", "https://lh3.googleusercontent.com/iK24tHASom4Ie5VA8NGoF7nmhk1stz1UQal01Yhy5M_Ily0IIyODla__iy_iQJR6GIA=s180-rw")
  .setThumbnail("https://lh3.googleusercontent.com/iK24tHASom4Ie5VA8NGoF7nmhk1stz1UQal01Yhy5M_Ily0IIyODla__iy_iQJR6GIA=s180-rw")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://play.google.com/store/apps/details?id=software.simplicial.nebulous")
  .setDescription("<:nebulous:446636423714701313> `:nebulous:`\n<:orborous:446637374739578881> `:orborous:`\n<:rebellious:446637374567350273> `:rebellious:`\n<:gold_star:446636569030426634> `:gold_star:`\n<:orange_star:446636569030426644> `:orange_star:`\n<:blue_star:446636568980226048> `:blue_star:`\n<:teal_star:446636568472715266> `:teal_star:` \n<:green_star:446636568740888590> `:green_star:`\n<:green:446637374882185246> `:green:` \n<:purple:446637374844174336> `:purple:`\n<:emote1:446636322116075525> `:emote1:` \n<:emote2:446636322350825474> `:emote2:` \n<:emote3:446636322367733761> `:emote3:`\n<:emote4:446636322413740032> `:emote4:` \n<:emote5:446636322417934346> `:emote5:` \n<:emote6:446636322447425546> `:emote6:` \n<:emote7:446636322598420481> `:emote7:` \n<:emote8:446636322673917972> `:emote8:` \n<:emote9:446636322720055296> `:emote9:` \n<:emote10:446636322812067860> `:emote10:` \n<:emote11:446636322820718592> `:emote11:` \n<:emote12:446636322937896960> `:emote12:` \n<:emote13:446636322942091264> `:emote13:` \n<:emote14:446636323512778765> `:emote14:` \n<:emote15:446636323554721792> `:emote15:`\n<:level_bh:446635904887554069> `:level_bh:` \n<:energy_well:446635956687077379> `:energy_well:` \n<:black_hole_4:446636075298062347> `:black_hole_4:`\n<:black_hole_3:446636074513727488> `:black_hole_3:`\n<:level_void:446637047340597249> `:level_void:`\n<:level_hole_4:446636075985666050> `:level_hole_4:`\n<:level_hole_3:446636075340005387> `:level_hole_3:`\n<:level_hole_2:446636073984983040> `:level_hole_2:`\n<:hole_nebulous:446636075931271170> `:hole_nebulous:`\n<:level_reward:446636970978967556> `:level_reward:`\n<:level_phoenix_electric:446636971360780288> `:level_phoenix_electric:`\n<:level_green_spinnie:446636970521919493> `:level_green_spinnie:`\n<:level_eye:446636970798743552> `:level_eye:`\n<:level_colorwheel:446637374773002250> `:level_colorwheel:`\n<:level_bluepulse:446636970592960522> `:level_bluepulse:`\n<:newnew:446668117620555777> `:newnew:`") /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */

  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  message.channel.send({embed});
message.channel.send("", {
            files: [
                "./emotes.png"
            ]
        });
  }
});



client.on('message', message => {
  if (message.content === '346346346')
  {
  message.channel.send("", {
            files: [
                "./role.png"
            ]
        });
		
		const embed = {
  "color": 7506394,
  "timestamp": "2000-01-01T00:00:00.000Z",
  "footer": {
    "icon_url": "https://lh3.googleusercontent.com/iK24tHASom4Ie5VA8NGoF7nmhk1stz1UQal01Yhy5M_Ily0IIyODla__iy_iQJR6GIA=s180-rw",
    "text": "Nebulous"
  },
  "author": {
    "name": "Nebulous",
    "url": "https://discordapp.com",
    "icon_url": "https://lh3.googleusercontent.com/iK24tHASom4Ie5VA8NGoF7nmhk1stz1UQal01Yhy5M_Ily0IIyODla__iy_iQJR6GIA=s180-rw"
  },
  "fields": [
    {
      "name": "<:gold_star:446636569030426634>",
      "value": "**Level 100+**",
      "inline": true
    },
    {
      "name": "<:orange_star:446636569030426644>",
      "value": "**Level 500+**",
      "inline": true
    },
    {
      "name": "<:blue_star:446636568980226048>",
      "value": "**Level 1000+**",
      "inline": true
    },
    {
      "name": "<:teal_star:446636568472715266>",
      "value": "**God**",
      "inline": true
    },
    {
      "name": "<:green_star:446636568740888590>",
      "value": "**Pro**",
      "inline": true
    },
    {
      "name": "<:orborous:446637374739578881>",
      "value": "**Orborous**",
      "inline": true
    }
  ]
};

message.channel.send("**React with a star and the rank will be automatically assigned to you.**", { embed });
  }
});

client.on('message', message => {
  if (message.content === '674746')
  {
  message.channel.send("", {
            files: [
                "./roles.png"
            ]
        });
		
		const embed = {
  "color": 7506394,
  "timestamp": "2000-01-01T00:00:00.000Z",
  "footer": {
    "icon_url": "https://lh3.googleusercontent.com/iK24tHASom4Ie5VA8NGoF7nmhk1stz1UQal01Yhy5M_Ily0IIyODla__iy_iQJR6GIA=s180-rw",
    "text": "Nebulous"
  },
  "fields": [
    {
      "name": "Roles",
      "value": "<@&445975657374285824>\n<@&446087467003543572> \n\n<@&446678077712629760> \n\n<@&446361663168446485> \n<@&446338972394979339> \n<@&446338969773539338> \n\n<@&446676869035851786> \n<@&446677975815946242> \n\n"
    }
  ]
};
message.channel.send("**<:purple:446637374844174336> Do not ask for roles, they will be automatically assigned.**", { embed });}
});

client.login(process.env.BOT_TOKEN);
