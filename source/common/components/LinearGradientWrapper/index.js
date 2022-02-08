import React from "react"
import LinearGradient from "react-native-linear-gradient"
import colors from "../../constants/colors"


export default ({ style, children, right }) => {

    const gColors = right ?
        [colors.primaryDark, colors.primaryLight] : [colors.primaryLight, colors.primaryDark]

    return (
        <LinearGradient
            style={style}
            colors={gColors}
            start={{ x: 0.2, y: 1.0 }}
            end={{ x: 0.8, y: 0.0 }} >
            {
                children
            }
        </LinearGradient>
    )

}