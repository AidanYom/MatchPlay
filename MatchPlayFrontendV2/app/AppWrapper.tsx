import React from "react";
import { AppProvider, UserProvider } from "@realm/react";
import { SafeAreaView, StyleSheet } from "react-native";

import { schemas } from "./models";
import { LoginScreen } from "./screens/login/LoginScreen";
import colors from "./styles/colors";
import { App } from "./App";

import { RealmProvider } from "@realm/react";
import { OpenRealmBehaviorType, OpenRealmTimeOutBehavior } from "realm";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { Provider } from "react-redux";

const store = configureStore({ reducer: rootReducer });

export const AppWrapper: React.FC<{
  appId: string;
}> = ({ appId }) => {
  // If we are logged in, add the sync configuration the the RealmProvider and render the app
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.screen}>
        <AppProvider id={appId}>
          <UserProvider fallback={<LoginScreen />}>
            <RealmProvider
              schema={schemas}
              sync={{
                flexible: true,
                existingRealmFileBehavior: {
                  type: OpenRealmBehaviorType.DownloadBeforeOpen,
                  timeOut: 1000,
                  timeOutBehavior:
                    // In v11 the enums are not set up correctly, so we need to use the string values
                    OpenRealmTimeOutBehavior?.OpenLocalRealm ??
                    "openLocalRealm",
                },
              }}
            >
              <App />
              {/* Default set to demo register, but create a loading screen that just checks
            the user table and if it is a new user, route to the signup if not route home */}
            </RealmProvider>
          </UserProvider>
        </AppProvider>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default AppWrapper;
