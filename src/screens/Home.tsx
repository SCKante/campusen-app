import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SectionList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Header, Info } from "../components";
import images from "../../assets";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolateColor,
  interpolate,
} from "react-native-reanimated";

const Slides = [
  {
    id: "001",
    label: "Decouvrir campusen",
    img: images.slide1,
  },
  {
    id: "002",
    label: "Comprendre la procedure",
    img: images.slide2,
  },
];

const InfoData = [
  {
    id: "001",
    label: "Bienvenue sur Campusen",
    description:
      "CAMPUSEN permet aux nouveaux bacheliers sénégalais et étrangers souhaitant poursuivre leurs études supérieures au Sénégal de demander une orientation dans les formations proposées par les différentes universités du Sénégal.La constitution des dossiers est faite totalement en ligne, en toute simplicité et rapidité.",
    width: 240,
  },
  {
    id: "002",
    label: "IMPORTANT",
    description:
      "Le Ministère de l’Enseignement supérieur, de la Recherche et de l’Innovation porte à la connaissance des nouveaux bacheliers admis à la session normale de juillet 2022 et à la session de remplacement d'octobre 2022 que les demandes d’admission et de préinscription dans les établissements d’enseignement supérieur du Sénégal sont faites du 22 octobre 2022 au 14 novembre 2022 à 23h59, délai de rigueur.",
    width: 124,
  },
];

interface IndicatorProps {
  scrollX: Animated.SharedValue<number>;
}
const Indicator = ({ scrollX }: IndicatorProps) => {
  return (
    <View style={[styles.row, { justifyContent: "center" }]}>
      {Slides.map((_, i) => {
        const reStyle = useAnimatedStyle(() => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          return {
            backgroundColor: interpolateColor(scrollX.value, inputRange, [
              "#D2E0D7",
              "#46BB6D",
              "#D2E0D7",
            ]),
            width: interpolate(scrollX.value, inputRange, [8, 16, 8]),
          };
        });
        return (
          <Animated.View
            key={i}
            style={[
              reStyle,
              {
                height: 8,
                borderRadius: 8,
                margin: 2,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const { width } = Dimensions.get("window");
const Home = () => {
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => (scrollX.value = e.contentOffset.x),
  });
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={{ paddingBottom: 75 }}>
        <View style={{ paddingTop: 20 }}>
          <Animated.ScrollView
            onScroll={scrollHandler}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            scrollEventThrottle={16}
          >
            {Slides.map((item) => {
              return (
                <View key={item.id} style={styles.slideImgC}>
                  <Image source={item.img} style={styles.slideImg} />
                  <TouchableOpacity style={styles.slideBtn}>
                    <Text style={{ fontSize: 20, color: "#ffff" }}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </Animated.ScrollView>
          <Indicator scrollX={scrollX} />
        </View>
        <View style={{ flex: 1 }}>
          {InfoData.map((item) => {
            return (
              <Info
                key={item.id}
                label={item.label}
                description={item.description}
                width={item.width}
              />
            );
          })}
        </View>
        <View style={styles.alertContainer}>
          <View style={styles.alertLabel}>
            <Text style={styles.alertLabelText}>Tres Important:</Text>
          </View>
          <Text style={{ textAlign: "justify" }}>
            Le Ministère de l’Enseignement supérieur, de la Recherche et de
            l’Innovation demande aux bacheliers de ne communiquer, en aucun cas,
            ces informations de connexion à Campusen à des tiers :{"\n"}
            {"\n"}
            <Text> • INE{"\n"}</Text>
            <Text> • Mot de passe{"\n"}</Text>
            <Text> • Numero table{"\n"}</Text>
            <Text> • Année du baccalauréat{"\n"}</Text>
            {"\n"}
            Elles sont strictement personnelles et doivent être soigneusement
            conservées par le bachelier. Il est absolument interdit de recourir
            à des tiers ou des associations, à quelque titre que ce soit, dans
            le cadre des opérations réalisées en vue de l’orientation. Les
            contrevenants risquent de ne pas être orientés dans les
            établissements d’enseignement supérieur publics ou privés et pour
            ces derniers de ne pas recevoir de l’Etat des étudiants. Pour toutes
            informations à propos de l’ouverture de la plateforme ou de la
            procédure d’orientation, vous pouvez vous connecter sur:{"\n"}
            {"\n"}
            <Text> • http://www.mesr.gouv.sn{"\n"}</Text>
            <Text> • http://campusen.sn{"\n"}</Text>
            <Text> • http://www.facebook.com/mesr.sn{"\n"}</Text>
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slideImg: {
    width: width - 32,
    resizeMode: "contain",
    height: 200,
    borderWidth: 1,
    borderRadius: 10,
  },
  slideBtn: { position: "absolute", bottom: 32, left: 18 },
  slideImgC: {
    width,
    justifyContent: "center",
    padding: 16,
  },
  row: { flexDirection: "row", alignItems: "center" },
  alertContainer: {
    flex: 1,
    width: width - 32,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#4A4A4A",
    alignSelf: "center",
    minHeight: 200,
    marginTop: 24,
    paddingTop: 32,
    paddingHorizontal: 10,
  },
  alertLabel: {
    position: "absolute",
    top: -25,
    left: 20,
    width: 200,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#1D71B8",
    justifyContent: "center",
    alignItems: "center",
  },
  alertLabelText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
