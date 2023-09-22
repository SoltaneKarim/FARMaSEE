import React from 'react';
import { View, StyleSheet } from 'react-native';
import Care from '../components/Payment/Payment';

const Payment = () => {
  return (
    <View style={styles.container}>
      <Care />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all available space
  },
});

export default Payment;
