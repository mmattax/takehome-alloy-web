import React from 'react';
function Home(): JSX.Element {
  return (
    <a href={"https://slack.com/oauth/v2/authorize?scope=incoming-webhook&client_id=" + process.env.REACT_APP_SLACK_CLIENT_ID}>
      <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" />
    </a>
  );
}
export default Home;
