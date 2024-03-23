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
  subheading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: '4px',
    fontFamily: 'Helvetica',
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: '20px',
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
  },
  section: {
    margin: 10,
    padding: 10,
  },
  table: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '50%',
    borderTopWidth: 1,
    borderTopColor: '#000000',
    borderLeftWidth: 1,
    borderLeftColor: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderRightWidth: 1,
    borderRightColor: '#000000',
  },
  columnHeader: {
    backgroundColor: '#808080',
    color: '#FFFFFF',
    padding: 5,
  },
  cell: {
    padding: 5,
  },
});

const OfferLetter = () => {

  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get('name');
  const position = queryParams.get('position');
  const period = queryParams.get('period');
  const post = queryParams.get('post');
  const stipend = queryParams.get('stipend');
  const day = queryParams.get('day');
  const month = queryParams.get('month');
  const year = queryParams.get('year');

  const tableData = [
    {
      components: 'Experience Certificate',
      eligible: 'To all who complete internship',
    },
    {
      components: 'Recommendation',
      eligible: 'To all good interns',
    },
    {
      components: 'Stipend',
      eligible: `RS ${stipend}`,
    },
    {
      components: 'Full time Opportunity',
      eligible: 'If you are a good fit',
    },
  ];

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
            <View style={styles.content}>
              <Text><b>Dear {name},</b></Text>
            </View>
            <View style={styles.content}>
              <Text>Congratulations! We are pleased to confirm that you have been selected to work for <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS Pvt. Ltd.</Text> We are delighted to make you the following job offer:</Text>
            </View>
            <View style={styles.content}>
              <Text>We are pleased to offer you the position of …………. within our esteemed organization. This position will report directly to the Manager who will play a crucial role in shaping the visual identity of GLOCYBS. We would like you  start work on date. Please report to us for documentation and orientation on date. If this date is not acceptable, please contact the HR department of the company immediately. On joining, you will be invited to a meeting with respective team leads, and you may be required to upload your basic documents.</Text>
            </View>
            <View style={styles.content}>
              <Text>We are confident you will be able to make a significant contribution to the success of GLOCYBS  and look  forward to working with you.</Text>
            </View>
            <View style={styles.content}>
              <Text>Best regards, </Text>
            </View>
            <View>
              <Text>Ritu Farswan </Text>
            </View>
            <View>
              <Text>Human resource  </Text>
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
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Image src={'/A4.png'} style={styles.backgroundImage} />
          <View style={styles.bodyContainer}>
            {/* BANNER */}
            <Banner />
            <View style={styles.heading}>
              <Text style={{ textAlign: 'center', marginTop: '10px' }}>Annexure A</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.subheading}>1. Posting and Work type</Text>
              <Text>Glocybs providing hybrid work mode and flexibility to work from home in your schedule, in some case you maybe
                be required to visit and work from office, at any place in India or abroad, whether existing today or which may come up in future. In such a case, you will be governed by the terms and conditions of the service applicable at the new placement location.</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.subheading}>2. Confidentiality</Text>
              <Text>You will not, at any time, during the employment or after, without the consent of the Management disclose or divulge or make public, except on legal obligations, any information regarding the Company’s affairs or administration or research carried out, whether the same is confided to you or becomes known to you in the course of your service or otherwise.</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.subheading}>3. Responsibilities & Duties</Text>
              <Text>Your work in the organization will be subject to the rules and regulations of the organization as laid down in relation to conduct, discipline and other matters. You will always be alive to responsibilities and duties attached to your office and conduct yourself accordingly. You must effectively perform to ensure results.</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.subheading}>4. Past Records</Text>
              <Text>This letter of appointment is based on the information furnished in your application for employment and during the interviews you had with us. If any declaration given, or information furnished by you, to the company proves to be false, or if you are found to have willfully suppressed any material information, in such cases, you will be liable to removal from services without any notice.</Text>
            </View>

            {/* FOOTER */}
            <Footer />
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Image src={'/A4.png'} style={styles.backgroundImage} />
          <View style={styles.bodyContainer}>
            {/* BANNER */}
            <Banner />
            <View style={styles.heading}>
              <Text style={{ textAlign: 'center', marginTop: '10px' }}>Annexure B</Text>
            </View>
            <View style={styles.content}>
              <Text>These are the proposed benefits for you, and it is subject to eligibility.</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={[styles.columnHeader, styles.tableCol]}>Components</Text>
                  <Text style={[styles.columnHeader, styles.tableCol]}>Eligibility</Text>
                </View>
                {tableData.map((data, index) => (
                  <View style={styles.tableRow} key={index}>
                    <Text style={[styles.cell, styles.tableCol]}>{data.components}</Text>
                    <Text style={[styles.cell, styles.tableCol]}>{data.eligible}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.content}>
              <Text>Note: You will receive all your benefits forming part of your remuneration package subject to, and after,  professional taxes in accordance with applicable law.</Text>
            </View>

            {/* FOOTER */}
            <Footer />
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default OfferLetter