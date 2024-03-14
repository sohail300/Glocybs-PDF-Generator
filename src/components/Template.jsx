/* eslint-disable react/prop-types */
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        border: '2px solid red',
        padding:'15px 30px'
    },
    doc: {
        border: '2px solid red',
    }
});

const Template = () => (
    <Document style={styles.doc}>
        <Page size="A4" style={styles.page}>
        <Image src={'./banner.jpeg'}/>
            <View>
                <Text>Dear Sohail, </Text>
            </View>
            <View>
                <Text>Congratulations! We are pleased to confirm that you have been selected to work for GLOCYBS Pvt. Ltd.
                    We are delighted to make you the following job offer:</Text>
            </View>
            <View>
                <Text>The position we are offering you is that of Internship in Full Stack Developer.This position reports directly to the manager.</Text>
            </View>
            <View>
                <Text>We would like you to start work on 1st  of February ,2024. Please report us for documentation and orientation. If this date is not acceptable, please contact us immediately. On joining, you will be invited to meeting with respective team lead, and you may be required to upload your basic documents.</Text>
            </View>
            <View>
                <Text>We are confident you will be able to make a significant contribution to the success of Glocybs and look forward to working with you.</Text>
            </View>

            <View>
                <Text>Best regards</Text>
            </View>

            <View>
                <Text>Ritu Farswan</Text>
            </View>

            <View>
                <Text>Human resource</Text>
            </View>
        </Page>
    </Document>
);

export default Template;
