import React from 'react';
import AddOption from './AddOption';
import Header from './Header'
import Options from './Options';
import Action from './Action'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.state = {
            options: [],
            selectedOption:undefined
        }
    }
    
    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options) {this.setState(()=>({options}))}
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePick() {  
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({selectedOption:option}))
    }
    handleAddOption(option) {
        if (!option) {
            return "Please enter a value";
        }
        else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    handleModal() {
        this.setState(()=>({selectedOption:undefined}))
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
            <Header subtitle={subtitle} />
            <div className="container">
           
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <div className='widget'>
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                /></div>
                </div>
                
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleModal={this.handleModal}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp