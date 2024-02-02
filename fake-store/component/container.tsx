import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, } from 'react-native';
import  Constants  from "expo-constants";

export const Container = ({children}: React.PropsWithChildren) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,

    },
});