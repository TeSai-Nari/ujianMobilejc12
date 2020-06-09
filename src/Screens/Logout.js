import React from 'react';
import {View,StyleSheet} from 'react-native';
import {userLogout} from './../redux/Actions'
import {Button} from 'react-native-elements';
import {connect} from 'react-redux'
const Logout = ({userLogout}) => {
    return (
        <View style={styles.logContainerStyle}>
            <View>
                <Button 
                    title="LOG OUT"
                    onPress={userLogout}
                    containerStyle={{
                        alignItems: 'center'
                    }}
                    buttonStyle={{
                        backgroundColor: '#3DDC84',
                        width: '55%'
                    }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    logContainerStyle: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default connect(null,{userLogout})(Logout);
