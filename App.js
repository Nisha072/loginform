import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text,Button, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
//import Ourtodo from './components/Ourtodo';

class App extends React.Component {
  //const [task, setTask] = useState();
  //const [taskItems, setTaskItems] = useState([]);
   constructor()
   {
     super()
     this.state={
       name:"",
       email:""
     }
   }

  
  
  updateValue(text,field)
  {
    //console.warn(text)
    if(field=='name')
    {
      this.setState({
        name:text,
      })
    }
    else if(field=='email')
    {
      this.setState({
        email:text,
      })
    }
  }

  submit()
  {
    let collection={}
    collection.name=this.state.name,
    collection.email=this.state.email,
    console.warn(collection);

  //   const url = 'own-url'
  //  // const data = { username: 'example' };

  //     fetch(url, {
  //     method: 'POST', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(collection),
  //     })
  //     .then(response => response.json())
  //     .catch(error => console.error('Error',error))
  //     .then(response => console.log('success:',response));


  }
  
render(){
  return (
    <View style={styles.container}>
      <View style={{marginTop:'25%'}}>
         <Text style={{color:'#000000',fontSize:24,textAlign:'center'}}>LOGIN SCREEN</Text>
      </View>
     
      <View style={{marginTop:'15%'}}>
        <View style={{marginHorizontal:'10%'}}><Text  style={{fontWeight:'bold'}}>Name</Text></View>
        <TextInput placeholder='Enter Name' paddingLeft={6}
        style={{width:300,height:50,backgroundColor:'#e6e6e6',marginHorizontal:'5%',borderRadius:10,alignSelf:'center',marginTop:'2%'}}
        onChangeText={(text) =>this.updateValue(text,'name') }></TextInput>
        
        
        <View style={{marginHorizontal:'10%',marginTop:'5%'}}><Text style={{fontWeight:'bold'}}>Email</Text></View>
       <TextInput placeholder='Enter Email' paddingLeft={6}
        style={{width:300,height:50,backgroundColor:'#e6e6e6',marginHorizontal:'8%',borderRadius:10,alignSelf:'center',marginTop:'2%'}}
        onChangeText={(text) =>this.updateValue(text,'email') }>
        </TextInput>

       <TouchableOpacity onPress={()=>this.submit()} 
        style={{width:300,height:40,backgroundColor:'skyblue',marginHorizontal:'5%',marginTop:'15%',borderRadius:10,padding:9,alignSelf:'center'}}>
         <Text style={{color:'#000000',fontWeight:'bold',textAlign:'center',fontSize:16}}>Submit</Text>
       </TouchableOpacity>

      </View>
      
    </View>
  )
}
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});