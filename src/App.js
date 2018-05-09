import React, { Component } from 'react';
import { Page, Header, Footer, Content, NewsItem } from './components';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {


      render() {
        return (
          <BrowserRouter>
          <Page>
            <div className="Page__content">
              <Header />
                <Content>
                    <NewsItem id= {16978544} />

                </Content>   
            </div>
            <Footer />
          </Page>
          </BrowserRouter>
        
    );
  }
}

export default App;
