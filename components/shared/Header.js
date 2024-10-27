import { View, Text } from "react-native";
import s from "../../styles/styles";
import Icon from 'react-native-vector-icons/FontAwesome';

const header = () => {
  return (
    <View style={[s.header]}>
      <Icon name="bars" style={s.header.icons} size={s.header.icons.size} />
      <Text style={[s.header.text]}>header</Text>
    </View>
  );
};

export default header;
