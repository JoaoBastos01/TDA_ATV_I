import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";

import { CategoryChip } from "../components/category-chip";
import { ProductCard } from "../components/product-card";
import { SectionTitle } from "../components/section-title";
import { categories, products } from "../data/products";
import {
  categoryStyles,
  headerStyles,
  layoutStyles,
  palette,
} from "../styles/shared-styles";
import { Product } from "../types/product";

const PAGE_HORIZONTAL_PADDING = 36;
const PRODUCT_CARD_GAP = 14;
const PRODUCT_CARD_MAX_WIDTH = 340;
const PRODUCT_GRID_MAX_WIDTH = 1120;

function getColumns(width: number) {
  if (width >= 980) {
    return 3;
  }

  if (width >= 680) {
    return 2;
  }

  return 1;
}

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const columns = getColumns(width);
  const gridWidth = Math.min(width, PRODUCT_GRID_MAX_WIDTH) - PAGE_HORIZONTAL_PADDING;
  const cardWidth = Math.min(
    PRODUCT_CARD_MAX_WIDTH,
    (gridWidth - PRODUCT_CARD_GAP * (columns - 1)) / columns,
  );
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.restaurant.toLowerCase().includes(normalizedSearch) ||
        product.categoryLabel.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const openProduct = (product: Product) => {
    router.push({
      pathname: "/product/[id]",
      params: { id: product.id },
    });
  };

  return (
    <SafeAreaView style={layoutStyles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <FlatList
        ListHeaderComponent={
          <View style={layoutStyles.page}>
            <View style={headerStyles.shell}>
              <View style={headerStyles.topLine}>
                <View style={headerStyles.brandMark}>
                  <Text style={headerStyles.brandText}>if</Text>
                </View>

                <View style={headerStyles.addressBlock}>
                  <Text style={headerStyles.addressLabel}>Entregar em</Text>
                  <Text style={headerStyles.addressValue}>Rua das Flores, 120</Text>
                </View>

                <Ionicons color={palette.primary} name="bag-handle-outline" size={24} />
              </View>

              <View>
                <Text style={headerStyles.title}>O que vai pedir hoje?</Text>
              </View>

              <View style={headerStyles.searchBox}>
                <Ionicons color={palette.muted} name="search-outline" size={20} />
                <TextInput
                  onChangeText={setSearch}
                  placeholder="Buscar por prato, loja ou categoria"
                  placeholderTextColor="#9CA3AF"
                  style={headerStyles.searchInput}
                  value={search}
                />
              </View>
            </View>

            <ScrollView
              contentContainerStyle={categoryStyles.content}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={categoryStyles.list}
            >
              {categories.map((category) => (
                <CategoryChip
                  category={category}
                  isSelected={selectedCategory === category.id}
                  key={category.id}
                  onPress={() => setSelectedCategory(category.id)}
                />
              ))}
            </ScrollView>

            <SectionTitle
              eyebrow="Marketplace"
              subtitle={`${filteredProducts.length} opcoes encontradas com dados locais`}
              title="Destaques perto de voce"
            />
          </View>
        }
        ListEmptyComponent={
          <View style={layoutStyles.page}>
            <SectionTitle
              subtitle="Tente outra categoria ou ajuste o texto da busca."
              title="Nenhum produto encontrado"
            />
          </View>
        }
        columnWrapperStyle={
          columns > 1
            ? {
                gap: PRODUCT_CARD_GAP,
                justifyContent: "center",
              }
            : undefined
        }
        contentContainerStyle={{
          alignSelf: "center",
          gap: PRODUCT_CARD_GAP,
          maxWidth: PRODUCT_GRID_MAX_WIDTH,
          paddingBottom: 32,
          width: "100%",
        }}
        data={filteredProducts}
        key={`${columns}-${selectedCategory}`}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        renderItem={({ item }) => (
          <View
            style={{
              alignItems: "center",
              paddingHorizontal: columns === 1 ? 18 : 0,
              width: columns === 1 ? "100%" : cardWidth,
            }}
          >
            <ProductCard
              onPress={() => openProduct(item)}
              product={item}
              style={{ width: cardWidth }}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
