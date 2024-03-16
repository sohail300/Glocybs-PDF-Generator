/* eslint-disable react/prop-types */
import { Page, Text, View, Document, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';
import currentDate from '../utils/currentDate';
import MyCustomFont from '../assets/fonts/arialmt-normal.ttf'
import Banner from './Banner';
import Footer from './Footer';
import { nameState } from '../store/atoms/details'
import { useRecoilValue } from 'recoil';
import ESign from './ESign';

Font.register({ family: 'ArialMTnormal', src: MyCustomFont });

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8
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
  checkbox: {
    width: 10,
    height: 10,
    marginTop: '2px',
    marginRight: '4px',
    border: '1px solid black',
  },
});

const NDABond = () => {
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
              <Text style={{ textAlign: 'center', marginTop: '10px' }}>EMPLOYEE NON-DISCLOSURE AGREEMENT</Text>
            </View>
            <View style={styles.content}>
              <Text>This EMPLOYEE NON-DISCLOSURE AGREEMENT, hereinafter known as the “Agreement”, is
                entered into between <Text style={{ fontFamily: 'Helvetica-Bold' }}>{name}</Text> and <Text style={{ fontFamily: 'Helvetica-Bold' }}>Glocybs Pvt.Ltd.</Text> (“Company”), collectively known as the
                “Parties” as of the {day} {month}, {year} (the “Effective Date”).</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.subheading}>Article I: Scope of Agreement</Text>
              <Text>This Agreement acknowledges that certain confidential information, trade secrets, and
                proprietary data (hereinafter defined and referred to as “Confidential Information”) of or
                regarding the Company may be discussed between Employee and the Company (hereinafter
                known collectively as the “Parties”). The provisions set forth in this Agreement define the
                circumstances in which the Employee can and cannot disclose Confidential Information, and
                include the remedies, penalties and lawful action the Company may take should such
                information be used or disclosed by Employee. Both Parties agree that it is in their best interests
                to protect the Company’s Confidential Information, and that the terms of this Agreement create
                a bond of trust and confidentiality between them. In consideration of Employee’s
                commencement of employment, or continued employment with the Company, the Parties agree
                as follows: </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.subheading}>Article II: Confidential Information</Text>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>A. Definitions</Text>
              <Text>Confidential Information is any material, knowledge, information and data
                (verbal, electronic, written or any other form) concerning the Company or its businesses not
                generally known to the public consisting of, but not limited to, inventions, discoveries, plans,
                concepts, designs, blueprints, drawings, models, devices, equipment, apparatus, products,
                prototypes, formulae, algorithms, techniques, research projects, computer programs, software,
                firmware, hardware, business, development and marketing plans, merchandising systems,
                financial and pricing data, information concerning investors, customers, suppliers, consultants
                and employees, and any other concepts, ideas or information involving or related to the
                business which, if misused or disclosed, could adversely affect the Company’s business. </Text>
            </View>

            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>B. Exclusions</Text>
              <Text>For the purposes of this Agreement, information shall not be deemed
                Confidential Information, and the Employee shall have no obligation to keep it confidential if:</Text>
              <View style={{ paddingLeft: '40px' }}>
                <Text>(i) the information was publicly known;</Text>
                <Text>(ii) the information was received from a third party not subject to the restrictions of this
                  Agreement and becomes available to Employee through no wrongful act or breach of
                  Agreement on their part; or</Text>
                <Text>(iii) the information was approved for release by Employer through written authorization.</Text>
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
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>C. Period of Confidentiality (Check One)</Text>
              <View style={{ paddingLeft: '40px' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                  <View style={styles.checkbox}></View>
                  <Text>
                    Employee agrees not to use or disclose Confidential Information for their own
                    personal benefit or the benefit of any other person, corporation, or entity other than the
                    Company for a period of <Text style={{ fontFamily: 'Helvetica-Bold' }}>Lifetime</Text>.</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                  <View style={styles.checkbox}></View>
                  <Text>
                    Employee agrees not to use or disclose Confidential Information for their own
                    personal benefit or the benefit of any other person, corporation or entity other than the
                    Company during the Employee’s employment with the company or any time thereafter.</Text>
                </View>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>D. Limitations</Text>
              <Text>Employee shall limit access to Confidential Information to individuals on a
                strictly need-to-know basis, involving only those who are carrying out duties related to the
                Company and its business. Individuals under the Employee’s command (affiliates, agents,
                consultants, representatives and other employees) is bound by and shall comply with the terms
                of this Agreement.</Text>
            </View>

            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>E. Ownership</Text>
              <Text>All repositories of information containing or in any way relating to Confidential
                Information is considered property of the Employer. The removal of Confidential Information
                from the Company’s premises is prohibited unless prior written consent is provided by the
                Company. All such items made, compiled or used by the Employee shall be delivered to the
                Employer by Employee upon termination of employment or at any other time as per the
                Employer’s request. </Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.subheading}>Article III: Inventions</Text>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>A. Prior inventions</Text>
              <Text>Any inventions created or conceptualized by the Employee prior to signing
                the Agreement are excluded from the provisions herein.</Text>
            </View>

            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>B. Ownership of Inventions</Text>
              <Text>Inventions constructed while under the Company’s employment
                are the sole property of the Company except those described under subsection (C) of this
                section.</Text>
            </View>

            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>C. Personal Inventions</Text>
              <Text>Inventions developed by Employee on their own personal time not
                constructed on Company property, and that were not created using any Company materials,
                equipment, technology or information, are exempt from the provisions of the Agreement.</Text>
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
              <Text style={styles.subheading}>Article IV: Entire Agreement</Text>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>A. Previous Agreements</Text>
              <Text>This Agreement constitutes the entire agreement and the signing
                thereof by both Parties nullifies any and all previous agreements made between Employer and
                Employee.</Text>
            </View>
            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>B. Modifications and Amendments</Text>
              <Text>
                No modifications, amendments, changes or alterations
                can be made to the Agreement unless in writing and signed by authorized representatives of
                both Parties.
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>C. Successors and Assigns</Text>
              <Text>
                This Agreement shall be binding upon the successors,
                subsidiaries, assigns and corporations controlling or controlled by the Parties. The Company
                may assign this Agreement to any party at any time, whereas Employee is prohibited from
                assigning any of their rights or obligations in the Agreement without prior written consent from
                Company.
              </Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.subheading}>Article V: Nature of Relationship</Text>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>A. Non-contract</Text>
              <Text>The Agreement does not constitute a contract of employment, nor does it
                guarantee continuing employment for the Employee.</Text>
            </View>
            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>B. Non-partner</Text>
              <Text>The Agreement does not create a partnership or joint venture between
                Company and Employee. Any financial arrangements made between both Parties shall not be
                included in this Agreement but must be disclosed in a separate document.</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.subheading}>Article VI: Severability </Text>
              <Text>Any provision within the Agreement (or any portion thereof) deemed invalid, unlawful or
                otherwise unusable by a court of law shall be dissolved from the Agreement and the remainder
                of the Agreement shall continue to be enforceable. A severed provision shall not alter the
                integrity of the Agreement, and the terms set forth in any severed provision shall be construed  in
                such a way as to interpret the purpose for which it was drafted.  </Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.subheading}>Article VII: Governing Law</Text>
              <Text>This Agreement shall be governed in accordance with the laws of the State of _______________.</Text>
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
              <Text style={styles.subheading}>Article VIII: Immunity </Text>
              <Text>Disclosing Confidential Information to an attorney, government representative or court official in
                confidence while assisting or taking part in a case involving a suspected violation of law is not
                considered a breach of this Agreement. Should the Employee be required to disclose
                Confidential Information by law, the Employee shall provide Employer with prompt notice of
                such request.  </Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.subheading}>Article IX: Breach of agreement </Text>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>A. Cause for Action</Text>
              <Text>Employee understands that the use or disclosure of any Confidential
                Information may be cause for an action at law in an appropriate court of the State of
                ____________ or any State of the India, or in any federal court, and that the Employer shall be
                entitled to an injunction prohibiting the use or disclosure of the Confidential Information.</Text>
            </View>

            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>B. Indemnification</Text>
              <Text>
                Employee understands and agrees that if the use or disclosure of
                Confidential Information by them or any affiliate, employee or representative of the Employee causes damage, loss, cost or expense to the Company, the Employee shall be held responsible
                and shall indemnify the Company.</Text>
            </View>

            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>C. Injunctive Relief</Text>
              <Text>The Employee understands and agrees that the use or disclosure of
                Confidential Information could cause the Company irreparable harm and the Company has the
                right to pursue legal action beyond remedies of a monetary nature in the form of injunctive or
                equitable relief. This may be in addition to any other remedy, penalty or claim the law can
                provide.</Text>
            </View>

            <View style={styles.content}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>D. Notice of Unauthorized Use or Disclosure</Text>
              <Text>Employee is bound by this Agreement to notify
                the Company in the event of a breach of agreement involving the dissemination of Confidential
                Information, either by the Employee or a third party, and will do everything possible to help the
                Company regain possession of the Confidential Information.   </Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.subheading}>Article X: Prevailing party</Text>
              <Text>In a dispute arising out of or in relation to this Agreement, the prevailing party shall have the
                right to collect from the other party its reasonable attorney fees, costs and necessary
                expenditures. </Text>
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
              <Text>IN WITNESS WHEREOF, the Parties hereto agree to the terms of this Agreement and signed
                on the dates written below.</Text>
            </View>

            <View style={{ marginBottom: '10px' }}>
              <Text>For and on the behalf of The Company,</Text>
            </View>
            <View>
              <Text>Ritu Farswan </Text>
            </View>
            <View>
              <Text>Human resource  </Text>
            </View>
            <View>
              <Text>GLOCYBS PVT. LTD.</Text>
            </View>
            <ESign />

            {/* FOOTER */}
            <Footer />
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default NDABond