# MatchPlay
MatchPlay is a mobile app built on ReactNative and NodeJS.

## Demo Link

## Getting Started
Follow these instructions to build and run the project.

### Setup Project
- Clone this repository using `git clone https://github.com/ajyan2001/MatchPlay.git`
- `cd` into `MatchPlayFrontendV2`
- `npm i` to install all packages
- `cd` into `MatchPlayUserAPI`
- `npm i` to install all packages

### Running the App
Note: create a bash file to run both at once.

#### Run the Frontend Locally
Note: Make sure an iOS/Android simulator is installed and opened.

- `cd MatchPlayFrontend`
- `npm run ios` or `npm run android` for each respective simulator

Then, download the Expo Go app on your personal device, and scan the QR code. Your phone and laptop must be on the same network. 

Note: Your devices may behave different on public networks. This is recommended on private networks.

There are limitations to testing with Expo, and installing Xcode may need to happen at some point. See more info here: https://reactnative.dev/docs/environment-setup. 

#### Run the Backend Locally
Note: Endpoint in the frontend are connected to `https://matchplay-dev.onrender.com/`. Switch to `https://localhost:3000/` to test locally.

- `cd MatchPlayBackend`
- `npm run test` - unit tests endpoints
- `npm run dev` - runs the api on nodemon
- `npm run start` - runs the api

## Project Structure
- MatchPlayFrontend
  - app
    - assets
    - components
    - models
    - redux
    - screens
    - slices
    - styles
- MatchPlayUserAPI
  - src
    - controllers
    - models
    - repositories
    - routes
    - services
    - tests
## Features
### Account Creation/Updating
- Input user information and prefernces upon creation
- Update information whenever desired

### Swiping
- Swipe right to like
- Swipe left to dislike

### Chat Service
- Chat with matches

## Screenshots

