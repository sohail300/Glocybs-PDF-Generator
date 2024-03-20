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
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8
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

function Moonlighting() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Image src={'/A4.png'} style={styles.backgroundImage} />
          <View style={styles.bodyContainer}>
            {/* BANNER */}
            <Banner />
            <View style={styles.date}>
              <Text>{currentDate}</Text>
            </View>
            <View style={styles.heading}>
              <Text>Company Policy Regarding Outside Employment</Text>
            </View>
            <View style={styles.content}>
              <Text>Dear {name}, </Text>
            </View>
            <View style={styles.content}>
              <Text>This note serves as a reminder of our company policy regarding outside employment, also
                known as <Text style={{ fontFamily: 'Helvetica-Bold' }}>"moonlighting"</Text>. It is important for all employees to understand our expectations and
                avoid potential conflicts of interest. </Text>
            </View>
            <View style={styles.content}>
              <Text>As per company policy, any employee actively engaged in full-time employment with <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS</Text> is prohibited from taking on concurrent employment with another company without prior written
                approval. This applies to any paid or unpaid work outside of your designated working hours with <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS</Text>.</Text>
            </View>
            <View style={styles.content}>
              <Text>Engaging in outside employment without approval may result in disciplinary action, up to and
                including termination of your employment with <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS</Text>. If you are considering taking on
                additional work outside the company, please be sure to reach out to your manager or the
                Human Resources department to discuss and obtain the necessary approvals. </Text>
            </View>
            <View style={styles.content}>
              <Text>We understand that employees may have personal or professional reasons for seeking
                additional work outside the company. However, it is crucial to ensure that any such
                commitments do not impact your primary responsibilities and performance at <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS</Text>.</Text>
            </View>

            <View style={styles.content}>
              <Text>We encourage you to reach out with any questions or concerns you may have regarding this
                policy. </Text>
            </View>

            <View style={styles.content}>
              <Text>Sincerely, </Text>
            </View>

            <View>
              <Text>Shivansh Mishra</Text>
            </View>
            <View>
              <Text>(Founder & Director)</Text>
            </View>
            <View>
              <Text>GLOCYBS PVT. LTD.</Text>
            </View>
            <ESign />

            {/* FOOTER */}
            <Footer />
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Moonlighting;
