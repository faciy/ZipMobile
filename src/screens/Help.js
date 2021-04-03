import * as React from 'react';
import { Container, Header, Content, Accordion, Left, Body, Button, Icon, Title } from "native-base";
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import plus from '../assets/icons/plus.png';
import minus from '../assets/icons/minus.png';

const dataArray = [
    { title: `First Element`, content: 'Lorem ipsum dolor sit amet' },
    { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
    { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' },
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
                    borderBottomColor:'grey',
                    borderBottomWidth:1
                }}>
                <Text style={{ fontWeight: '600' }}> {item.title}</Text>
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
                                style={{color:'white'}}
                                name='chevron-back-outline'
                            />
                            <View style={{justifyContent:'center'}}> 
                            <Text style={{color:'white'}}>Retour</Text>
                            </View>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={styles.title}>Aide</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Accordion dataArray={dataArray} expanded={[0]} renderHeader={_renderHeader} />
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
        height: 20
    },
    header: {
        backgroundColor: 'grey',
    },
    title:{
        left:wp('15%')
    },
    button:{
        flexDirection:'row',
    }
});

export default Help;