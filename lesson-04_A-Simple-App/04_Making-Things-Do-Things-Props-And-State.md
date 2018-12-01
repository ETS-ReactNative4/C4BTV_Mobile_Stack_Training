## Making Things Do Things: Props and State

So far our app is pretty static, and boring.  Let's make it do stuff. Let's add a button.

First we'll need to import the Button component from React Native.  Add 'Button' to our list of React Native imports. Our import statement should now look like this:

    import {StyleSheet, Text, View, Image, Button} from 'react-native';


We don't want our button 

Now we can add a button to our app.  We'll need to create some space between the last line of text and the button, so add a bottom margin to the last line of text like this:

    <Text style={{ fontSize: 20, marginBottom: 50}}>Avocados</Text>


Now append this line after the Text component.

    <Button title='I ate an avocado!'/>
    
    
The render method should now look like this:

    render() {
        return (
          <View style={styles.container}>
            <Image source={avocado} style={styles.avocado}/>
            <Text style={{ fontSize: 20 }}>I have eaten</Text>
            <Text style={{  fontSize: 60 }}>0</Text>
            <Text style={{ fontSize: 20, marginBottom: 50}}>Avocados</Text>
            <Button title='I ate an avocado!'/>
         </View>
        );
    }
    

If you look at the app, you should see warning about a failed prop type.  `The prop 'onPress' is marked as required in 'Button'` Click' 'Dismiss' to get past the warning.  This is what you should see.


![alt](./assets/04/button.png 'Adding a button')

If your button looks different than the one in the picture, you're probably running Android. The button component uses the native buttons for iOS and Android.  Naturally they look different.  We'll deal with that later.


Our app look good but, as the warning said, our button doesn't do anything when you click it.  We need to create a method on our component for our button to call.

Add the following code just before the render function:

    _eatAnAvocado() {}
    
Now pass this new method to the onPress prop of our button like this:

    <Button onPress={this._eatAnAvocado} title='I ate an avocado!'/>

Notice the `this` keyword just before the method.  In this case `this` refers to our component and the `_eatAnAvocado` part refers to our new method. 

Here's what our component should look like:

    export default class App extends React.Component {
  
      _eatAnAvocado() {}
    
      render() {
        return (
          <View style={styles.container}>
            <Image source={avocado} style={styles.avocado}/>
            <Text style={{ fontSize: 20 }}>I have eaten</Text>
            <Text style={{  fontSize: 60 }}>0</Text>
            <Text style={{ fontSize: 20, marginBottom: 50}}>Avocados</Text>
            <Button onPress={this._eatAnAvocado} title='I ate an avocado!'/>
          </View>
        );
      }
    }
    
    
 Woot!  we got rid of the warning.  Sadly, our app still does nothing.  To track our clicks we'll need to add some 'state' to our component.