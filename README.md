<h1 align="center">
    <img src="./frontend/src/assets/big-logo.svg" />
</h1>

## Remake of an OO project made by me and my friend Vinícius Saturnino

The first version of this application was made on **Ruby on Rails** by me and my friend Vinícius <a href="https://gitlab.com/viniciussaturnino07/fgairlines">(Link Here)</a> . This time, we decided to remake the project with **NodeJS**, **React** and **React Native**.

# Application

**FGAirlines** is a **Web** and **Mobile** application for flight reservation. Airlines can register itselves on the web application and register new flights with destination, date, hour and price. Airlines can also delete previously created flights, but not flights created by others airlines. Customers can see all the flights available on the mobile application and contact by email or whatsapp to buy a seat.

# Web Demo

<img src="./github/desktop-demonstration.gif?raw=true" />

# Mobile Demo

<h1 align="center">
    <img src="./github/mobile-demo.gif?raw=true" height="425" />
</h1>

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
1. First, execute <code>$ yarn install</code> on <code>'./mobile'</code> folder to install dependencies
2. Make sure that your phone and your computer are connected on the same internet
3. Then, execute <code>$ yarn start</code> on <code>'./mobile'</code> folder
4. A window will open automatically, and then copy the url link gived near the QRCode or scanning the QRCode
5. Go on ```'./mobile/src/services/api.js'``` file, and change this url:  
 <code>baseURL: 'http://192.168.15.8:3333'</code>  
 to your copied url changing the content after the ':' for 3333 (same as it where on previous code)
 6. Make sure the Web App is running
 7. Download 'Expo' app on PlayStore or AppStore
 8. Run <code>$ yarn start</code> again on <code>'./mobile'</code> folder and scan the QRCode with Expo app
 9. Enjoy the application :)