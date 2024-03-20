import { Text, View, Link } from '@react-pdf/renderer';

const ESign = () => {
  return (
    <View style={{ display: 'flex', flexDirection: 'column' }}>
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 60 }}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text>Employee Signature</Text>
        <Link src='https://esign.com/' style={{ borderBottom: '2px solid #282828', width: 240, marginLeft: 4 }} >
        </Link>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text>Date</Text>
        <View style={{ borderBottom: '1px solid #282828', width: 100, marginLeft: 4 }}></View>
      </View>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text>Employee Printed Name</Text>
        <View style={{ borderBottom: '1px solid #282828', width: 240, marginLeft: 4 }}></View>
      </View>
    </View>
  </View>
  )
}

export default ESign