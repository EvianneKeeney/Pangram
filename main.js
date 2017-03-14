let sentences = [
  { content: 'The quick brown fox jumps over the lazy dog.', pangram: true },
  { content: 'The quick onyx goblin jumps over the lazy dwarf.', pangram: true },
  { content: 'Grumpy wizards make toxic brew for the evil queen and jack.', pangram: true },
  { content: 'Not a pangram', pangram: false },
  { content: '', pangram: false },
];

let isPangram = (sentence) =>
  {sentence =
    sentence.toLowerCase();

    let c = [];
    for (let x = 0; x < sentence.length; x++)
        (c.push(sentence.charAt(x)));
    (c.sort());
    for(let i = c.length - 1; i >= 0; i--)
       {if(c[i] === " " || c[i] === ".") {c.splice(i, 1);}}
    newC = c.filter( function( item, index, inputArray )
            {return inputArray.indexOf(item) == index;});


    let alphabet =  [];
      letters = 'abcdefghijklmnopqrstuvwxyz';
      for (let y = 0; y < 26; y++)
        (alphabet.push(letters.charAt(y)));

///return true if newC and alphabet are equal
  let result = (JSON.stringify(alphabet)==JSON.stringify(newC));
  return result;
  };

  sentences.forEach((sentence) => {
    let result = isPangram(sentence.content);
    let correct = (result == sentence.pangram);
    console.log(`isPangram gave a ${correct ? '' : 'in'}correct result for: ${sentence.content}`);
  });
