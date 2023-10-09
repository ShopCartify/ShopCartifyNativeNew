import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  ScrollView, 
} from 'react-native';
import { Dimensions} from 'react-native';
import axios from 'axios';
import COLORS from '../const/Colors';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const CreateFamily = ({ navigation }) => {
  const [family, setFamily] = useState({
    familyName: '',
  });
  const [newMember, setNewMember] = useState({
    username: '',
  });
  const [members, setMembers] = useState([]);

  const handleChange = (name, value) => {
    setFamily((prev) => ({ ...prev, [name]: value }));
  };

  const handleMemberChange = (value) => {
    setNewMember((prev) => ({ ...prev, username: value }));
  };

  const handleAddMember = () => {
    if (newMember.username) {
      setMembers([...members, newMember]);
      setNewMember({ username: '' });
    }
  };

  const handleSubmit = async () => {
    console.log(family);

    try {
      // ... your axios post requests ...

      Alert.alert('Success', 'Family created successfully', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Home'); // Navigate to your home or dashboard screen
          },
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.response.data.message);
    }
  };

  return (
    <ScrollView
      style={{ backgroundColor: COLORS.green, height: 900 }}
      contentContainerStyle={styles.scrollViewContent} // Add this style
    >
      <View style={styles.container}>
        <Image
          source={require('../../assets/theme/applogo.png')}
          style={styles.logo}
        />

        <View className="Image">
          <LottieView
            source={require('../../assets/theme/fam.json')}
            autoPlay
            loop
            style={{
              width: 470,
              height: 350,
              top: -30,
            }}
          />
        </View>
        <View style={styles.createFamily}>
          <Text style={styles.header}>CREATE FAMILY ACCOUNT</Text>
          <TextInput
            style={styles.input}
            name="familyName"
            onChangeText={(value) => handleChange(' ', value)}
            placeholder="Family Name"
          />

          {members.map((member, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={member.username}
              editable={false}
            />
          ))}
          <View style={styles.memberInputContainer}>
            <TextInput
              style={styles.memberInput}
              name="username"
              value={newMember.username}
              onChangeText={(value) => handleMemberChange(value)}
              placeholder="Member Username"
            />
            <TouchableOpacity
              style={styles.addMemberButton}
              onPress={handleAddMember}
            >
              <Text style={styles.textc}>Add Member</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.green,
  },

  text: {
    fontSize: width < 400 ? 16 : 24, // Adjust font size based on screen width
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1, // Allow content to expand within the ScrollView
  },
  createFamily: {
    width: '80%',
  },
  header: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: COLORS.light,
    top: -400,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: COLORS.light,
    top: -70,
  },
  memberInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light,
    top: -59,
  },

  memberInput: {
    flex: 1,
    height: 40,
    // borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
  },
  addMemberButton: {
    height: 40,
    backgroundColor: COLORS.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 10,
    borderRadius: 10,
    width: 100,
    height: 50,
  },
  textc: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
  signupButton: {
    height: 50,
    backgroundColor: COLORS.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: -20,
  },
  signupButtonText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo:{
    top:-20
  },
  scrollViewContent:{
    height:'100%'
  }
});

export default CreateFamily;

