import React from 'react';
import { Layout} from '@ui-kitten/components';

// import component
import Card_img from "../../component/Card_img";

// style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} (default)
const manga = (props) => {
    return(
        <Layout style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            <Card_img />
            <Card_img />
        </Layout>
    );
}

export default manga;