import React from 'react';

const GuestGreeting = (props) => {
  return <h1>Plz sign up.</h1>;
};

const UserGreeting = (props) => {
  return (
    <h1>
      {props.name && `${props.name},`} Welcome{' '}
      {props.count ? `it's ${props.count} times` : null}
    </h1>
  );
};

const Greeting = (props) => {
  //   if (props.isLoggedIn) {
  //     return <UserGreeting name="jimmy" count={0} />;
  //   }
  //   return <GuestGreeting />;
  return props.isLoggedIn ? (
    <UserGreeting name="jimmy" count={0} />
  ) : (
    <GuestGreeting />
  );
};

export default function Condition() {
  const isLoggedIn = true;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
