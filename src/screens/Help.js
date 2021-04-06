import * as React from 'react';
import { Container, Header, Content, Accordion, Left, Body, Button, Icon, Title } from "native-base";
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import plus from '../assets/icons/plus.png';
import minus from '../assets/icons/minus.png';

const dataArray = [
    { title: `J'ai oublié mon mot de passe`, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' },
    { title: 'Comment retirer son solde', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' },
    { title: 'Quel est mon total de course', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' },
];
function VirtualizedView(props) {
    return (
        <FlatList
            data={[]}
            ListEmptyComponent={null}
            keyExtractor={() => 'dummy'}
            renderItem={null}
            ListHeaderComponent={() => <React.Fragment>{props.children}</React.Fragment>}
        />
    );
}
const Help = () => {
    const _renderHeader = (item, expanded) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderBottomColor: '#D4D4D4',
                    borderBottomWidth: 1,
                }}>
                <Text style={{ fontWeight: '600', color: '#2568B0' }}> {item.title}</Text>
                {expanded ? (
                    <Image source={minus} style={styles.image} />
                ) : (
                    <Image source={plus} style={styles.image} />
                )}
            </View>
        );
    };
    return (
        <VirtualizedView>
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <TouchableOpacity
                            style={styles.button} transparent>
                            <Icon
                                style={{ color: '#000000' }}
                                name='chevron-back-outline'
                            />
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: '#000000' }}>Retour</Text>
                            </View>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={styles.title}>Aide</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Accordion dataArray={dataArray} contentStyle={{ color: "#7F7F7F" }} 
                        expanded={[0]} renderHeader={_renderHeader} />
                </Content>
            </Container>
        </VirtualizedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 20,
        height: 20,
        tintColor: '#2568B0'
    },
    header: {
        backgroundColor: '#FAFAFA',
    },
    title: {
        left: wp('15%'),
        color: '#000000'
    },
    button: {
        flexDirection: 'row',
    }
});

export default Help;