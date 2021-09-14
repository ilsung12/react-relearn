import React, { useState } from 'react';

export default function ControlledComponent() {
  const [name, setName] = useState('');
  const [flavor, setFlavor] = useState('coconut');
  const [essay, setEssay] = useState(
    'Please write an essay about your favorite DOM element.'
  );
  function handleChange(event) {
    const name = event.target.name; // name을 활용해서 다중 입력 제어하기
    const type = event.target.type; // type 도 가능
    if (type === 'text') {
      setName(event.target.value);
    }
    if (name === 'essay') {
      setEssay(event.target.value);
    }
    if (name === 'flavor') {
      setFlavor(event.target.value);
    }
  }

  //   function handleFlavorChange(event) {
  //     setFlavor(event.target.value);
  //   }

  //   function handleEssayChange(event) {
  //     setEssay(event.target.value);
  //   }

  function handleSubmit(event) {
    alert(`name : ${name}, essay: ${essay}, flavor: ${flavor} `);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Controlled Component</h1>
      <label>
        Name:
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select name="flavor" value={flavor} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
