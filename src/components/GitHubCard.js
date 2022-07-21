import Card from 'react-bootstrap/Card'


export default function GitHubCard() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "1300px", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
                    <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Tim Schultejans
                        </Card.Text>
                        <Card.Img style={{ height: "428px", width: "20%", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://placekitten.com/300/300" alt="Card" >
                        </Card.Img>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Struggling with react tests.
                        </Card.Text>
                    </div>
                </Card>
            </div>
            <div >
                <img style={{ height: "428px", width: "20%", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="Card" />
            </div>
        </div>
    )
}