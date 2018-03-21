import { connect } from 'react-redux';
import Form from './form';

import { createProgram } from 'store/programs/actionCreators';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProgram: (program) => dispatch(createProgram(program)),
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps);

export default Container(Form);