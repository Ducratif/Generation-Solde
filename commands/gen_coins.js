const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');
const { channel_gen, api_key_user, url_api, plan } = require('../config.json');


let userProcessing = new Set();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gen_coins')
    .setDescription('Générer un compte GRATUIT.'),
    async execute(interaction) {
            
            const userId = interaction.user.id;
        if (userProcessing.has(userId)) {
            return interaction.reply({ content: 'Une commande est déjà en cours de traitement. Veuillez patienter.', ephemeral: true });
        }
        else
        {
            var commandeexe = true
        }

        userProcessing.add(userId);


        const apiUrlGet = `${url_api}services.php?apikey=${api_key_user}`;
        const responses = await axios.get(apiUrlGet);
        const dataa = responses.data;

        if(commandeexe == true)
        {
            try
            {
                if (dataa.success)
                {
                    if(plan == "1"){var services = dataa.Free;}
                    else
                    if(plan == "2"){var services = dataa.Basique;}
                    else
                    if(plan == "3"){var services = dataa.Standard;}
                    else
                    if(plan == "4"){var services = dataa.Premium;}
                    else
                    {return interaction.reply({content: "Aucun plan selectionner dans le fichier config !"});}
                    
    
                    const selectMenu = new StringSelectMenuBuilder()
                        .setCustomId('select_service')
                        .setPlaceholder('Sélectionnez un service')
                        .addOptions(
                            services.map(service => ({
                                label: service,
                                value: service
                            }))
                        );
    
                    const row = new ActionRowBuilder().addComponents(selectMenu);
    
                    const embed = new EmbedBuilder()
                        .setTitle('Services disponibles')
                        .setColor('#00FF00')
                        .setDescription('Veuillez sélectionner un service dans le menu déroulant ci-dessous.')
                        .setTimestamp();
    
                    await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
    
                    const filter = i => i.customId === 'select_service' && i.user.id === interaction.user.id;
                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });
                    

                    collector.on('collect', async i => {
                        const selectedService = i.values[0];
                        const select_service = selectedService;// SERVICE SELECTIONNER !!!

                        const apiUrl = `${url_api}generate_solde.php?apikey=${api_key_user}&service=${select_service}`;

                         // Désactiver le menu déroulant immédiatement après la sélection
                         try {
    
                            const embeds = new EmbedBuilder()
                                .setTitle('DUCRAGEN 2024')
                                .setColor('#00FF00')
                                .setDescription('**GENERATION ENVOYER EN MESSAGE PRIVER !!!!**')
                                .setTimestamp();
                                
                            await i.update({ embeds: [embeds], components: [], ephemeral: true });
                            userProcessing.delete(userId);
                        } catch (error) {
                            //console.error('Error updating interaction:', error);
                            userProcessing.delete(userId);
                            return;
                        }

                        //LANCEMENT DE LA GENERATION
                        try{
                                //REQUETE API GENERATION SOLDE
                                const response = await axios.get(apiUrl);
                                const data = response.data;
                                //console.log(data);

                                if(data.error)
                                {
                                    const embed = new EmbedBuilder()
                                    .setTitle('**Erreur_T_N°1:**')
                                    .setColor('#B50101')
                                    .setDescription(`Erreur retourner:\n\`\`\`${data.error}\`\`\``)
                                    .setTimestamp();
                                    await i.editReply({ content: `<@${userId}>`, embeds: [embed], components: [], ephemeral: false });
                                }
                                else
                                if(data.success)
                                {
                                    //MESSAGE ENVOYER EN DM
                                    const embedDM = new EmbedBuilder()
                                    .setTitle('Génération de Compte')
                                    .setColor('#00FF00')
                                    .setDescription(`**Service:** \`\`\`${select_service}\`\`\`\n**Email:** \`\`\`${data.email}\`\`\`\n**Password:** \`\`\`${data.password}\`\`\``)
                                    .setTimestamp();

                                    const channel = await interaction.client.channels.fetch(channel_gen);
                                    const embedvalide = new EmbedBuilder()
                                        .setColor(0x0000FF)
                                        .setTitle('Nouvelle Generation')
                                        .setDescription(`<@${interaction.user.id}> viens de générer un compte ${select_service}\n\n**Coup de coins:** \`\`\`${data.coins}\`\`\`\n**Coins avant transaction:** \`\`\`${data.before_coins}\`\`\`\n**Coins après transaction:** \`\`\`${data.after_coins}\`\`\``);
                                    await channel.send({ embeds: [embedvalide] });
                                    
                                    await interaction.user.send({ embeds: [embedDM] });
                                }
                        }
                         catch (erreur) {
                            return;
                         } finally {
                             userProcessing.delete(userId);
                         }
                        
                    });
    
                    collector.on('end', collected => {
                        if (collected.size === 0) {
                            interaction.editReply({ content: 'Aucune sélection reçue dans le temps imparti, commande annulée.', components: [], ephemeral: true });
                            userProcessing.delete(userId);
                        }
                    });
                }
                else
                if(dataa.error)
                {
                    console.log(dataa.error)
                }
                userProcessing.delete(userId);
            } catch (error) {
                console.log(error);
                await interaction.reply({ content: '**Erreur_T_N°2:**\nUne erreur est survenue lors de la connexion à l\'API.', components: [], ephemeral: true });
                userProcessing.delete(userId);
            }
        }
        else
        {
            return;
        }

    },
};