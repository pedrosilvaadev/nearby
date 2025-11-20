import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useRef } from "react";
import { Text, useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../place";
import { styles } from "./styles";

type Props = {
  data: PlaceProps[];
};
export function Places({ data }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRed = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  return (
    <BottomSheet
      ref={bottomSheetRed}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList<PlaceProps>
        data={data}
        keyExtractor={(item: PlaceProps) => item.id}
        renderItem={({ item }: { item: PlaceProps }) => (
          <Place
            data={item}
            onPress={() =>
              router.push({
                pathname: "/market/[id]",
                params: { id: String(item.id) },
              })
            }
          />
        )}
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
