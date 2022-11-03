import React from "react";

const search = (string, items) => {
    let valid = [];
    console.log(items);
    items.forEach(function isValid(item){
        let regExpString = new RegExp(string, "i");
        if(regExpString.test(item)){
            valid.push(item);
        }
    });
    console.log(string);
    return valid;
};


export default class Search extends React.Component{
    constructor(props) {
      super(props); // Must run the constructor of React.Component first
  
        this.state = {
            defaultInputValue: this.props.defaultInputValue,
            searchItems: this.props.searchItems,
            searchCallbackFunction: this.props.searchCallback,
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        this.state.searchCallbackFunction(search(event.target.value, this.state.searchItems));
    }

    render() {
        return (
            <div className="cse4050-course-search">
                <label htmlFor="inId">Search: </label>
                <input type="text" value={this.state.searchCriteria} onChange={this.handleChange}/>
            </div>
        );
    }
}