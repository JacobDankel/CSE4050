import React from "react";


const search = (string, items) => {
    var valid = [];
    items.forEach(searchItem => {
        let regExpString = new RegExp(string, "i");
        if(regExpString.test(searchItem)){
            valid.push(searchItem);
        }
    });
    console.log(valid);
    return valid;
};

export default class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            defaultValue: this.props.defaultInputValue,
            searchItems: this.props.seachItems,
            searchCallBackFuntion: this.props.searchCallBackFuntion,
        };
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        this.state.searchCallBackFuntion(search(event.target.value, this.state.searchItems));
    }

    render() {
        return (
            <div className="cse4050-courses-search">
                <label htmlFor="inId">Search: </label>
                <input type="text" value={this.state.defaultInputValue} onChange={this.handleChange}/>
            </div>
        );
    }
}