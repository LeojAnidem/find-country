import { FaGithub } from 'react-icons/fa'
import '../styles/githubLink.css'

export const GitHubLink = () => {
  return (
    <div className="github-bg">
      <a 
        href='https://github.com/LeojAnidem'
        className="github__icon"
      >
        <FaGithub />
      </a>
    </div>
  )
}