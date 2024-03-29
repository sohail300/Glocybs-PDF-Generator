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

const Termination = () => {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <Image src={'/A4.png'} style={styles.backgroundImage} />
                    <View style={styles.bodyContainer}>
                        {/* BANNER */}
                        <Banner />
                        <View style={styles.heading}>
                            <Text style={{ textAlign: 'center', marginTop: '10px' }}>TERMINATION POLICY</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>1. Introduction:</Text>
                            <Text>This policy describes the procedures and circumstances for termination of employment at GLOCYBS. It applies to all employees, regardless of the position or employment status (full-time, part-time, temporary).</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>2. Termination by the company for cause:</Text>
                            <Text>The company may terminate your employment immediately for any of the following
                                reasons listed below, which shall be considered termination for cause:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>2.1. Breach of agreement or corporate policies: </Text>Willful or repeated failure to
                                    follow the provisions of your employment contract or established corporate
                                    policies, standards, rules, or laws.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>2.2. Misconduct:</Text>Committing acts of fraud, dishonesty, theft, sexual harassment,
                                    or any other serious misconduct in performing your duties.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>3. Termination by the company without cause:</Text>
                            <Text>The Company may terminate your employment at any time, without cause, provided
                                written notice is given to you 30 days before your last day of work, <Text style={{ fontFamily: 'Helvetica-Bold' }}>under Section 25F
                                    of the Industrial Disputes Act, 1947.</Text></Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>4. Termination by Employee:</Text>
                            <Text>You have the right to resign at any time, with written notice provided to the company 90
                                days before the last working day.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>5. Mutual Termination:</Text>
                            <Text>The Company and you may mutually agree to end your employment agreement anytime.
                                This agreement should be in writing and signed by both parties.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>6. Termination upon Death:</Text>
                            <Text>In the terrible event that you die, your employment with GLOCYBS will be immediately
                                terminated. Your estate will receive all earned salaries and benefits up to the end of the
                                month in which you died.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>7. Compensation following Termination:</Text>
                            <Text>Unless otherwise stated in this policy or required by law, upon termination of
                                employment, you will only be entitled to compensation (salary, bonuses, etc.) accrued
                                through the date of termination. You will not be entitled to any further salary, bonus,severance, compensation, or benefits from the Company, even if they were previously
                                computed or disclosed.</Text>
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
                            <Text style={styles.subheading}>8. Termination during Probation Period:</Text>
                            <Text>During your initial probation period, the termination notice time is shorter:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>8.1. The Company may terminate your employment with a written notice of 10
                                    days or by giving you 10 days' salary instead of notice.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>8.2. You can resign while on probation, but only after giving 20 days written
                                    notice.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text>We recommend that you familiarize yourself with this policy. If you have any questions
                                regarding your employment status or this termination policy, please don't hesitate to
                                contact the HR department at <Link href='mailto:hr@glocybs.com'>hr@glocybs.com</Link> or <Link href='mailto:admin@glocybs.com'>admin@glocybs.com</Link>.</Text>
                        </View>
                        <Footer />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Termination