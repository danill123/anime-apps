import React from 'react';
import { Image, View, Text } from 'react-native';

const Card_manga = (props) => {
    return(
        <View style={{ backgroundColor: "#eee", 
                           borderRadius: 10, overflow: "hidden" ,  
                           shadowColor: "black", 
                           backgroundColor: "#e3f6f5", 
                           marginTop: 10, 
                           shadowColor: '#000',
                           shadowOffset: { width: 0, height: 1 },
                           shadowOpacity: 0.8,
                           shadowRadius: 2,  
                           elevation: 5
                        }}>
                <View>
                    <Image
                    source={{uri: props.img}}
                    style={{
                        height: 150,
                        width: 300
                    }}
                    />
                </View>
                <View style={{ padding: 10, width: 300 }}>
                    <Text>{props.name}</Text>
                </View>
        </View>
    );
}

export default Card_manga;