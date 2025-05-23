import { HStack, Heading, Icon, Text, VStack } from "@gluestack-ui/themed";
import { LogOut } from 'lucide-react-native'
import { UserPhoto } from "./UserPhoto";

export function HomeHeader(){
    return (
        <HStack 
        bg="$gray100" 
        pt="$16" 
        pb="$5" 
        px="$8" 
        alignItems="center" 
        gap="$4">
            <UserPhoto source={{ uri: "https://github.com/ericaabxx.png"}} alt="foto de perfil" 
            w="$16"
            h="$16"
            />
            <VStack flex={1}>
            <Text 
            color="$gray100" 
            fontSize="$sm" >Olá,</Text>
            <Heading 
            color="$gray100" fontSize="$md">
                Erica Abreu
                </Heading>
            </VStack>
            <Icon as={LogOut} color="$gray200" size="xl" />
        </HStack>
    )
}