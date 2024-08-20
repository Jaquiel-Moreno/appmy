

import { StyleSheet, View, Image } from 'react-native';
import Title from './src/component/title/';
import Form from './src/component/form/';



export default function App() {
  return (
    <View style={styles.container}>
      <Image style = {styles.Image} source={require('./src/Image/balance.png')}/>
      <Title/>
      <Form/>
   </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
   paddingTop: 80,
  },

  Image:{
    width: 100,
    height: 100,
    borderRadius: 50, 
    margin: "auto"
        
  }
});
