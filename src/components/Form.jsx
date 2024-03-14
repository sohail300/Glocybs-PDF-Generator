import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useState } from 'react';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4',
        height: '100%'
    },
});

// Create Document Component
function Form() {
    const [name] = useState('sohail');

    return (
        <></>
    )
}


export default Form;