
const Header = () => (
<div className="mainHeader">
	
	<h1>News App</h1>
</div>
);



const ArticlesListItem = ({ article }) => (
	<article>
		<h3>{article.title}</h3>
		 <figure>
      <img src={article.urlToImage} />
    </figure>
		<p><time>{(moment(new Date(article.publishedAt))).format('LLLL')}</time></p>
		<p className="description">{article.description}</p>
		<p className="url"><a href={article.url}>Read News</a></p>
		
	</article>
)

const ArticlesList = ({ articles }) => (
	<section>
		{articles.map((article, index) => (
			<ArticlesListItem article={article} key={index} />
		))}
	</section>
);

class App extends React.Component {
	constructor() {
		super();
		
		this.state = {
			articles: [],
		};
	}
	
	componentDidMount() {		
		fetch('https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=8f135b713f1a4487b7bbb9de394a1308')
			.then(response => response.json())
			.then((response) => {
				this.setState({ articles: response.articles });
			});		
	}
	
	render() {
		return (
			<div>
				<Header />
				
				<ArticlesList articles={this.state.articles} />
			</div>
		);
	}
}

ReactDOM.render(<App />, main);
