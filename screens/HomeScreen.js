import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const sections = [
  { id: 1, title: 'الرقية بالقرآن', icon: 'book-open-variant' },
  { id: 2, title: 'الرقية بالسنة', icon: 'mosque' },
  { id: 3, title: 'قصص الأنبياء', icon: 'account-group' },
  { id: 4, title: 'سورة الملك', icon: 'crown' },
  { id: 5, title: 'سورة الكهف', icon: 'book' },
  { id: 6, title: 'السيرة النبوية', icon: 'mosque' },
  { id: 7, title: 'قصص الصحابة', icon: 'account-multiple' },
  { id: 8, title: 'أعلام الأمة', icon: 'school' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8e44ad" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.grid}>
          {sections.map((section) => (
            <TouchableOpacity
              key={section.id}
              style={styles.card}
              onPress={() => navigation.navigate('Section', { 
                title: section.title,
                sectionId: section.id 
              })}>
              <Icon name={section.icon} size={40} color="#8e44ad" />
              <Text style={styles.cardText}>{section.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  scrollView: {
    flexGrow: 1,
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  card: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#2c3e50',
    fontWeight: 'bold',
    fontFamily: 'Cairo',
  },
});
