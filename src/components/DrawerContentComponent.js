import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { Text,View,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import { THEME } from '../theme';

export const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
        <View style={styles.title}>
            <Text style={styles.text}>TachRent</Text>
        </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
      width:'100%',
      height:'25%',
      backgroundColor:THEME.MAIN_COLOR
  },
  text:{
      fontSize:26,
      color:'white',
      paddingLeft:15,
      paddingTop:10
  }
});