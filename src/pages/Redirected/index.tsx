import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import querystring from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTeam, setChannel } from '../../actions';

function Redirected(props: any) : JSX.Element {
  const history = useHistory();
  useEffect(() => {
    const query = querystring.parse(window.location.search);
    if (query.code) {
      axios.post(`${process.env.REACT_APP_API_URL}/slack`, {
        code: query.code
      }).then(res => {
        props.actions.setTeam(res.data.team);
        props.actions.setChannel(res.data.channel);
        history.push('/finish');
      });
    }

  }, [history, props.actions]);

  return (
     <span>Loading&hellip;</span>
  );
}

const mapStateToProps = (state: any) => ({
  channel: state.channel,
  team: state.team
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators({
    setTeam,
    setChannel
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Redirected);

