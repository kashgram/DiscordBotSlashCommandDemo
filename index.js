require('dotenv').config();
const { Client , ActivityType } = require("discord.js");
const client = new Client({intents:["Guilds"]});

client.login(process.env.TOKEN).then(() => {
    console.log(`✅ ${client.user.tag} is online.`);
    
    client.user.setActivity({
        name:"Eminem - Without Me",
        type: ActivityType.Streaming,
        url: "https://www.youtube.com/watch?v=YVkUvmDQ3HY"})


}).catch((err) => console.log(err))

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'add'){
        const num1 = interaction.options.get('first-number').value; //If "required:false", add ?.value
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The answer is **${(num1)+(num2)}**.`)
    }if (interaction.commandName === 'sub') {
        const num1 = interaction.options.get('first-number').value; //If "required:false", add ?.value
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The answer is **${(num1)-(num2)}**.`)
    }if(interaction.commandName === 'multiply'){
        const num1 = interaction.options.get('first-number').value; //If "required:false", add ?.value
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The answer is **${(num1)*(num2)}**.`)
    }if(interaction.commandName === 'divide'){
        const num1 = interaction.options.get('first-number').value; //If "required:false", add ?.value
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The answer is **${(num1)/(num2)}**.`)
    }
})

