import React from 'react';


 class Sources extends React.Component {
  

 

  render() {
    return (
      <div className="col-sm-12">
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group col-md-5 col-sm-12">
          <select value={this.props.nameValue} onChange={this.props.handleChange} className="form-control">
            <option value=" ">--Choose your Source--</option>
            <option value="abc-news-au">ABC NEWS (AU)</option>
            <option value="ars-technica">Ars Technica</option>
            <option value="al-jazeera-english">Al Jazeera English</option>
             <option value="associated-press">Associated Press</option>
              <option value="bbc-news">BBC News</option>
               <option value="bbc-sport">BBC Sport</option>
                <option value="bild">Bild</option>
                 <option value="bloomberg">Bloomberg</option>
                 <option value="breitbart-news">Breitbart News</option>
                 <option value="business-insider">Business Insider</option>
                 <option value="business-insider-uk">Business Insider (UK)</option>
                 <option value="buzzfeed">Buzzfeed </option>
                 <option value="cnbc">CNBC</option>
                 <option value="cnn">CNN</option>
                  <option value="daily-mail">Daily Mail</option>
                    <option value="der-tagesspiegel">Der Tagesspiegel</option>
                     <option value="die-zeit">Die Zeit</option>
                      <option value="engadget">Engadget</option>
                      <option value="entertainment-weekly">Entertainment Weekly</option>
                      <option value="espn">ESPN</option>
                      <option value="espn-cric-info">ESPN Cric Info</option>
                      <option value="financial-times">Financial Times</option>
                      <option value="focus">Focus</option>
                      <option value="football-italia">Football Italia</option>
                      <option value="fortune">Fortune</option>
                      <option value="four-four-two">FourFourTwo</option>
                      <option value="fox-sports">Fox Sports</option>
                      <option value="google-news">Google News</option>
                      <option value="gruenderszene">Gruenderszene</option>
                      <option value="hacker-news">Hacker News</option>
                      <option value="handelsblatt">Handelsblatt</option>
                      <option value="ign">IGN</option>
                      <option value="independent">Independent</option>
                      <option value="mashable">Mashable</option>
                       <option value="metro">Metro</option>
                        <option value="mirror">Mirror</option>
                         <option value="mtv-news">MTV News</option>
                          <option value="national-geographic">National Geographic</option>
                          <option value="new-scientist">New Scientist</option>
                          <option value="newsweek">Newsweek</option>
                          <option value="new-york-magazine">New York Magazine</option>
                          <option value="nfl-news">NFL News</option>
                          <option value="polygon">Polygon</option>
                          <option value="recode">Recode</option>
                          <option value="reddit-r-all">Reddit /r/all</option>
                          <option value="reuters">Reuters</option>
                          <option value="spiegel-online">Spiegel Online</option>
                          <option value="t3n">T3n</option>
                          <option value="talksport">TalkSport</option>
                          <option value="techcrunch">TechCrunch</option>
                          <option value="techradar">TechRadar</option>
                          <option value="the-economist">The Economist</option>
                          <option value="the-guardian-au">The Guardian (AU)</option>
                          <option value="tthe-guardian-uk">The Guardian (UK)</option>
                          <option value="the-hindu">The Hindu</option>
                          <option value="the-huffington-post">The Huffington Post</option>
                          <option value="the-lad-bible">The Lad Bible</option>
                          <option value="the-new-york-times">The New York Times</option>
                          <option value="the-next-web">The Next Web</option>
                          <option value="the-sport-bible">The Sport Bible</option>
                          <option value="the-new-york-times">The New York Times</option>
                          <option value="the-telegraph">The Telegraph</option>
                          <option value="the-times-of-india">The Times of India</option>
                          <option value="the-verge">The Verge</option>
                          <option value="the-wall-street-journal">The Wall Street Journal</option>
                          <option value="the-washington-post">The Washington Post</option>
                          <option value="time">Time</option>
                          <option value="usa-today">USA Today </option>
                          <option value="wired-de">Wired.de</option>
                          <option value="wirtschafts-woche">Wirtschafts Woche</option>
          </select>
        
        </div>

        <div className="form-group col-md-5 col-sm-12">
          <select value={this.props.nameValue2} onChange={this.props.handleChange2} className="form-control">
            <option value=" ">--Sort By--</option>
            <option value="top">Top Stories</option>
            <option value="latest">Latest Stories</option>
            <option value="popular">Popular Stories</option>
          </select>
           </div>
            <div className="form-group col-md-2 col-sm-12">
        <input type="submit" value="Search" className="btn btn-block btn-danger"/>
          </div>

      </form>
      </div>
    );
  }
}

export default Sources;