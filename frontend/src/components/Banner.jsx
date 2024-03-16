import { Text, View, Image } from '@react-pdf/renderer';

const Banner = () => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Image src={'./logo-bg.png'} style={{ width: 100 }} />
        <View style={{ display: 'flex', flexDirection: 'column', padding: '16px 20px', borderLeft: '1px solid black', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'black', fontFamily: 'Helvetica-Bold', fontSize: 30 }}>GLOCYBS PVT. LTD.</Text>
          <Text style={{}}>B E  &nbsp;S E C U R E  &nbsp;W I T H  &nbsp;G L O C Y B S</Text>
        </View>
      </View>
  )
}

export default Banner