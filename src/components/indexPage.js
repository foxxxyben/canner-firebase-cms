import * as React from 'react';
import * as firebase from 'firebase';
import LockScreenLoading from './LockScreenLoading';

export default class IndexPage extends React.Component<{}> {
  UNSAFE_componentWillMount() {
    if (typeof window !== `undefined`) {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          window.location.href = "/login";
        } else {
          window.location.href = "/dashboard";
        }
      });
    }
  }

  render() {
    return (
      <LockScreenLoading/>
    );
  }
}