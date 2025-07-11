import Button from "../common/Button";
import styles from "../../styles/common/SearchBar.module.css";
// type Props = {
//   onSearch: (query: string) => void;
// };

export default function SearchBar() {
  // const [query, setQuery] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   onSearch(query);
  // };

  return (
    <div className={styles.searchBar}>
      <h3>Buscador</h3>
      <form>
        <input
          type="text"
          placeholder="Buscar"
          // value={query}
          // onChange={(e) => setQuery(e.target.value)}
        />
        <Button value={"Buscar"} />
      </form>
    </div>
  );
}
