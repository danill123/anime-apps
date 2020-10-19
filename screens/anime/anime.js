import React, { useEffect } from 'react';
import { Layout , Text} from '@ui-kitten/components';
import { useSelector, useDispatch } from "react-redux";
import {ScrollView} from "react-native";

// import component
import * as API from "../../redux/action/index";
import Card_img from "../../component/Card_img";
import Status_img from "../../component/Status_img";

// style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} (default)
const anime = (props) => {
    const redux = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(API.fetchanimelist())
    }, [])

    if(redux == undefined) {
        return(
            <Layout style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                <Status_img />
            </Layout>
        );
    } else {
        return(
            <ScrollView>
                <Layout style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                    <Card_img title_en={"Cowboy Bebop"} title_jp={"カウボーイビバップ"} img={"https://media.kitsu.io/anime/cover_images/1/small.jpg?1597604215"} average_rate={82.47}/>
                    <Card_img title_en={"Trigun"} title_jp={"トライガン"} img={"https://media.kitsu.io/anime/cover_images/3/small.jpg?1597702437"} average_rate={72.28}/>
                    <Card_img title_en={"Beet the Vandel Buster"} title_jp={"冒険王ビィト"} img={"https://media.kitsu.io/anime/poster_images/5/small.jpg?1597690768"} average_rate={69.08}/>
                    <Card_img title_en={"Eyeshield 21"} title_jp={"アイシールド21"} img={"https://media.kitsu.io/anime/cover_images/6/small.jpg?1597701519"} average_rate={78.31}/>
                    <Card_img title_en={"Hachimitsu to Clover"} title_jp={"ハチミツとクローバー"} img={"https://media.kitsu.io/anime/cover_images/7/small.jpg?1597702684"} average_rate={79.47}/>
                    <Card_img title_en={"Hungry Heart: Wild Striker"} title_jp={ "ハングリーハート Wild Striker"} img={"https://media.kitsu.io/anime/poster_images/8/small.jpg?1597604242"} average_rate={74.01}/>
                    <Card_img title_en={"Monster"} title_jp={"モンスター"} img={"https://media.kitsu.io/anime/cover_images/10/small.jpg?1597702342"} average_rate={82.33}/>
                    <Card_img title_en={"Naruto"} title_jp={"ナルト"} img={'https://media.kitsu.io/anime/cover_images/11/small.jpg?1597701519'} average_rate={79.26}/>
                    <Card_img title_en={"One Piece"} title_jp={"ONE PIECE"} img={'https://media.kitsu.io/anime/cover_images/12/small.jpg?1597701689'} average_rate={82.69}/>
                    <Card_img title_en={"Prince of Tennis"} title_jp={"テニスの王子様"} img={'https://media.kitsu.io/anime/cover_images/13/small.jpg?1597604272'} average_rate={77.84}/>
                    <Card_img title_en={"Ring ni Kakero 1"} title_jp={"リングにかけろ１"} img={'https://media.kitsu.io/anime/poster_images/14/small.jpg?1597691292'} average_rate={66.92}/>
                    <Card_img title_en={"Shinseiki Evangelion"} title_jp={"新世紀エヴァンゲリオン"} img={'https://media.kitsu.io/anime/cover_images/21/small.jpg?1597696282'} average_rate={82.39}/>
                    <Card_img title_en={"Shinseiki Evangelion Gekijouban: Shi to Shinsei"} title_jp={"新世紀エヴァンゲリオン劇場版 シト新生"} img={'https://media.kitsu.io/anime/cover_images/22/small.jpg?1597702227'} average_rate={71.81}/>
                    <Card_img title_en={"Kimi no Na wa"} title_jp={"君の名は"} img={'https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png'} average_rate={80.40}/>
                    <Card_img title_en={"Kimetsu no Yaiba"} title_jp={"鬼滅の刃"} img={'https://upload.wikimedia.org/wikipedia/id/thumb/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg/220px-Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg'} average_rate={8.4}/>
                    <Card_img title_en={"Tenki no Ko"} title_jp={"天気の子"} img={'https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg'} average_rate={8.4}/>
                </Layout>
            </ScrollView>
        );
    }
}

export default anime;