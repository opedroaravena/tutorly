import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

type Props = {
  navigation: any;
};

export const ProfileScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Your Profile
      </Text>

      {/* Quick Stats */}
      <Card style={styles.statsCard}>
        <Card.Content>
          <Text variant="titleMedium">Learning Progress</Text>
          <View style={styles.statsRow}>
            <Text>Completed Exercises: 0</Text>
            <Text>Current Level: Beginner</Text>
          </View>
        </Card.Content>
      </Card>

      {/* Main Actions */}
      <View style={styles.actionsContainer}>
        <Button 
          mode="contained" 
          style={styles.button}
          onPress={() => navigation.navigate('Chat')}
        >
          Start Conversation
        </Button>

        <Button 
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Exercise')}
        >
          Practice Exercises
        </Button>

        <Button 
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate('Progress')}
        >
          View Progress
        </Button>
      </View>

      {/* Settings/Logout */}
      <View style={styles.bottomActions}>
        <Button 
          mode="text"
          onPress={() => navigation.navigate('Login')}
          style={styles.logoutButton}
        >
          Logout
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  statsCard: {
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionsContainer: {
    marginTop: 20,
  },
  button: {
    marginBottom: 10,
  },
  bottomActions: {
    marginTop: 'auto',
  },
  logoutButton: {
    marginTop: 20,
  },
});