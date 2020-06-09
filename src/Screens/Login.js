import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Icon, Button, Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {userLogin} from '../redux/Actions/authAction';

const Login = ({navigation}) => {
    let [username, setUsername] = useState('');
    let dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Icon type="antdesign" name="android1" color="#3DDC84" size={100} />
            <Input 
                placeholder="Username"
                onChangeText={(e) => setUsername(e)}
            />
            <View>
                <Button 
                    title="Login"
                    containerStyle={{
                        alignItems: 'center'
                    }}
                    buttonStyle={{
                        backgroundColor: '#3DDC84',
                        width: '15%'
                    }}
                    onPress={() => dispatch(userLogin({username}))}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',

    }
})

export default Login;