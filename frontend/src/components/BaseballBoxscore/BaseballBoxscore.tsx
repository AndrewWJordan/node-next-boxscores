import styles from "./BaseballBoxscore.module.scss";

export default function BaseballBoxscore() {
  return (
    <div className={styles.boxscore}>
      <table
        className={`${styles.table} boxscore__team boxscore__team--header`}
      >
        <thead className="boxscore__team__units">
          <tr>
            <th className={styles.sr_only}>Innings</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th className="boxscore__team__results">R</th>
            <th className="boxscore__team__results">H</th>
            <th className="boxscore__team__results">E</th>
          </tr>
        </thead>
        <tbody>
          <tr className="boxscore__team boxscore__team--away boxscore__team__units">
            <th>CHC</th>
            <td>1</td>
            <td>0</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td className="boxscore__team__results">5</td>
            <td className="boxscore__team__results">12</td>
            <td className="boxscore__team__results">0</td>
          </tr>
          <tr className="boxscore__team boxscore__team--home boxscore__team__units">
            <th>STL</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>3</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td className="boxscore__team__results">4</td>
            <td className="boxscore__team__results">8</td>
            <td className="boxscore__team__results">1</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.boxscore__details}>
        <div
          className={`${styles.boxscore__details__team} boxscore__details__team--away`}
        >
          <p>
            <strong>Cubs</strong>
            <small>CHC</small>
          </p>
          <span>56-38</span>
        </div>
        <div className={styles.boxscore__details__info}>
          <strong>
            Btm
            <br />
            9th
          </strong>
        </div>
        <div
          className={`${styles.boxscore__details__team} boxscore__details__team--home`}
        >
          <p>
            <strong>Cardinals</strong>
            <small>STL</small>
          </p>
          <span>56-38</span>
        </div>
      </div>
    </div>
  );
}
