import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer';

const Footer = () => {
  return (
    <View style={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', position: 'absolute', bottom: '50px', margin: '0 44px' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={'./globe.png'} style={{ width: 16, height: 16, marginRight: '8px' }} />
              <View>
                <Text>www.glocybs.com</Text>
                <Text>admin@glocybs.com</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={'./linkedin.png'} style={{ width: 16, height: 18, marginRight: '8px' }} />
              <View>
                <Text>/glocybs</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={'./insta.png'} style={{ width: 16, height: 18, marginRight: '8px' }} />
              <View>
                <Text>/glocybs</Text>
              </View>
            </View>
          </View>
  )
}

export default Footer