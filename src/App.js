import React, { Component } from 'react';
import unsplash from './api/unsplash';
import SearchBar from './components/searchbar';
import ImageList from "./components/img_List";

export default class App extends Component {
state = { images: [] };

 onSearchSubmit = async term => {
  const response = await unsplash.get('/search/photos',{
      params: {query: term},
     
    });
    this.setState({images: response.data.results});
    console.log(response.data.results)
  }


  render() {
    return (
      <div className="ui container" style={{margin: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
       <ImageList images={this.state.images}/>
      </div>
    );
  }
}
