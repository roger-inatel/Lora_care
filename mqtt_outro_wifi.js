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

            // ATUALIZADO: Aceitar novo formato com campo "status"
            // Verificar se tem status E (ir e red) OU se tem o formato antigo
            if (data.status && 
                typeof data.ir !== 'undefined' && 
                typeof data.red !== 'undefined') {
                
                latestData = {
                    status: data.status,
                    to: data.to || null,
                    from: data.from || null,
                    ir: parseInt(data.ir),
                    red: parseInt(data.red),
                    msg: data.msg || null
                };
                console.log('✅ Dados atualizados (novo formato):', latestData);
            } 
            // Fallback para formato antigo
            else if (typeof data.to !== 'undefined' && 
                typeof data.ir !== 'undefined' && 
                typeof data.red !== 'undefined') {
                
                latestData = {
                    status: "OK", // Assumir OK para formato antigo
                    to: data.to,
                    from: data.from,
                    ir: parseInt(data.ir),
                    red: parseInt(data.red)
                };
                console.log('✅ Dados atualizados (formato antigo):', latestData);
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
