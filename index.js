const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Membuat client baru
const client = new Client({
    authStrategy: new LocalAuth()
});

// Menampilkan QR code untuk login
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Menampilkan pesan ketika bot siap
client.on('ready', () => {
    console.log('Bot ready to use!');
});

// Menangani pesan masuk
client.on('message', message => {
    if(message.body === 'halo') {
        message.reply('Hello? do u need any help');
    }
});

// Menjalankan client
client.initialize();
