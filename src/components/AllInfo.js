import { FaUsers } from 'react-icons/fa';
import '../styles/allInfo.css'

export const AllInfo = ({name, capital, population, languages, flag}) => {
  let arrLanguages = []
  
  for(let language in languages){
    arrLanguages.push(languages[language])
  }

  return (
    <div className="allInfo-box">
      <h1 className="allInfo__title">
        <span className="allInfo__flag">
          {flag}
        </span>

        <span className="allInfo__name scroll">
          {name.common}
        </span>
      </h1>

      <div className="allInfo__content">
        <div className="allInfo__block">
          <span className="allInfo__prop">
            Capital:
          </span>
          <span className="allInfo__capital scroll">
            {capital}
          </span>
        </div>

        <div className="allInfo__block">
          <span className='allInfo__text--small'>
            {population}
          </span> 
          <FaUsers className="allInfo__icon" />
        </div>
      </div>
      
      <div className="allInfo__list-box">
        <h2 className="allInfo__subTitle">
          Languages
        </h2>
        <ul className="allInfo__list scroll">
          {
            arrLanguages.map(language => 
              <li 
                className="allInfo__item" 
                key={Math.random(1000)}
              >
                {language}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}