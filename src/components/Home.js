import React from 'react'
import GitHubLogin from 'react-github-login';

const Home = () => {

const onSuccess = response => alert(response);
const onFailure = response => alert(response);

  return (
    <div className="bg-gray-900 h-full min-h-screen">
      <h1 className="text-white font-semibold py-5 text-2xl text-center">Nuu Technologies</h1>
      <div className="flex justify-center items-center mt-20">
      <GitHubLogin
        className="bg-white text-gray-800 rounded shadow focus:outline-none py-3 px-10"
        clientId="fe4b5ba56310c5e1f3e0"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      </div>
    </div>
  )
}

export default Home;