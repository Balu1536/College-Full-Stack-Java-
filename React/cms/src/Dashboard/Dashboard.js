import Footer from "../Footer/footer";
export default function Dashboard (){
    return (
        <>
        <div>
            <h1>Welcome to the Dashboard</h1>
            <div style={
                { 
                    width: "100%", 
                    height: "600px" 
                    }
                }>
      <iframe src="https://docs.google.com/spreadsheets/d/1WUwee1n1bF7mOsyUNQJiBfpzpvgOz-_uemHG66L78Es/edit?usp=sharing" 
      style={
        { 
            width: "100%", 
            height: "100%", 
            border: "none" 
            }
        } 
        title="Google Sheet" ></iframe>
    </div>
        </div>
        <Footer/>
        </>
    )
}