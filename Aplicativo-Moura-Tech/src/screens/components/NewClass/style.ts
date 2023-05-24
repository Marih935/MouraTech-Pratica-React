import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303036',
        alignItems: "center",
        padding: 40,
    },
    conteinerTop: {
        flex: 1,
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        marginTop: 20,
    },
    conteinerCenter: {
        flex: 3,
        alignItems: "center",
    },
    spaceTop: {
        flex: 1,
    },
    logo: {
        width: 40,
        height: 30,
    },
    imagemGrupo: {
        height: 40,
        width: 50,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: "bold",
        paddingTop: 20,
    },
    subtitle: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    input: {
        backgroundColor: '#4D4D56',
        width: 340,
        height: 50,
        borderRadius: 5,
        marginTop: 35,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#FFC300',
        width: 340,
        height: 50,
        borderRadius: 5,
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold",
    },
});