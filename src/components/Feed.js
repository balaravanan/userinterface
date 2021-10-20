import React from "react";
import "../components/Feed.css"

const SecBlock = props => {
  return (
    <div className="picBoxes">
      <img src={props.picy} alt="" width="50px" height="50px" />
      <h4>{props.news}</h4>
    </div>
  );
};

const InfoBlock = props => {
  return (
    <div className="long">
      <div className="head">
        <h1 className="title">{props.title}</h1>
        <div className="line" />
        <h3>See All</h3>
      </div>
      <div className="box">
        <SecBlock picy={props.newsPic1} news={props.newsText1} />
        <SecBlock picy={props.newsPic2} news={props.newsText2} />
        <SecBlock news={props.newsText3} picy={props.newsPic3} />
        <SecBlock news={props.newsText4} picy={props.newsPic4} />
        <SecBlock news={props.newsText5} picy={props.newsPic5} />
      </div>
    </div>
  );
};

class Feed extends React.Component {
  render() {
    return (
      <div className="App">
          <h1> Jai Feed </h1>
        <InfoBlock
          title="Long reads"
          newsPic1="https://bit.ly/2lKe8BU"
          newsText1="The hunt for 500,000 dangerous dryers"
          newsPic2="https://bit.ly/2K2vzZJ"
          newsText2="The daredevils who flew across an ocean"
          newsPic3="https://bit.ly/2lFdKoq"
          newsText3="One day you'll need care - will you get it ?"
          newsPic4="https://bit.ly/2kCTSSL"
          newsText4="The people who moved to Chernoby"
          newsText5="I always feared I'd go mad, and when I had my son I did"
          newsPic5="https://bit.ly/2m6IuPp"
        />

        <InfoBlock
          title="Newsbeat"
          newsText1="Katy Perry appears in Taylor Swift video"
          newsPic1="https://bit.ly/2V9FOxj"
          newsText2="BTS and the many collaborations of Khalid"
          newsPic2="https://bit.ly/2lGDCAe"
          newsText3="Neon: just a trend ?"
          newsPic3="https://bit.ly/2lKe8BU"
          newsText4="The Drake curse could finally be over"
          newsPic4="https://bit.ly/2m7FDpr"
          newsText5="Keanu Reeves: Games don't need ligitimising"
          newsPic5="https://bit.ly/2kCUCr1"
        />
      </div>
    );
  }
}

export default Feed