import React, { Component } from 'react';
import { Page, Header, Footer, Content, NewsItem, PageNewsList } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {


      render() {
        return (
          <BrowserRouter>
          <Page>
            <div className="Page__content">
              <Header />
                <Content>
                  <Switch>
                    <Route  exact path="/" component={PageNewsList} />
                    <Route path="/item/:itemId" render={
                      ({match}) => <NewsItem id={match.params.itemId} />
                      } /> 
    
                  </Switch>
                </Content>   
            </div>
            <Footer />
          </Page>
          </BrowserRouter>
        
    );
  }
}

export default App;
