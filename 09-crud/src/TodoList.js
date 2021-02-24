import React from "react"

export default class TodoList extends React.Component {
    state = {
        tasks: [
            {
                "id": 1234,
                "title": "Mop the floor",
                "done": false
            }
        ],
        newTitle : ""
    }
    render (){
        return (
            <React.Fragment>
                <h1>Add New Task</h1>
                <div>
                    <label>New Task</label>
                    <input type="text" name="newTitle" value={this.state.newTitle} onChange={this.updateTitle}/>
                </div>
                <button onClick={this.addTask}>Add Task</button>
                <h1>Task List</h1>
                {this.renderList()}
            </React.Fragment>
        )
    }

    updateTitle=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addTask = (event)=> {
        let newTask = {
            //Usually this will use mongoDB id
            id: Math.floor(Math.random() * 999999 + 1000000),
            title: this.state.newTitle,
            done: false
        }

         this.setState({
                "tasks": [...this.state.tasks, newTask]
            })

    }
    renderList=()=>{
        let list = [];
        for (let t of this.state.tasks){
            list.push(<div key={t.id}>
                {t.title}
                <input type="checkbox" checked={t.done} onChange={()=>{
                    this.updateCheckbox(t);
                }}/>
            </div>)
        }
        // for(let task of this.state.tasks){
        //     let toDo = <div key={task.id}>
        //         {task.title}
        //     <input type="checkbox" checked={task.done} onClick={()=>{
        //         this.renderList(task);
        //     }}/>
        //     </div>
        //     list.push(toDo)
        // }
        return list
    }

    updateCheckbox(task){
        //1. Clone the object that you are changing
        let clonedTask = {...task};
        //2. Change the object
        clonedTask.done = !clonedTask.done;
        //3. Clone the array that you are changing
        let clonedArray = [...this.state.tasks]; 
        //4. Replace the original object at the same index in the cloned array with the cloned object.
        let index = this.state.tasks.findIndex(function(eachTask){
            return eachTask.id === task.id
        });

        //Alternative
        // let index=-1;
        // for (let i=0; i < this.state.tasks.length; i++){
        //     if (this.state.tasks[i].id == task.id){
        //         index=i;
        //         break
        //     }
        // }

        // 4.1 Put the found item and replace
        clonedArray[index] = clonedTask;
        //5. Put the cloned array into the state
        this.setState({
            tasks : clonedArray
        })
    }

}