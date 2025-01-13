const commands = [
    {
        name: 'start',
        description: 'Start the Minecraft server',
    },
    {
        name: 'stop',
        description: 'Stop the Minecraft server',
    },
    {
        name: 'restart',
        description: 'Restart the Minecraft server',
    },
    {
        name: 'run',
        description: 'Execute a command on the Minecraft server',
        options: [
            {
                type: 3,
                name: 'command',
                description: 'Command must be written without /',
                required: true
            },
        ]
    },
];
const clientId = process.env.CLIENT_ID;
const botToken = process.env.DISCORD_BOT_TOKEN;
const guildId = process.env.GUILD_ID;

module.exports = { commands, clientId, botToken, guildId }; // Export commands