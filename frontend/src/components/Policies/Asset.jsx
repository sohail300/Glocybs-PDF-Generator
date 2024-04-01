import { Page, Text, View, Document, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';
import Banner from '../Banner';
import Footer from '../Footer';
import ESign from '../ESign';

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
        marginBottom: '8px',
        lineHeight: 1.3
    },
});

const Asset = () => {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <Image src={'/A4.png'} style={styles.backgroundImage} />
                    <View style={styles.bodyContainer}>
                        {/* BANNER */}
                        <Banner />
                        <View style={styles.heading}>
                            <Text style={{ textAlign: 'center', marginTop: '10px' }}>ASSET POLICY</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>1. Introduction:</Text>
                            <Text>This Asset Policy establishes processes and standards for the use, care, and
                                security of company-issued assets entrusted to GLOCYBS employees. These
                                assets include, but are not limited to the following:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px' }}>
                                <Text>1.1. Laptop/computers</Text>
                            </View>

                            <View style={{ marginBottom: '10px' }}>
                                <Text>1.2. Mobile phones</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>2. Asset Issuance and Use:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2.1. Employees will be given business assets based on their job duties and as
                                    approved by their supervisor.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2.2. A formal inventory list detailing the assigned assets will be provided to
                                    each employee for acknowledgement and record-keeping purposes.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2.3. Employees are responsible for using company assets solely for business
                                    purposes and under all applicable laws and regulations.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>3. Care and Maintenance:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>3.1. Employees are accountable for the correct care and upkeep of all assigned assets. This includes according to the manufacturer's guidelines for use and storage.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>3.2. Any damage, malfunction, or loss of an asset should be reported immediately to their supervisor and the IT department.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>3.3. Taking proper security precautions to keep the asset safe from unwanted access, theft, or loss.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>4. Security Licences:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>4.1. All software installed on company-issued devices must be properly licensed.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>4.2. Employees are prohibited from installing unauthorized software or using unlicensed software applications.</Text>
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
                            <Text style={styles.subheading}>5. Security:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>5.1. Employees  are  accountable  for keeping  company  assets  secure  from
                                    unauthorized  access,  use,  disclosure,  disruption,  alteration,  or destruction.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>5.2. Strong  passwords  should  be used  on  all  company-issued  devices  and  software
                                    programs.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>5.3. Employees  should  avoid using  public Wi-Fi  networks  to conduct  sensitive
                                    work  or  access  secret  company  data.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>5.4. Any  suspicious  activities  or suspected  security  breaches  must be  reported  to
                                    the IT  department  immediately.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>6. Data Security:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>6.1. All company  data  stored  on  or accessed  via company-issued  devices  must adhere to  GLOCYBS  data security  policies.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>6.2. Employees  are  not  allowed  to send  or store sensitive company  data on personal  devices  without  proper  authorization.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>7. Return of Assets:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>7.1. Employees must return all business assets in their control to the IT department
                                    in full functioning order, including all standard software and accessories, upon
                                    termination of employment, retirement, or internal transfer.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>7.2. Failure  to  restore  business  assets  can  lead  to disciplinary  action,  including
                                    financial  penalties.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>8. Policy Violation:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>8.1. Any  misuse,  neglect,  or  illegal  use of corporate  assets  violates  this  policy  and
                                    may  result  in  disciplinary  action,  including  termination  of employment.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>9. Update Your Policy:</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>9.1. GLOCYBS retains the right to amend this policy at any moment. Updates will be sent to staff via email or company announcements.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>10. Contact Information:</Text>
                            <Text>For any questions regarding this policy, please contact the HR Department at <Link href='mailto:glocybs_hr@glocybs.com'>glocybs_hr@glocybs.com</Link> or <Link href='mailto:admin@glocybs.com'>admin@glocybs.com</Link>.</Text>
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
                            <Text style={styles.subheading}>11. Employee Acknowledgement:</Text>
                            <Text>By signing below, I confirm that I have received, read, and comprehended the
                                GLOCYBS Asset Policy. I agree to follow all of the terms and conditions specified
                                in this policy</Text>
                        </View>
                        <ESign />
                        <Footer />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Asset