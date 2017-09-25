import React, { Component } from 'react';
import GenreDisplay from './GenreDisplay';
import EventDisplay from './EventDisplay';
import MapDisplay from './MapDisplay';
import { Link } from 'react-router-dom';

class Results extends Component {
  constructor() {
    super();
    this.state = {events: false}
    this.eventsView = this.eventsView.bind(this)
    }
  

  displayAreasMap(results, usersChoices) {
    console.log(usersChoices.location)
    return (
      <MapDisplay 
        usersZipcode = {usersChoices.location}
        results = {results}
      />
    )
  }
  DisplayAreaEvents(results, usersChoices) {
    console.log(usersChoices)
    let zipcodes = Object.getOwnPropertyNames(results);
    console.log(zipcodes)
    debugger
    return zipcodes.map( (zipcode,index) => {
      const key = String(zipcode) + String(' number ' + index)
      
      /* 
      we will use this code later to sort Events display by the # of participants
      
      const occurrenceValue = (a,b) => results[zipcode][b]-results[zipcode][a]
      const genres = unsortedGenres.sort(occurrenceValue) 
      */
      //iterate over events for a given zipcode
      const events = Object.getOwnPropertyNames(results.zipcode)
      console.log(events)
      events.map( event => {
      return (
          <EventDisplay 
            key =             {key} 
            areaName =        {zipcode} 
            events = {events} 
            userLocation =   {String(usersChoices.location)===zipcode?true:false}
          />
      )
    })
  })
}



  AreaGenreDisplay(results, usersChoices) {
    console.log(usersChoices)
    let zipcodes = Object.getOwnPropertyNames(results);
    return zipcodes.map( (zipcode,index) => {
      const key = String(zipcode) + String(' number ' + index)
      const unsortedGenres = Object.getOwnPropertyNames(results[zipcode])
      const occurrenceValue = (a,b) => results[zipcode][b]-results[zipcode][a]
      const genres = unsortedGenres.sort(occurrenceValue)
      const genreOccurences = genres.map( genre => results[zipcode][genre] )
      return (
          <GenreDisplay 
            key =             {key} 
            areaName =        {zipcode} 
            genreOccurences = {genreOccurences} 
            genresList =      {genres}
            selectedGenre =   {Number(usersChoices.music)}
            usersLocation =   {String(usersChoices.location)===zipcode?true:false}
          />
      )
    })
  }
  eventsView() {
    this.setState({events: true})
    return //this will link the user to events component. That's also where the user can see local bars
  }
  sort(data) {
    let results = {};
    data.map( number => {
      if (!results[number.zipcode])
        return results[number.zipcode] = {[number.genre]: 1};
      else if (!results[number.zipcode][number.genre])
        return results[number.zipcode][number.genre] = 1;
      else
        return results[number.zipcode][number.genre]++;
    })
    return results;
  }
  resultsParser(results, usersChoices) {
    if (results.message !== 'ok')
      return <div>Try a different zipcode.</div>
    results = this.sort(results.data)
    return (
      <div className="result-box">
        <h3><Link to={`/EventsForm`}>Post an Event! </Link></h3>
        <button onClick={this.eventsView}>Local Scene</button>
        {this.state.events?this.DisplayAreaEvents(results, usersChoices):this.AreaGenreDisplay(results, usersChoices)}
        {/* {this.displayAreasMap(results, usersChoices)} */}
      </div>
    )
  }
  renderLoading() {
    console.log('rendering loading message')
    return <h2>Searching your area...</h2>
  }
  checkResults() {
    const { location, music, waiting, results} = this.props.state
    let usersChoices = {};
    usersChoices = {location, music}
    if (!results && !waiting)
      return ('')
    if (waiting) 
      return this.renderLoading()
    return this.resultsParser(results, usersChoices)
  }
  render() {
    return (
      <div>
        {this.checkResults()}
      </div>
    )
  }
}


export default Results;