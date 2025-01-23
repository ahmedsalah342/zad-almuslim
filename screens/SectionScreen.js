import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const getSectionContent = (sectionId) => {
  // هذا سيتم استبداله بمحتوى حقيقي من قاعدة البيانات
  const content = {
    1: {
      title: 'الرقية بالقرآن',
      items: [
        { title: 'سورة الفاتحة', content: 'محتوى سورة الفاتحة...' },
        { title: 'آية الكرسي', content: 'محتوى آية الكرسي...' },
        { title: 'المعوذتين', content: 'محتوى المعوذتين...' },
      ]
    },
    2: {
      title: 'الرقية بالسنة',
      items: [
        { title: 'الأذكار النبوية', content: 'محتوى الأذكار...' },
        { title: 'الأدعية المأثورة', content: 'محتوى الأدعية...' },
      ]
    },
    3: {
      title: 'قصص الأنبياء',
      items: [
        { title: 'قصص من القرآن', content: 'محتوى القصص...' },
        { title: 'عبر وعظات', content: 'محتوى العبر...' },
      ]
    },
    // يمكن إضافة المزيد من الأقسام هنا
  };
  return content[sectionId] || { title: '', items: [] };
};

export default function SectionScreen({ route, navigation }) {
  const { sectionId, title } = route.params;
  const sectionContent = getSectionContent(sectionId);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {sectionContent.items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => {
                // معالجة الضغط على العنصر
              }}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Icon name="chevron-left" size={24} color="#8e44ad" />
              </View>
              <Text style={styles.itemPreview} numberOfLines={2}>
                {item.content}
              </Text>
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
    flex: 1,
  },
  content: {
    padding: 15,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    fontFamily: 'Cairo',
  },
  itemPreview: {
    marginTop: 8,
    color: '#7f8c8d',
    fontSize: 14,
    fontFamily: 'Cairo',
  },
});
