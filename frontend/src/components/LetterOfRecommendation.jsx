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
        marginBottom: '10px',
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
    sign: {
        width: '100px',
    },
});

function LetterOfRecommendation() {
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
                            <Text>April 5, 2024</Text>
                        </View>
                        <View style={styles.heading}>
                            <Text style={{ textAlign: 'center', marginTop: '10px' }}>LETTER OF RECOMMENDATION</Text>
                        </View>
                        <View style={styles.content}>
                            <Text>We had the pleasure of working with <Text style={{ fontFamily: 'Helvetica-Bold' }}>Geetika Nag</Text> as a Content Writer Intern at <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOBCYS</Text> between <Text style={{ fontFamily: 'Helvetica-Bold' }}>January 5th, 2024 and April 5th, 2024</Text>. Throughout her three-month internship, Geetika Nag impressed me with her writing ability.</Text>
                        </View>
                        <View style={styles.content}>
                            <Text>Her ability to create interesting and educational content in a variety of formats was a great help to our staff. She was able to modify her writing style to suit the intended readership, demonstrating a thorough awareness of them.</Text>
                        </View>
                        <View style={styles.content}>
                            <Text>While <Text style={{ fontFamily: 'Helvetica-Bold' }}>Geetika Nag</Text> is still developing her management skills, her enthusiasm and willingness to learn are commendable. With experience, I am confident she will become adept at prioritizing tasks and meeting deadlines.</Text>
                        </View>
                        <View style={styles.content}>
                            <Text>Overall, I recommend <Text style={{ fontFamily: 'Helvetica-Bold' }}>Geetika Nag</Text> for  content writing position. Her strong writing skills, combined with her eagerness to learn, make her valuable asset to any team.</Text>
                        </View>

                        <View>
                            <Image src={'/shivansh-sign-black.png'} style={styles.sign} />
                        </View>

                        <View>
                            <Text>Shivansh Mishra</Text>
                        </View>
                        <View>
                            <Text>The CEO</Text>
                        </View>
                        <View>
                            <Text>GLOCYBS PVT. LTD.</Text>
                        </View>

                        {/* FOOTER */}
                        <Footer />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default LetterOfRecommendation;
