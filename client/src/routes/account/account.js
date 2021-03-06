import React from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";

import AccountLayout from './layouts';
import School from './school';
import SchoolPrograms from './schoolPrograms';
import SchoolCreateProgram from './schoolCreateProgram';
import CreateProgramModal from './createProgramModal';

const RegisterFlow = () => <h1>Register flow</h1>;


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }
  componentDidMount() {
    const { userSchoolCodes } = this.props;
    if (userSchoolCodes && userSchoolCodes.length) {
      this.props.fetchSchools(userSchoolCodes);
    }
  }
  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    const {
      schools,
      isFetching,
      location
    } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render;

    return (
      <AccountLayout>
        { isFetching !== false ?
          <p>Loading...</p> :
          !schools.length ?
            <p>No schools</p> :
            <p>Programs: {schools.map((school, idx) => <span key={idx}>{school.name}</span>)}</p>
        }
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path="/account/schools/:code" exact component={School} />
          <Route path="/account/schools/:code/programs/:year" component={SchoolPrograms} />
          <Route path="/account/create-program" component={SchoolCreateProgram} />
          <Route path="/account/register" component={RegisterFlow} />
        </Switch>
        {isModal ? <Route path="/account/create-program" component={CreateProgramModal} /> : null}
      </AccountLayout>
    )
  }
}

export default Account;
