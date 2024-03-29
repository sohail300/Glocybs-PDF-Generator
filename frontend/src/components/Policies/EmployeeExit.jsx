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

const EmployeeExit = () => {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <Image src={'/A4.png'} style={styles.backgroundImage} />
                    <View style={styles.bodyContainer}>
                        {/* BANNER */}
                        <Banner />
                        <View style={styles.heading}>
                            <Text style={{ textAlign: 'center', marginTop: '10px' }}>EMPLOYEE EXIT POLICY</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>1. Scope:</Text>
                            <Text>This Employee Exit Policy applies to all employees of GLOCYBS. It outlines the procedures for both voluntary and involuntary separation of employment.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>2. Voluntary Separation:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text style={{ fontFamily: 'Helvetica-Bold' }}>2.1. Communication of Resignation: </Text>
                                <Text>Employees who intend to resign must submit a proper resignation letter through the company portal. The letter should indicate the reason for resignation and the last working day (notice period).</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text style={{ fontFamily: 'Helvetica-Bold' }}>2.2. Retention Discussion: </Text>
                                <Text>Your manager and the HR department will initiate a discussion to understand your reasons for leaving. This discussion helps us identify areas for improvement and potentially convince valued employees to stay.  Depending on the situation, the Director may also be involved.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text style={{ fontFamily: 'Helvetica-Bold' }}>2.3. Notice Period: </Text>
                                <Text>Employees are obligated to serve a 90-day notice period under the employment agreement to ensure a smooth transition of duties. This permits us to hire and train a replacement.</Text>
                            </View>

                            <View style={{ paddingLeft: '32px' }}>
                                <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                    <Text>• <Text style={{ fontFamily: 'Helvetica-Bold' }}>Notice Period buyout: </Text>The notice period for termination of employment during the probation period is shorter than after the probation ends.</Text>
                                </View>

                                <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                    <Text>• <Text style={{ fontFamily: 'Helvetica-Bold' }}>Notice Period buyout amount: </Text>The Company can terminate your employment with written notice of 10 days or by paying you 10 days' salary instead of notice.</Text>
                                </View>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text style={{ fontFamily: 'Helvetica-Bold' }}>2.4. Bond Period and Early Termination: </Text>
                                <Text>If you are subject to a <Text style={{ fontFamily: 'Helvetica-Bold' }}>mandatory employment bond</Text> with GLOCYBS, you are obligated to stay employed for the contracted period. Early termination during the bond period will result in a <Text style={{ fontFamily: 'Helvetica-Bold' }}>compensation payment of Rs.100,000</Text> to cover recruitment and training costs associated with your replacement.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text style={{ fontFamily: 'Helvetica-Bold' }}>2.5. Clearance Form: </Text>
                                <Text>The HR department will provide a Clearance Form to resigning employees before their last working day. This form needs to be signed by your manager and Finance department to confirm you have completed all obligations.</Text>
                            </View>

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

                        <View style={{ paddingLeft: '40px' }}>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text style={{ fontFamily: 'Helvetica-Bold' }}>2.6. Exit Interview: </Text>
                                <Text>The HR department will conduct an exit interview to gather your feedback on your experience at GLOCYBS. Your insights will help us enhance the office environment and reduce departures.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text style={{ fontFamily: 'Helvetica-Bold' }}>2.7. Issuing Relieving Letter: </Text>
                                <Text>After completing all leaving procedures and returning company assets, the HR department will issue your relieving letter within two weeks after your last working day if no outstanding clearances are pending.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text style={{ fontFamily: 'Helvetica-Bold' }}>2.8. Issuing Experience Letter: </Text>
                                <Text>The HR department will issue your experience letter within 45 days of receiving all clearances.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text style={{ fontFamily: 'Helvetica-Bold' }}>2.9. Payroll & Taxes during the Notice Period: </Text>
                                <Text>To ensure a smooth salary process during your notice period, please follow these guidelines:</Text>
                            </View>
                            <View style={{ paddingLeft: '32px' }}>
                                <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>• Submit Investment Proofs for Tax benefits: </Text>
                                    <View style={{ paddingLeft: '32px' }}>
                                        <Text style={{ marginBottom: '10px', lineHeight: 1.3 }}>- As soon as you resign, gather all your investment proof documents to claim Income Tax (IT) benefits. Submit these investment proofs to the payroll team within 3 working days from your resignation date.</Text>
                                        <Text style={{ marginBottom: '10px', lineHeight: 1.3 }}>- Submitting these papers on time allows the HR/Payroll team to determine the correct tax deductions for your salary during your notice period. This guarantees that you get the maximum tax benefit.</Text>
                                        <Text style={{ marginBottom: '10px', lineHeight: 1.3 }}>- If you don't submit the proof within 3 days, the HR team might not be able to consider them for tax deductions. This could result in a higher tax amount being withheld from your first salary payment during the notice period.</Text>
                                    </View>
                                </View>

                                <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>• Outstanding Debts Deducted from First Notice Period Salary: </Text>
                                    <View style={{ paddingLeft: '32px' }}>
                                        <Text style={{ marginBottom: '10px', lineHeight: 1.3 }}>- Any outstanding company loans or other financial obligations you owe to GLOCYBS (e.g., company advances) will be deducted from your first salary payment during the notice period.</Text>
                                        <Text style={{ marginBottom: '10px', lineHeight: 1.3 }}>- This ensures that all your financial commitments with GLOCYBS are settled before you receive your final paycheck.</Text>
                                    </View>
                                </View>
                            </View>
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
                            <Text style={styles.subheading}>3. Involuntary Separation:</Text>
                            <Text style={{ fontFamily: 'Helvetica-Bold' }}>Termination may occur for reasons including:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>3.1. Absconding:</Text> Unapproved absence lasting two or more days. An established procedure for notifications, legal notices, and prospective legal action shall be followed.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>3.2. Performance</Text> Consistent inability to achieve performance standards. A Performance Improvement Plan (PIP) may be proposed to allow employees to improve before being terminated.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>3.3. Immediate Termination</Text> Serious acts such as fraud, misbehaviour, or a breach of company policies may result in immediate termination of employment.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>4. Notice Period for Termination:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>4.1. Confirmed Employees:</Text> 30 days of written notice or pay instead of notice.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>4.2. Probationary Employees:</Text> 10 days of written notice or pay instead of notice.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>5. Full and Final Settlement:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>5.1.</Text> You are required to return all company property and settle any outstanding debts before your last working day.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>5.2.</Text> Full and Final Settlement, which includes your final salary and any outstanding benefits, will be processed <Text style={{ fontFamily: 'Helvetica-Bold' }}>within 45 days of your last working day.</Text> Any outstanding employee debts will be subtracted from your final settlement payment.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text>Any queries regarding the Employee Exit policy, kindly contact the HR department at <Link href='mailto:hr@glocybs.com'>hr@glocybs.com</Link> or <Link href='mailto:admin@glocybs.com'>admin@glocybs.com</Link>.</Text>
                        </View>
                        <Footer />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default EmployeeExit