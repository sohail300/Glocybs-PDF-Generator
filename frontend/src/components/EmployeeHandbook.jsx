import { Page, Text, View, Document, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';
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

const EmployeeHandbook = () => {
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
                        <View style={styles.heading}>
                            <Text style={{ textAlign: 'center', marginTop: '10px' }}>GLOCYBS EMPLOYEE HANDBOOK</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>WELCOME TO GLOCYBS!</Text>
                            <Text>This handbook outlines the core policies and regulations that govern our work environment at GLOCYBS. We are committed to providing all employees a professional, respectful, and productive workplace. By accepting employment with GLOCYBS, you agree to comply with all the policies and procedures outlined in this handbook.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>1. Commitment to Fairness and Respect:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>• Anti-Harassment Policy:</Text> GLOCYBS has zero tolerance for harassment of any kind. This policy outlines procedures for reporting and addressing harassment, including sexual harassment. We encourage open communication and a work environment where everyone feels safe and respected.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>• Equal Employment Opportunity:</Text> GLOCYBS is committed to equal opportunity for all employees and qualified applicants for employment. We prohibit discrimination in hiring, promotion, and other employment decisions based on protected characteristics such as race, religion, gender, age, disability, veteran status, or any other characteristic protected by law.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>2. Workplace Safety:</Text>
                            <Text>GLOCYBS prioritizes the safety and well-being of all employees. This section defines safety protocols, hazard reporting procedures, and employee rights regarding a safe work environment. We encourage all employees to proactively identify and report potential safety hazards.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>3. Remote Work Policy:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>• Limited Remote Work:</Text> Remote work arrangements may be considered on a case-by-case basis and require prior approval from the CEO. Working remotely does not exempt employees from fulfilling their job duties and meeting deadlines.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>4. Performance Management:</Text>
                            <Text>GLOCYBS is committed to supporting employee growth and development. Performance expectations will be communicated, and regular feedback will be provided. If an employee fails to meet performance expectations, they may be subject to a Performance Improvement Plan (PIP). The PIP outlines a specific timeframe and clear goals for improvement. Failure to meet PIP goals may result in disciplinary action, up to and including termination of employment.</Text>
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
                            <Text style={styles.subheading}>5. Communication Channel:</Text>
                            <Text>GLOCYBS maintains professional boundaries and encourages a clear separation between personal and professional communication.</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>• Day-to-day communication:</Text> Use official communication channels such as email or communicate with your manager directly for work-related matters.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>• HR or Management:</Text> If you have concerns or require assistance, reach out to your HR representative or manager.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>• Escalating Issues:</Text> You can email <Link href='mailto:hr@glocybs.com'>hr@glocybs.com</Link> or <Link href='mailto:admin@glocybs.com'>admin@glocybs.com</Link> to make an appointment with a higher authority for issues that need more attention.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>6. Asset Policy:</Text>
                            <Text>This Asset Policy establishes processes and standards for the use, care, and security of company-issued assets entrusted to GLOCYBS employees.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>7. Virtual Meetings:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>• To maintain a productive and engaging virtual work environment, GLOCYBS mandates all team members to keep their cameras turned on throughout planned virtual meetings. This policy fosters greater communication, builds team connections, and allows for a more collaborative experience.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>• We understand that technical difficulties may arise. In such instances, please notify your manager or meeting organizer before the meeting to explain the situation.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>8. Employee Exit Policy:</Text>
                            <Text>This Employee Exit Policy applies to all employees of GLOCYBS. It outlines the procedures for both voluntary and involuntary separation of employment.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>9. Consequences of Policy Violation:</Text>
                            <Text>Failure to comply with company policies and regulations may result in disciplinary action, up to and including termination of employment. The severity of disciplinary action will be determined based on the nature of the violation.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>10. Review and Updates:</Text>
                            <Text>This handbook is subject to review and updates as needed. Employees will be notified of any changes to the handbook.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={{ fontFamily: 'Helvetica-Bold' }}>We encourage you to review this handbook carefully and familiarize yourself with all company policies and procedures. If you have any questions, please don't hesitate to contact the HR department.</Text>
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
                            <Text style={{ fontFamily: 'Helvetica-Bold' }}>Employee Acknowledgement</Text>
                        </View>

                        <View style={styles.content}>
                            <Text>By signing below, I, {name}, acknowledge that I have received and reviewed the GLOCYBS Employee Handbook. I understand and agree to comply with all the policies and regulations outlined in this handbook.</Text>
                        </View>
                        <ESign />
                        <Footer />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default EmployeeHandbook