/* eslint-disable react/prop-types */
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import currentDate from '../utils/currentDate';
import MyCustomFont from '../assets/fonts/arialmt-normal.ttf'
import Banner from './Banner';
import Footer from './Footer';
import ESign from './ESign';

Font.register({ family: 'ArialMTnormal', src: MyCustomFont });

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: '#282828',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
     opacity: 0.9
  },
  container: {
    position: 'relative',
    flex: 1,
  },
  bodyContainer: {
    padding: '36px 44px',
    height: '100%',
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: '30px',
    fontFamily: 'Helvetica-Bold',
  },
  date: {
    fontSize: 12,
    margin: '16px 0px',
    textAlign: 'right'
  },
  content: {
    marginBottom: '10px',
    lineHeight: 1.3
  }
});

function Blank() {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Image src={'/A4.png'} style={styles.backgroundImage} />
          <View style={styles.bodyContainer}>

            <Banner />

            <View style={styles.date}>
              <Text>{currentDate}</Text>
            </View>

            {/* <ESign /> */}

            <Footer />
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Blank;
