import React from 'react';
import { Layout} from '@ui-kitten/components';
import {ScrollView} from "react-native";

// import component
import Card_manga from "../../component/Card_manga";

// style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} (default)
const manga = (props) => {
    return(
        <ScrollView>    
            <Layout style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                <Card_manga img={"https://cdn.myanimelist.net/images/characters/11/286916.jpg?s=ff0b6e37a427c9498f5a1ecd40bf7bb4"} name={"Liebert, Anna"}/>
                <Card_manga img={"https://cdn.myanimelist.net/images/characters/9/316521.jpg?s=fc2af5cad2f8ecc6bd23abd12742c740"} name={"Liebert, Johan"}/>
                <Card_manga img={"https://cdn.myanimelist.net/images/characters/13/107059.jpg?s=066cbcad1db585632b91a18221602ca9"} name={"Tenma, Kenzou"}/>
                <Card_manga img={"https://cdn.myanimelist.net/images/characters/2/286770.jpg?s=8e855b6db0c08ad8a345be54eae67bb4"} name={"Akanbou"}/>
                <Card_manga img={"https://cdn.myanimelist.net/images/characters/5/284761.jpg?s=b1ec33f50da4028855f6a2a325f3bca2"} name={"Bernhardt, Hugo"}/>
                <Card_manga img={"https://cdn.myanimelist.net/images/characters/3/105827.jpg?s=d636ad3f0bd63895b53e606d34bcea1b"} name={ "Blue Sophie"}/>
                <Card_manga img={"https://cdn.myanimelist.net/images/characters/9/116773.jpg?s=afe66625175e34b969866e32dfd8ba3e"} name={"Bonaparta, Franz"}/>
                <Card_manga img={"https://cdn.myanimelist.net/images/characters/2/288466.jpg?s=8b1145fd5722ad9d1ecf168bd303ea8a"} name={"Braun, Richard"}/>
                <Card_manga img={"https://cdn.myanimelist.net/images/characters/2/110947.jpg?s=d980c8cc71c93c7c0317f9481ac58671"} name={"Čapek, Peter"}/>
            </Layout>
        </ScrollView>
    );
}

export default manga;