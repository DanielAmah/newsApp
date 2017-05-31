import React from 'react';

import Loader from 'react-loader';

import Sources from './sources';

import Demo from '../sharebuttons/main';

const Header = () => ( < div className = "mainHeader" >

    <h1> News App </h1> </div>
);




const ArticlesListItem = ({ article }) => ( < article >
    < h3 > { article.title } < /h3> < figure > < img src = { article.urlToImage }
    /> < /figure > < p > < time > {
        (moment(new Date(article.publishedAt))).format('LLLL')
    } < /time></p >
    < p className = "description" > { article.description } < /p> < p className = "url" > < a href = { article.url } target="_blank" > Read News < /a > < /p >

    < /article>
)

const ArticlesList = ({ articles }) => ( < section > {
            articles.map((article, index) => ( < ArticlesListItem article = { article }
                key = { index }
                />
            ))
        } < /section>);

 		

        class App extends React.Component {
            constructor() {
                super();

                this.state = {
                  loaded: false,
                    articles: [],
                    nameValue:'bbc-sport',
                    nameValue2:'top',
                };
            }
            	 handleSubmit(){

           		window.Cnn = this.state.nameValue;
           		window.Sort = this.state.nameValue2;
           		 fetch('https://newsapi.org/v1/articles?source='+window.Cnn+'&sortBy='+window.Sort+'&apiKey=8f135b713f1a4487b7bbb9de394a1308')
                    .then(response => response.json())
                    .then((response) => {
                        this.setState({ articles: response.articles, loaded: true});
                    })
                    .catch(function(error) {
    				document.write(error);
 					 });

           }

          

           

            render() {
                return ( 
                <div>

                    < Header />
                     
                    < Sources handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)} nameValue={this.state.nameValue} handleChange2={this.handleChange2.bind(this)} nameValue2={this.state.nameValue2}/>
                    
                     <center>
                          <Demo />
                    </center>
                    < div className = "posArticles" >
                   <Loader loaded={this.state.loaded} radius={40} lines={15} length={23} width={7} top="60%" color="#CF000F">
                    < ArticlesList articles = { this.state.articles } /> 
                   </Loader>
                    </div>
                       
                    </div>
                );
            }

            handleChange(e){
            	this.setState({
            		nameValue:e.target.value,
                loaded: true
            	});
            }

            handleChange2(e){
            	this.setState({
            		nameValue2:e.target.value,
                loaded: true
            	});
            }


        }

       

        export default App;
