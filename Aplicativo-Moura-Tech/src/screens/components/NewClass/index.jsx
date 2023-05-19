import { Image, Text, View, TouchableOpacity } from 'react-native';
import Return from '../../../assets/button-return.png';
import Logo from '../../../assets/logo-moura.png';
import { styles } from "./style";


export function NewClass() {
    return (
        <View style={styles.container}>
            <View style={styles.conteinerTop}>
                <TouchableOpacity>
                    <Image source={Return} />
                </TouchableOpacity>

                <View style={styles.spaceTop}>
                </View>

                <Image style={styles.logo} source={Logo} />
            </View>

            <View style={styles.conteinerCenter}>

            </View>

        </View>
    );
}