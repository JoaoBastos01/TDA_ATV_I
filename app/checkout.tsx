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

import { SectionTitle } from "../components/section-title";
import { formatMoney, getProductById } from "../data/products";
import {
  checkoutStyles,
  detailStyles,
  layoutStyles,
  palette,
} from "../styles/shared-styles";

function normalizeParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function parseQuantity(value: string | string[] | undefined) {
  const normalized = normalizeParam(value);
  const parsed = Number(normalized ?? "1");

  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1;
  }

  return Math.min(9, Math.floor(parsed));
}

export default function CheckoutScreen() {
  const { width } = useWindowDimensions();
  const isWide = width >= 860;
  const params = useLocalSearchParams<{ id?: string | string[]; quantity?: string | string[] }>();
  const product = getProductById(normalizeParam(params.id));
  const quantity = parseQuantity(params.quantity);
  const [payment, setPayment] = useState("credit");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const totals = useMemo(() => {
    if (!product) {
      return { items: 0, delivery: 0, service: 0, total: 0 };
    }

    const items = product.priceCents * quantity;
    const delivery = product.deliveryFeeCents;
    const service = Math.round(items * 0.04);

    return {
      items,
      delivery,
      service,
      total: items + delivery + service,
    };
  }, [product, quantity]);

  if (!product) {
    return (
      <SafeAreaView style={layoutStyles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <View style={layoutStyles.compactPage}>
          <SectionTitle
            subtitle="O checkout precisa receber um produto da tela de detalhes."
            title="Pedido vazio"
          />
          <Pressable onPress={() => router.replace("/")} style={detailStyles.primaryButton}>
            <Ionicons color={palette.surface} name="home-outline" size={18} />
            <Text style={detailStyles.primaryButtonText}>Escolher produto</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const paymentOptions = [
    { id: "credit", label: "Cartao de credito", icon: "card-outline" },
    { id: "pix", label: "Pix", icon: "qr-code-outline" },
  ];

  return (
    <SafeAreaView style={layoutStyles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={layoutStyles.compactPage}>
        <SectionTitle
          eyebrow="Checkout"
          subtitle="Produto e quantidade chegaram por parametros de navegacao."
          title="Revise seu pedido"
        />

        <View style={[checkoutStyles.split, isWide && checkoutStyles.splitWide]}>
          <View style={checkoutStyles.mainColumn}>
            <View style={checkoutStyles.card}>
              <Text style={checkoutStyles.title}>Entrega</Text>
              <Text style={checkoutStyles.label}>Endereco</Text>
              <Text style={checkoutStyles.value}>
                Rua das Flores, 120 - Centro, Bento Goncalves
              </Text>
              <Text style={checkoutStyles.label}>Previsao</Text>
              <Text style={checkoutStyles.value}>{product.deliveryTime}</Text>
            </View>

            <View style={checkoutStyles.card}>
              <Text style={checkoutStyles.title}>Pagamento</Text>
              {paymentOptions.map((option) => (
                <Pressable
                  key={option.id}
                  onPress={() => setPayment(option.id)}
                  style={[
                    checkoutStyles.paymentOption,
                    payment === option.id && checkoutStyles.selectedPayment,
                  ]}
                >
                  <Ionicons
                    color={payment === option.id ? palette.primary : palette.muted}
                    name={option.icon as "card-outline"}
                    size={20}
                  />
                  <Text style={checkoutStyles.value}>{option.label}</Text>
                </Pressable>
              ))}
            </View>

            {isConfirmed ? (
              <View style={checkoutStyles.successBox}>
                <Text style={checkoutStyles.successTitle}>Pedido confirmado</Text>
                <Text style={checkoutStyles.successText}>
                  Fluxo concluido com dados mockados. Nenhum backend foi acionado.
                </Text>
              </View>
            ) : null}
          </View>

          <View style={checkoutStyles.sideColumn}>
            <View style={checkoutStyles.card}>
              <Text style={checkoutStyles.title}>Resumo</Text>

              <View style={checkoutStyles.itemRow}>
                <Image
                  contentFit="cover"
                  source={{ uri: product.imageUri }}
                  style={checkoutStyles.itemImage}
                />
                <View style={checkoutStyles.itemContent}>
                  <Text style={checkoutStyles.value}>{product.name}</Text>
                  <Text style={checkoutStyles.summaryText}>
                    {quantity} un. em {product.restaurant}
                  </Text>
                </View>
              </View>

              <View style={checkoutStyles.summaryRow}>
                <Text style={checkoutStyles.summaryText}>Itens</Text>
                <Text style={checkoutStyles.summaryValue}>{formatMoney(totals.items)}</Text>
              </View>
              <View style={checkoutStyles.summaryRow}>
                <Text style={checkoutStyles.summaryText}>Entrega</Text>
                <Text style={checkoutStyles.summaryValue}>
                  {totals.delivery === 0 ? "Gratis" : formatMoney(totals.delivery)}
                </Text>
              </View>
              <View style={checkoutStyles.summaryRow}>
                <Text style={checkoutStyles.summaryText}>Servico</Text>
                <Text style={checkoutStyles.summaryValue}>{formatMoney(totals.service)}</Text>
              </View>
              <View style={[checkoutStyles.summaryRow, checkoutStyles.totalRow]}>
                <Text style={checkoutStyles.totalText}>Total</Text>
                <Text style={checkoutStyles.totalText}>{formatMoney(totals.total)}</Text>
              </View>

              <Pressable
                onPress={() => setIsConfirmed(true)}
                style={[
                  detailStyles.primaryButton,
                  isConfirmed && detailStyles.disabledButton,
                ]}
              >
                <Ionicons color={palette.surface} name="checkmark-circle-outline" size={20} />
                <Text style={detailStyles.primaryButtonText}>
                  {isConfirmed ? "Confirmado" : "Finalizar pedido"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
