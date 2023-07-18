require( 'dotenv' ).config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js")

const commands = [
    {
        name:"add",
        description:"Add two Numbers.",
        options: [
            {
                name:"first-number",
                description:"The First Number.",
                type:ApplicationCommandOptionType.Number, 
                required:true,
            },
            {
                name:"second-number",
                description:"The Second Number.",
                type:ApplicationCommandOptionType.Number, 
                required:true
            }
        ]
    },
    {
        name:"sub",
        description:"Subtract two Numbers.",
        options: [
            {
                name:"first-number",
                description:"The First Number.",
                type:ApplicationCommandOptionType.Number, 
                required:true,
            },
            {
                name:"second-number",
                description:"The Second Number.",
                type:ApplicationCommandOptionType.Number, 
                required:true
            }
        ]
    },
    {
        name:"multiply",
        description:"Multiply two Numbers.",
        options: [
            {
                name:"first-number",
                description:"The First Number.",
                type:ApplicationCommandOptionType.Number, 
                required:true,
            },
            {
                name:"second-number",
                description:"The Second Number.",
                type:ApplicationCommandOptionType.Number, 
                required:true
            }
        ]
    },
    {
        name:"divide",
        description:"Divide two Numbers.",
        options: [
            {
                name:"first-number",
                description:"The First Number.",
                type:ApplicationCommandOptionType.Number, 
                required:true,
            },
            {
                name:"second-number",
                description:"The Second Number.",
                type:ApplicationCommandOptionType.Number, 
                required:true
            }
        ]
    },
];

const rest = new REST({ version:'10' }).setToken(process.env.TOKEN);

(async () =>{
    try{

        console.log('Registering Slash Commands...');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        )

        console.log('👍 Slash Commands were Registered Successfully!');
    } catch (error){
        console.log(`🚨There was an ERROR: ${error}`);
    }
})();