import { StyleSheet} from "react-native";
const styles=StyleSheet.create({
   title: {
        padding: 15,
        alignItems: "center",
   },

   action: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 3,
    marginTop: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',

  },

   textInput: {
    flex: 1,
    marginTop: -12,
  },

button: {
    marginTop: -20,
    textAlign: 'center',
    margin: 20,
},

login: {
    width: '70%',
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 50,
    marginLeft: 50,
  },
})
export default styles;