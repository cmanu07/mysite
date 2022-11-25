import React from 'react';

import Form from './Form/Form';
import BackButton from '../../Main/BackButton/BackButton';

import './GitHubAPI.css';

const GitHubAPI = () => {
  return ( <section className='github'>
            <BackButton />
            <div className='github-main-div'>
              <h1>GitHub User Gists</h1>
              <Form/>
            </div>
          </section> )
}

export default GitHubAPI