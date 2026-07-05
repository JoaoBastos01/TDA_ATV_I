import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { SectionTitle } from "../../components/section-title";
import { formatMoney, getProductById } from "../../data/products";
import { detailStyles, layoutStyles, palette } from "../../styles/shared-styles";

function normalizeParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default function ProductDetailScreen() {
  const { width } = useWindowDimensions();
  const isWide = width >= 820;
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const product = getProductById(normalizeParam(params.id));
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(() => {
    if (!product) {
      return 0;
    }

    return product.priceCents * quantity;
  }, [product, quantity]);

  if (!product) {
    return (
      <SafeAreaView style={layoutStyles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <View style={layoutStyles.compactPage}>
          <SectionTitle
            subtitle="Volte para a listagem e escolha uma opcao valida."
            title="Produto nao encontrado"
          />
          <Pressable onPress={() => router.replace("/")} style={detailStyles.primaryButton}>
            <Ionicons color={palette.surface} name="home-outline" size={18} />
            <Text style={detailStyles.primaryButtonText}>Voltar para home</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const decrease = () => setQuantity((current) => Math.max(1, current - 1));
  const increase = () => setQuantity((current) => Math.min(9, current + 1));

  const goToCheckout = () => {
    router.push({
      pathname: "/checkout",
      params: {
        id: product.id,
        quantity: String(quantity),
      },
    });
  };

  return (
    <SafeAreaView style={layoutStyles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={layoutStyles.compactPage}>
        <View style={[detailStyles.hero, isWide && detailStyles.heroWide]}>
          <Image
            contentFit="cover"
            source={{ uri: product.imageUri }}
            style={[detailStyles.heroImage, isWide && detailStyles.heroImageWide]}
          />

          <View style={detailStyles.heroContent}>
            <Pressable onPress={() => router.back()} style={detailStyles.backButton}>
              <Ionicons color={palette.primary} name="chevron-back" size={18} />
              <Text style={detailStyles.backText}>Voltar</Text>
            </Pressable>

            <View>
              <Text style={detailStyles.title}>{product.name}</Text>
              <Text style={detailStyles.restaurant}>{product.restaurant}</Text>
            </View>

            <View style={layoutStyles.rowWrap}>
              <Ionicons color={palette.amber} name="star" size={18} />
              <Text style={detailStyles.restaurant}>{product.rating.toFixed(1)}</Text>
              <Text style={detailStyles.restaurant}>  {product.deliveryTime}</Text>
              <Text style={detailStyles.restaurant}>
                {"  "}
                {product.deliveryFeeCents === 0
                  ? "Entrega gratis"
                  : `Entrega ${formatMoney(product.deliveryFeeCents)}`}
              </Text>
            </View>

            <Text style={detailStyles.description}>{product.description}</Text>

            <View style={detailStyles.ingredientList}>
              {product.ingredients.map((ingredient) => (
                <Text key={ingredient} style={detailStyles.ingredient}>
                  {ingredient}
                </Text>
              ))}
            </View>

            <View style={detailStyles.quantityPanel}>
              <Pressable onPress={decrease} style={detailStyles.quantityButton}>
                <Ionicons color={palette.primary} name="remove" size={20} />
              </Pressable>
              <Text style={detailStyles.quantityText}>{quantity}</Text>
              <Pressable onPress={increase} style={detailStyles.quantityButton}>
                <Ionicons color={palette.primary} name="add" size={20} />
              </Pressable>
              <Text style={detailStyles.quantityText}>{formatMoney(total)}</Text>
            </View>

            <Pressable onPress={goToCheckout} style={detailStyles.primaryButton}>
              <Ionicons color={palette.surface} name="cart-outline" size={20} />
              <Text style={detailStyles.primaryButtonText}>Adicionar ao pedido</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
