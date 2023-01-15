import { Client, TextChannel } from "discord.js";
import { channelID } from "../settings/settings";

export default async function ClearChannel(client: Client) {
    const channel = client.channels.cache.get(channelID) as TextChannel
    const messages = await channel.messages.fetch({limit: 100});
    channel.bulkDelete(messages, true);
}