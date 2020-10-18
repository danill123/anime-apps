import React from 'react';
import { Image, View } from 'react-native';

/*
1.Status_img result 2 image eror and loading 
2.props.type = !required 
*/

export default Status_img = (props) => {
    if(props.type == "error") {
        return(
            <View>
                    <View style={{marginTop: 60}}>
                        <Image
                        source={require('../assets/Error_img.png')}
                        style={{
                            height: 300,
                            width: 300
                        }}
                        />
                    </View>
            </View>
        );
    } else {
        return(
            <View>
                    <View style={{marginTop: 60}}>
                        <Image
                        source={require('../assets/load_img.png')}
                        style={{
                            height: 300,
                            width: 300
                        }}
                        />
                    </View>
            </View>
        );
    }
}