import { HighlightMatch } from "./HighlightMatch";
import { FaUsers } from 'react-icons/fa';
import '../styles/importantInfo.css'

export const ImportantInfo = ({arr, matchString, changer}) => {

  if (arr.length > 10) 
    arr = arr.filter((val, index) => index < 10)

  return (
    arr.length !== 0
      ? 
        <div className="results__list">
          {
            arr.map(({name, population}) => 
              <div 
                className="results__item"
                key={Math.random(1000)}
              >
                <div className="results__content results__content--left">
                  <HighlightMatch 
                    string={name.common} 
                    matchString={matchString} 
                  />
                </div>

                <div className="results__content results__content--right">
                  <div className="results__block">
                    <span>{population}</span> 
                    <FaUsers className="results__icon" />
                  </div>
                  
                  <button
                    className="results__btn"
                    onClick={() => {changer(name.common)}}
                  >
                    Show more
                  </button>
                </div>
              </div>
            )
          }
        </div>
        
      : <h2>Not Found</h2>
  )
}