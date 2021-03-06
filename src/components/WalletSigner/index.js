import React from 'react';
import { Button } from 'semantic-ui-react';

export default class WalletSigner extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <Button primary {...rest} >
        { this.props.buttonCaption }
      </Button>
    );
  }
}
