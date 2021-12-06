import Head from 'next/head'
import ClassDisplay from '../components/class_display'
import ClassInfo from '../components/content/info'
import React from 'react';

export default class class_display extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        class: "na",
    }

    this.getCurrentClass = this.getCurrentClass.bind(this);
  }

  getCurrentClass() {
    let classchoices = document.getElementsByName("classselect");
    for (let i=0;i<classchoices.length;i++) {
      if (classchoices[i].checked) {
        this.setState({
          class: classchoices[i].id
        });
        return;
      }
    }
  }

  render() {

    return (
      <div className="flex">
        <Head>
          <title>{this.state.class !== "na" ? "Hardcore - " + this.state.class : "Hardcore Character Creator"}</title>
          <meta name="description" content="A Hardcore World of Warcraft Character Creator." />
          <link rel="icon" href={this.state.class !== "na" ? "/images/class/" + this.state.class.toLowerCase() + ".png" : "/images/class/rogue.png"} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@500&family=Heebo:wght@800&display=swap" rel="stylesheet" />
        </Head>

        <main onClick={this.getCurrentClass} className="flex flex-col items-center text-center text-white">
          <h1 className="font-header text-3xl md:text-4xl mt-5">Hardcore Character Creator</h1>
          <ClassDisplay classchoice={this.state.class}/>
          <ClassInfo classchoice={this.state.class} />
        </main>
      </div>
    );
  }
}
