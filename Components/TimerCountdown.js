import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { GlobalContext } from "../context";

const CountdownTimer = ({ initialMinutes = 1, initialSeconds = 30 }) => {
  const { isRunning, setIsRunning, initialMinutes, initialSeconds } =
    useContext(GlobalContext);
  const [timeLeft, setTimeLeft] = useState(
    initialMinutes * 60 + initialSeconds
  );

  // Function to start the countdown
  const startCountdown = () => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
    }
  };

  // Countdown effect
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false); // Stop when time reaches zero
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Format time as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime()}</Text>
      <Button
        title="Start Timer"
        onPress={startCountdown}
        disabled={isRunning}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  timer: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default CountdownTimer;
