import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import NotificationSounds, { playSampleSound } from  'react-native-notification-sounds';
import Sound from 'react-native-sound';
const App = () => {
/*
get the list of System notification sounds. This function returns an array the array contains Title, Url, SoundID
You can pass the following values to the getNotifications:
1. notification: get the list of notification sounds
2. ringtone: get the list of ringtones
3. alarm: get the list of alarm sounds (android only)
*/
// NotificationSounds.getNotifications('notification').then(soundsList  => {
// 	console.warn('SOUNDS', JSON.stringify(soundsList));
// 	/*
// 	Play the notification sound.
// 	pass the complete sound object.
// 	This function can be used for playing the sample sound
// 	*/
// 	playSampleSound(soundsList[5]);
// 	// if you want to stop any playing sound just call:
// 	// stopSampleSound();
// });


var sound1 = new Sound(require('./audio/1.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
  });
  const play = () =>{
    sound1.play(() => {
      sound1.release();
    });
  }
  const stop = () =>{
    sound1.stop(() => {
      console.log('Stop');
    });
  }
  return (
    <>
      <View>
        <Text>hello world</Text>
        <TouchableOpacity style={{backgroundColor:'red',padding:10}} onPress={play}>
          <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'green',padding:10}} onPress={stop}>
          <Text>Stop</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App;