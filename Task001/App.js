import React from 'react';
import { Text, ScrollView, Image, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.userName}>7 Melhores FII</Text>
      </View>

      <View style={styles.feedRow}>
        <Image
          source={require('./assets/fundo.jpg')} 
          style={styles.img}
        />
      </View>
      
      <View style={styles.headerContainer}>
        <Text style={styles.userName}>FII EM DESTAQUE</Text>
      </View>
      
      <View style={styles.feedRow2}>
        <Image
          source={require('./assets/img1.png')} 
          style={styles.img}
          
        />
      </View>
      
      <View style={styles.feedRow2}>
        <Image
          source={require('./assets/img2.png')} 
          style={styles.img}
        />
      </View>
      
      <View style={styles.feedRow2}>
        <Image
          source={require('./assets/img3.png')} 
          style={styles.img}
        />
      </View>
      
      <View style={styles.feedRow2}>
        <Image
          source={require('./assets/img4.png')} 
          style={styles.img}
        />
      </View>
      
      <View style={styles.feedRow2}>
        <Image
          source={require('./assets/img5.png')} 
          style={styles.img}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    justifyContent: 'center',
    backgroundColor: '#ffffff', 
    flexDirection: 'row',
    padding: 8,
    marginLeft: 30,
    marginTop: 10,
    alignItems: 'center',
  },
  feedRow: {
    justifyContent: 'flex-start',
    width: '100%',
    height: 150,
    borderRadius: 5, 
    marginLeft: 7,
    overflow: 'hidden', 
  },
  feedRow2: {
    justifyContent: 'flex-start',
    width: '100%', 
    height: 150, 
    borderRadius: 5, 
    marginLeft: 7,
    overflow: 'hidden', 
    marginTop:20,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  img: {
    width: '100%',
    height: '100%', 
    borderRadius: 5, 
  },
});
