import { AllInfo } from "./AllInfo"
import { ImportantInfo } from "./ImportantInfo"

export const Matches = ({arr, matchString, changer}) => {

  const match = (arr, matchString) => {
    return  (
      arr.filter(({name}) => {
        const commonName = (name.common).toLowerCase()
        const regex = new RegExp (matchString.toLowerCase(), 'gi')
        return (commonName.match(regex))
      })
    )
  }

  let listMatch = match(arr, matchString)

  return (
    (listMatch.length === 1) 
      ? <AllInfo {...listMatch[0]} />
      : <ImportantInfo 
          arr={listMatch}
          matchString={matchString}
          changer={changer}
        />
  )
}