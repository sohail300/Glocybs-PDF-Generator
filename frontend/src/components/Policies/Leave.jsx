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

const Leave = () => {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <Image src={'/A4.png'} style={styles.backgroundImage} />
                    <View style={styles.bodyContainer}>
                        {/* BANNER */}
                        <Banner />
                        <View style={styles.heading}>
                            <Text style={{ textAlign: 'center', marginTop: '10px' }}>LEAVE POLICY</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Introduction</Text>
                            <Text>GLOCYBS recognises the importance of work-life balance and is committed to supporting our employees during various life events. This policy outlines the different types of leave available to our employees and the associated guidelines.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Objective</Text>
                            <Text>The major goal of implementing the Leave policy is to guarantee that employees are given an appropriate and consistent amount of relaxation and recreation away from work. Some sorts of leave are being implemented for personal emergencies. This policy serves as a guideline for all employees and outlines all the kinds of leave available and the eligibility and method for requesting leave.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Scope & Availability</Text>
                            <Text>All employees and interns in GLOCYBS.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Owner & Administration</Text>
                            <Text>HR is responsible for the leave policy and will therefore manage it effectively. Policies and procedures are subject to change from time to time based on various socioeconomic conditions or legal requirements and are completely determined by board members.</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Key Points</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>1. Leave cannot be taken as a matter of right. Any type of leave can be granted or denied based on business requirements. A leave of absence from work without formal approval will result in disciplinary action.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2. All leaves should be applied through email before proceeding on leave. In case of emergency, when leave cannot be applied in advance, telephonic notification to HR should be done, and it must be regularized within two days of resuming duty.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>3. Leaves will be credited to employees' accounts at the beginning of the calendar year, which is April. Annual Leave will be updated every month to reflect leave Annual during the month. It will be credited at a rate of 1 leaves every month. Existing employees carried forward Annual Leave balances from prior years will be updated in April.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>4. Employees will be eligible for Annual Leave only after completing their probationary period. Upon confirmation, Annual Leave will be credited to the employee's account during the probation period.</Text>
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
                                <Text>5. GLOBCYS values a healthy work-life balance for its workers. To achieve this, we provide a 12-day yearly leave allowance, which includes 8 Annual Leaves (AL) and 4 Casual Leaves (CL). Annual leave is for personal reasons, illness, or crises. Up to 6 unused AL days may be carried forward to the following year, with a maximum total balance of fifteen days. Any AL that exceeds 15 days at the end of the year will be forfeited. Casual leave is intended for short-term absences and cannot be carried forward.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>6. A maximum of 6 Annual Leaves can be carried forward to the following year.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>7. Employee may apply for leave depending upon their leave balance available on their dashboard.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>8. An employee can avail of paid leave depending upon the leave balance available to the employee also unpaid leave can be availed when the leave balance is exhausted and the employee needs leave on approval from the immediate manager, and HR.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>9. If an employee is absent from work for 7 consecutive days beyond their approved leave of absence and does not provide any notification or communication regarding their absence, it may be considered job abandonment.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>10. To prevent such situations, the HR department will attempt to contact the employee through various channels within 7 days of their leave expiration. If no response is received within 3 days, a formal written warning will be issued outlining the seriousness of the situation and potential consequences. A final termination letter will follow if there's no response within 3 days of the first warning. Employees terminated for job abandonment will forfeit their full and final settlement, including any outstanding salary or benefits, as well as be ineligible for an experience letter, reference letter, or accrued and unused Annual leave.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>11. We strongly advocate for transparent communication and prompt notification in the event of unforeseen circumstances that may need an absence.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>12. When an employee takes a long-term sick leave or leaves of absence from work, they are expected to notify the immediate reporting management, HR as soon as possible about their condition and when they expect to return to work. The employer may take significant action if the individual doesn't communicate.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>13. Leave without approval will be considered as leave without pay.</Text>
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
                            <Text style={styles.subheading}>Types of Leaves</Text>
                            <Text>The Company HR Annual Leave Policy provides and documents various kinds of leaves. Leaves can be classified as either annual paid leave or unpaid leave. Paid leave is the type of leave that is approved and awarded to employees based on the availability of their leave balance.</Text>
                            <Text>However, an employee may take unpaid leave or leave without pay in an emergency and when no leave balance remains.</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>1. Casual Leave</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2. Annual Leave</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>3. Maternity Leave</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>4. Menstrual Leave</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>5. Sick Leave</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Casual Leave</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>1. A maximum of 7 days of casual leave can be availed by an employee in a year.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2. Casual leave is paid leave.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>3. Employees joining during the year will be entitled to casual leave on a pro-rata(percentage) basis.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>4. Casual leave can be taken for a minimum of half a day and a maximum of 3 days.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>5. Leave for more than 3 days can be taken as Annual leave.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>6. Casual leave cannot be carried forward to the next year.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>7. Casual leave cannot be clubbed with Annual leave or any other type of leave.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>8. Casual leave should be applied one day in advance and a week in advance when it is applied for more than 2 days.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>9. Casual leave not availed during the year will expire at the end of the year.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Process for Casual Leave</Text>
                            <Text>Casual leave is applied by an employee via email. For approval, the leave notification will reach the immediate reporting manager. Once approved, approval notification will reach to employee and HR. Leave is deducted from the leave balance of the employee's account and the latest balance is updated on the portal.</Text>
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
                            <Text style={styles.subheading}>Annual Leave</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>1. All applications for Annual leave must be submitted to your reporting manager at least 1 Month before the leave commencement date.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2. New Joiners: Annual leave will be credited on a pro-rata basis for those joining during the middle of the year. They can avail of Annual leave after probation period.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>3. Existing Employees: Annual leave will be credited to employee accounts at the beginning of each calendar year. The entitlement will be based on the number of months worked in the previous year. You will accrue 1 day of Annual leave for every complete month worked.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>4. Up to six unused EL days may be carried forward to the following year, with an aggregate maximum balance of fifteen days. Any EL that exceeds 15 days at the end of the year will be cancelled.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>5. Exception: Existing employees with more than 5 years of service can carry forward a maximum of 30 days. Leave exceeding 30 days will automatically lapse.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>6. Employees who resign from GLOCYBS will have their annual leave entitlement calculated on a pro-rata basis up to their last working day.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Process of Annual Leave</Text>
                            <Text>Employees must apply for Annual leave 1 Month in advance. Once applied, a notification will be sent to the immediate reporting manager. Once authorized, a leave notification will be sent to both the employee and HR. The leave balance after deduction will be updated on the portal.</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.subheading}>Sick Leave</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>1. A maximum of 5 days of sick leave can be availed by an employee in a year.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2. Sick Leave is a paid leave.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>3. Employees are required to notify their reporting manager as soon as possible when they are unable to come to work due to illness. This can be done by phone or email.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>4. GLOCYBS does not usually generate sick leave. Sick leave is issued on a case-by-case basis, considering the employee's overall attendance history and the severity of the sickness.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>5. Absences of more than two days may necessitate a doctor's letter. This aids in confirming the sickness and guarantees that sick leave is used lawfully.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>6. Managers are free to accept or reject requests for sick leave depending on the demands of the business, the employee's workload, and their previous attendance history.</Text>
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
                                <Text>7. Employees are expected to use their available paid time off (Annual leave, weekends, casual leave) before requesting sick leave for non-emergency situations.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Process of Sick Leave</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>1. Due to the unpredictable nature of illness, a formal application for sick leave is not required in advance. However, employees are expected to notify their reporting manager as soon as possible when they are unable to come to work due to illness. This can be done by phone, email, or another designated method as outlined by your department. For absences exceeding 2 consecutive working days, a doctor's note will be required to verify the illness and ensure legitimate use of sick leave.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2. During extended absences, we encourage employees to maintain regular communication with their reporting manager to discuss workload adjustments or deadlines. Failure to notify your manager or provide a doctor's note for extended absences may result in disciplinary action. Upon returning from sick leave, employees are encouraged to briefly update their manager regarding their absence.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Maternity Leave</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>1. Under the Maternity Benefit Act of 2016, all confirmed female employees at GLOCYBS are entitled to paid maternity leave.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2. You will receive full pay for a continuous period of 26 weeks (excluding national holidays) for each pregnancy, up to a maximum of two confinements.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>3. Leave taken for prenatal treatment during the first seven months of pregnancy will be considered regular leave, not maternity leave.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>4. You can commence your maternity leave as early as eight weeks before your expected delivery date.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>5. Female employees who intend to take maternity leave should notify their management at least one month before their projected leave date. This advance notification enables us to arrange a temporary substitute and guarantee a smooth transition of your responsibilities.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Process of Maternity Leave</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>1. Submit Application: Before proceeding on maternity leave, you must apply via email 1 Month prior to the leave date and obtain approval from your reporting manager.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2. Doctor's Certificate: Submit a doctor's certificate verifying your pregnancy and expected due date to the HR department.</Text>
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
                            <Text style={styles.subheading}>Menstrual Leave</Text>
                        </View>

                        <View style={{ paddingLeft: '40px' }}>
                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>1. GLOCYBS recognizes that menstruation is a natural biological process that can sometimes cause discomfort and disruption for our female employees. To support your well-being and overall health, we offer a menstrual leave policy.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>2. Female employees are entitled to take up to 2 days of menstrual leave per month. These days can be used as single days or consecutively, depending on your individual needs.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>3. Menstrual leave is a paid leave.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>4. We understand that menstruation is a personal matter. You have the right to request menstrual leave without disclosing details about your specific symptoms.</Text>
                            </View>

                            <View style={{ marginBottom: '10px', lineHeight: 1.3 }}>
                                <Text>5. This leave is intended to be used for managing menstrual discomfort. If you require additional time due to a medical condition related to your menstrual cycle, please refer to our sick leave policy.</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.subheading}>Process of Menstrual Leave</Text>
                            <Text>Menstrual leave can be requested via email or by notifying your direct supervisor. Due to the personal nature of this leave, no documentation is required.</Text>
                        </View>

                        <Footer />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Leave