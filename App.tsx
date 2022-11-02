import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useState, useEffect } from 'react';
import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { COLORS } from './constants/Color';

export default function App() {

  const [userNumber, setUserNumber] = useState<string>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const pickedNumberHandler = (pickedNumber: string) => {
    setUserNumber(pickedNumber)
  };

  const gameIsOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onValidStart={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameIsOverHandler} />;
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }


  useEffect(() => {
    async function prepare() {
      await Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      });
      setAppIsReady(true);
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  return (
    <LinearGradient
      colors={[COLORS.primary700, COLORS.accent500]}
      style={styles.rootScreen}
      onLayout={onLayoutRootView}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});