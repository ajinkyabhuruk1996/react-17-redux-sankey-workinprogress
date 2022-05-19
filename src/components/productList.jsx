import react, { useState, useEffect} from 'react';

export default function ProductList(props) {

    const { category } = props;   
    let [productList , setProductList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/data/${category}.json`)
        .then( reponse => {
            reponse.json().then(resp => {
                if(resp.data){
                    setProductList(resp.data);
                }              
            })
        })        
    });
     
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Product Content 2</h2>
            {
                productList.map((prod, index) => {
                    return(
                        <div key={index}>
                            <GetListItem prod={prod} index={index} />
                        </div>
                    )  
                })
            }
        </main>
    );
}


function GetListItem(props) {
    const { prod, index } = props;
    const { productName, price, units } = prod;
    return (
        <>
            <div>
                {productName}
                <br />

                {price}
                <br />

                {units}

            </div>
        </>
    )

}