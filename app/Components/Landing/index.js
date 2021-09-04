import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

function Landing(props) {

    const [taskName, setTaskName] = useState("");
    const [taskID, setTaskID] = useState(undefined);

    useEffect(() => {
        props.clearToDo();
        // props.fetchToDo();
        props.fetchPosts();
    }, []);

    const onPressSubmit = () => {
        if (taskID) {
            props.updateToDo({
                id: taskID,
                name: taskName
            });
        } else {
            console.log('props', props);
            props.insertToDo({
                taskName
            });
        }
    }
    const onPressTask = (task) => {
        console.log('---control here', task);
        setTaskName(task.name);
        setTaskID(task.id);
    }
    const onPressDeleteTask = (task) => {
        props.deleteToDo({
            id: task.id
        });
    }

    const TaskItem = (item) => {
        return (
            <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
                <Text>{item.name}</Text>
                <Text>{item.id}</Text>
            </View>
        )
    }

    const renderItem = ({ item }) => (
        <View style={{borderWidth:1, borderColor: 'lightgray'}}>
            <Text>{item.name}</Text>
            <Text>{item.id}</Text>
            <TouchableOpacity style={{ width: 100, height: 35 }} onPress={() => onPressTask(item)}>
                <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 100, height: 35 }} onPress={() => onPressDeleteTask(item)}>
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>{props.loading && "Loading!!!"}</Text>
            <TextInput
                style={{ width: 300, height: 40 }}
                onChangeText={(value) => setTaskName(value)}
                value={taskName}
                placeholder="Task Name"
            />
            <TouchableOpacity style={{ width: 100, height: 35 }} onPress={() => onPressSubmit()}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>

                <FlatList
                    data={props.arrToDo}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View>
                {/* <Text>{!props.loading && JSON.stringify(props.arrToDo)}</Text>
            <Text>{props.loadingPosts && "Loading Posts !!!"}</Text>
            <Text>{!props.loadingPosts && JSON.stringify(props.arrPosts)}</Text> */}
            </View>
        </SafeAreaView>
    );
}

const mapStateToProps = ({ ToDo, Posts, loading }) => ({
    arrToDo: ToDo.arrToDo,
    arrPosts: Posts.arrPosts,
    loading: loading.effects.ToDo.fetchToDo,
    loadingPosts: loading.effects.Posts.fetchPosts
});

const mapDispatchToProps = ({
    ToDo: { fetchToDo, insertToDo, updateToDo, deleteToDo, clearToDo },
    Posts: { fetchPosts }
}) => ({
    fetchToDo: () => fetchToDo(),
    fetchPosts: () => fetchPosts(),
    insertToDo: (payload) => insertToDo(payload),
    updateToDo: (payload) => updateToDo(payload),
    deleteToDo: (payload) => deleteToDo(payload),
    clearToDo: () => clearToDo(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);