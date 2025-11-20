import { IconMapPin, IconPhone, IconTicket } from "@tabler/icons-react-native";
import React from "react";
import { Text, View } from "react-native";
import { Info } from "../info";
import { styles } from "./styles";

export type PropsDetails = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: PropsDetails;
};

export function Details({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>
        <Info
          description={`${data.coupons} cupons disponíveis`}
          icon={IconTicket}
        />
        <Info description={data.address} icon={IconMapPin} />
        <Info description={data.phone} icon={IconPhone} />
      </View>

      <View style={styles.group}>
        <Text style={styles.title}>Regras</Text>
        {data.rules.map((rule) => (
          <Text key={rule.id} style={styles.rule}>
            • {rule.description}
          </Text>
        ))}
      </View>
    </View>
  );
}
