import React, { Component } from 'react';
import PropTypes from 'prop-types';
class FeedbackOptions extends Component {
  render() {
    return (
      <div className="Counter__controls">
        <button type="button" onClick={this.props.onLeaveFeedback}>
          good
        </button>
        <button type="button" onClick={this.props.onLeaveFeedback}>
          neutral
        </button>
        <button type="button" onClick={this.props.onLeaveFeedback}>
          bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.any,
};

export default FeedbackOptions;

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div className="Counter__controls">
//       <button type="button" onClick={onLeaveFeedback}>
//         good
//       </button>
//       <button type="button" onClick={onLeaveFeedback}>
//         neutral
//       </button>
//       <button type="button" onClick={onLeaveFeedback}>
//         bad
//       </button>
//     </div>
//   );
// };
