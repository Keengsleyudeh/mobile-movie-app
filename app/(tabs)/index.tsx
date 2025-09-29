import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-center text-2xl text-accent">jjEdit app/index.tsx to edit this screen.</Text>
      <Link href="/onboarding" className="mt-4 text-secondary">
        Go to Onboarding
      </Link>
      <Link href={{ pathname: "/movies/[id]", params: { id: "cpp" } }} className="mt-4 text-secondary">
        Go to Movie Details
      </Link> 
    </View>
  );
}
