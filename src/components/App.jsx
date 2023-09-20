import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackButtons from './Feedback/FeedbackButtons';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((good / total) * 100) : 0;
  };

  const onLeaveFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <Section title="Please leave feedback">
        <div
          style={{
            display: 'flex',
            gap: '5px',
          }}
        >
          <FeedbackButtons
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackButtons>
        </div>
      </Section>
      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        )}
      </Section>
    </div>
  );
};
