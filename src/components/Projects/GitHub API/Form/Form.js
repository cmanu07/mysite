import React, { useState } from 'react'

import './Form.css'

import { Octokit } from "@octokit/core"


const Form = () => {

  const [userName, setUserName] = useState(() => "")
  const [userToShow, setUserToShow] = useState(() => "")
  const [avatarToShow, setAvatarToShow] = useState(() => "")

  const [gists, setGists] = useState(() => null)
  const [forks, setForks] = useState(() => '')

  const showInfo = async () => {

    const octokit = new Octokit({
      auth: ''    // <-- your token here
    });
    const response = await octokit.request('GET /users/{username}/gists', {
      username: userName,
    });
    const { data }  = response;
    // for (let x of data) {
      // const responsePerGist = await octokit.request('GET /gists/{gist_id}/forks', {
      //       gist_id: x.id,
      // });
      // console.log()
    // }
    console.log(data)
    
    // setForks(responsePerGist.data.length)
    // console.log(gistId)
    // console.log(responsePerGist)
    setForks(77)
    setUserToShow(userName)
    setAvatarToShow(response.data.at(0).owner.avatar_url)
    setGists(response.data)
  }

  return (<>
        <form>
            <input className='github-input'
                type="text" value={userName} id="username" name="username"
                onChange={e => setUserName(e.target.value)}
                required/>
            <label className='github-input-label'>GitHub Username</label>
            <button className='github-button' type="button" onClick={showInfo}>Show Info</button>
        </form>
        <div className="results">
                      <section>
                        {avatarToShow ? <img src={avatarToShow} alt="missing avatar..."/> : ""}
                        {userToShow ? <p><em className='results-topic'>UserName :</em> {userToShow} </p> : ""}
                      </section>
          <ol>{userToShow ? <span className='ol-list'>List of public gists :</span> : ""}
          {
            gists && gists.map(gist => {
                          const {id, created_at, url, description, files: {...others}} = gist;
                          const files = Object.values(others);
                          let file;
                          for (let f of files) {
                            file = f.language;
                          }
                        return (  <li key={id} className="gist-list-item">
                                    <a href={url} target="_blank" rel="noreferrer" className='gist-link'> 
                                        {url}
                                    </a>
                                    <p><em className='results-topic'>Description :</em> {description ? description : '~~~'} </p>
                                    <p><em className='results-topic'>Date of creation :</em> {(created_at).slice(0,10)} </p>
                                    <p>
                                      <em className='results-topic'>Programming language :</em> 
                                      <span style={{color: '#FF9677'}}> {file ? file : '~~~'}</span>
                                    </p>
                                    <p><em className='results-topic'>Forks :</em> {forks}</p>
                                    <p><em className='results-topic'>Users who fork :</em> {}</p>
                                  </li>
                                )
            })
          }
          </ol>
        </div>
        </>)
}

export default Form