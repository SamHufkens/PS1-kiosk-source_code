# PS1 Project: web applicatie voor een kiosk

Voor ons PS1 project hebben wij een web applicatie voor een kiosk gemaakt. Deze web applicatie is bedoeld voor de bezoekers van de WZC witte meren. Aan de hand van deze applicatie kunnen zij allerei informatie terugvinden.

## Technische informatie

Deze web applicatie is gemaakt met NodeJS (backend) en MongoDB Atlas (cloud database). De dependencies die we gebruikt hebben zijn:
 * expressJS
 * mongoose
 * ejs
 * dotenv

## Installatie

1. Clone de repository

2. Instaleer daarna mongodb tools https://www.mongodb.com/try/download/database-tools en maak een environment variable met de PATH van de tools folder

3. Surf naar https://www.mongodb.com/cloud/atlas/register en maak een account. Als dit gebeurd maak je een nieuwe database. Als de database aangemaakt ga je naar de database access tab en maak je een nieuwe user aan zorg ervoor dat die use de **readWriteAnyDatabase** rechten heeft.

4. Hierna druk je op connect en dan op VS code. kopieer de connectie string. 

5. open PowerShell als admin in de root folder van de repo en voer het volgende commando uit
    
```bash
.\setup.ps1 -PortNumber 3000 -DatabaseURI "<your dbURI string>"
```

vervang <"your dbURI string"> met de connectie string.

**Let op: verwijder <"password"> met het paswoord van de user die je hebt aangemaakt en verwijder /test.**


6. Als je het commando uitgevoerd hebt en alles succesvol verlopen is. kan je het laatse commando invoeren om de web app te starten
```bash
node server
```

Als je het volgende ziet is alles goed verlopen
```bash
Connected To MongoDB
Listening on port 3000
Link: http://localhost:3000
```

Klik op de link of kopieer en plak het in een browser
