import { useState } from 'react';
// import React, { Component } from 'react';
import { Container } from 'components/Container/Container';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export default function AppHook() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPercentPositiveFeedback = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  //   console.log(Object.keys({ good, neutral, bad }));
  console.log({ good, neutral, bad });
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          //   options={Object.keys({ good, neutral, bad })}
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={good === 0 ? 0 : countPercentPositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
