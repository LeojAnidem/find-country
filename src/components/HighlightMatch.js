import reactStringReplace from 'react-string-replace';
import '../styles/highlightMatch.css'

export const HighlightMatch = ({string, matchString}) => {
  return (
    <>
      {
        reactStringReplace(string, matchString, (macth, i) => {
          return <span key={i} className='hover-effect'>{macth}</span>
        })
      }
    </>
  )
}