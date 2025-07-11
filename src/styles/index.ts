import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const isLandscape = width > height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    color: "black",
    backgroundColor: 'transparent',
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
  fRow: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%', 
  },
  justifyAlign: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%', 
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
    borderColor: '#007bff', 
    borderWidth: 2,
    backgroundColor: '#f0f8ff', 
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
  },
  geralText: {
    color: "white"
  }

});

export {
    styles
}