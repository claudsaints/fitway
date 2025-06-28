import Container from "@components/Container/Container";
import { HistoryCard } from "@components/Cards/HistoryCard";
import { ScreenHeader } from "@components/Headers/ScreenHeader";
import { useState } from "react";
import { View ,Text, SectionList} from "react-native";

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

  return (  
    <>
      <ScreenHeader title="ssda"/>
      <Container>

       <SectionList
       
        sections={exercicios}
        keyExtractor={item=> item}
        renderItem={({item}) => (

          <HistoryCard/>
        )}
        renderSectionHeader={({section}) => (
          <Text>
            {section.title}
          </Text>
        )}
        style={{paddingHorizontal: 10}}
        ListEmptyComponent={
          () => (
            <Text>
              Não á exercicios hoje
            </Text>
          )
        }
       />  
          
      </Container>
    </>
  );
}