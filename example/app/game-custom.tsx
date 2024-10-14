import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function GameCustom() {
    return (
        <WebView
            style={styles.container}
            source={{ uri: 'https://play.rosebud.ai/games/cdc27a6e-9642-4493-a241-aae38397714d' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
