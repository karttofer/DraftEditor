import React from 'react'
import EditableTextAndNpm from './WelcomeComponent'
import GithubIcon from './IconGithub'
import Editor from '../NormalDesign/ContainerLogic'
const Container = () => {
  return (
    <div className="father-container">
      <Editor />
      <div className="to-github">
        <a href="https://github.com/karttofer/DraftEditor" target="_blank">
          <GithubIcon />
        </a>
      </div>
      <EditableTextAndNpm />
    </div>
  )
}
export default Container
