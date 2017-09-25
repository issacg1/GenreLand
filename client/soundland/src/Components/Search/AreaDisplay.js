import React from 'react';

const GenreDisplay = (props) => {
  const { areaName, genresList, genreOccurences, selectedGenre, usersLocation} = props
  const genreList = [
    'That can\'t be right','Rock','Alternative','RnB', 
    'Hip Hop', 'Pop', 'Country', 'EDM', 'Christian/Gospel', 
    'Seasonal', 'Jazz', 'Classical', 'Heavy Metal', 'Blues',
    'Oldies', 'Folk', 'Soul', 'Punk Rock', 'Grunge', 'Raggae', 
    'Industrial', 'Opera', 'Bluegrass', 'Disco'
  ]
const usersGenre = (genreList[selectedGenre])
  return (
    <div>
      <div className="results">
        <h1 className={usersLocation?"markzipcode":''}>{areaName}</h1>

        <ul>
          {genresList.map( (genre,index) => {
            console.log(usersGenre +' '+genre)
            return (
              <li className={"list-group-item "+!(usersGenre>genre||usersGenre<genre)?"markGenre":''} key = {String(genre)+String(index)}>
                {genre+' '+genreOccurences[index]}
              </li>
            )
          })}
        </ul>
        
      </div>
    </div>
  )
}

export default GenreDisplay;