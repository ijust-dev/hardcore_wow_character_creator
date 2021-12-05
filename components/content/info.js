import React from 'react'
import Challenges from './challenges'

export default class info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            class: "na",
    
            a1name: "na",
            a1string: "na",
            a1url: "/url",
    
            a2name: "na",
            a2string: "na",
            a2url: "/url",
    
            a3name: "na",
            a3string: "na",
            a3url: "/url",

            c1name: "na",
            c1string: "na",
            c1url: "/url"
        }
        this.getAchievements = this.getAchievements.bind(this);
    }

    getAchievements() {
    
        fetch('./achievement_info.json')
        .then(response => response.json())
        .then(data => {
    
            let random1 = Math.floor(Math.random() * data.achievements.length);
            let random2 = Math.floor(Math.random() * data.achievements.length);
            let random3 = Math.floor(Math.random() * data.achievements.length);
            let random4 = Math.floor(Math.random() * data.class_achievements[0][this.props.classchoice].length);

            // Prevents each random number from being the same.
            while (random1 == random2 || random1 == random3 || random2 == random3)
            {
                random1 = Math.floor(Math.random() * data.achievements.length);
                random2 = Math.floor(Math.random() * data.achievements.length);
                random3 = Math.floor(Math.random() * data.achievements.length);
            }
    
            this.setState({
                a1name: data.achievements[random1].name,
                a1string: data.achievements[random1].string,
                a1url: data.achievements[random1].url,
    
                a2name: data.achievements[random2].name,
                a2string: data.achievements[random2].string,
                a2url: data.achievements[random2].url,
    
                a3name: data.achievements[random3].name,
                a3string: data.achievements[random3].string,
                a3url: data.achievements[random3].url,

                c1name: data.class_achievements[0][this.props.classchoice][random4].name,
                c1string: data.class_achievements[0][this.props.classchoice][random4].string,
                c1url: data.class_achievements[0][this.props.classchoice][random4].url
            });
            document.getElementById("challenges").className = "visible";
        });
      }

    render() {
        return (
            <div className={this.props.classchoice == "na" ? 'hidden' : 'visible self-start w-full rounded-t-lg mt-5'}>
                <h2 className="font-header text-2xl md:text-3xl w-full mb-5">
                    {this.props.classchoice}
                </h2>
                <button className="font-header border-white border-4 hover:border-gray-300 hover:text-gray-100 text-white font-bold py-2 px-4 mb-5 rounded" onClick={this.getAchievements} type="button">Generate Challenges</button>
                <div id="challenges" className="hidden">
                    <Challenges a1name={this.state.a1name} a1string={this.state.a1string} a1url={this.state.a1url} />
                    <Challenges a1name={this.state.a2name} a1string={this.state.a2string} a1url={this.state.a2url} />
                    <Challenges a1name={this.state.a3name} a1string={this.state.a3string} a1url={this.state.a3url} />
                    <Challenges a1name={this.state.c1name} a1string={this.state.c1string} a1url={this.state.c1url} />
                </div>
            </div>
        );
    }
}