import React from 'react'
import Wowclass from '../components/class_button.js'

export default class class_display extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            druidclassSelected: false,
            hunterclassSelected: false,
            mageclassSelected: false,
            paladinclassSelected: false,
            priestclassSelected: false,
            rogueclassSelected: false,
            shamanclassSelected: false,
            warlockclassSelected: false,
            warriorclassSelected: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.resetClassSelected = this.resetClassSelected.bind(this);
    }

    // Reset all class selections.
    resetClassSelected() {
        this.setState({
            druidclassSelected: false,
            hunterclassSelected: false,
            mageclassSelected: false,
            paladinclassSelected: false,
            priestclassSelected: false,
            rogueclassSelected: false,
            shamanclassSelected: false,
            warlockclassSelected: false,
            warriorclassSelected: false
        });
    }

    // This can be handled better.
    handleClick(e) {
        switch(e.target.name) {
            case "Druid":
                this.resetClassSelected();
                this.setState({
                    druidclassSelected: true,
                });
                break;
            case 'Hunter':
                this.resetClassSelected();
                this.setState({
                    hunterclassSelected: true,
                });
                break;
            case 'Mage':
                this.resetClassSelected();
                this.setState({
                    mageclassSelected: true,
                });
                break;
            case 'Paladin':
                this.resetClassSelected();
                this.setState({
                    paladinclassSelected: true,
                });
                break;
            case 'Priest':
                this.resetClassSelected();
                this.setState({
                    priestclassSelected: true,
                });
                break;
            case 'Rogue':
                this.resetClassSelected();
                this.setState({
                    rogueclassSelected: true,
                });
                break;
            case 'Shaman':
                this.resetClassSelected();
                this.setState({
                    shamanclassSelected: true,
                });
                break;
            case 'Warlock':
                this.resetClassSelected();
                this.setState({
                    warlockclassSelected: true,
                });
                break;
            case 'Warrior':
                this.resetClassSelected();
                this.setState({
                    warriorclassSelected: true,
                });
                break;
        }
    }

    render() {

        return (
            <div onClick={this.handleClick} classchoice={this.props.classchoice} className="grid grid-cols-3 justify-center sm:flex sm:flex-wrap sm:w-7/12 md:w-full mt-5">
                <Wowclass active={this.state.druidclassSelected} name="Druid"/>
                <Wowclass active={this.state.hunterclassSelected} name="Hunter"/>
                <Wowclass active={this.state.mageclassSelected} name="Mage"/>
                <Wowclass active={this.state.paladinclassSelected} name="Paladin"/>
                <Wowclass active={this.state.priestclassSelected} name="Priest"/>
                <Wowclass active={this.state.rogueclassSelected} name="Rogue"/>
                <Wowclass active={this.state.shamanclassSelected} name="Shaman"/>
                <Wowclass active={this.state.warlockclassSelected} name="Warlock"/>
                <Wowclass active={this.state.warriorclassSelected} name="Warrior"/>
            </div>
        );
    }
}