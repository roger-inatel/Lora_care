// Salve como: mqtt_node_client.js
// Para rodar: npm install mqtt express

const mqtt = require('mqtt');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
let latestData = null;

const brokerUrl = 'mqtt:192.168.66.50:1883'; // Use 'mqtt://...' para TCP, 'ws://...' para WebSocket
const options = {
    username: 'csilab',
    password: 'WhoAmI#2023'
};

const client = mqtt.connect(brokerUrl, options);

client.on('connect', () => {
    console.log('✅ Conectado ao broker!');
    client.subscribe('lora/sensores', (err) => {
        if (err) {
            console.error('Erro ao se inscrever:', err);
        } else {
            console.log('Inscrito no tópico lora/sensores');
        }
    });
});

client.on('message', (topic, message) => {
    if (topic === 'lora/sensores') {
        const msg = message.toString();
        console.log('Mensagem recebida:', msg);
        let ir = null, red = null;

        // Tenta parsear como JSON
            try {
                const data = JSON.parse(msg);
                ir = parseInt(data.ir);
                red = parseInt(data.red);
            } catch {
            // Se não for JSON, tenta como CSV
            const parts = msg.split(',');
            if (parts.length === 2) {
                ir = parseInt(parts[0]);
                red = parseInt(parts[1]);
            }
        }

        // Só atualiza se conseguiu extrair os valores
        if (ir !== null && red !== null) {
            latestData = { ir, red };
        }
    } else {
        console.log(`Mensagem em tópico desconhecido (${topic}): ${message.toString()}`);
    }
});

client.on('error', (err) => {
    console.error('Erro:', err);
});

app.get('/api/data', (req, res) => {
    console.log('API request received');
    console.log('Latest data:', latestData);
    res.json(latestData || {});
});

app.listen(3000, () => console.log('API running on port 3000'));