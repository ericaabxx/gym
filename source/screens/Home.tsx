import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed'
import { FlatList } from 'react-native'

import { HomeHeader } from '@components/HomerHeader'
import { Group } from '@components/Group'
import { useState } from 'react'
import { ExerciseCard } from '@components/ExerciseCard'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from '../routes/app.routes'

export function Home(){
    const [groups, setGroups] = useState(["Costas", "Biceps", "Triceps", "Ombro"])
    const [groupSelected, setGroupSelected] = useState("Costas")
    const [exercises, setExercise] = useState(["puxada frontal",
         "Remada curvada",
        "Remada unilateral",
         "Levantamento terra"])

         const navigation = useNavigation()

         function handleOpenExerciseDetails(){
            navigation.navigate("exercise")
         }

    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected.toLowerCase === item.toLowerCase}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 32 }}
                style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
            />
            <VStack px="$8" flex={1}>
                <HStack justifyContent="space-between" mb="$5" alignItems="center">
                    <Heading  color="$gray200" fontSize="$md" fontFamily="$heading">
                        Exercicios
                    </Heading>
                    <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList 
                data={exercises} keyExtractor={item => item} 
                    renderItem={() => <ExerciseCard onPress={handleOpenExerciseDetails}/>} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
                />
            </VStack>
        </VStack>
    )
}
