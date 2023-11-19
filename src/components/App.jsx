import React, { useState } from 'react';
import Section from './Section/Section.js';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Statistics from './Statistics/Statistics.js';
import Notification from './Notification/Notification.js';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [type]: prevFeedback[type] + 1 }));
  };

  return (
    <div>
      <Section title="Leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {feedback.good + feedback.neutral + feedback.bad === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={feedback.good + feedback.neutral + feedback.bad}
            positivePercentage={(feedback.good / (feedback.good + feedback.neutral + feedback.bad)) * 100}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
