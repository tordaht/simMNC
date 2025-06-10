# Simulation Interface

This project provides a simple HTML5 dashboard for a minimal bacteria
simulation. You can start or pause the animation and watch status messages on
the right. Messages disappear automatically after a short period unless marked
as important.

## Running locally


For a static preview you can open `index.html` directly in your browser. To use
the sohbet (chat) system start the small Express server:

```bash
node server/index.js
```

Then navigate to `http://localhost:3000` and the page will connect to the
Socket.IO backend.


## Features

- Canvas based "petri dish" with moving bacteria
- Controls to start/pause the simulation and add new bacteria
- Rotating status messages with timestamps and automatic expiry
- Periodic population updates in the status panel
- Placeholders for graphs and a chat interface

## Gelişmiş Simülasyon Planı

`docs/advanced_simulator.md` dokümanında NeoMagv8 projesi temel alınarak
hazırlanan ayrıntılı mimari açıklamaları bulabilirsiniz. Türkçe örnek ajan kodu
ise `agent_ornek.py` dosyasındadır.

