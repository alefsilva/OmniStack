import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import './Main.css';
import itsAMatch from '../../assets/itsamatch.png';

import api from '../../services/Api';

export default function Main(props) {
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(false);

  useEffect(() => {
    (async function loadUsers() {
      console.log('props.match.params.routeId', props.match.params.routeId);
      const response = await api.get('/devs', {
        headers: {
          user_id: props.match.params.routeId
        }
      });
      console.log('response.data', response.data);
      setUsers(response.data);
    })(); // it will execute this function automatically

    //loadUsers();
  }, [props.match.params.routeId]); // if the second parameter was [], the useEffect will be run once

  useEffect(() => {
    const socket = io('http://localhost:7777', {
      query: { user_id: props.match.params.routeId }
    });

    setTimeout(() => {
      socket.emit('hello', {
        message: 'Hello World'
      });
    }, 3000);

    socket.on('world', request => {
      console.log('back request: ', request);
    });

    socket.on('match', dev => {
      console.log('dev: ', dev);
      setMatchDev(dev);
    });
  }, [props.match.params.routeId]);

  async function handleLike(id) {
    console.log('like', id);

    await api.post(`devs/${id}/likes`, null, {
      headers: {
        user_id: props.match.params.routeId
      }
    });
    setUsers(users.filter(user => user._id != id));
  }

  async function handleDislike(id) {
    console.log('dislike', id);
    await api.post(`devs/${id}/dislikes`, null, {
      headers: {
        user_id: props.match.params.routeId
      }
    }); // the second param of the method post is the body

    /**
     * I can't change the useState users directly... users.push, users = []... no!
     * Use the setUsers instead.
     * */
    setUsers(users.filter(user => user._id != id));
  }

  return (
    <div className="wrap-main">
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>
      {users.length > 0 ? (
        <ul>
          {users.map((
            user // (user, key)
          ) => (
            <li key={user._id}>
              {/*key={key}*/}
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>
              <div className="wrap-buttons">
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="Dislike" />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="Like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">Acabou :(</div>
      )}
      {matchDev && (
        <div className="match-container">
          <img src={itsAMatch} alt="it's a match" />
          <img
            className="avatar"
            src={matchDev.avatar}
            alt="Avatar"
          />
          <strong>{matchDev.name}</strong>
          <p>{matchDev.bio}</p>
          <button type="submit" onClick={() => setMatchDev(null)}>FECHAR</button>
        </div>
      )}
    </div>
  );
}
