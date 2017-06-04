import React from 'react';


export default class Section2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
  render() {
    const obj = this.props.data.list;
    const sourceName = obj.source;
    const sourceData = obj.articles;
    const SortBy =obj.sortBy;
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div>
              <div className="NewsArticleSource">
                <h3>
                  <span className="Capitalize">{SortBy}</span> News articles from {sourceName}
                </h3>
              </div>
              <div>
                
                    {
                    Object.keys(sourceData).map(key =>
                    <div className="sourceArticle">
                      <h1 className="ArticleTitle">{(sourceData[key].title)}</h1>
                        <img
                          alt="Not Available"
                          src={(sourceData[key].urlToImage)}
                        />
                      <h4><b> By: {(sourceData[key].author)}</b></h4>
                      <p>{(sourceData[key].description)}</p>
                      <p><a target="_blank" href={(sourceData[key].url)}>
                        Read More
                      </a>
                      </p>
                    </div>
                    )
                    }
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
