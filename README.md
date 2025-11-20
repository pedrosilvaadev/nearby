# Nearby

Mobile application built with React Native and Expo to discover nearby businesses and coupons.


**Main stack:** React Native · Expo · TypeScript · expo-router

---

## Table of contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the app (development)](#running-the-app-development)
- [Environment / API configuration](#environment--api-configuration)
- [Project structure](#project-structure)
- [Useful scripts](#useful-scripts)
- [Development tips](#development-tips)
- [Contributing](#contributing)
- [License](#license)

---

## About

Nearby is an Expo/React Native project focused on locating places and displaying coupons and market information near the user. The app leverages `expo-router` for filesystem-based routing and includes common Expo libraries for maps, camera and location features.

## Prerequisites

- Node.js (recommended >= 16)
- `npm` or `yarn`
- Expo CLI (optional): `npm install -g expo-cli` or use `npx expo` / `yarn expo`

Note: the project uses the Expo SDK version defined in `package.json` — make sure your global tools are compatible with that SDK when necessary.

## Backend (API)

- Nearby communicates with a separate Node.js/Express REST API responsible for:

- registering businesses and markets
- delivering coupons and nearby locations
- serving data to the mobile app

## Repository link:

➡ https://github.com/pedrosilvaadev/nearby-api

Running the API
git clone https://github.com/pedrosilvaadev/nearby-api
cd nearby-api
npm install
npm run dev

Once the API is running, update your .env in this project:

BASE_URL=http://YOUR_LOCAL_IP:3333

Restart Expo with cache reset:

npx expo start -c

## Installation

1. Clone the repository:

```bash
git clone https://github.com/pedrosilvaadev/nearby.git
cd nearby
```

2. Install dependencies:

```bash
npm install
# or
yarn
```



## Running the app (development)

Start Metro / Expo DevTools:

```bash
npm start
# or
yarn start
```

Open on Android:

```bash
npm run android
# or
yarn android
```

Open on iOS (macOS):

```bash
npm run ios
# or
yarn ios
```

You can also run `npx expo start` to open DevTools and connect devices via QR code.

---

## Environment / API configuration

This project uses .env to configure environment-sensitive values such as API URLs.

## 1. Create a .env file in the project root

```ts
   BASE_URL=http://192.168.0.12:3333
```

## 2. Make sure your babel.config.js has:

```ts
plugins: [
  [
    "react-native-dotenv",
    {
      moduleName: "@env",
      path: ".env",
    },
  ],
];
```

## 3. Using the environment variable in code

```ts
import { BASE_URL } from "@env";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 700,
});
```

## 4. Prevent accidental commits

Add .env to .gitignore:

.env

## A .env.example file is included to document the available variables.

## Project structure

- `app.json` — Expo configuration
- `babel.config.js` — Babel configuration
- `src/app/` — routes and screens (expo-router)
- `src/components/` — reusable UI components
- `src/services/` — API client and config (`api.ts`, `config.ts`)
- `src/styles/` — theme, colors and fonts
- `assets/` — images and static resources

Explore the `src/` folder for a detailed view of screens and components.

---

## Useful scripts

Defined in `package.json`:

- `start` — starts Metro / Expo DevTools (`expo start`)
- `android` — opens on Android (`expo start --android`)
- `ios` — opens on iOS (`expo start --ios`)
- `web` — runs the web version (`expo start --web`)

Example:

```bash
npm run android
```

---

## Development tips

- Use the Expo DevTools to inspect logs and enable fast refresh.
- For changes requiring native code, follow Expo docs for `expo prebuild` or use `eas build` for production builds.
- If you use `react-native-reanimated`, verify the installation steps in the library docs (Babel plugin and main app entry config).

---
