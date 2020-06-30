import {View, Text} from 'react-native'

import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import React from 'react'
import styles from '../style/styles';


function RankingDetalhes () {



        const data = [ 4.6, 4.4, 4.0, 3.6, 4.6, 4.7, 4.4]

        const axesSvg = { fontSize: 16, fill: 'grey' };
        const verticalContentInset = { top: 20, bottom: 20 }
        const xAxisHeight = 5
        const zero = 0

        // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
        // All react-native-svg-charts components support full flexbox and therefore all
        // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
        // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
        // and then displace the other axis with just as many pixels. Simple but manual.

        return (

            <View style={styles.container}>
            <Text style={styles.h1}>Centro de custo 23</Text>
            <Text style={styles.bodyText}>Acompanhe as notas do centro de custo: </Text>
            <View style={{ height: 400, padding: 20, flexDirection: 'row' }}>
                
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                    min={0}
                    
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={data}
                        contentInset={verticalContentInset}
                        svg={{ stroke: '#000' }}
                        gridMin={0}
                    >
                        <Grid/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
        </View>
        )
    }



export default RankingDetalhes