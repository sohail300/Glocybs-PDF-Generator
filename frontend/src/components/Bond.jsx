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
        marginBottom: '8px',
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
        marginBottom: '20px',
        lineHeight: 1.3
    },
});

const Bond = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
    const day = queryParams.get('day');
    const month = queryParams.get('month');
    const year = queryParams.get('year');

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <Image src={'/A4.png'} style={styles.backgroundImage} />
                    <View style={styles.bodyContainer}>
                        {/* BANNER */}
                        <Banner />
                        <View style={styles.heading}>
                            <Text style={{ textAlign: 'center', marginTop: '10px' }}>BOND</Text>
                        </View>
                        <View style={styles.content}>
                            <Text>This EMPLOYEE NON-DISCLOSURE AGREEMENT, hereinafter known as the “Agreement”, is
                                entered into between <Text style={{ fontFamily: 'Helvetica-Bold' }}>{name}</Text> and <Text style={{ fontFamily: 'Helvetica-Bold' }}>Glocybs Pvt.Ltd.</Text> (“Company”), collectively known as the
                                “Parties” as of the {day} {month}, {year} (the “Effective Date”).</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Article I: Understanding Your 1.5-Year Bond: A Guide for Employees</Text>
                            <Text>A 1.5-year bond is a common agreement between employers and employees in certain
                                industries. It stipulates that if an employee leaves the company before the bond period ends,
                                they may be required to pay a specific amount of money. This article aims to provide employees
                                with a clear understanding of 1.5-year bonds, their implications, and employee rights.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Article II: The bond periods</Text>
                            <Text>This is the length of time the employee is obligated to stay with the company. In this case, it is 1.5 years.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Article III: The bond amounts</Text>
                            <Text>This is the amount of money the employee must pay if they leave before the bond period ends. The
                                amount is often calculated as a multiple of the employee's monthly salary and assets. Employees should
                                have to submit the crossed and signed cheque of amount 1 lacs.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Article IV: Exemptions</Text>
                            <Text>Some bonds may have exemptions that allow employees to leave without penalty under certain
                                circumstances, such as relocation due to a spouse's job transfer, medical reasons, or the
                                company's closure.</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>A. What are your rights as an employee?</Text> It is important to remember that you have
                                    rights as an employee, even if you have signed a bond. These rights include:</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>B. The right to negotiate the terms of the bond.</Text> Before signing the bond, you have
                                    the right to negotiate the terms, such as the bond period or amount.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>C. The right to seek legal advice.</Text> If you have any concerns about the bond, you should
                                    seek legal advice from an employment lawyer.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>D. The right to challenge the bond in court.</Text> In some cases, you may be able to
                                    challenge the validity of the bond in court</Text>
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

                        <View style={{ marginBottom: '20px', lineHeight: 1.3, paddingLeft: '40px' }}>
                            <Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>E. Making an informed decision.</Text> Before signing a bond, it is important to carefully
                                consider the terms and implications. You should also weigh the benefits of the job against the potential costs of leaving before the bond period ends. If you have any
                                concerns, do not hesitate to ask questions, or seek legal advice.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Article V: Additional tips for employees</Text>
                            <Text>Some bonds may have exemptions that allow employees to leave without penalty under certain
                                circumstances, such as relocation due to a spouse's job transfer, medical reasons, or the
                                company's closure.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Article VI: Understand the company's policies on resignation.</Text>
                            <Text>Some bonds may have exemptions that allow employees to leave without penalty under certain
                                circumstances, such as relocation due to a spouse's job transfer, medical reasons, or the
                                company's closure.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Article VII: Plan for the future</Text>
                            <Text>If you are considering leaving the company before the bond period ends, start planning early to
                                ensure you can afford the bond amount.</Text>
                        </View>

                        <ESign />
                        <Footer />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Bond