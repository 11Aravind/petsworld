import Card from "../component/Card";
const Pets=()=>{
    const petsDetails=[
        {
            url:"path",
            petName:"name",
            description:"description",
            oldPrice:400,
            newPrice:300
        },
        {
            url:"path",
            petName:"name",
            description:"description",
            oldPrice:400,
            newPrice:300
        },
        {
            url:"path",
            petName:"name",
            description:"description",
            oldPrice:400,
            newPrice:300
        },
    ]
    return(
        <div className="topSpacing">
<h1 className="collection-title">          New Products</h1>      
     <div className="product-cards">
           <Card />
           
            </div> 
            
        </div>
    );
}
export default Pets;