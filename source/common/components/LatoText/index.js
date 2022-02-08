import React from "react"
import { Text } from "react-native"
import { wp } from "../../../utils/helper"
import colors from "../../constants/colors"



export default ({
    fontSize = wp(3),
    text = "",
    fontFamily = "Poppins-Regular",
    color = colors.text,
    style = {},
    fontWeight,
    padding
}) => {

    return (
        <Text
            style={[{

                fontSize,
                fontFamily,
                color,
                fontWeight,
                textTransform: "capitalize",
                padding,
            }, style]}
        >
            {text}
        </Text>
    )

}