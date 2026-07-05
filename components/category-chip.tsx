import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Pressable, Text } from "react-native";

import { categoryStyles as styles, palette } from "../styles/shared-styles";
import { Category } from "../types/product";

type IoniconName = ComponentProps<typeof Ionicons>["name"];

type Props = {
  category: Category;
  isSelected: boolean;
  onPress: () => void;
};

export function CategoryChip({ category, isSelected, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        isSelected && styles.selectedChip,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons
        color={isSelected ? palette.primaryDark : palette.muted}
        name={category.icon as IoniconName}
        size={18}
      />
      <Text style={[styles.chipText, isSelected && styles.selectedChipText]}>
        {category.label}
      </Text>
    </Pressable>
  );
}
