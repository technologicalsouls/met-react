import React, {Component} from 'react';

class ArtCard extends Component {
  constructor(props) {
    super(props);
    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  }

  render() {
    const {primaryImageSmall, title} = this.props.art;
      return (
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <img ref={this.imageRef} alt={title} src={primaryImageSmall} />
        </div>
      );
  };
};

export default ArtCard;

