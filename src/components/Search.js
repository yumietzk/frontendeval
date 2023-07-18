import { useEffect, useState } from 'react';

function Search({ handleList }) {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDecouncedTerm] = useState(term);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const changeTerm = setTimeout(() => {
      setDecouncedTerm(term);
    }, 1000);

    return () => clearTimeout(changeTerm);
  }, [term]);

  useEffect(() => {
    if (debouncedTerm && debouncedTerm.length >= 2) {
      fetch(`https://api.frontendeval.com/fake/food/${debouncedTerm}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setResult(data);
        });
    }
  }, [debouncedTerm]);

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      <div>
        {result.map((item, i) => (
          <p key={i} onClick={() => handleList(item)}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Search;
