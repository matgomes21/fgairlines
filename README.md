<img src="https://github.com/matgomes21/fgairlines/blob/master/frontend/src/assets/big-logo.svg?raw=true" />

## Remake of an OO project made by me and my friend Vinícius Saturnino

Once upon a time, there was an OO project made in Ruby on Rails called **FGAirlines** by me and my friend Vinícius <a href="https://gitlab.com/viniciussaturnino07/fgairlines">( Link Here )</a> . We decided to wake up this sleeping giant, but in this time, with **NodeJS**, **React** and **React Native**.

# Application

**FGAirlines** is a **Web** and **Mobile** application for flight reservation. Airlines can register itselves on the web application and register new flights with destiny, date, hour and price. Airlines can also delete previously created flights, but not flights created by others airlines. Customers can see all the flights avaiable on mobile application and contact with email or whatsapp to buy a seat.

# Web Demo

<img src="./github/desktop-demonstration.gif?raw=true" />

# Mobile Demo

<img src="./github/mobile-demo.gif" />

# Dependencies

- **Node** - v10.19.0+
- **npm** - v6.14.4+
- **yarn** - v1.22.4+

# How to run

## Web
1. Clone this rep
2. Execute ```$ npm install``` on "/backend" and "/frontend" folders to install dependencies;
3. On backend folder, execute ```$ npm start```, then execute the same command on frontent folder;
4. The application is now running on <a href=http://localhost:3000> http://localhost:3000</a>.

## Mobile
1. First, execute <code>$ yarn install</code> on <code>'./mobile'</code> folder for installing dependencies
2. Then, execute yarn start on <code>'./mobile'</code> folder
3. A window will open automatically, and then copy the url link gived near the QRCode or scanning the QRCode
4. Go on ```'./mobile/src/services/api.js'``` file, and change this url:  
 <code>baseURL: 'http://192.168.15.8:3333'</code>  
 to your copied url changing the content after the ':' for 3333 (same as it where on previous code)
 5. Make sure the Web App is running
 6. Download 'Expo' app on PlayStore or AppStore
 7. Run yarn start again on <code>'./mobile'</code> folder and scan the QRCode with Expo app
 8. Enjoy the application :)