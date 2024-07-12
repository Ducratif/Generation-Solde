const { Client, GatewayIntentBits, Collection } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent  // Ajouté pour accéder au contenu des messages
    ]
});
const config = require('./config.json');
const fs = require('fs');


client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
  client.user.setPresence({
    activities: [{ name: 'Ducragen.com' }],
    status: 'dnd'
});
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Il y a eu une erreur pendant l\'exécution de la commande!', ephemeral: true });
  }
});

client.login(config.token);

