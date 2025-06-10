# Simulation Interface

This project provides a simple HTML5 dashboard with a login screen and a very
basic bacteria simulation. After you log in, you can start or pause the
simulation and watch status messages appear in the panel on the right.
Messages expire after five minutes unless marked as important.

## Running locally

Simply open `index.html` in your browser. For GitHub Pages, ensure that
`index.html`, `script.js`, and `style.css` live in the root of your repository
(or in the selected pages branch) so the page loads correctly.

## Features

- Login form that reveals the dashboard once submitted
- Canvas based "petri dish" with very simple moving bacteria
- Controls to start/pause the simulation and add new bacteria
- Rotating status messages with timestamps and a five minute timeout
- Placeholders for graphs and a chat interface

## Gelişmiş Simülasyon Planı

`docs/advanced_simulator.md` dokümanında NeoMagv8 projesi temel alınarak
hazırlanan ayrıntılı mimari açıklamaları bulabilirsiniz. Türkçe örnek ajan kodu
ise `agent_ornek.py` dosyasındadır.
=======
This project provides a simple HTML5 dashboard that demonstrates a login
experience and continuously updating status menu. Status messages rotate
periodically and disappear after 15 seconds.

Open `index.html` in a browser to try it.
