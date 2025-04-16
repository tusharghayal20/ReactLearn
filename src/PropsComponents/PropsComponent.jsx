import Card from "./Card"
import Welcome from "./Welcome";

const PropsComponent = () => {
    const cardsData = [
        {
            title: "Card 1",
            description: "This is the description for Card 1.",
            image: "https://placehold.co/150"
        },
        {
            title: "Card 2",
            description: "This is the description for Card 2.",
            image: "https://placehold.co/150"
        },
        {
            title: "Card 3",
            description: "This is the description for Card 3.",
            image: "https://placehold.co/150"
        }
    ];
    return (
        <div>
            <Welcome fname="Tony" lname={"Stark"} 
            // age=50 
            // age="50" 
            age={50}
            />


            <Card data={cardsData[0]} />
            <div className="card-group">
                {cardsData.map((card, index) => (
                    <Card key={index} data={card} />
                ))}
            </div>
        </div>
    )
}

export default PropsComponent