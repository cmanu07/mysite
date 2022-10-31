import React, { useState } from 'react'

import './Form.css'

import { Octokit } from "@octokit/core"


const Form = () => {

  const [userName, setUserName] = useState(() => "")
  const [userToShow, setUserToShow] = useState(() => "")
  const [avatarToShow, setAvatarToShow] = useState(() => "")
  const [descrToShow, setDescrToShow] = useState(() => "")

  const [gists, setGists] = useState(() => null)
  const [forks, setForks] = useState(() => '')

  const showInfo = async () => {

    const octokit = new Octokit({
      auth: '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'    // <-- your token here
    });
    const response = await octokit.request('GET /users/{username}/gists', {
      username: userName,
    });
    const {data: [...gisturi]} = response;
    
    // const responsePerGist = await octokit.request('GET /gists/{id}', {
    //       id: [...gisturi],
    // });
    console.log(gisturi)
      
    setForks(4)
    setUserToShow(userName)
    setAvatarToShow(response.data.at(0).owner.avatar_url)
    setDescrToShow(response.data.at(0).description)
    setGists(response.data)
  }

  return (<>
        <form method='GET'>
            <label>
                <input className='github-input' placeholder="GitHub username" type="text" value={userName} id="username" name="username"
                onChange={e => setUserName(e.target.value)} required/>
            </label>
            <button className='github-button' type="button" onClick={showInfo}>Show Info</button>
        </form>
        <div className="results">
                      <section>
                        {avatarToShow ? <img src={avatarToShow} alt="missing avatar..."/> : ""}
                        {userToShow ? <p><em><b>UserName: </b></em> {userToShow}</p> : ""}
                        {userToShow ? <p><em><b>Description: </b></em> {descrToShow}</p> : ""}
                      </section>
          <ol>{userToShow ? <span className='ol-list'>List of public gists:</span> : ""}
          {
            gists && gists.map(gist => {
                          const {id, created_at, url, files: {...others}} = gist;
                          const files = Object.values(others);
                          let file;
                          for (let f of files) {
                            file = f.language;
                          }
                        return <li key={id} className="gist-list-item">
                                      <a href={url} target="_blank" rel="noreferrer" className='gist-link'> 
                                      {url}
                                      </a>
                                      <p><em><b>Date of creation:</b></em> {(created_at).slice(0,10)}</p>
                                      <p><em><b>Programming language:</b></em> <span style={{color: '#FF9677'}}> {file ? file : '~~~'}</span></p>
                                      <p><em><b>Forks:</b></em> {forks}</p>
                                      <p><em><b>Users who fork:</b></em> {}</p>
                              </li>
            })
          }
          </ol>
        </div>
        </>)
}

export default Form