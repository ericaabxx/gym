import { HistoyCard } from '@components/HistoryCard'
import { ScreenHeader } from '@components/ScreenHeader'
import { Center, Text, VStack, Heading } from '@gluestack-ui/themed'
import { Section } from 'lucide-react-native'
import { useState } from 'react'
import { SectionList } from 'react-native'


export function History(){
    const [exercises, setExercises] = useState([{
        title: "22.07.2024",
        data: ["Puxada frontal", "Remada unilateral"]

    },
    {
        title: "23.07.2024",
        data: ["Puxada frontal"]

    },
])
    return (
        <VStack flex={1}>
            <ScreenHeader  title="Historico de exercicios"/>
            <SectionList sections={exercises}
             keyExtractor={(item) => item} 
             renderItem={() => <HistoyCard />} 
             renderSectionHeader={({section }) => (
                <Heading color="$gray200" 
                fontSize="$md"
                mt="$10"
                mb="$3"
                fontFamily="$heading" >
                    {section.title}
                    </Heading>
             )}
             style={{paddingHorizontal: 32}}
             contentContainerStyle={
                exercises.length === 0 && {flex: 1, justifyContent:"center"}
             }
             ListEmptyComponent={() => (
                <Text color="$gray600" textAlign="center" >
                    Não há exercicios registraods ainda. {"\n"}Vamos fazer exercicos hoje?
                </Text>
             )}
             showsVerticalScrollIndicator={false}
             />
        </VStack>
    )
}