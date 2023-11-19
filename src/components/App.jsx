import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Statistics from './Statistics/Statistics.js';
import Section from './Section/Section.js';
import Notification from './Notification/Notification.js';

class FeedbackApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : (this.state.good / totalFeedback) * 100;
  };

  handleLeaveFeedback = (feedback) => {
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Кафе Expresso Feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedbackApp;
