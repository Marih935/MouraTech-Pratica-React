import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303036',
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 40,
    },
    conteinerTop: {
        flex: 1,
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        marginTop: 20,
    },
    spaceTop: {
        flex: 1,
    },
    conteinerCenter01: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        borderColor: '#FFC300',
        borderWidth: 1,
        paddingTop: 40,
    },
    logo: {
        width: 40,
        height: 30,
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
    conteinerCenter02: {
        //flex: 1,
        backgroundColor: '#303036',
        paddingTop: 40,
        alignItems: "flex-start",
        //width: '100%',
        flexDirection: 'row',
        borderColor: '#FFC300',
        borderWidth: 1,
    },
    input: {
        backgroundColor: '#4D4D56',
        width: 250,
        height: 50,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 10,
    },
    addButton: {
        backgroundColor: '#4D4D56',
        height: 50,
        width: 60,
        borderBottomEndRadius: 5,
        borderTopEndRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    textButton: {
        color: '#FFC300',
        fontSize: 46,
        lineHeight: 55,
    },
});