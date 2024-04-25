import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;
