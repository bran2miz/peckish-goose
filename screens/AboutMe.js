import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const AboutMe = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Image */}
      <Image
        source={require('../assets/images/0.jpg')}
        style={styles.avatar}
      />

      {/* Name */}
      <Text style={styles.name}>Brandon Mizutani</Text>

      {/* Title */}
      <Text style={styles.title}>Software Developer</Text>

      {/* Biography */}
      <Text style={styles.bio}>
        My name is Brandon Mizutani, and I am a dedicated software developer based in Seattle, WA, with a strong background in advanced software development. I hold a Certificate in Advanced Software Development in Python from Code Fellows and a Bachelor of Arts in Asian Pacific Studies from Loyola Marymount University. My expertise spans multiple languages and frameworks, including Python, JavaScript, React, and Django.
      </Text>

      <Text style={styles.bio}>
        I have worked on notable projects such as developing an e-commerce storefront using React and Redux, a Django-based To-Do App with a focus on secure login and task storage, and an e-commerce app named Insta Dealz. I have contributed as a Lead TA and Tutor at Code Fellows.
      </Text>

      <Text style={styles.bio}>
        Passionate about coding, I continually apply my knowledge to develop innovative applications. I am committed to creating successful computer and mobile applications that meet the needs of users and drive technological advancement.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
});

export default AboutMe;
