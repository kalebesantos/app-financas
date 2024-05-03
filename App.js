import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {avatar} from './avatar.jpg';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded){
    return <Text>CARREGANDO FONTES...</Text>
  }

  else{
    return (
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <LinearGradient colors={['rgba(73, 96, 249, 1)', 'rgba(25, 55, 254, 1)']} style={styles.headerGradient}>
          <View style={styles.row1}>
            <Feather name="menu" size={24} color="white" />
            <Image source={{uri: 'https://avatars.githubusercontent.com/u/60827853?v=4'}} style={styles.imgProfile} />
          </View>
        <Text style={styles.txtWelcome}>Bem Vindo(a),{'\n'}Usuário</Text>
        </LinearGradient>

        <View style={{width: "100%", alignItems: "center"}}>
          <View style={styles.resumoSaldo}>
            <Text style={{color: "#3A3A3A", fontSize: 16, fontFamily: "Montserrat_400Regular"}}>Seu saldo total</Text>
            <Text style={{color: "#2D99FF", fontSize: 30, fontFamily: "Montserrat_700Bold"}}>R$ 8.500,00</Text>
          </View>

          <View style={styles.verifAccount}>
            <LinearGradient colors={["rgba(73, 96, 249, 1)", "rgba(25, 55, 254, 1)"]} style={styles.accountGradient}>
              <Text style={{color: "white", fontSize: 19, fontFamily: "Montserrat_400Regular"}}>Verifique suas contas bancárias</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
  },

  headerGradient: {
    width: '100%',
    height: '30%',
    paddingTop: 30,
    padding: 20,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
  },

  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },

  txtWelcome: {
    color: "white",
    fontSize: 28,
    fontFamily: "Montserrat_400Regular",
    marginLeft: 50,
  },

  resumoSaldo: {
    backgroundColor: "#fff",
    width: '80%',
    height: "50%",
    top: -50,
    borderRadius: 30,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5,
  },

  verifAccount: {
    width: "80%",
    height: "20%",
  },

  accountGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    padding: 20,
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5,
  },
});
