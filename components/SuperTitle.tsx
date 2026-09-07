import { Text } from "react-native";
import { styles } from "./styles";

interface Props {
    title: string;
    upperCase?: boolean;
}

/**
 * Titulo principal do app
 * @param title Texto do título
 * @param upperCase Se vai ficar tudo maiusculo
 * @returns um titlulo
 */

export function SuperTitle(props: Props) {
    let content = props.title;

    if (props.upperCase) {
        content = content.toUpperCase();
    }

  return <Text style={styles.title}>{content}</Text>;
}
