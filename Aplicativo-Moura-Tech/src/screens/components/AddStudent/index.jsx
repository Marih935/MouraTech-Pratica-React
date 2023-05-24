import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Return from '../../../assets/button-return.png';
import Logo from '../../../assets/logo-moura.png';
import { styles } from "./style";

export function AddStudent() {
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

            <View style={styles.conteinerCenter01}>
                <Text style={styles.title}>Moura Johnson</Text>
                <Text style={styles.subtitle}>Adicione a galera e separe os times</Text>

                <View style={styles.conteinerCenter02}>

                    <TextInput style={styles.input} placeholder='Nome' placeholderTextColor="#B8B8B8">
                    </TextInput>

                    <TouchableOpacity style={styles.addButton} >
                        <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>


        </View>
    );
}