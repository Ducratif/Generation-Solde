const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Affiche les informations d\'aide.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Aide - Commandes Disponibles')
            .setColor('#00FF00')
            .setTimestamp()
            .addFields(
                { name: 'Génération', value: '`/gen_coins`', inline: false }
            );

        await interaction.reply({ embeds: [embed] });
    },
};
