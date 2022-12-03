import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import TaskSearchBar from './TaskSearchBar';
import { response } from 'express';
/**
 * Define TaskList, a React componment of CS4050 project #5.
 */
class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLetters: '',
      tasks:window.cse4050models.taskListModel(),
      taskTypes:window.cse4050models.taskTypeListModel(),
    };

    this.handleSearch = event => this.handleSearchFunction(event);
  }

  componentDidMount() {
    this.getTasks();
    this.getTaskTypes();
  }

  getTasks(){
    axios
    .get('/api/tasks')
    .then(response => {
      this.setState({
        tasks:response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  getTaskTypes(){
    axios
    .get('/api/task-types')
    .then(response => {
      this.setState({
        taskTypes:response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

};

  handledragover = event => {
    event.preventDefault();
  };

  handledrop = event => {
    event.preventDefault();

    var newTasks = this.state.tasks;
    var task_id = event.dataTransfer.getData("task_id");
    if(event.target.attributes.class.value === 'cse4050-task-list'){
      var type_id = event.target.attributes.type_id.value;
    } else {
      let node = event.target.closest('.cse4050-task-list');
      if(node){
        type_id = node.attributes.type_id.value;
      }
    }

    this.setState({tasks: newTasks});
  };

  handledrag = event => {
    event.dataTransfer.setData("task_id", event.target.attributes.id.value);
  };

  render() {
    return (
      <Container disableGutters maxWidth="false" sx={{ px:1, py:1 }}>
        <TaskSearchBar value={this.state.inputLetters} />
        <Container disableGutters maxWidth="ld" component="main">
          <Grid container spacing={2} alignItems="flex-end" >
          {this.state.taskTypes?.map(type => (
            <Grid item xs={12} md={4} key={type.name+"-tasks"} className="new-tasks">
              <Card variant="outlined" sx={{ borderRadius:0,mb:1,borderLeftColor: type.color}}>
                <Typography sx={{px:2,py:1,fontWeight:500}}>{type.name}</Typography>
              </Card>
              <Stack
                id={type.name+"-tasks-stack"}
                type_id={type._id}
                droppable="true"
                onDragOver={this.handledragover}
                onDrop={this.handledrop}
                spacing={1}
                className="cse4050-task-list"
                sx={{
                  height: 600,
                  borderLeft: 3,
                  borderColor: type.color,
                }}
              >
                {this.state.tasks?.filter(task => task.type_id === type._id).map(task => (
                <Card
                  key={"task"+task._id}
                  id={"task"+task._id}
                  draggable="true"
                  droppable="false"
                  onDragStart={this.handledrag}
                  variant="outlined"
                  className="cse4050-task-task"
                >
                  <CardContent>
                    <Typography>{task.description}</Typography>
                  </CardContent>
                </Card>
                ))}
              </Stack>
            </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    );
  }
}

export default TaskList;
