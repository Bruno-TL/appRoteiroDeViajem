import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Platform,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Alert,
  Keyboard,
} from "react-native";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import { MaterialIcons } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight;
const KEY_GPT = "sua-KEY-openai";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [travel, setTravel] = useState("");
  const [city, setCity] = useState("");
  const [days, setDays] = useState(1);

  async function handleGenerate() {
    if (city === "") {
      Alert.alert("Ateção", "Preencha o nome da cidade");
      return;
    }

    setTravel("");
    setLoading(true);
    Keyboard.dismiss();

    const prompt = `Crie um roteiro para uma viagem de exatos ${days.toFixed()} dias na cidade de ${city}, busque por lugares turisticos, lugares mais visitados. Forneça apenas em tópicos com nome do local onde ir em cada dia.`;

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${KEY_GPT}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-16k-0613",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.2,
        max_tokens: 500,
        top_p: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTravel(data.choices[0].message.content);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="#00b5fc"
      />
      <Text style={styles.heading}>Roteiros fácil</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Cidade destino</Text>
        <TextInput
          placeholder="Ex: Fortaleza, CE"
          style={styles.input}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Text style={styles.label}>
          Tempo de estadia: <Text style={styles.days}> {days.toFixed()} </Text>
          dias
        </Text>
        <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#00b5fc"
          maximumTrackTintColor="#000000"
          value={days}
          onValueChange={(value) => setDays(value)}
        />
      </View>
      <Pressable style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>Gerar Roteiro</Text>
        <MaterialIcons name="travel-explore" size={24} color="#FFF" />
      </Pressable>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 18 }}
        style={styles.containerScroll}
        showsVerticalScrollIndicator={false}
      >
        {loading && (
          <View style={styles.content}>
            <Text style={styles.title}>Carregando roteiro ...</Text>
            <ActivityIndicator color="#000" size="large" />
          </View>
        )}
        {travel && (
          <View style={styles.content}>
            <Text style={styles.title}>Roteiro da sua viajem 👇</Text>
            <Text>{travel}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    paddingTop: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: Platform.OS === "android" ? statusBarHeight : 54,
  },
  form: {
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#94a3b8",
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  days: {
    backgroundColor: "#f1f1f1",
  },
  button: {
    backgroundColor: "#00b5fc",
    width: "90%",
    borderRadius: 8,
    flexDirection: "row",
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "#FFF",
    padding: 16,
    width: "100%",
    marginTop: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 14,
  },
  containerScroll: {
    width: "90%",
    marginTop: 8,
  },
});
