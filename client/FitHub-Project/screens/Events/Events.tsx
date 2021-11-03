import * as React from 'react';
import { ScrollView } from 'react-native';
import {Card ,Button,  Paragraph , Title} from 'react-native-paper'

export default function Event() {
  return (
    <ScrollView >
    <Card >
      <Card.Cover source = {require("../../assets/EventsImag/takwira.jpg")} />
    <Card.Content>
      <Title>
        Foot-Ball Match
      </Title>
       </Card.Content>
    <Card.Actions>
      <Button>Join</Button>
    </Card.Actions>
  </Card>
  </ScrollView>
  );
}
