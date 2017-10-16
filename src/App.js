import React, { Component } from 'react';
import styles from './App.css';

import 'sanitize.css/sanitize.css';
import 'vu/dist/css/variables.css';
import 'vu/dist/css/base.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1>VUser Guide</h1>
          <p>Description text</p>

        <div className={styles.docs}>
          <h2>Component patterns</h2>
          <h3>Card</h3>
          <article className={styles.card}>
            <div class={styles.cardInner}>

             <div className={styles.cardMetadata}>
                  <h4 className={styles.cardHeading}>Quote Text</h4>
                  Test Quote
              </div>

             <div className={styles.cardMetadata}>
                  <h4 className={styles.cardHeading}>Speaker(s)</h4>
                  Person's Name
              </div>

             <div className={styles.cardMetadata}>
                  <h4 className={styles.cardHeading}>Date</h4>
                  October 12th, 2017
              </div>

            </div>  


            <div class="buttonContainer">
                <ul class="resourceButtons">
                    <li>
                        <button class={styles.button}>
                          
                          Edit&nbsp; Pull Quote
                        </button>
                    </li>

                    <li>
                        <button class={styles.button}>
                          
                            Remove
                        </button>
                    </li>
                </ul>
            </div>

          </article>

          <h2>Colors</h2>
          <ul className={styles.colors}>
            <li></li>
          </ul>

          <h2>Typography</h2>
        </div>
      </main>
    );
  }
}

export default App;
