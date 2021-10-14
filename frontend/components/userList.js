import React from 'react';
import Router from 'next/router'

function UserList({users}) {
    return (
        <div>
          {

            users.map((user, i) => {
              return (
                  <div
                    className={`
                          uk-padding-small
                          ${Router.router.query.username.trim().toLowerCase() === user.username.trim().toLowerCase() ? 'uk-background-primary ': i % 2 === 0 ? 'uk-background-mutes ': ''}
                          `}
                    key={i}
                  >
                    {user.username}
                  </div>
              )
            })
          }
        </div>
    );
}
export default UserList;
