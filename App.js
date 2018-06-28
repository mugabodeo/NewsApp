/*
  Hi there,
  We'll filling the code with a lot of comments,
  believe it will you guys understand the code more better
*/

/*
  This small app just fetches some news data from a news api,
  which is returned to us by the api in a JSON format(it's just an array
  of objects: [{...}, {...}, {...}]) and renders to our UI via FlatList.
  A FlatList is just a react native component that helps us render lists,
  and has some cool features like refreshing the list if some more data
  is coming in.
  https://facebook.github.io/react-native/docs/flatlist.html
  https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
*/

 /*
  An API (application programming interface) you can think of it as a gate
  to someones code allowing to perform some tasks using his code(depending
  on permissions he gave you).
  We all know google maps, this is an example of an API,
  if you have your own app you can be able to add it in(the google maps api),
  by that getting access to google servers and do some cool stuff with
  maps...
  https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82
 */

 /*
  In our app we have mainly 2 components, a flatlist helping us,
  to make a list of news article and an Article component
  that describes how each article should look like
 */

import React from 'react';
import { FlatList } from 'react-native';

//importing getNews function which is in charge of making
//a request to our api and returning some data.
import { getNews } from './getNews';

import Article from './Article';//article component

export default class App extends React.Component {
  constructor(props) {
    super(props);

    //in our state we'll have an array of articles we want
    //to show, empty at the start and refreshing which is
    //prop of our flatlist
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    //componentDidMount is a component lifecycle method
    //put here some code that you want to be executed
    //after the component has rendered, showing on the UI
    //in our case we're fetching the news articles from the api
    //cause we want a list of some articles to be showing as
    //fetch more or ask more the api
    this.fetchNews();
  }

  fetchNews() {
    //using getNews function which returns a promise containing
    //an array of articles we update our articles array in the state
    //and refreshing
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    //this one is called when you scroll the list from the top of it
    //mainly to see if there some more articles and start fetching
    //again
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
    //in renderItem we're going to return the article component,
    //cause we're making a list of article components with an
    //article prop which is an object containing a title,
    //an image ...
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}
