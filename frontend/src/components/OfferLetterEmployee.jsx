/* eslint-disable react/prop-types */
import { Page, Text, View, Document, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';
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
  sign: {
    width: '100px',
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
    marginTop: '4px',
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
  const post = queryParams.get('post');
  const stipend = queryParams.get('stipend');
  const dearness = queryParams.get('dearness');
  const houseRent = queryParams.get('houseRent');
  const conveyance = queryParams.get('conveyance');
  const otherAllowance = queryParams.get('otherAllowance');
  const day = queryParams.get('day');
  const month = queryParams.get('month');
  const year = queryParams.get('year');
  const orientatonDay = queryParams.get('orientatonDay');
  const orientatonMonth = queryParams.get('orientatonMonth');
  const orientatonYear = queryParams.get('orientatonYear');

  const tableData = [
    {
      components: 'Basic Salary',
      amount: `${stipend}`,
    },
    {
      components: 'Dearness Allowance (DA)',
      amount: `${dearness}`,
    },
    {
      components: 'House Rent Allowance (HRA)',
      amount: `${houseRent}`,
    },
    {
      components: 'Conveyance Allowance',
      amount: `${conveyance}`,
    },
    {
      components: 'Other Allowances',
      amount: `${otherAllowance}`,
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
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Dear {name},</Text>
            </View>
            <View style={styles.content}>
              <Text>Congratulations! We are pleased to confirm that you have been selected to work for <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS Pvt. Ltd.</Text> We are delighted to make you the following job offer:</Text>
            </View>
            <View style={styles.content}>
              <Text>We are pleased to offer you the position of <Text style={{ fontFamily: 'Helvetica-Bold' }}>{post}</Text> within our esteemed organization. This position will report directly to the Manager who will play a crucial role in shaping the visual identity of <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS</Text>. We would like you  start work on <Text style={{ fontFamily: 'Helvetica-Bold' }}>{day} {month}, {year}</Text>. Please report to us for documentation and orientation on <Text style={{ fontFamily: 'Helvetica-Bold' }}>{orientatonDay} {orientatonMonth}, {orientatonYear}</Text>. If this date is not acceptable, please contact the HR department of the company immediately. On joining, you will be invited to a meeting with respective team leads, and you may be required to upload your basic documents.</Text>
            </View>
            <View style={styles.content}>
              <Text>We are confident you will be able to make a significant contribution to the success of <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS</Text> and look  forward to working with you.</Text>
            </View>

            <View style={[styles.content, { marginTop: '20px' }]}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Best regards,</Text>
            </View>
            <View>
              <Image src={'/sign-black.png'} style={styles.sign} />
            </View>
            <View>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Ritu Farswan</Text>
            </View>
            <View>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Human resource</Text>
            </View>
            <View>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS PVT. LTD.</Text>
            </View>

            <ESign />
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
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>1. Posting and Work type</Text>
              <Text>Glocybs providing hybrid work mode and flexibility to work from home in your schedule, in some case you maybe required to visit and work from office, at any place in India or abroad, whether existing today or which may come up in future. In such a case, you will be governed by the terms and conditions of the service applicable at the new placement location.</Text>
            </View>
            <View style={styles.content}>
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>2. Confidentiality</Text>
              <Text>You will not, at any time, during the employment or after, without the consent of the Management disclose or divulge or make public, except on legal obligations, any information regarding the Company’s affairs or administration or research carried out, whether the same is confided to you or becomes known to you in the course of your service or otherwise.</Text>
            </View>
            <View style={styles.content}>
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>3. Responsibilities & Duties</Text>
              <Text>Your work in the organization will be subject to the rules and regulations of the organization as laid down in relation to conduct, discipline and other matters. You will always be alive to responsibilities and duties attached to your office and conduct yourself accordingly. You must effectively perform to ensure results.</Text>
            </View>
            <View style={styles.content}>
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>4. Past Records</Text>
              <Text>This letter of appointment is based on the information furnished in your application for employment and during the interviews you had with us. If any declaration given, or information furnished by you, to the company proves to be false, or if you are found to have willfully suppressed any material information, in such cases, you will be liable to removal from services without any notice.</Text>
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
                  <Text style={[styles.columnHeader, styles.tableCol]}>Amount</Text>
                </View>
                {tableData.map((data, index) => (
                  <View style={styles.tableRow} key={index}>
                    <Text style={[styles.cell, styles.tableCol]}>{data.components}</Text>
                    <Text style={[styles.cell, styles.tableCol]}>{data.amount}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.content}>
              <Text>Note: You will receive all your benefits forming part of your remuneration package subject to, and after,  professional taxes in accordance with applicable law.</Text>
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
            <View style={styles.heading}>
              <Text style={{ textAlign: 'center', marginTop: '10px' }}>Annexure C</Text>
            </View>
            <View style={styles.content}>
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>1. Date of Joining, Compensation and Grade</Text>
              <View style={{ paddingLeft: '24px' }}>
                <Text style={{ marginBottom: '10px' }}>1.1. You are expected to join the company by <Text style={{ fontFamily: 'Helvetica-Bold' }}>{day} {month} {year}</Text>. Your fixed Cost to the Company (CTC) is <Text style={{ fontFamily: 'Helvetica-Bold' }}>{stipend}</Text> per annum. (details in Annexure-B).</Text>
                <Text style={{ marginBottom: '10px' }}>1.2. To confirm our arrangements regarding your employment with <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS Pvt. Ltd.</Text> As part of our commitment to your professional growth and financial stability, please be advised that your salary will be disbursed by the first week of each month, starting from your date of employment.</Text>
                <Text style={{ marginBottom: '10px' }}>1.3. Please note that your first salary will be disbursed after 45 days from your date of employment. Subsequently, starting from the second month, your salary will be provided every month.</Text>
                <Text style={{ marginBottom: '10px' }}>1.4. As part of our commitment to fostering a supportive and fulfilling work environment, we are excited to announce that we will soon be providing comprehensive company policies. These policies will outline our commitment to our employees’ well-being, professional growth, and overall success within the organization.</Text>
                <Text style={{ marginBottom: '10px' }}>1.5. We look forward to welcoming you to the team and  providing you with further  details regarding our company policies upon your acceptance of this offer.</Text>
                <Text style={{ marginBottom: '10px' }}>1.6. We are excited to welcome you to our team and are confident in the value you will bring to our organization.</Text>
                <Text>1.7. We look forward to your contributions to our team and anticipate a mutually rewarding working relationship.</Text>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>2. Posting & Transfer</Text>
              <View style={{ paddingLeft: '24px' }}>
                <Text>2.1. The position is transferable and may require you to be posted at any of the company’s offices in the country. However, your base office will be our Ghaziabad office.</Text>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>3. Full-Time Employment</Text>
              <View style={{ paddingLeft: '24px' }}>
                <Text>3.1. This is a full-time assignment, and you are expected to devote your complete time and attention tothis position. You shall not engage yourself directly or indirectly, in any other work either paid or in an honorary capacity outside.</Text>
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
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>4. Working Hours & Leaves</Text>
              <View style={{ paddingLeft: '24px' }}>
                <Text style={{ marginBottom: '10px' }}>4.1. The normal office observes a 6 day/week Monday through Saturday, from 9.30 A.M. to 06.30 P.M. Sundays are observed as off days. However, being in the service business, you are expected to be on call 24 hours a day.</Text>
                <Text>4.2. You are entitled to take leave as per the leave policy of the company.</Text>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>5. Leaves</Text>
              <View style={{ paddingLeft: '24px' }}>
                <Text style={{ marginBottom: '10px' }}>5.1. The year runs from January 1 to December 31 for leave purposes.</Text>
                <Text style={{ marginBottom: '10px' }}>5.2. The employee is entitled to one or more consecutive days of paid time off for one or more of the categories listed below:</Text>
                <View style={{ paddingLeft: '32px' }}>
                  <Text style={{ marginBottom: '10px' }}>5.2.1. Casual Leave</Text>
                  <Text style={{ marginBottom: '10px' }}>5.2.2. Sick Leave</Text>
                  <Text style={{ marginBottom: '10px' }}>5.2.3. Earned Leave</Text>
                  <Text style={{ marginBottom: '10px' }}>5.2.4. Maternity Leave</Text>
                  <Text style={{ marginBottom: '10px' }}>5.2.5. Menstrual Leave</Text>
                </View>
                <Text>Specific details and guidelines for each leave category can be found in the separate Leave Policy document, which you’ll receive on your first day. Please note that all leave requests are subject to company approval.</Text>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>6. Probation Period</Text>
              <View style={{ paddingLeft: '24px' }}>
                <Text style={{ marginBottom: '10px' }}>6.1. As you embark on this new journey with us, we want to inform you that the initial three months of your employment will serve as a probationary period.</Text>
                <Text style={{ marginBottom: '10px' }}>6.2. During this time, we will closely monitor your performance, integration into the team, and adherence to company policies and values. Your continued employment with GLOCYBS beyond this probationary period will be contingent upon a satisfactory assessment of your performance and alignment with our organizational goals.</Text>
                <Text style={{ marginBottom: '10px' }}>6.3. Please consider this period as an opportunity for mutual evaluation, growth, and development. We encourage open communication, feedback, and proactive engagement to ensure a successful transition into your role.</Text>
                <Text>6.4. If you have any questions or concerns regarding this probationary period or any other aspect of your employment, please do not hesitate to reach out to your supervisor or the HR department for assistance.</Text>
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
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>7. Termination Policy</Text>
              <View style={{ paddingLeft: '24px' }}>
                <View style={{ paddingLeft: '32px' }}>
                  <Text style={{ marginBottom: '10px' }}>This policy describes the procedures and circumstances for termination of employment at GLOCYBS. It applies to all employees, regardless of the position or employment status (full-time, part-time, temporary).</Text>
                </View>
                <Text style={{ marginBottom: '10px', fontFamily: 'Helvetica-Bold' }}>7.1. Termination by the company for cause:</Text>

                <View style={{ paddingLeft: '32px' }}>
                  <Text style={{ marginBottom: '10px' }}>The Company may terminate your employment immediately for any of the following reasons listed below, which shall be considered termination for cause:</Text>
                  <Text style={{ marginBottom: '10px' }}>7.1.1 <Text style={{ fontFamily: 'Helvetica-Bold' }}>Breach of agreement or corporate policies:</Text> Willful or repeated failure to follow the provisions of your employment contract or established corporate policies, standards, rules, or laws.</Text>
                  <Text style={{ marginBottom: '10px' }}>7.1.2 <Text style={{ fontFamily: 'Helvetica-Bold' }}>Misconduct:</Text> Committing acts of fraud, dishonesty, theft, sexual harassment, or any other serious misconduct in performing your duties.</Text>
                </View>

                <Text style={{ marginBottom: '10px', fontFamily: 'Helvetica-Bold' }}>7.2. Termination by the company without cause:</Text>

                <View style={{ paddingLeft: '32px' }}>
                  <Text>7.2.1. The Company may terminate your employment at any time, without cause, provided written notice is given to you 30 days before your last day of work.</Text>
                </View>

                <Text style={{ marginBottom: '10px', fontFamily: 'Helvetica-Bold' }}>7.3. Termination by Employee:</Text>
                <View style={{ paddingLeft: '32px' }}>
                  <Text style={{ marginBottom: '10px' }}>7.3.1. You have the right to resign at any time, with written notice provided to the company 90 days before the last working day.</Text>
                </View>

                <Text style={{ marginBottom: '10px', fontFamily: 'Helvetica-Bold' }}>7.4. Mutual Termination:</Text>
                <View style={{ paddingLeft: '32px' }}>
                  <Text style={{ marginBottom: '10px' }}>7.4.1.  The Company and you may mutually agree to end your employment agreement anytime. This agreement should be in writing and signed by both parties.</Text>
                </View>

                <Text style={{ marginBottom: '10px', fontFamily: 'Helvetica-Bold' }}>7.5. Termination upon Death:</Text>
                <View style={{ paddingLeft: '32px' }}>
                  <Text style={{ marginBottom: '10px' }}>7.5.1. In the terrible event that you die, your employment with GLOCYBS will be immediately terminated. Your estate will receive all earned salaries and benefits up to the end of the month in which you died.</Text>
                </View>

                <Text style={{ marginBottom: '10px', fontFamily: 'Helvetica-Bold' }}>7.6. Compensation following Termination:</Text>
                <View style={{ paddingLeft: '32px' }}>
                  <Text style={{ marginBottom: '10px' }}>7.6.1. Unless otherwise stated in this policy or required by law, upon termination of employment, you will only be entitled to compensation (salary, bonuses, etc.) accrued through the date of termination. You will not be entitled to any further salary, bonus, severance, compensation, or benefits from the Company, even if they were previously computed or disclosed.</Text>
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
              <View style={{ paddingLeft: '24px' }}>
                <Text style={{ marginBottom: '10px', fontFamily: 'Helvetica-Bold' }}>7.7. Termination during Probation Period:</Text>
                <View style={{ paddingLeft: '32px' }}>
                  <Text style={{ marginBottom: '10px' }}>7.7.1. During your initial probation period, the termination notice time is shorter.</Text>
                  <Text style={{ marginBottom: '10px' }}>7.7.2. The Company may terminate your employment with a written notice of 10 days or by giving you 10 days salary instead of notice.</Text>
                  <Text>7.7.3. You can resign while on probation, but only after giving 20 days written notice.</Text>
                </View>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>8. Non-Compete Clause</Text>
              <View style={{ paddingLeft: '24px' }}>
                <Text style={{ marginBottom: '10px', fontFamily: 'Helvetica-Bold' }}>8.1. Non-solicitation of employees:</Text>

                <View style={{ paddingLeft: '32px' }}>
                  <Text style={{ marginBottom: '10px' }}>8.1.1. The Employee agrees with the Company that for 1 year following the
                    termination of employment under this Agreement, the Employee will not, directly or indirectly, on the Employee's behalf or for any other person, firm, or company: Solicit, seduce, or attempt to solicit, any employee of the Company or its subsidiaries</Text>
                </View>

                <Text style={{ marginBottom: '10px', fontFamily: 'Helvetica-Bold' }}>8.2. Non-Competition:</Text>

                <View style={{ paddingLeft: '32px' }}>
                  <Text style={{ marginBottom: '10px' }}>The Employee further pledges with the Company that for 1 year following the termination of employment under this Agreement, the Employee shall not, directly or indirectly, for themselves or as an agent or employee of any other person, corporation, or company:
                  </Text>

                  <Text style={{ marginBottom: '10px' }}>8.2.1. Engage in any activity or business that competes with that of the Company, its affiliated companies, or subsidiaries.
                  </Text>
                  <Text style={{ marginBottom: '10px', fontFamily: 'Helvetica-Bold' }}>8.2.2. Provide services for:
                  </Text>

                  <View style={{ paddingLeft: '32px' }}>
                    <Text style={{ marginBottom: '10px' }}>8.2.2.1. Any client or subcontractor with whom the Company had an active commercial relationship at the time of the Employee's termination or within the six (6) months preceding termination.
                    </Text>
                    <Text style={{ marginBottom: '10px' }}>8.2.2.2 Any client or subcontractor with whom the Company was, at the time of the Employee's termination, in active proposal or procurement discussions, or was actively preparing to solicit for business within the next six (6) months, provided the Employee knew or had reasonable cause to know of such preparations.
                    </Text>
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
              <Text style={[styles.subheading, { fontFamily: 'Helvetica-Bold' }]}>9. Change of Job Duties</Text>
              <View style={{ paddingLeft: '24px' }}>
                <Text style={{ marginBottom: '10px' }}>GLOCYBS may occasionally need to modify job duties to meet changing business needs. When such situations arise, we will strive to ensure the following changes:</Text>
                <Text style={{ marginBottom: '10px' }}>
                  <Text style={{fontFamily: 'Helvetica-Bold' }}>9.1. Remain Consistence with the Job Type:</Text>The revised duties will align with the general skillset and experience required for your original position. We won't transfer you to a completely different role outside your expertise.
                </Text>

                <Text style={{ marginBottom: '10px' }}>9.2. There will be no negative impact on your salary, benefits, or other terms of employment as a result of changes to your job duties.</Text>

                <Text style={{ marginBottom: '10px' }}>9.3. We will provide you with clear explanations for any changes and will welcome your questions and feedback.</Text>

              </View>

              <View style={[styles.content, { marginTop: '20px' }]}>
                <Text>We recommend that you familiarize yourself with this policy. If you have any questions regarding your employment status or this termination policy, please don’t hesitate to contact the Human Resources department at <Link href='mailto:hr@glocybs.com'>hr@glocybs.com</Link> or <Link href='mailto:admin@glocybs.com'>admin@glocybs.com</Link>.</Text>
              </View>
            </View>


              <View style={[styles.content, { marginTop: '20px' }]}>
                <Text style={{ fontFamily: 'Helvetica-Bold' }}>Best regards,</Text>
              </View>
              <View>
                <Image src={'/sign-black.png'} style={styles.sign} />
              </View>
              <View>
                <Text style={{ fontFamily: 'Helvetica-Bold' }}>Ritu Farswan</Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'Helvetica-Bold' }}>Human resource</Text>
              </View>
              <View>
                <Text style={{ fontFamily: 'Helvetica-Bold' }}>GLOCYBS PVT. LTD.</Text>
              </View>
              <ESign />
              <Footer />
              
          </View>
        </View>
      </Page>

    </Document>
  )
}

export default OfferLetter