import React from 'react'
import css from './Board.module.css'
// import { object } from 'prop-types'

export class Board extends React.Component {
  state = {
    good: 0,
    neutral: 0,
		bad: 0,
	}
	


      
	handleClick = option => {

		this.setState(prevState => ({
			[option]: prevState[option] + 1,
			
		}))
		
	}

	countTotal() {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
		// return Object.values(this.state).reduce((acc, option) => acc + option, 0);
	}
	countPercent() {
		const result = this.countTotal()
		const { good } = this.state;
		const percent = Math.round((good * 100) / result);
		// Установить ==== 0 ==== по дефолту
		return percent;
		
	}
  

  render() {

    return (
      <div className={css.container}>
        <section className={css.section__btn} title="Please leave feedback" children>
        <h1 className={css.title}>Please leave feedback</h1>
        <div className={css.wrapper}>
						<button className={css.btn} type="button" onClick={() => {this.handleClick("good")}}>good</button>
          <button className={css.btn} type="button" onClick={() => this.handleClick("neutral")}>neutral</button>
          <button className={css.btn} type="button" onClick={() => this.handleClick("bad")}>bad</button>
        </div>
        </section>
        <hr/>
        <section className={css.section__stat} title="" children>
          <h1 className={css.title}>Please leave feedback</h1>
          <ul className={css.stat__board}>
            <li className={css.stat__text}>Good: {this.state.good}</li>
            <li className={css.stat__text}>Neutral: {this.state.neutral}</li>
            <li className={css.stat__text}>Bad: {this.state.bad}</li>
            <li className={css.stat__text}>Total: {this.countTotal()}</li>
            <li className={css.stat__text}>Positive feedback: {this.countPercent()} %</li>
        </ul>
      </section>
      </div>
    )
  }
}
