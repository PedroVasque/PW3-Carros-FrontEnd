import styles from "./Select.module.css";

function Select({ name, text }) {
  return (
    
    <div className={styles.form_control}>

      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option value="">Escolha o modelo do seu Volkswagen </option>
        <option value="">TSI</option>
        <option value="">Comfortline</option>
        <option value="">Sense</option>
        <option value="">Highline</option>
      </select>

    </div>
  );
}

export default Select;