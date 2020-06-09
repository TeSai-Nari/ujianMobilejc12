import React, { useEffect } from 'react';
import { View, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/Actions/authAction';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    let dataCats = useSelector(state => state.auth.dataCats);
    let dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getData())
    }, [dispatch])

    return (
        <View style={{backgroundColor: 'whitesmoke', flex:1}}>
            <FlatList 
                keyExtractor={(item, index) => index.toString()}
                data={dataCats}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', {detail: item})}
                        style={{backgroundColor: 'whitesmoke', flex:1}}
                    >
                        <Image
                        style={{width: 200, height: 200}}
                        source={{
                            uri: item.url
                        }}
                    />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Home;