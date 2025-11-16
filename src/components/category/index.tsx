import { colors } from "@/styles/colors";
import { categoriesIcons } from "@/utils/categories-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export function Category({ iconId, isSelected, name, ...rest }: Props) {
  const Icon = categoriesIcons[iconId];
  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...rest}
    >
      <Icon
        size={16}
        color={isSelected ? colors.gray[100] : colors.gray[400]}
      />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>
        {name}
      </Text>
    </Pressable>
  );
}
