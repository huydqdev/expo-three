import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function ScreamGoHero() {
    return (
        <WebView
            style={styles.container}
            source={{ uri: 'https://plays.org/game/scream-go-hero/' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
