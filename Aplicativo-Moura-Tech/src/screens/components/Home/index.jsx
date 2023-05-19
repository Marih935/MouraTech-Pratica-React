import { Image, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo-moura.png';
import Group from '../../../assets/button-group.png';
import { styles } from "./style";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.conteinerTop}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>Turmas</Text>
                <Text style={styles.subtitle}>Jogue com a sua turma</Text>
            </View>

            <View style={styles.conteinerBody}>
                <TouchableOpacity style={styles.buttonName}>
                    <Image source={Group} style={styles.buttonGroupImage} />
                    <Text style={styles.buttonNameText}>Moura Jonhson</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonName}>
                    <Image source={Group} style={styles.buttonGroupImage} />
                    <Text style={styles.buttonNameText}>Moura Flingstons</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.conteinerBottom}>
                <TouchableOpacity style={styles.buttonNewClass}>
                    <Text style={styles.buttonNewClassText}>Criar nova turma</Text>
                </TouchableOpacity>
            </View>

        </View>
    );   
}