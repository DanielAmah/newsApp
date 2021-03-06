import React from 'react';

export default class SelectNewsSource extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { source: 'TechCrunch' };
  }
  handleChange(event) {
    this.setState({
      source: event.target.value
    });
    this.props.getSource(event.target.value);
  }
  render() {
    return (
      <div className="form-group">
         <center><label>Select a Source</label></center>
        <div className="col-md-12">
          <select
            defaultValue={this.state.source}
            onChange={this.handleChange}
            className="form-control"
          >
            <option>Associated-Press</option>
            <option>Bbc-News</option>
            <option>Bloomberg</option>
            <option>Business-Insider</option>
            <option>CNN</option>
            <option>Engadget</option>
            <option>Espn</option>
            <option>Fortune</option>
            <option>Independent</option>
            <option>Ign</option>
            <option>Mashable</option>
            <option>Metro</option>
            <option>Mirror</option>
            <option>Newsweek</option>
            <option>Polygon</option>
            <option>Recode</option>
            <option>Reuters</option>
            <option>TalkSport</option>
            <option>TechCrunch</option>
            <option>TechRadar</option>
            <option>Time</option>
          </select>
        </div>
      </div>
    );
  }
}
