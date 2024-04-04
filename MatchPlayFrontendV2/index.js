import "expo-dev-client";
import "react-native-get-random-values";
import React from "react";
import { registerRootComponent } from "expo";
import { AppWrapper } from "./app/AppWrapper";
import { SYNC_CONFIG } from "./sync.config";
import { configureStore } from "@reduxjs/toolkit";



const App = () => <AppWrapper appId={SYNC_CONFIG.appId} />;
registerRootComponent(App);
