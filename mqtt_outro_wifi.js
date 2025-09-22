// Salve como: mqtt_node_client.js
// Para rodar: npm install mqtt express cors

const mqtt = require('mqtt');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let latestData = null;

// === Configuração do Broker MQTT ===
const brokerUrl = 'mqtt://test.mosquitto.org:1883'; // broker público
const options = {
    // Para o test.mosquitto.org NÃO precisa de user/pass
    // username: 'csilab',
    // password: 'WhoAmI#2023'
};

const client = mqtt.connect(brokerUrl, options);

// === Conexão MQTT ===
client.on('connect', () => {
    console.log('✅ Conectado ao broker MQTT!');
    client.subscribe('lora/sensores', (err) => {
        if (err) {
            console.error('❌ Erro ao se inscrever:', err);
        } else {
            console.log('📡 Inscrito no tópico [lora/sensores]');
        }
    });
});

// === Recepção de mensagens do MQTT ===
client.on('message', (topic, message) => {
    if (topic === 'lora/sensores') {
        const msg = message.toString();
        console.log('📩 Mensagem recebida:', msg);

        try {
            // Tenta parsear como JSON
            const data = JSON.parse(msg);

            if (data.to && data.ir && data.red) {
                latestData = {
                    to: data.to,
                    from: data.from,
                    ir: parseInt(data.ir),
                    red: parseInt(data.red)
                };
                console.log('✅ Dados atualizados:', latestData);
            } else {
                console.warn('⚠️ JSON recebido não tem todos os campos necessários.');
            }
        } catch (err) {
            console.error('⚠️ Erro ao parsear mensagem como JSON:', err.message);
        }
    }
});

// === Tratamento de erros ===
client.on('error', (err) => {
    console.error('Erro MQTT:', err);
});

// === API REST ===
app.get('/api/data', (req, res) => {
    console.log('🌐 API /api/data requisitada');
    res.json(latestData || {});
});

app.listen(3000, () => console.log('🚀 API rodando em http://localhost:3000'));
