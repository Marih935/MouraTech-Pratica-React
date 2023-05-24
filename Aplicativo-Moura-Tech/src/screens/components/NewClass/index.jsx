import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Return from '../../../assets/button-return.png';
import Logo from '../../../assets/logo-moura.png';
import ImagemGrupo from '../../../assets/button-group.png'
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
                <Image style={styles.imagemGrupo} source={ImagemGrupo}></Image>
                <Text style={styles.title}>Nova Turma</Text>
                <Text style={styles.subtitle}>Crie uma turma para adiconar pessoas!</Text>

                <TextInput style={styles.input} placeholder='Nome da turma' placeholderTextColor="#B8B8B8">
                </TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Criar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}