// A mock function to mimic making an async request for data
export function fetchSankeyAPI(amount = 1) {
  const jsonFileName = 'sankey';
  return new Promise((resolve) =>
   // setTimeout(() => resolve({ data: amount }), 500)
  

    fetch(`http://localhost:3000/data/${jsonFileName}.json`)
    .then(reponse => {
        reponse.json().then(resp => {
            if (resp.data) { 
                resolve({ data: resp.data })
            }
        })
    })
  );
}
