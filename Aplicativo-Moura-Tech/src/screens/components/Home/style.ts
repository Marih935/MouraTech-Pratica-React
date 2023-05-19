import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303036',
        alignItems: "center",
        padding: 40,
    },
    conteinerTop: {
        flex: 1, //
        alignItems: "center",
        justifyContent: "flex-start",
    },
    conteinerBody: {
        flex: 3,
    },
    logo: {
        width: 40,
        height: 30,
        marginTop: 20,
    },
    conteinerBottom: {
        flex: 1,
        justifyContent: "flex-end",
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        fontWeight: "bold",
        color: '#fff',
    },
    subtitle: {
        fontSize: 16,
        color: '#6B6B6B',
        marginTop: 5,
    },
    buttonName: {
        width: 340,
        height: 50,
        backgroundColor: '#4D4D56',
        borderRadius: 5,
        marginTop: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    buttonGroupImage: {
        width: 30,
        height: 30,
        marginLeft: 20,
    },
    buttonNameText: {
        fontSize: 16,
        color: '#fff',
        paddingStart: 20,
    },
    buttonNewClass: {
        width: 340,
        height: 45,
        backgroundColor: '#EBA800',
        borderRadius: 5,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonNewClassText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: "bold",
        textAlign: "center",
    },
});