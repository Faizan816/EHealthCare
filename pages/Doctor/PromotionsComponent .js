import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const PromotionsComponent = () => {
  // Dummy data for promotions
  const promotions = [
    {
      id: '1',
      title: 'Special Offer 1',
      description: 'Get 20% off on selected items. Limited time offer!',
      image: "https://www.cbi.eu/sites/default/files/styles/image_max_width_1400px_extra_large/public/2022-12/nihp-ma-trends-figure-1-examples-of-turmeric-products-in-the-european-health-market.png",
    },
    {
      id: '2',
      title: 'Flash Sale',
      description: 'Hurry up! Flash sale with discounts up to 30%. Ends today!',
      image: "https://www.cbi.eu/sites/default/files/styles/image_max_width_1400px_extra_large/public/2022-12/nihp-ma-trends-figure-1-examples-of-turmeric-products-in-the-european-health-market.png",
    },
    {
      id: '3',
      title: 'New Arrivals',
      description: 'Explore our latest arrivals. Shop now!',
      image: "https://www.cbi.eu/sites/default/files/styles/image_max_width_1400px_extra_large/public/2022-12/nihp-ma-trends-figure-1-examples-of-turmeric-products-in-the-european-health-market.png",
    },
    // Add more promotion data as needed
  ];

  // Render each promotion item
  const renderPromotionItem = ({ item }) => (
    <View style={styles.promotionItem}>
      <Image source={{ uri: item.image }} style={styles.promotionImage} />
      <View style={styles.promotionDetails}>
        <Text style={styles.promotionTitle}>{item.title}</Text>
        <Text style={styles.promotionDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={{flex:1}}>
    <FlatList
      data={promotions}
      keyExtractor={(item) => item.id}
      renderItem={renderPromotionItem}
      style={styles.container}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  promotionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  promotionImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  promotionDetails: {
    flex: 1,
    padding: 12,
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  promotionDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default PromotionsComponent;
