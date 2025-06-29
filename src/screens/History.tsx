import Container from "@components/Container/Container";
import { HistoryCard } from "@components/Cards/HistoryCard";
import { ScreenHeader } from "@components/Headers/ScreenHeader";
import { useState } from "react";
import { View ,Text, SectionList, useWindowDimensions} from "react-native";

export function History() {
  const [exercicios,setExercicios] = useState([
  {
    title: '28.06.2025',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: '27.06.2025',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  
]);

const {width} = useWindowDimensions();
  return (  
    <>
      <ScreenHeader title="ssda"/>
      <Container>

       <SectionList
        contentContainerStyle={{paddingBottom: 30}}
        sections={exercicios}
        keyExtractor={item=> item}
        renderItem={({item}) => (
          <HistoryCard/>
        )}
        renderSectionHeader={({section}) => (
          <Text style={{ marginBottom: 10, marginTop: 5}}>
            {section.title}
          </Text>
        )}
        style={{padding: 20, flex: 1, width: width}}
        ListEmptyComponent={
          () => (
            <Text style={{ textAlign: "center"}}>
              Não á exercicios hoje
            </Text>
          )
        }
       />  
          
      </Container>
    </>
  );
}