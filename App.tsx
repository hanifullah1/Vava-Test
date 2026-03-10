import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const VideoChat = () => <View><Text>Video Chat Feature</Text></View>;
const RandomMatch = () => <View><Text>Random Match Feature</Text></View>;
const LiveChat = () => <View><Text>Live Chat Feature</Text></View>;
const ProfileVerification = () => <View><Text>Profile Verification Feature</Text></View>;
const Discovery = () => <View><Text>Discovery Feature</Text></View>;
const VirtualGifts = () => <View><Text>Virtual Gifts Feature</Text></View>;

const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="VideoChat" component={VideoChat} />
      <Tab.Screen name="RandomMatch" component={RandomMatch} />
      <Tab.Screen name="LiveChat" component={LiveChat} />
      <Tab.Screen name="ProfileVerification" component={ProfileVerification} />
      <Tab.Screen name="Discovery" component={Discovery} />
      <Tab.Screen name="VirtualGifts" component={VirtualGifts} />
    </Tab.Navigator>
  );
};

export default App;
