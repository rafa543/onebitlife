import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'


export default function Start() {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image source={require("../../assets/icons/logo3.png")} />
                </View>
                <Text>
                    Vamos transforma sua vida {"/n"} em jogo, buscando sempre {"/n"}
                    o melhor nivel.
                </Text>
            </ScrollView>
        </View>
    )
}