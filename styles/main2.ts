import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { marginBottom: 30, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  formContainer: { backgroundColor: '#f9f9f9', padding: 20, borderRadius: 10 },
  label: { fontSize: 16, marginBottom: 5, fontWeight: '600' },
  
  inputBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    marginBottom: 15
  },
  mainButton: { backgroundColor: 'blue', padding: 20, borderRadius: 10 },
  submitButton: { backgroundColor: 'green', padding: 15, borderRadius: 8, marginTop: 10 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  cancelButton: { color: 'red', textAlign: 'center', marginTop: 15 },
  
    Box: {
    marginBottom: 20,
    borderRadius: '10',
    backgroundColor: 'red',
    padding: 30
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center', 
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'italic'
  },
  

  button: {
    backgroundColor: '#007AFF', // Solid Blue for Login
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 20,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  loginButton:{
    backgroundColor: '#2c2ad2', //blue for Login
    paddingVertical: 15,
    paddingHorizontal:60,
    elevation:3,
    borderRadius: 10,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },

  forgotPasswordText: {
    color: '#007AFF',
    marginTop: 15,
    textAlign: 'center',
    fontSize: 14,
  },
  
});

  
export default styles;