import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './index.scss';

function Finish(props: any) : JSX.Element {

  if (!props.team) {
    return (
      <p>We'll need you <Link to="/">start over.</Link></p>
    )
  }
  return (
    <section>
      <h1>You're all set!</h1>
      <p>We'll post news items to <strong>{props.channel.name}</strong> at 9AM each day.</p>
      <h3>Typeform</h3>
      <p>If you'd like to trigger the post with Typeform, use this webhook:</p>
      <code>{process.env.REACT_APP_API_URL}/typeform/{props.team.id}</code> 
    </section>
  );
}
const mapStateToProps = (state: any) => ({
    channel: state.channel,
    team: state.team
});
  
const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators({}, dispatch)
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Finish);
