import React from 'react'
import { Text, View, Image, Link } from '@react-pdf/renderer';

const Footer = () => {
  return (
    <View style={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', position: 'absolute', bottom: '50px', margin: '0 44px' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={'./globe.png'} style={{ width: 16, height: 16, marginRight: '8px' }} />
              <View>
              <Link src='https://glocybs.com/' style={{color: '#282828', textDecoration: 'none'}}>www.glocybs.com</Link>
              <Link src='mailto:admin@glocybs.com' style={{color: '#282828', textDecoration: 'none'}}>admin@glocybs.com</Link>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={'./linkedin.png'} style={{ width: 16, height: 18, marginRight: '8px' }} />
              <View>
              <Link src='https://www.linkedin.com/company/glocybs/' style={{color: '#282828', textDecoration: 'none'}}>/glocybs</Link>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={'./insta.png'} style={{ width: 16, height: 18, marginRight: '8px' }} />
              <View>
              <Link src='https://www.instagram.com/glocybs/' style={{color: '#282828', textDecoration: 'none'}}>/glocybs</Link>
              </View>
            </View>
          </View>
  )
}

export default Footer