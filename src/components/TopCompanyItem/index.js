import React from 'react';
import { Card } from 'semantic-ui-react';


export default class TopCompanyItem extends React.Component {
  render() {
    /* eslint-disable global-require */
    const profile = require('../../icons/account_profile.svg');
    /* eslint-enable global-require */
    const link = '#';
    return (
      <Card fluid as="a" href={link}>
        <Card.Content>
          <Card.Header icon="ellipsis vertical">
            <img alt="" style={{ width: '25px', marginRight: '10px', marginBottom: '3px' }} src={profile} />{this.props.companies.title}
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }
}
