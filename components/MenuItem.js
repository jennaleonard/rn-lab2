import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput, SafeAreaView, ScrollView, StatusBar} from "react-native";

function MenuItem(props) {
  // Keep track of quantity
  const [quantity, setQuantity] = useState(0);
  // TODO (part 3): add state for special instructions text
  const [instructions, setInstructions] = useState('');
  // Return JSX to render
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.photoContainer}>
          <Image
            source={props.imageSource}
            style={styles.photo}
          />
        </View>
        <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
        <Text>Price: ${props.price}</Text>
        <Text>Quantity: {quantity}</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="-"
            onPress={() => {
              console.log("minus pressed");
              if (quantity > 0) {
                setQuantity(quantity - 1);
              };
            }}
          />
          <Button
            title="+"
            onPress={() => {
              console.log("plus pressed");
              setQuantity(quantity + 1);
            }}
          />
        </View>
        <Text>Special Instructions: {instructions}</Text>
        <TextInput
          placeholder="Type instructions here"
          onSubmitEditing={({ nativeEvent, currentTarget }) => {
            console.log(nativeEvent.text);
            // TODO (part 3): Update special instructions text
            setInstructions(nativeEvent.text);
            currentTarget.clear();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 2,
    width: "90%",
    padding: 30,
    paddingTop: StatusBar.currentHeight,
    margin: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginHorizontal: 20,
  },
  photoContainer: {
    padding: 5,
  },
  photo: {
    resizeMode: "contain",
    width: "75%",
    height: 0,
    padding: 50,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
  },
});

export default MenuItem;
