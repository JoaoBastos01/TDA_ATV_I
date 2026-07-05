import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native";

import { formatMoney } from "../data/products";
import { palette, productCardStyles as styles } from "../styles/shared-styles";
import { Product } from "../types/product";

type Props = {
  product: Product;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export function ProductCard({ onPress, product, style }: Props) {
  const delivery =
    product.deliveryFeeCents === 0 ? "Gratis" : formatMoney(product.deliveryFeeCents);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, style, pressed && styles.pressed]}
    >
      <Image contentFit="cover" source={{ uri: product.imageUri }} style={styles.image} />

      <View style={styles.body}>
        {product.badge ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{product.badge}</Text>
          </View>
        ) : null}

        <View>
          <Text numberOfLines={2} style={styles.name}>
            {product.name}
          </Text>
          <Text style={styles.restaurant}>{product.restaurant}</Text>
        </View>

        <View style={styles.metaRow}>
          <Ionicons color={palette.amber} name="star" size={14} />
          <Text style={styles.ratingText}>{product.rating.toFixed(1)}</Text>
          <Text style={styles.metaText}>{product.deliveryTime}</Text>
          <Text style={styles.metaText}>{delivery}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{formatMoney(product.priceCents)}</Text>
          {product.originalPriceCents ? (
            <Text style={styles.oldPrice}>{formatMoney(product.originalPriceCents)}</Text>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}
