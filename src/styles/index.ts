import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const isLandscape = width > height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#e5e5e5",
    color: "black",
    alignItems: isLandscape ? 'flex-start' : 'center',
    justifyContent: isLandscape ? 'flex-start' : 'center',
    flexDirection: isLandscape ? 'row' : 'column',
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto_400Regular',
    
  },
  vstack: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%', 
  },
  input: {
    width: '90%', // ocupa 100% da largura da view
    height: 48,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#222',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputFocus: {
    borderColor: '#007bff', // cor de destaque ao focar
    borderWidth: 2,
    backgroundColor: '#f0f8ff', // leve destaque de fundo
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    width: '90%',
    height: 48,
    backgroundColor: 'black',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {

    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
    fontWeight: '500',
  },
  errorText: {
    color: '#ff3333',
    fontSize: 12,
    marginBottom: 8,
    textAlign: 'left',
  },
  p: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    marginTop: 0,
    padding: 0,
    height: 30,
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
    textAlign: 'center',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  }

});

export {
    styles
}