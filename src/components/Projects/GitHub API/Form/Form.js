import React, { useState } from 'react'

import './Form.css'

import { Octokit } from "@octokit/core"


const Form = () => {

  const [userName, setUserName] = useState(() => "")
  const [userToShow, setUserToShow] = useState(() => "")
  const [avatarToShow, setAvatarToShow] = useState(() => false)

  const [gists, setGists] = useState(() => null)
  // const [forks, setForks] = useState(() => '')

  const showInfo = async () => {

    try {
      const octokit = new Octokit({
        auth: ''    // <-- your token here
      });
      const response = await octokit.request('GET /users/{username}/gists', {
        username: userName,
      });
      setUserToShow(userName)
      response.data.length !== 0 ? setAvatarToShow(response.data.at(0).owner.avatar_url) : setAvatarToShow("noGists")
      setGists(response.data)
      setUserName('')
    } catch (e) {
      setUserToShow('noGithubUser')
      console.error(e)
    };

    // const { data }  = response;
    // for (let x of data) {
      // const responsePerGist = await octokit.request('GET /gists/{gist_id}/forks', {
      //       gist_id: x.id,
      // });
      // console.log()
    // }
    // console.log(data)
    
    // setForks(responsePerGist.data.length)
    // console.log(gistId)
    // console.log(responsePerGist)
    // setForks(77)
  }

  return (<section className='form-main-section'>
            <form className='form-main-section-form'>
                <input className='github-input'
                    type="text" value={userName} id="username" name="username"
                    onChange={e => setUserName(e.target.value)}
                    required/>
                <label className='github-input-label' htmlFor="username">GitHub Username</label>
                <button className='github-input-button' type="button" onClick={showInfo}>Show Info</button>
            </form>
            <div className="results">
                <article>
                    {avatarToShow === 'noGists' ? '' : avatarToShow ? <img src={avatarToShow} alt="missing avatar..."/> : ''}
                    {userToShow === 'noGithubUser' ? <p className='results-topic'><em>This is not a Github Username...</em></p> :
                      userToShow ? <p className='results-topic'><em>UserName :</em> {userToShow} </p> : ""}
                </article>
                <div>
                    {avatarToShow === 'noGists' ? <span className='results-list-title'>This user has no public gists!</span> :
                    avatarToShow ? <span className='results-list-title'>List of public gists :</span> : ""}
                </div>
                <ol className='results-ol-list'>
                {
                gists ? gists.map(gist => {
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
                                      <p><em className='results-topic-em'>Description :</em> {description ? description : '~~~'} </p>
                                      <p><em className='results-topic-em'>Date of creation :</em> {(created_at).slice(0,10)} </p>
                                      <p>
                                        <em className='results-topic-em'>Programming language :</em> 
                                        <span style={{color: '#FF9677'}}> {file ? file : '~~~'}</span>
                                      </p>
                                      {/* <p><em className='results-topic-em'>Forks :</em> {forks}</p> */}
                                      {/* <p><em className='results-topic-em'>Users who fork :</em> {}</p> */}
                                    </li>
                                  )
                  }) : null
                }
              </ol>
            </div>
        </section>)
}

export default Form