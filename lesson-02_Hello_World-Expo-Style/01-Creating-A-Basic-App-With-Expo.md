Now that you have your development environment setup, we can start building our first mobile application, "Hello World"

Start by opening up a terminal. Then create or navigate to a folder where you want to keep your projects.  

    ![alt_text](assets/Capture0.png "image_tooltip")


Once  you're in the folder execute this command

```
expo init hello-world
```


You should be promoted to "Choose a template.

    ![alt_text](assets/Capture1.png "image_tooltip")


"Hello World" is a really simple app, so let's choose the default  'blank.'   Hit 'enter' to accept this as your template.  Expo will now extract the files you need and setup your app.

     ![alt_text](assets/Capture2.png "image_tooltip")


We can run our app by following the instructions on the screen.  Execute these two commands:


## Taking Your New Development Environment for a Spin

Let's create and run a test app to maker sure everything is working properly.

1. In your terminal, navigate to a folder where you want to create you test app

2. Run the command `expo init test-app` You should see some options for app templates

    ![Alt](assets/linux/templates.png "Templates")

3. Choose "blank"  this is only a test.

4. When it's done, follow the direction on the screen to start the app.
    ```bash
    cd test-app
    expo start
    ```

    ![Alt](assets/linux/expo-upc.png "Expo UPC")

5. The development tools interface should pop up in your Chrome browser.

    ![Alt](assets/linux/expo-dev-tools.png "Expo Developer Tools")

6. Let's run the app in your Android emulator. Open Genymotion and start an emulator. Once it's started click the "Run on Android device/emulator" button in the left side of the screen.

7. You should have a new virtual device so Expo will try to install the Expo Client App. This may take a while, but you can monitor the progress in the bundler console.

    ![Alt](assets/linux/bundler-console.png "Bundler Console")

8. When the Expo client is loaded, the emulator will prompt you for permission to "draw over other apps."  Click the "OK"
button.

    ![Alt](assets/linux/permissions.png "Permissions")

9. Click the "Allow Display over other apps" toggle so it's on (green)

    ![Alt](assets/linux/toggle.png "Toggle")

10. Click the Back button on the right side to get back to your app.

    ![Alt](assets/linux/back-button.png "Back Button")

11. You should see your app building and then loading. When it's done, you should see this screen:

    ![Alt](assets/linux/app.png "App")

```
cd hello-world
expo start

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
 render() {
   return (
     <View style={styles.container}>
       <Text>Hello World</Text>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});


<!-- GD2md-html version 1.0β13 -->
