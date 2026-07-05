import { StyleSheet } from "react-native";

export const palette = {
  background: "#FFF8F3",
  surface: "#FFFFFF",
  surfaceAlt: "#F8FAFC",
  primary: "#EA1D2C",
  primaryDark: "#A30F1B",
  ink: "#1F2937",
  muted: "#6B7280",
  border: "#E5E7EB",
  green: "#12805C",
  amber: "#B45309",
};

export const layoutStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: palette.background,
    flex: 1,
  },
  page: {
    alignSelf: "center",
    gap: 20,
    maxWidth: 1120,
    padding: 18,
    paddingBottom: 34,
    width: "100%",
  },
  compactPage: {
    alignSelf: "center",
    gap: 18,
    maxWidth: 940,
    padding: 18,
    paddingBottom: 34,
    width: "100%",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  rowWrap: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export const headerStyles = StyleSheet.create({
  shell: {
    backgroundColor: palette.surface,
    borderColor: "#F3D2D5",
    borderRadius: 8,
    borderWidth: 1,
    gap: 16,
    padding: 16,
    shadowColor: "#111827",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 2,
  },
  topLine: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  brandMark: {
    alignItems: "center",
    backgroundColor: palette.primary,
    borderRadius: 8,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  brandText: {
    color: palette.surface,
    fontSize: 21,
    fontWeight: "900",
  },
  addressBlock: {
    flex: 1,
    gap: 2,
  },
  addressLabel: {
    color: palette.muted,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  addressValue: {
    color: palette.ink,
    fontSize: 16,
    fontWeight: "900",
  },
  title: {
    color: palette.ink,
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 34,
  },
  subtitle: {
    color: palette.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  searchBox: {
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderColor: palette.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    minHeight: 46,
    paddingHorizontal: 12,
  },
  searchInput: {
    color: palette.ink,
    flex: 1,
    fontSize: 15,
    minHeight: 44,
  },
});

export const categoryStyles = StyleSheet.create({
  list: {
    paddingVertical: 4,
  },
  content: {
    gap: 10,
    paddingRight: 4,
  },
  chip: {
    alignItems: "center",
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    minHeight: 42,
    paddingHorizontal: 12,
  },
  selectedChip: {
    backgroundColor: "#FFF1F2",
    borderColor: "#FDA4AF",
  },
  chipText: {
    color: palette.ink,
    fontSize: 14,
    fontWeight: "800",
  },
  selectedChipText: {
    color: palette.primaryDark,
  },
  pressed: {
    opacity: 0.84,
  },
});

export const sectionStyles = StyleSheet.create({
  shell: {
    gap: 4,
  },
  eyebrow: {
    color: palette.primary,
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  title: {
    color: palette.ink,
    fontSize: 22,
    fontWeight: "900",
  },
  subtitle: {
    color: palette.muted,
    fontSize: 14,
    lineHeight: 20,
  },
});

export const productCardStyles = StyleSheet.create({
  card: {
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "#111827",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 2,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.996 }],
  },
  image: {
    backgroundColor: "#F3F4F6",
    height: 164,
    width: "100%",
  },
  body: {
    gap: 10,
    padding: 14,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#ECFDF5",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: palette.green,
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  name: {
    color: palette.ink,
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  restaurant: {
    color: palette.muted,
    fontSize: 13,
    fontWeight: "700",
  },
  metaRow: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  metaText: {
    color: palette.muted,
    fontSize: 12,
    fontWeight: "700",
  },
  ratingText: {
    color: palette.amber,
    fontSize: 12,
    fontWeight: "900",
  },
  priceRow: {
    alignItems: "baseline",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  price: {
    color: palette.primaryDark,
    fontSize: 18,
    fontWeight: "900",
  },
  oldPrice: {
    color: "#9CA3AF",
    fontSize: 13,
    textDecorationLine: "line-through",
  },
});

export const detailStyles = StyleSheet.create({
  hero: {
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  heroWide: {
    flexDirection: "row",
  },
  heroImage: {
    backgroundColor: "#F3F4F6",
    height: 280,
    width: "100%",
  },
  heroImageWide: {
    height: 430,
    width: "48%",
  },
  heroContent: {
    flex: 1,
    gap: 16,
    padding: 18,
  },
  backButton: {
    alignItems: "center",
    alignSelf: "flex-start",
    flexDirection: "row",
    gap: 6,
    minHeight: 36,
  },
  backText: {
    color: palette.primary,
    fontSize: 14,
    fontWeight: "900",
  },
  title: {
    color: palette.ink,
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 34,
  },
  restaurant: {
    color: palette.muted,
    fontSize: 15,
    fontWeight: "800",
  },
  description: {
    color: "#374151",
    fontSize: 15,
    lineHeight: 23,
  },
  ingredientList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  ingredient: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    color: "#374151",
    fontSize: 13,
    fontWeight: "800",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  quantityPanel: {
    alignItems: "center",
    backgroundColor: "#FFF7ED",
    borderColor: "#FED7AA",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    padding: 12,
  },
  quantityButton: {
    alignItems: "center",
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  quantityText: {
    color: palette.ink,
    fontSize: 18,
    fontWeight: "900",
  },
  primaryButton: {
    alignItems: "center",
    backgroundColor: palette.primary,
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    minHeight: 50,
    paddingHorizontal: 16,
  },
  primaryButtonText: {
    color: palette.surface,
    fontSize: 16,
    fontWeight: "900",
  },
  disabledButton: {
    backgroundColor: "#D1D5DB",
  },
});

export const checkoutStyles = StyleSheet.create({
  card: {
    backgroundColor: palette.surface,
    borderColor: palette.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 16,
  },
  split: {
    gap: 16,
  },
  splitWide: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  mainColumn: {
    flex: 1,
    gap: 16,
  },
  sideColumn: {
    gap: 16,
    width: 330,
  },
  title: {
    color: palette.ink,
    fontSize: 24,
    fontWeight: "900",
  },
  label: {
    color: palette.muted,
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  value: {
    color: palette.ink,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
  },
  itemRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  itemImage: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    height: 76,
    width: 76,
  },
  itemContent: {
    flex: 1,
    gap: 3,
  },
  paymentOption: {
    alignItems: "center",
    borderColor: palette.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    minHeight: 48,
    paddingHorizontal: 12,
  },
  selectedPayment: {
    backgroundColor: "#FFF1F2",
    borderColor: "#FDA4AF",
  },
  summaryRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryText: {
    color: palette.muted,
    fontSize: 14,
  },
  summaryValue: {
    color: palette.ink,
    fontSize: 14,
    fontWeight: "800",
  },
  totalRow: {
    borderTopColor: palette.border,
    borderTopWidth: 1,
    paddingTop: 12,
  },
  totalText: {
    color: palette.ink,
    fontSize: 18,
    fontWeight: "900",
  },
  successBox: {
    backgroundColor: "#ECFDF5",
    borderColor: "#A7F3D0",
    borderRadius: 8,
    borderWidth: 1,
    gap: 6,
    padding: 14,
  },
  successTitle: {
    color: palette.green,
    fontSize: 17,
    fontWeight: "900",
  },
  successText: {
    color: "#047857",
    fontSize: 14,
    lineHeight: 20,
  },
});
