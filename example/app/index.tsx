import { Stack, Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

// add new scenes here
const SCENES: { name: string; href: string }[] = [
    { name: 'Spinning Cubes', href: '/spinning-cubes' },
    { name: 'Cube with Physical Material', href: '/cube-mesh-physical-material' },
    { name: 'Animated Robot (Skinning & Morphing)', href: '/animated-robot' },
    { name: 'Field of Flowers', href: '/flower-field' },
    { name: 'Interactive Buffergeometry', href: '/interactive-buffergeometry' },
    { name: 'GCode Loader 🚢', href: '/gcode-loader' },
    { name: 'Head model with material', href: '/head-model' },
    { name: 'Bouncing Balls w/ Image Picker', href: '/bouncing-balls' },
    { name: 'Game custom', href: '/game-custom' },
    { name: 'Scream go hero', href: '/scream-go-hero' },
    { name: 'Pillarvalley Game', href: '/pillarvalley' },
];

export default function Page() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Demo Three',
                }}
            />

            <FlatList
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: 16,
                }}
                data={SCENES}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 1, backgroundColor: '#cccccc' }} />
                )}
                renderItem={({ item }) => (
                    <Link
                        href={item.href}
                        style={{
                            paddingVertical: 16,
                        }}
                    >
                        <Text>{item.name}</Text>
                    </Link>
                )}
            />
        </>
    );
}
