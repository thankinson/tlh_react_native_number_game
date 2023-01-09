import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from './constants/Colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameisOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState();

  function pickedNumberhandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  function gameOverhandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  };

  function startNewGame(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberhandler}/>

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverhandler} />
  };

  if (gameisOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGame}/>
  };

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500 ]} style={styles.rootScreen} >
      <ImageBackground 
        source={require('./assets/images/background.png')}  
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen} >{screen}</SafeAreaView>
        
      </ImageBackground>    
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
