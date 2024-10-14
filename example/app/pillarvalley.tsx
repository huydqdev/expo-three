import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function pillarvalley() {
    return (
        <WebView
            style={styles.container}
            source={{ uri: 'https://pillarvalley.netlify.app/' }}
            // source={{ uri: 'https://threejs.org/examples/#webgl_animation_keyframes' }}
            // source={{html: `<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="YGxYej" data-pen-title="The frantic run of the valorous rabbit" data-user="Yakudoo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"><span>See the Pen <a href="https://codepen.io/Yakudoo/pen/YGxYej">The frantic run of the valorous rabbit</a> by Karim Maaloul (<a href="https://codepen.io/Yakudoo">@Yakudoo</a>) on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`}}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
