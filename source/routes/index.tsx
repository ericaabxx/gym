import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { Box } from "@gluestack-ui/themed";

import { gluestackUIConfig } from "@gluestack-ui/config";

export function Routes() {
    const theme = DefaultTheme
    theme.colors.background = gluestackUIConfig.tokens.colors.blueGray700
    return(
        <Box flex={1} bg="$gray700">
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
        </Box>
    )

}