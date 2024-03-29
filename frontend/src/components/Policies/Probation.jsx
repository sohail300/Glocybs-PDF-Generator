import { Page, Text, View, Document, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';
import Banner from '../Banner';
import Footer from '../Footer';


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
        fontFamily: 'Helvetica-Bold',
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
});

const Probation = () => {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <Image src={'/A4.png'} style={styles.backgroundImage} />
                    <View style={styles.bodyContainer}>
                        {/* BANNER */}
                        <Banner />
                        <View style={styles.heading}>
                            <Text style={{ textAlign: 'center', marginTop: '10px' }}>PROBATION PERIOD POLICY</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>1. Introduction:</Text>
                            <Text>This policy outlines the probationary period for new employees at GLOCYBS. The purpose of the probation period is to assess an employee's suitability for the position and ensure a good fit for both the employee and the company.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>2. Probation Period Length</Text>
                            <Text>The standard probation period for new hires at GLOCYBS is 3 months. This period may be extended in exceptional circumstances with written notification to the employee.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>3. Performance Evaluation</Text>
                            <Text>During the probation period, the employee's performance will be evaluated regularly by their supervisor. This evaluation will focus on the following aspects:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>• Job skills and knowledge</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>• Ability to meet job requirements and expectations.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>• Work quality and productivity.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>• Teamwork and collaboration</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>• Professional conduct and work ethic</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>4. Successful Completion of Probation</Text>
                            <Text>Upon successful completion of the probation period, the employee will be considered a permanent employee of GLOCYBS. The terms and conditions of their employment will continue according to their employment agreement.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>5. Unsuccessful Completion of Probation</Text>
                            <Text>If an employee's performance does not meet expectations during the probation period, the company may choose to terminate their employment with written notice. The employee will be provided with feedback on the reasons for termination.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>6. Support During Probation</Text>
                            <Text>GLOCYBS is committed to supporting new employees during their probation period. The company will provide the necessary resources and training to help them succeed in their roles. Employees are encouraged to ask questions and seek clarification from their supervisor or HR department throughout the probation period.</Text>
                        </View>

                    </View>
                </View>
            </Page>

            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <Image src={'/A4.png'} style={styles.backgroundImage} />
                    <View style={styles.bodyContainer}>
                        {/* BANNER */}
                        <Banner />

                        <View style={styles.content}>
                            <Text style={styles.subheading}>7. Notice of Termination During Probation</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>• The notice period for termination of employment during the probation period is shorter than after the probation ends.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>• The Company can terminate your employment with written notice of 10 days or by paying you 10 days' salary instead of notice.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>8. Contact Information</Text>
                            <Text>For any questions regarding this Probation Period Policy, please contact the Human Resources department at <Link href='mailto:hr@glocybs.com'>hr@glocybs.com</Link> or <Link href='mailto:admin@glocybs.com'>admin@glocybs.com</Link>.</Text>
                        </View>
                        
                        <Footer />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Probation