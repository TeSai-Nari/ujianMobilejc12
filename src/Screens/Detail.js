import React from 'react';
import {imageAction} from '../redux/Actions/authAction';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';

const Detail = ({navigation, route}) => {
    // console.log(route.params.detail)
    let dispatch = useDispatch();
    const handleImage = () => {
        return (
            dispatch(imageAction(route.params.detail.url))
            )
            navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <Image 
                source={{
                    uri: route.params.detail.url
                }}
                style={{width: '100%', height: 300, marginBottom:40}}
            />
            <Button 
                title="SET AS DEFAULT PIC ?"
                containerStyle={{
                    alignItems: 'center'
                }}
                buttonStyle={{
                    backgroundColor: '#3DDC84',
                    width: '60%'
                }}
                onPress={handleImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '100%',
    }
})
export default Detail;