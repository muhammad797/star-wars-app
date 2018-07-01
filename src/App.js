import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPeopleFromAPI} from "../actions";
import {Body, Button, Container, Content, Header, Icon, Left, ListItem, Right, Text, Title} from "native-base";
import {ActivityIndicator, FlatList} from "react-native";

class App extends Component {

    constructor(props) {
        super(props);
        this.loadData();
    }

    loadData() {
        const {getPeople, isFetching} = this.props;
        if (!isFetching) getPeople();
    }

    renderItem({item}) {
        return (
            <ListItem>
                <Text>{item.name}</Text>
            </ListItem>
        );
    }

    render() {
        const {people, isFetching, error} = this.props.people;
        return (
            <Container>
                <Header>
                    <Body><Title>Star Wars</Title></Body>
                    <Right>
                        <Button transparent onPress={this.loadData.bind(this)} disabled={isFetching}>
                            {
                                isFetching &&
                                <ActivityIndicator size="small" color="#FFFFFF"/>
                            }
                            {
                                !isFetching &&
                                <Icon type={"MaterialIcons"} name={"refresh"}/>
                            }

                        </Button>
                    </Right>
                </Header>
                <Content style={{flex: 1}}>
                    {
                        isFetching &&
                        <Text style={{textAlign: "center", marginTop: 20, color: "#777"}}>
                            Fetching ...
                        </Text>
                    }
                    {
                        error && !isFetching &&
                        <Text style={{textAlign: "center", marginTop: 20, color: "#772216"}}>
                            Oops.. Try later, Something went wrong!
                        </Text>
                    }
                    {
                        people.length === 0 && !isFetching &&
                        <Text style={{textAlign: "center", marginTop: 20, color: "#777"}}>
                            No People found!
                        </Text>
                    }
                    <FlatList
                        style={{flex: 1}}
                        data={people}
                        renderItem={this.renderItem.bind(this)}
                        refreshing={isFetching}
                        onRefresh={this.loadData.bind(this)}
                    />
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    console.warn("State: " + JSON.stringify(state));
    return {
        people: state.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPeople: () => dispatch(getPeopleFromAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);